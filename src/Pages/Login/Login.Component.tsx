import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { Input, ButtonComponent } from "../../stories";
import { callLoginPost, setLoginData } from "../../APIs";
import { useAuthContext } from "../../Hooks";
import LoginPageStyle from "./Login.module.scss";

type loginDataValues = {
  email: string,
  password: string
}

const LoginPage = () => {
  const { dispatch } = useAuthContext();

  const onSubmit = (values: loginDataValues) => {
    callLoginPost(values)
      .then((Response) => {
        const payload = {
          token: Response.data.payload.token,
          data: {
            user: {
              id: Response.data.payload.data.user.id,
              lastLogin: Response.data.payload.data.user.lastLogin,
              employee: {
                id: Response.data.payload.data.user.employee.id,
                firstName: Response.data.payload.data.user.employee.firstName,
                lastName: Response.data.payload.data.user.employee.lastName,
                designation:
                  Response.data.payload.data.user.employee.designation,
                totalAvailableLeave:
                  Response.data.payload.data.user.employee.totalAvailableLeave,
                totalPaidLeave:
                  Response.data.payload.data.user.employee.totalPaidLeave,
                totalUnPaidLeave:
                  Response.data.payload.data.user.employee.totalUnPaidLeave,
              },
            },
          },
        };
        dispatch({
          type: "FETCHED_SUCCESS",
          loggedIn: true,
          payload: payload,
        });
        setLoginData(payload);
      })
      .catch((error) => {
        dispatch({
          type: "FETCHED_FAILURE",
          loggedIn: false,
          payload: { error: error.response.data.payload.error },
        });
        alert(error.response.data.payload.error)
      });
  };

  return (
    <>
      <section className={LoginPageStyle.login}>
        <div className={LoginPageStyle.login__card}>
          <div className={LoginPageStyle.login__cardHeader}>
            <img src="public/assets/images/smartSenseLogo.png" alt="" />
          </div>
          <div className={LoginPageStyle.login__cardBody}>
            <Form
              onSubmit={onSubmit}
              validate={(values: loginDataValues) => {
                let errors: loginDataValues = {};
                if (!values.email) {
                  errors.email = "*Required";
                }
                if (!values.password) {
                  errors.password = "*Required";
                }
                return errors;
              }}
              initialValues={{ email: "", password: "" }}
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
                  <Field name="password">
                    {(e) => (
                      <div>
                        <Input
                          type="password"
                          placeholder="Password"
                          inputtype="authinput"
                          padding="0px 0px 0px 40px"
                          width={450}
                          onChange={e.input.onChange}
                          onFocus={e.input.onFocus}
                          onBlur={e.input.onBlur}
                        />
                        {e.meta.touched && e.meta.error && (
                          <span>{e.meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <ButtonComponent label={"Login"} type={"submit"} />
                </form>
              )}
            />

            <Link to={"/ForgotPassword"}>Forget Password?</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
