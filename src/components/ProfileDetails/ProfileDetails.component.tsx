import { Form, Field } from 'react-final-form'
import { Input, ButtonComponent } from '../../stories'
import PageStyle from './ProfileDetails.module.scss';

type fieldInputType = {
    firstName?: string,
    lastName?: string,
    email?: string,
    mobNo?: string,
    landlineNo?: string,
    dateOfBirth?: string,
    designation?: string,
}

const initialValues = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    mobNo: '+91 90 99 09 9090',
    landlineNo: '0298-3737738',
    dateOfBirth: '',
    designation: 'Design'
}

const ProfileDetails = () => {

    const onSubmit = (e: fieldInputType) => {

    }

    const validate = (e: fieldInputType) => {
        const errors: fieldInputType = {}
        if (!e.firstName) {
            errors.firstName = 'Please Enter valid first name.'
        }
        if (!e.email) {
            errors.email = 'Please Enter email'
        }
        return errors;
    }

    return (
        <div className={PageStyle.profileDetail}>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                initialValues={initialValues}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={PageStyle.profileDetail__flex}>
                            <div>
                                <Field name="firstName">
                                    {(e) => (
                                        <div className={PageStyle.profileDetail__input}>
                                            <label htmlFor="firstName"> First Name </label>
                                            <Input id="firstName" type="text" placeholder="Enter first name " inputtype=""
                                                padding={"14px 18px 14px 19px"} width={440} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="email">
                                    {(e) => (
                                        <div className={PageStyle.profileDetail__input}>
                                            <label htmlFor="email"> Email </label>
                                            <Input id="email" type="text" placeholder="Enter email" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={440} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="landlineNo">
                                    {(e) => (
                                        <div className={PageStyle.profileDetail__input}>
                                            <label htmlFor="landlineNo"> Landline No. </label>
                                            <Input id="landlineNo" type="text" placeholder="Enter Landline No. "
                                                inputtype="" padding={"14px 18px 14px 19px"} width={440} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="dateOfBirth">
                                    {(e) => (
                                        <div className={PageStyle.profileDetail__input}>
                                            <label htmlFor="dateOfBirth"> Date Of Birth </label>
                                            <Input id="dateOfBirth" type="Date" placeholder="" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={440} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="designation">
                                    {(e) => (
                                        <div className={PageStyle.profileDetail__input}>
                                            <label htmlFor="designation"> Designation </label>
                                            <Input id="designation" type="text" placeholder="Enter Designation" inputtype=""
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
                                <Field name="lastName">
                                    {(e) => (
                                        <div className={PageStyle.profileDetail__input}>
                                            <label htmlFor="lastName"> Last Name </label>
                                            <Input id="lastName" type="text" placeholder="Enter last name " inputtype=""
                                                padding={"14px 18px 14px 19px"} width={440} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="mobNo">
                                    {(e) => (
                                        <div className={PageStyle.profileDetail__input}>
                                            <label htmlFor="mobNo"> Enter Mobile no. </label>
                                            <Input id="mobNo" type="text" placeholder="Enter mobNo" inputtype=""
                                                padding={"14px 18px 14px 19px"} width={440} value={e.input.value}
                                                onChange={e.input.onChange} onBlur={e.input.onBlur} onFocus={e.input.onFocus}
                                            />
                                            {e.meta.error && e.meta.touched && (
                                                <span> {e.meta.error} </span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <div className={PageStyle.profileDetail__input}>
                                    <label htmlFor="gender">Gender</label>
                                    <Field
                                        name="gender"
                                        component="select"
                                        className={PageStyle.dropdown}
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Field>
                                </div>
                                <div className={PageStyle.profileDetail__input}>
                                    <label htmlFor="department">Department</label>
                                    <Field
                                        name="department"
                                        component="select"
                                        className={PageStyle.dropdown}
                                    >
                                        <option>Department</option>
                                    </Field>
                                </div>
                                <div className={PageStyle.profileDetail__button}>
                                    <ButtonComponent label={'Update Profile'} bgColor={'#173346'} color={'#fff'} size={'1.8rem'} borderRadius={false} onClick={(e) => { console.log(e) }} type={'submit'} />
                                    <ButtonComponent label={'Cancel'} bgColor={'#fafafa'} color={'#173346'} size={'2rem'} borderRadius={false} border={'solid 2px #ebebeb'} onClick={(e) => { console.log(e) }} type={'button'} />
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            />
        </div>
    );
}

export default ProfileDetails;