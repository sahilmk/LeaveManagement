import { getData, removeData } from "../../Util";
import { useAuthContext } from "../../Hooks";
import { callLogoutGet } from "../../APIs/authData";

const Dashboard = () => {
  const { dispatch } = useAuthContext();
  const loginData = getData("loginData");
  const logout = () => {
    removeData("loginData");
    callLogoutGet({
      headers: { Authorization: "bearer " + loginData.token },
    }).then((Response) => alert(Response.data.message));
    dispatch({ type: "LOGGED_OUT", loggedIn: false });
  };

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Dashboard;
