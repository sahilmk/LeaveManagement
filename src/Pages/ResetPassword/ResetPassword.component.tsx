import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { Input, ButtonComponent } from "../../stories";
import ResetPasswordPageStyle from "./ResetPassword.module.scss";

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const onSubmit = (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    if (values.newPassword === values.confirmPassword) {
      navigate("/Dashboard");
    } else {
      alert("Passwords are invalid");
    }
  };

  return (
    <>
      <section className={ResetPasswordPageStyle.resetPassword}>
        <div className={ResetPasswordPageStyle.resetPassword__card}>
          <div className={ResetPasswordPageStyle.resetPassword__cardHeader}>
            <img src="public/assets/images/smartSenseLogo.png" alt="" />
          </div>
          <div className={ResetPasswordPageStyle.resetPassword__cardBody}>
            <Form
              onSubmit={onSubmit}
              validate={(values) => {
                const errors = {};
                if (!values.newPassword) {
                  errors.newPassword = "*Required";
                }
                if (!values.confirmPassword) {
                  errors.confirmPassword = "*Required";
                }
                return errors;
              }}
              initialValues={{ newPassword: "", confirmPassword: "" }}
              render={({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="newPassword">
                    {(e) => (
                      <div>
                        <Input
                          type="password"
                          placeholder="New Password"
                          inputtype="authinput"
                          padding="0px 0px 0px 40px"
                          width={450}
                          onChange={e.input.onChange}
                          onBlur={e.input.onBlur}
                          onFocus={e.input.onFocus}
                        />
                        {e.meta.touched && e.meta.error && (
                          <span>{e.meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="confirmPassword">
                    {(e) => (
                      <div>
                        <Input
                          type="password"
                          placeholder="Confirm Password"
                          inputtype="authinput"
                          padding="0px 0px 0px 40px"
                          width={450}
                          onChange={e.input.onChange}
                          onBlur={e.input.onBlur}
                          onFocus={e.input.onFocus}
                        />
                        {e.meta.touched && e.meta.error && (
                          <span>{e.meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <div>
                    <ButtonComponent
                      label={"Back"}
                      bgColor={"#173346"}
                      onClick={() => {
                        navigate("/OTP");
                      }}
                    />
                    <ButtonComponent label={"Next"} type={"submit"} />
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPasswordPage;