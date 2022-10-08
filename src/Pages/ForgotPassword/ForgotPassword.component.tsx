import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { Button, Input } from "../../stories";
import { callForgotPasswordPost } from "../../APIs/authData";
import ForgotPasswordPageStyle from "./ForgotPassword.module.scss";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const onSubmit = (values: { email: string }) => {
    callForgotPasswordPost(values)
      .then((Response) => {
        console.log(Response.data);
        navigate("/OTP");
      })
      .catch((error) => alert(error.response.data.message));
  };
  return (
    <>
      <section className={ForgotPasswordPageStyle.forgotPassword}>
        <div className={ForgotPasswordPageStyle.forgotPassword__card}>
          <div className={ForgotPasswordPageStyle.forgotPassword__cardHeader}>
            <img src="public/assets/images/smartSenseLogo.png" alt="" />
          </div>
          <div className={ForgotPasswordPageStyle.forgotPassword__cardBody}>
            <Form
              onSubmit={onSubmit}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "*Required";
                }
                return errors;
              }}
              initialValues={{ email: "" }}
              render={({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="email">
                    {(e) => (
                      <div>
                        <Input
                          type="text"
                          placeholder="Email"
                          inputtype="authinput"
                          padding="0px 0px 0px 40px"
                          width='450px'
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
                    <Button
                      label={"Back"}
                      bgColor={"#173346"}
                      onClick={() => {
                        navigate("/");
                      }}
                    />
                    <Button label={"Next"} type={"submit"} />
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

export default ForgotPassword;
