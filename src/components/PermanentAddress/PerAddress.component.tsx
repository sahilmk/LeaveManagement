import { Form, Field } from "react-final-form";
import { Input, Button } from "../../stories";
import { callProfileUpdatePost } from "../../APIs";
import { getData } from "../../Util/Helper";
import { mustBeString } from "../../Util/Validation";
import { AddressType } from "../../Types";
import { Theme } from "../../Theme";
import PageStyle from "./PerAddress.module.scss";

const PermanentAddress = ({
  permanentAdd,
}: {
  permanentAdd: AddressType | undefined;
}) => {
  const onSubmit = (e: AddressType) => {
    const requiredData = getData("loginData");
    const token = requiredData.token;
    const employeeId = requiredData.data.user.employee.id;
    const formType = {
      formType: "all",
    };

    permanentAdd = { ...permanentAdd, ...e, ...formType };

    callProfileUpdatePost(employeeId, permanentAdd, {
      headers: { Authorization: "bearer" + token },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Permanent Addresss has been updated successfully.");
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div className={PageStyle.perAddress}>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          permanentAddress: permanentAdd?.permanentAddress,
          permanentAddress2: permanentAdd?.permanentAddress2,
          permanentCity: permanentAdd?.permanentCity,
          permanentPincode: permanentAdd?.permanentPincode,
          permanentState: permanentAdd?.permanentState,
        }}
        render={({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit}>
            <div className={PageStyle.perAddress__formContainer}>
              <div>
                <Field name="permanentAddress">
                  {(e) => (
                    <div className={PageStyle.perAddress__customInput}>
                      <label htmlFor="permanentAddress">
                        {" "}
                        Permanent Address 1
                      </label>
                      <Input
                        id="permanentAddress"
                        type="text"
                        placeholder="Enter Permanent Address Line 1"
                        inputtype=""
                        padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                        width="90rem"
                        value={e.input.value}
                        onChange={e.input.onChange}
                        onBlur={e.input.onBlur}
                        onFocus={e.input.onFocus}
                      />
                      {e.meta.error && e.meta.touched && (
                        <span> {e.meta.error} </span>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="permanentAddress2">
                  {(e) => (
                    <div className={PageStyle.perAddress__customInput}>
                      <label htmlFor="permanentAddress2">
                        {" "}
                        Permanent Address 2
                      </label>
                      <Input
                        id="permanentAddress2"
                        type="text"
                        placeholder="Enter Permanent Address Line 2"
                        inputtype=""
                        padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                        width="90rem"
                        value={e.input.value}
                        onChange={e.input.onChange}
                        onBlur={e.input.onBlur}
                        onFocus={e.input.onFocus}
                      />
                      {e.meta.error && e.meta.touched && (
                        <span> {e.meta.error} </span>
                      )}
                    </div>
                  )}
                </Field>
                <div className={PageStyle.perAddress__innerFlexContainer}>
                  <div>
                    <Field name="permanentPincode">
                      {(e) => (
                        <div className={PageStyle.perAddress__customInput}>
                          <label htmlFor="permanentPincode"> Pincode </label>
                          <Input
                            id="permanentPincode"
                            type="text"
                            placeholder="Enter Pincode"
                            inputtype=""
                            padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                            width="44rem"
                            value={e.input.value}
                            onChange={e.input.onChange}
                            onBlur={e.input.onBlur}
                            onFocus={e.input.onFocus}
                          />
                          {e.meta.error && e.meta.touched && (
                            <span> {e.meta.error} </span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className={PageStyle.perAddress__buttonContainer}>
                    <Button
                      label={"Update Address"}
                      bgColor={Theme.colors.yankeesBlueColor}
                      color={Theme.colors.whiteColor}
                      size={"1.8rem"}
                      borderRadius={false}
                      onClick={(e) => {}}
                      type={"submit"}
                    />
                    <Button
                      label={"Cancel"}
                      bgColor={Theme.colors.lotionColor}
                      color={Theme.colors.yankeesBlueColor}
                      size={"2rem"}
                      borderRadius={false}
                      border={`solid 0.2rem ${Theme.colors.brightGrayColor}`}
                      onClick={(e) => {
                        form.reset();
                      }}
                      type={"button"}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Field name="permanentState">
                  {(e) => (
                    <div className={PageStyle.perAddress__customInput}>
                      <label htmlFor="permanentState"> State</label>
                      <Input
                        id="permanentState"
                        type="text"
                        placeholder="Enter State"
                        inputtype=""
                        padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                        width="42rem"
                        value={e.input.value}
                        onChange={e.input.onChange}
                        onBlur={e.input.onBlur}
                        onFocus={e.input.onFocus}
                      />
                      {e.meta.error && e.meta.touched && (
                        <span> {e.meta.error} </span>
                      )}
                    </div>
                  )}
                </Field>
                <Field name="permanentCity">
                  {(e) => (
                    <div className={PageStyle.perAddress__customInput}>
                      <label htmlFor="permanentCity"> City</label>
                      <Input
                        id="permanentCity"
                        type="text"
                        placeholder="Enter city"
                        inputtype=""
                        padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                        width="42rem"
                        value={e.input.value}
                        onChange={e.input.onChange}
                        onBlur={e.input.onBlur}
                        onFocus={e.input.onFocus}
                      />
                      {e.meta.error && e.meta.touched && (
                        <span> {e.meta.error} </span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default PermanentAddress;
