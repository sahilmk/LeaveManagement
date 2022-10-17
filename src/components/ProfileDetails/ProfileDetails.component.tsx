import { Form, Field } from "react-final-form";
import { Input, Button } from "../../stories";
import { ProfileDetailType } from "../../Types";
import PageStyle from "./ProfileDetails.module.scss";

const ProfileDetails = ({
  profileData,
}: {
  profileData: ProfileDetailType | undefined;
}) => {
  const onSubmit = (e: ProfileDetailType) => { };

  const validate = (e: ProfileDetailType) => {
    const errors: ProfileDetailType = {};
    if (!e.firstName) {
      errors.firstName = "Please Enter valid first name.";
    }
    if (!e.email) {
      errors.email = "Please Enter email";
    }
    return errors;
  };

  return (
    <div className={PageStyle.profileDetail}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{
          firstName: profileData?.firstName,
          lastName: profileData?.lastName,
          email: profileData?.email,
          landlineNo: profileData?.landlineNo,
          dateOfBirth: profileData?.dateOfBirth,
          designation: profileData?.designation,
          mobNo: profileData?.mobileNo,
          department: profileData?.department,
          gender: profileData?.gender,
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={PageStyle.profileDetail__formContainer}>
              <div>
                <Field name="firstName">
                  {(e) => (
                    <div className={PageStyle.profileDetail__customInput}>
                      <label htmlFor="firstName"> First Name </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Enter first name "
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
                <Field name="email">
                  {(e) => (
                    <div className={PageStyle.profileDetail__customInput}>
                      <label htmlFor="email"> Email </label>
                      <Input
                        id="email"
                        type="text"
                        placeholder="Enter email"
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
                <Field name="landlineNo">
                  {(e) => (
                    <div className={PageStyle.profileDetail__customInput}>
                      <label htmlFor="landlineNo"> Landline No. </label>
                      <Input
                        id="landlineNo"
                        type="text"
                        placeholder="Enter Landline No. "
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
                <Field name="dateOfBirth">
                  {(e) => (
                    <div className={PageStyle.profileDetail__customInput}>
                      <label htmlFor="dateOfBirth"> Date Of Birth </label>
                      <Input
                        id="dateOfBirth"
                        type="Date"
                        placeholder=""
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
                <Field name="designation">
                  {(e) => (
                    <div className={PageStyle.profileDetail__customInput}>
                      <label htmlFor="designation"> Designation </label>
                      <Input
                        id="designation"
                        type="text"
                        placeholder="Enter Designation"
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
              <div>
                <Field name="lastName">
                  {(e) => (
                    <div className={PageStyle.profileDetail__customInput}>
                      <label htmlFor="lastName"> Last Name </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Enter last name "
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
                <Field name="mobNo">
                  {(e) => (
                    <div className={PageStyle.profileDetail__customInput}>
                      <label htmlFor="mobNo"> Enter Mobile no. </label>
                      <Input
                        id="mobNo"
                        type="text"
                        placeholder="Enter Mobile Number"
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
                <div className={PageStyle.profileDetail__customInput}>
                  <label htmlFor="gender">Gender</label>
                  <Field
                    name="gender"
                    component="select"
                    className={PageStyle.customDropdown}
                  >
                    <option value={"M"}>Male</option>
                    <option value={"F"}>Female</option>
                  </Field>
                </div>
                <div className={PageStyle.profileDetail__customInput}>
                  <label htmlFor="department">Department</label>
                  <Field
                    name="department"
                    component="select"
                    className={PageStyle.customDropdown}
                  >
                    <option>Department</option>
                  </Field>
                </div>
                <div className={PageStyle.profileDetail__buttonContainer}>
                  <Button
                    label="Update Profile"
                    bgColor={"#173346"}
                    color={"#fff"}
                    size={"1.8rem"}
                    borderRadius={false}
                    onClick={(e) => { }}
                    type={"submit"}
                  />
                  <Button
                    label='Cancel'
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
          </form>
        )}
      />
    </div>
  );
};

export default ProfileDetails;
