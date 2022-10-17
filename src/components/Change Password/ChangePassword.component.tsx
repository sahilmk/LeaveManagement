import { Form, Field } from "react-final-form";
import { Input, Button } from "../../stories";
import { ChangePasswordType } from "../../Types";
import PageStyle from "./ChangePassword.module.scss";

const initialValues = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const ChangePassword = () => {
  const onSubmit = (e: ChangePasswordType) => {};

  const validate = (e: ChangePasswordType) => {
    const errors: ChangePasswordType = {};

    if (e.oldPassword === "") {
      errors.oldPassword = "Please enter valid password.";
    }

    if (e.newPassword === e.oldPassword) {
      errors.newPassword = "Please try a new Password";
    }

    if (e.confirmPassword !== e.newPassword) {
      errors.confirmPassword = "Please enter same password as of new password.";
    }

    return errors;
  };

  return (
    <div className={PageStyle.changePwd}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={PageStyle.changePwd__formContainer}>
              <div>
                <Field name="oldPassword">
                  {(e) => (
                    <div className={PageStyle.changePwd__customInput}>
                      <label htmlFor="oldPassword"> Old Password </label>
                      <Input
                        id="oldPassword"
                        type="password"
                        placeholder="Enter Old Password"
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
              <div>
                <Field name="newPassword">
                  {(e) => (
                    <div className={PageStyle.changePwd__customInput}>
                      <label htmlFor="newPassword"> New Password </label>
                      <Input
                        id="newPassword"
                        type="password"
                        placeholder="Enter New Password"
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
              <div>
                <Field name="confirmPassword">
                  {(e) => (
                    <div className={PageStyle.changePwd__customInput}>
                      <label htmlFor="confirmPassword">
                        {" "}
                        Confirm Password{" "}
                      </label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Enter Confirm Password"
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
            </div>
            <div className={PageStyle.changePwd__buttonContainer}>
              <Button
                label={"Change Password"}
                bgColor={"#173346"}
                color={"#fff"}
                size={"1.8rem"}
                borderRadius={false}
                onClick={(e) => {}}
                type={"submit"}
              />
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default ChangePassword;
