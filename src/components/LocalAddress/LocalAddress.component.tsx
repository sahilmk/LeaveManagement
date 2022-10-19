import { Form, Field } from "react-final-form";
import { Input, Button } from "../../stories";
import { callProfileUpdatePost } from "../../APIs";
import { getData } from "../../Util/Helper";
import { required } from "../../Util/Validation";
import { AddressType } from "../../Types";
import { Theme } from "../../Theme";
import PageStyle from "./LocalAddress.module.scss";

const LocalAddress = ({ localAdd }: { localAdd: AddressType | undefined }) => {
  const onSubmit = (e: AddressType) => {
    const requiredData = getData("loginData");
    const token = requiredData.token;
    const employeeId = requiredData.data.user.employee.id;
    const formType = {
      formType: "all",
    };

    localAdd = { ...localAdd, ...e, ...formType };

    //Calling the update Profile Post
    callProfileUpdatePost(employeeId, localAdd, {
      headers: { Authorization: "bearer" + token },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Local Addresss has been updated successfully.");
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div className={PageStyle.localAddress}>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          localAddress: localAdd?.localAddress,
          localAddress2: localAdd?.localAddress2,
          localPincode: localAdd?.localPincode,
          localState: localAdd?.localState,
          localCity: localAdd?.localCity,
        }}
        render={({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit}>
            <div className={PageStyle.localAddress__formContainer}>
              <div>
                <Field name="localAddress">
                  {(e) => (
                    <div className={PageStyle.localAddress__customInput}>
                      <label htmlFor="localAddress"> Local Address 1</label>
                      <Input
                        id="localAddress"
                        type="text"
                        placeholder="Enter Local Address Line 1"
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
                <Field name="localAddress2">
                  {(e) => (
                    <div className={PageStyle.localAddress__customInput}>
                      <label htmlFor="localAddress2"> Local Address 2</label>
                      <Input
                        id="localAddress2"
                        type="text"
                        placeholder="Enter Local Address Line 2"
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
                <div className={PageStyle.localAddress__innerFlexContainer}>
                  <div>
                    <Field name="localPincode">
                      {(e) => (
                        <div className={PageStyle.localAddress__customInput}>
                          <label htmlFor="localPincode"> Pincode </label>
                          <Input
                            id="localPincode"
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
                  <div className={PageStyle.localAddress__buttonContainer}>
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
                <Field name="localState" validate={required}>
                  {(e) => (
                    <div className={PageStyle.localAddress__customInput}>
                      <label htmlFor="localState"> State</label>
                      <Input
                        id="localState"
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
                <Field name="localCity" validate={required}>
                  {(e) => (
                    <div className={PageStyle.localAddress__customInput}>
                      <label htmlFor="localCity"> City</label>
                      <Input
                        id="localCity"
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

export default LocalAddress;
