import { getData, removeData } from "../../Util";
import { useAuthContext } from "../../Hooks";
import { callLogoutPost } from "../../APIs/authData";

const Dashboard = () => {
  const { dispatch } = useAuthContext();
  const loginData = getData("LoginData");
  const logout = () => {
    removeData("LoginData");
    callLogoutPost(loginData.token).then((Response) =>
      console.log(Response.data)
    );
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
