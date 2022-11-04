import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { Input, Button } from "../../stories";
import OTPPageStyle from "./OTPPage.module.scss";
import { Theme } from "../../Theme";
import { required } from "../../Util/Validation";

const OTPPage = () => {
  const navigate = useNavigate();
  const onSubmit = (values: { otp: any; top: string }) => {};

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
              initialValues={{ otp: "" }}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="otp" validate={required}>
                    {(e) => (
                      <div>
                        <Input
                          type="text"
                          placeholder="One Time Password"
                          inputtype="authinput"
                          padding="0rem 0rem 0rem 4rem"
                          width="45rem"
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
                      bgColor={Theme.colors.yankeesBlueColor}
                      onClick={() => {
                        navigate("/ForgotPassword");
                      }}
                    />
                    <Button label={"Next"} type={"submit"} />
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
