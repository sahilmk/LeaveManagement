import { Form, Field } from "react-final-form";
import { Input, ButtonComponent } from "../../stories";
import PageStyle from './ChangePassword.module.scss';

type changePwd = {
    oldPassword?: string,
    newPassword?: string,
    confirmPassword?: string
}

const initialValues = {
    oldPassword: 'Smart@123',
    newPassword: '',
    confirmPassword: ''
}

const ChangePassword = () => {

    const onSubmit = (e: changePwd) => {

    }

    const validate = (e: changePwd) => {
        const errors: changePwd = {};

        if (e.newPassword === e.oldPassword) {
            errors.newPassword = 'Please try a new Password'
        }

        return errors;
    }

    return (
        <div className={PageStyle.changePwd}>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                initialValues={initialValues}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={PageStyle.changePwd__flex}>
                            <div>
                                <Field name="oldPassword">
                                    {(e) => (
                                        <div className={PageStyle.changePwd__input}>
                                            <label htmlFor="oldPassword"> Old Password </label>
                                            <Input id="oldPassword" type="password" placeholder="Enter Old Password" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={440} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
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
                                        <div className={PageStyle.changePwd__input}>
                                            <label htmlFor="newPassword"> New Password </label>
                                            <Input id="newPassword" type="password" placeholder="Enter New Password" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={440} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
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
                                        <div className={PageStyle.changePwd__input}>
                                            <label htmlFor="confirmPassword"> Confirm Password </label>
                                            <Input id="confirmPassword" type="password" placeholder="Enter Confirm Password" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={440} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>
                        <div className={PageStyle.changePwd__button}>
                            <ButtonComponent label={'Change Password'} bgColor={'#173346'} color={'#fff'} size={'1.8rem'} borderRadius={false} onClick={(e) => { console.log(e) }} type={'submit'} />
                        </div>
                    </form>
                )}
            />
        </div>
    )
}

export default ChangePassword;