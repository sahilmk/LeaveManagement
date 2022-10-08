import { Form, Field } from "react-final-form";
import { Input, Button } from "../../stories";
import { AddressType } from "../../Types";
import PageStyle from "./LocalAddress.module.scss";

const LocalAddress = ({ localAdd }: { localAdd: AddressType | undefined }) => {
  const onSubmit = (e: AddressType) => {};

  const validate = (e: AddressType) => {
    const errors: AddressType = {};

    return errors;
  };

  return (
    <div className={PageStyle.localAddress}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{
          localAddress: localAdd?.Address,
          localAddress2: localAdd?.Address2,
          pincode: localAdd?.pincode,
          state: localAdd?.state,
          city: localAdd?.city,
        }}
        render={({ handleSubmit }) => (
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
                        padding={"14px 18px 14px 19px"}
                        width={900}
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
                        padding={"14px 18px 14px 19px"}
                        width={900}
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
                    <Field name="pincode">
                      {(e) => (
                        <div className={PageStyle.localAddress__customInput}>
                          <label htmlFor="pincode"> Pincode </label>
                          <Input
                            id="pincode"
                            type="text"
                            placeholder="Enter Pincode"
                            inputtype=""
                            padding={"14px 18px 14px 19px"}
                            width={440}
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
                      bgColor={"#173346"}
                      color={"#fff"}
                      size={"1.8rem"}
                      borderRadius={false}
                      onClick={(e) => {}}
                      type={"submit"}
                    />
                    <Button
                      label={"Cancel"}
                      bgColor={"#fafafa"}
                      color={"#173346"}
                      size={"2rem"}
                      borderRadius={false}
                      border={"solid 2px #ebebeb"}
                      onClick={(e) => {}}
                      type={"button"}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Field name="state">
                  {(e) => (
                    <div className={PageStyle.localAddress__customInput}>
                      <label htmlFor="state"> State</label>
                      <Input
                        id="state"
                        type="text"
                        placeholder="Enter State"
                        inputtype=""
                        padding={"14px 18px 14px 19px"}
                        width={420}
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
                <Field name="city">
                  {(e) => (
                    <div className={PageStyle.localAddress__customInput}>
                      <label htmlFor="city"> City</label>
                      <Input
                        id="city"
                        type="text"
                        placeholder="Enter city"
                        inputtype=""
                        padding={"14px 18px 14px 19px"}
                        width={420}
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
