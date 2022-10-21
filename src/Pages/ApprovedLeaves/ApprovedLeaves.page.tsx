import { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { Button, DataTable, Input, PageTitle } from "../../stories";
import { getLeaveData } from "../../APIs";
import { responseDataType } from "../../Types/globalTypes";
import { DUMMYDATA } from "../../Util/Constants";
import { Theme } from "../../Theme";
import "../../Icons/css/material-design-iconic-font.css";
import style from "./ApprovedLeaves.module.scss";

export type approvedLeavePropType = {
  logindate: string;
};

export type formInputTypes = {
  startdate?: string;
  enddate?: string;
  search?: string;
  type?: "Paid" | "Unpaid";
};

function ApprovedLeave({ logindate }: approvedLeavePropType) {
  const [approvedLeaveData, setapprovedLeaveData] = useState<
    responseDataType[]
  >([]);
  const [unchangedData, setUnchangedData] = useState<responseDataType[]>([]);

  const onSubmit = (e: formInputTypes) => {
    let newApprovedLeaveData: responseDataType[] = [];

    if (e.startdate || e.enddate) {
      if (e.startdate) {
        unchangedData
          .filter((leave) => {
            return leave.startDate! >= e.startdate!;
          })
          .map((filterData) => {
            newApprovedLeaveData.push(filterData);
          });

        if (newApprovedLeaveData.length === 0) {
          alert("No Data Found");
          setapprovedLeaveData([
            {
              id: 0,
              type: "",
              reason: "",
              date: "",
              appliedOn: "",
            },
          ]);
        } else {
          setapprovedLeaveData(newApprovedLeaveData);
        }
      }

      if (e.enddate) {
        newApprovedLeaveData = (
          newApprovedLeaveData.length === 0
            ? unchangedData
            : newApprovedLeaveData
        ).filter((leave) => {
          return leave.endDate! <= e.enddate!;
        });

        if (newApprovedLeaveData.length === 0) {
          alert("No Data Found");
          setapprovedLeaveData([
            {
              id: 0,
              type: "",
              reason: "",
              date: "",
              appliedOn: "",
            },
          ]);
        } else {
          setapprovedLeaveData(newApprovedLeaveData);
        }
      }
    } else {
      setapprovedLeaveData(unchangedData);
    }

    if (e.search) {
      newApprovedLeaveData = (
        newApprovedLeaveData.length === 0 ? unchangedData : newApprovedLeaveData
      ).filter((leave) => {
        return leave.reason.includes(e.search!);
      });

      if (newApprovedLeaveData.length === 0) {
        alert("No Data Found");
        (document.getElementById("search")! as HTMLInputElement).value = "";
      } else {
        setapprovedLeaveData(newApprovedLeaveData);
      }
    }

    if (e.type) {
      newApprovedLeaveData = unchangedData.filter((leave) => {
        return leave.type === e.type;
      });
      if (newApprovedLeaveData.length === 0) {
        alert("No Data Found");
        (document.getElementById("type")! as HTMLInputElement).value = "";
      } else {
        setapprovedLeaveData(newApprovedLeaveData);
      }
    }
  };

  const validate = (e: formInputTypes) => {
    const errors: formInputTypes = {};

    if (e.enddate! < e.startdate!) {
      errors.enddate = "Enddate must be less than start date";
    }

    return errors;
  };

  useEffect(() => {
    getLeaveData("Approved", { pageNumber: 1, recordsPerPage: 10 }).then(
      (res) => {
        let intermidate = res.data.payload.data;

        intermidate = intermidate.map((approvedleave: responseDataType) => {
          const leaveObj = {
            id: approvedleave.id,
            type: approvedleave.type,
            reason: approvedleave.reason,
            date: `${approvedleave.startDate}${
              approvedleave.endDate !== approvedleave.startDate
                ? ` to ${approvedleave.endDate}`
                : ""
            } `,
            appliedOn: approvedleave.created_at?.split(" ")[0],
          };
          return { ...approvedleave, ...leaveObj };
        });
        setapprovedLeaveData(
          intermidate.length === 0 ? DUMMYDATA : intermidate
        );
        setUnchangedData(intermidate.length === 0 ? DUMMYDATA : intermidate);
      }
    );
  }, []);

  return (
    <>
      <PageTitle
        logindate={logindate}
        pagename={"Leaves"}
        innerPageNames={["Approved Leaves"]}
        isinnerPage={true}
        isButton={false}
      />

      {/* Form to take the input for the filtering the table row. */}
      <div className={style.py3}>
        <div className={style.approvedpage}>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={{ type: "Paid" }}
            render={({ handleSubmit }) => (
              <form onChange={handleSubmit}>
                <div className={style.displayflex}>
                  <div className={style.inputcontrol}>
                    <Field name="startdate">
                      {(e) => (
                        <div>
                          <label htmlFor="startdate">Start Date</label>
                          <Input
                            id="startdate"
                            type="date"
                            placeholder="Select Date"
                            inputtype=""
                            padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                            width="30rem"
                            onChange={e.input.onChange}
                            onBlur={e.input.onBlur}
                            onFocus={e.input.onFocus}
                          />
                          {e.meta.error && e.meta.touched && (
                            <span className={style.error}>{e.meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>

                  <div className={style.inputcontrol}>
                    <Field name="enddate">
                      {(e) => (
                        <div>
                          <label htmlFor="enddate">End Date</label>
                          <Input
                            id="enddate"
                            type="date"
                            placeholder="Select Date"
                            inputtype=""
                            padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                            width="30rem"
                            onChange={e.input.onChange}
                            onBlur={e.input.onBlur}
                            onFocus={e.input.onFocus}
                          />
                          {e.meta.error && e.meta.touched && (
                            <span className={style.error}>{e.meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>

                  <div className={style.inputcontrol}>
                    <Field name="search">
                      {(e) => (
                        <div>
                          <label htmlFor="search">Search</label>
                          <Input
                            id="search"
                            type="text"
                            placeholder="Search here..."
                            inputtype=""
                            padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                            width="30rem"
                            onChange={e.input.onChange}
                            onBlur={e.input.onBlur}
                            onFocus={e.input.onFocus}
                          />
                          {e.meta.error && e.meta.touched && (
                            <span className={style.error}>{e.meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>

                  <div className={style.inputcontrol}>
                    <label htmlFor="type">Type</label>
                    <Field
                      name="type"
                      component="select"
                      className={style.dropdown}
                    >
                      <option>Paid</option>
                      <option>Unpaid</option>
                      <option>extra2</option>
                    </Field>
                  </div>

                  <div className={style.inputcontrol}>
                    <Button
                      label="Clear"
                      type="reset"
                      borderRadius={false}
                      color={Theme.colors.yankeesBlueColor}
                      bgColor={Theme.colors.lotionColor}
                      border={`solid 0.2rem ${Theme.colors.brightGrayColor}`}
                    />
                  </div>
                </div>
              </form>
            )}
          />

          {/* Table */}
          <DataTable
            width={"100%"}
            columns={[
              { field: "type", headerName: "Type", flex: 1 },
              { field: "reason", headerName: "Reason", flex: 1 },
              { field: "date", headerName: "Date", flex: 1 },
              { field: "appliedOn", headerName: "Applied On", flex: 1 },
              {
                field: "actions",
                headerName: "Action",
                sortable: false,
                renderCell: (params) => {
                  return (
                    <div>
                      <i
                        onClick={() => {}}
                        style={{ cursor: "pointer" }}
                        className="zmdi zmdi-eye"
                      ></i>
                      <i
                        onClick={() => {}}
                        style={{ cursor: "pointer" }}
                        className="zmdi zmdi-close"
                      ></i>
                    </div>
                  );
                },
                flex: 1,
              },
            ]}
            rows={approvedLeaveData}
          />
        </div>
      </div>
    </>
  );
}

export default ApprovedLeave;
