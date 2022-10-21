import { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { DataTable, Input, PageTitle } from "../../stories";
import { getLeaveData } from "../../APIs";
import { responseDataType } from "../../Types/globalTypes";
import { getData } from "../../Util/Helper";
import { DUMMYDATA } from "../../Util/Constants";
import style from "./CancelledLeave.module.scss";

export type cancelledLeavePropType = {
  logindate: string;
};

export type formInputTypes = {
  startdate?: string | undefined;
  enddate?: string | undefined;
  search?: string;
  type?: "Paid" | "Unpaid";
};

function CancelledLeave({ logindate }: cancelledLeavePropType) {
  const [cancelledLeaveData, setcancelledLeaveData] = useState<
    responseDataType[]
  >([]);
  const [unchangedData, setUnchangedData] = useState<responseDataType[]>([]);

  const onSubmit = (e: formInputTypes) => {
    let newCancelledLeaveData: responseDataType[] = [];

    if (e.startdate || e.enddate) {
      if (e.startdate) {
        unchangedData
          .filter((leave) => {
            return leave.startDate! >= e.startdate!;
          })
          .map((filterData) => {
            newCancelledLeaveData.push(filterData);
          });

        if (newCancelledLeaveData.length === 0) {
          alert("No Data Found");
          setcancelledLeaveData([
            {
              id: 0,
              type: "",
              reason: "",
              date: "",
              appliedOn: "",
            },
          ]);
        } else {
          setcancelledLeaveData(newCancelledLeaveData);
        }
      }

      if (e.enddate) {
        newCancelledLeaveData = (
          newCancelledLeaveData.length === 0
            ? unchangedData
            : newCancelledLeaveData
        ).filter((leave) => {
          return leave.endDate! <= e.enddate!;
        });

        if (newCancelledLeaveData.length === 0) {
          alert("No Data Found");
          setcancelledLeaveData([
            {
              id: 0,
              type: "",
              reason: "",
              date: "",
              appliedOn: "",
            },
          ]);
        } else {
          setcancelledLeaveData(newCancelledLeaveData);
        }
      }
    } else {
      setcancelledLeaveData(unchangedData);
    }

    if (e.search) {
      newCancelledLeaveData = (
        newCancelledLeaveData.length === 0
          ? unchangedData
          : newCancelledLeaveData
      ).filter((leave) => {
        return leave.reason.includes(e.search!);
      });

      if (newCancelledLeaveData.length === 0) {
        alert("No Data Found");
        (document.getElementById("search")! as HTMLInputElement).value = "";
      } else {
        setcancelledLeaveData(newCancelledLeaveData);
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
    getLeaveData("Cancelled", { pageNumber: 1, recordsPerPage: 10 }).then(
      (res) => {
        let intermidate = res.data.payload.data;

        intermidate = intermidate.map((cencelledleave: responseDataType) => {
          const leaveObj = {
            id: cencelledleave.id,
            type: cencelledleave.type,
            reason: cencelledleave.reason,
            date: `${cencelledleave.startDate}${
              cencelledleave.endDate !== cencelledleave.startDate
                ? ` to ${cencelledleave.endDate}`
                : ""
            } `,
            appliedOn: cencelledleave.created_at?.split(" ")[0],
          };
          return { ...cencelledleave, ...leaveObj };
        });
        setcancelledLeaveData(intermidate);
        setUnchangedData(intermidate.length === 0 ? DUMMYDATA : intermidate);
      }
    );
  }, []);

  return (
    <>
      <PageTitle
        logindate={logindate}
        pagename={"Leaves"}
        innerPageNames={["Cancelled Leaves"]}
        isinnerPage={true}
        isButton={false}
      />

      <div className={style.approvedpage}>
        <Form
          onSubmit={onSubmit}
          validate={validate}
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
                          placeholder="Search here... "
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
                  </div>
                );
              },
              flex: 1,
            },
          ]}
          rows={
            cancelledLeaveData.length === 0 ? DUMMYDATA : cancelledLeaveData
          }
        />
      </div>
    </>
  );
}

export default CancelledLeave;
