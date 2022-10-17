import { Form, Field } from "react-final-form";
import { Input, Button } from "../../stories";
import { PermanentAddressType } from "../../Types";
import PageStyle from "./PerAddress.module.scss";

const PermanentAddress = ({
  permanentAdd,
}: {
  permanentAdd: PermanentAddressType | undefined;
}) => {
  const onSubmit = (e: PermanentAddressType) => { };

  const validate = (e: PermanentAddressType) => {
    const errors: PermanentAddressType = {};
    return errors;
  };

  return (
    <div className={PageStyle.perAddress}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{
          perAddress: permanentAdd?.perAddress,
          perAddress2: permanentAdd?.perAddress2,
          city: permanentAdd?.city,
          pincode: permanentAdd?.pincode,
          state: permanentAdd?.state,
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={PageStyle.perAddress__formContainer}>
              <div>
                <Field name="perAddress">
                  {(e) => (
                    <div className={PageStyle.perAddress__customInput}>
                      <label htmlFor="perAddress"> Permanent Address 1</label>
                      <Input
                        id="perAddress"
                        type="text"
                        placeholder="Enter Permanent Address Line 1"
                        inputtype=""
                        padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                        width='90rem'
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
                <Field name="perAddress2">
                  {(e) => (
                    <div className={PageStyle.perAddress__customInput}>
                      <label htmlFor="perAddress2"> Permanent Address 2</label>
                      <Input
                        id="perAddress2"
                        type="text"
                        placeholder="Enter Permanent Address Line 2"
                        inputtype=""
                        padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                        width='90rem'
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
                    <Field name="pincode">
                      {(e) => (
                        <div className={PageStyle.perAddress__customInput}>
                          <label htmlFor="pincode"> Pincode </label>
                          <Input
                            id="pincode"
                            type="text"
                            placeholder="Enter Pincode"
                            inputtype=""
                            padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                            width='44rem'
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
                      bgColor={"#173346"}
                      color={"#fff"}
                      size={"1.8rem"}
                      borderRadius={false}
                      onClick={(e) => { }}
                      type={"submit"}
                    />
                    <Button
                      label={"Cancel"}
                      bgColor={"#fafafa"}
                      color={"#173346"}
                      size={"2rem"}
                      borderRadius={false}
                      border={"solid 0.2rem #ebebeb"}
                      onClick={(e) => { }}
                      type={"button"}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Field name="state">
                  {(e) => (
                    <div className={PageStyle.perAddress__customInput}>
                      <label htmlFor="state"> State</label>
                      <Input
                        id="state"
                        type="text"
                        placeholder="Enter State"
                        inputtype=""
                        padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                        width='42rem'
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
                    <div className={PageStyle.perAddress__customInput}>
                      <label htmlFor="city"> City</label>
                      <Input
                        id="city"
                        type="text"
                        placeholder="Enter city"
                        inputtype=""
                        padding={"1.4rem 1.8rem 1.4rem 1.9rem"}
                        width='42rem'
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
