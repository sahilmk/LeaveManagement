import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SidebarTab from "../SidebarTab";
import Button from "../ButtonComponent";
import { Theme } from "../../Theme";
import { callLogoutGet } from "../../APIs";
import { useAuthContext } from "../../Hooks";
import { getData, removeData } from "../../Util/Helper";
import { SidebarStyle } from "./Sidebar.styled";

export type sidebarTabTypes = {
  icon?: string;
  label: string;
  isExpandable?: boolean;
  isOpen?: boolean;
  route?: string;
};

export type innerSidebarDataType = {
  label: string;
  route: string;
};

export type sidebarTabDataPropType = {
  icon: string;
  label: string;
  isExpandable: boolean;
  isOpen: boolean;
  route: string;
  innerSidebar?: innerSidebarDataType[];
};

export type sidebarPropType = {
  user: string;
  position: string;
  sidebarTabData: sidebarTabDataPropType[];
  userImage: string;
};

function Sidebar({
  user,
  position,
  sidebarTabData,
  userImage,
}: sidebarPropType) {
  const [sidebarTabs, setSidebarTabs] = useState(sidebarTabData);
  const navigate = useNavigate();

  const openDropDown = (tab: sidebarTabTypes) => {
    if (tab.route) {
      navigate(tab.route);
    }

    if (tab.isExpandable) {
      const newSidebarTabs = sidebarTabs.map((item) => {
        if (item.label === tab.label && item.isExpandable) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      });
      setSidebarTabs(newSidebarTabs);
    }
  };

  const { dispatch } = useAuthContext();
  const loginData = getData("loginData");

  const logout = () => {
    removeData("loginData");
    callLogoutGet({
      headers: { Authorization: "bearer " + loginData.token },
    }).then((Response) => alert(Response.data.message));
    dispatch({ type: "LOGGED_OUT", loggedIn: false });
    navigate("/");
  };

  return (
    <SidebarStyle>
      <div className="profile">
        <div className="profilepicture">
          <img src={userImage} alt={user} />
        </div>
        <Link className="profiledescription" to="/profile">
          <span className="username">{user}</span>
          <span className="userposition">{position}</span>
        </Link>
      </div>

      <ul>
        {sidebarTabs.map((tab) => (
          <li key={tab.label}>
            <SidebarTab
              isExpandable={tab.isExpandable}
              icon={tab.icon}
              isOpen={tab.isOpen}
              label={tab.label}
              path={tab.route}
              onClick={() => openDropDown(tab)}
            />

            {tab.isExpandable && tab.isOpen && (
              <ul>
                {tab.innerSidebar!.map((tabs) => (
                  <li className="innerTabs" key={tabs.label}>
                    <SidebarTab
                      isExpandable={false}
                      label={tabs.label}
                      path={tabs.route}
                      onClick={() => openDropDown(tabs)}
                    />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <Button
        label={` Logout`}
        borderRadius={false}
        color={Theme.colors.whiteColor}
        logo={true}
        onClick={logout}
      />
    </SidebarStyle>
  );
}

export default Sidebar;
