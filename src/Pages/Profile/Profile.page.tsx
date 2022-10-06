import { useState } from "react";
import { ChangePassword, LocalAddress, PermanentAddress, ProfileDetails } from "../../components";
import { PageTitle } from "../../stories";
import ProfilePageStyle from "./Profile.module.scss";

const ProfilePage = () => {
  const [proDetailToggler, setProDetToggler] = useState(false);
  const [locAddToggler, setProLocAddToggler] = useState(false);
  const [perAddressToggler, setPerAddressToggler] = useState(false);
  const [pwdToggler, setPwdToggler] = useState(false);

  return (
    <>
      <PageTitle
        logindate={"23rd jan 2018"}
        pagename={"Profile"}
        isinnerPage={false}
        isButton={false}
      />
      <section className={ProfilePageStyle.profile}>
        <div className={ProfilePageStyle.profile__background}>
          <div className={ProfilePageStyle.profileDetails}>
            <div
              className={ProfilePageStyle.profileDetails__header}
              onClick={() => {
                setProDetToggler((prev) => !prev);
              }}
            >
              {proDetailToggler ? (
                <h1>- Profile Details</h1>
              ) : (
                <h1>+ Profile Details</h1>
              )}
            </div>
            <div className={ProfilePageStyle.profileDetails__body}>
              {proDetailToggler ? <ProfileDetails /> : <></>}
            </div>
          </div>
          <div className={ProfilePageStyle.localAddress}>
            <div
              className={ProfilePageStyle.localAddress__header}
              onClick={() => {
                setProLocAddToggler((prev) => !prev);
              }}
            >
              {locAddToggler ? (
                <h1>- Local Address</h1>
              ) : (
                <h1>+ Local Address</h1>
              )}
            </div>
            <div className={ProfilePageStyle.localAddress__body}>
              {locAddToggler ? <LocalAddress /> : <></>}
            </div>
          </div>
          <div className={ProfilePageStyle.perAddress}>
            <div
              className={ProfilePageStyle.perAddress__header}
              onClick={() => {
                setPerAddressToggler((prev) => !prev);
              }}
            >
              {perAddressToggler ? (
                <h1>- Permanent Address</h1>
              ) : (
                <h1>+ Permanent Address</h1>
              )}
            </div>
            <div className={ProfilePageStyle.perAddress__body}>
              {perAddressToggler ? <PermanentAddress /> : <></>}
            </div>
          </div>
          <div className={ProfilePageStyle.changePwd}>
            <div
              className={ProfilePageStyle.changePwd__header}
              onClick={() => {
                setPwdToggler((prev) => !prev);
              }}
            >
              {pwdToggler ? (
                <h1>- Change Password</h1>
              ) : (
                <h1>+ Change Password</h1>
              )}
            </div>
            <div className={ProfilePageStyle.changePwd__body}>
              {pwdToggler ? <ChangePassword /> : <></>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
