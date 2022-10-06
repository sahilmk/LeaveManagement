import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { Input, ButtonComponent } from "../../stories";
import OTPPageStyle from "./OTPPage.module.scss";

const OTPPage = () => {
  const navigate = useNavigate();
  const onSubmit = (values: { top: string }) => {
    console.log(values);
  };

  return (
    <>
      <section className={OTPPageStyle.otp}>
        <div className={OTPPageStyle.otp__card}>
          <div className={OTPPageStyle.otp__cardHeader}>
            <img src="public/assets/images/smartSenseLogo.png" alt="" />
          </div>
          <div className={OTPPageStyle.otp__cardBody}>
            <Form
              onSubmit={onSubmit}
              validate={(values) => {
                const errors = {};
                if (!values.otp) {
                  errors.otp = "*Required";
                }
                return errors;
              }}
              initialValues={{ otp: "" }}
              render={({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="otp">
                    {(e) => (
                      <div>
                        <Input
                          type="text"
                          placeholder="One Time Password"
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
                        navigate("/ForgotPassword");
                      }}
                    />
                    <ButtonComponent label={"Next"} type={"submit"} />
                  </div>
                </form>
              )}
            />

            <a href="">Resend OTP</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OTPPage;
