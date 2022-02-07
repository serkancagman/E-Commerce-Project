import React from "react";
import { getMe, logoutUser } from "API/trendProductAPI";
import { useNavigate } from "react-router-dom";
export const AuthLoginContext = React.createContext();

export const AuthLoginProvider = ({ children }) => {
  const getToken = localStorage.getItem("refresh-token")
  const getRole = localStorage.getItem("role")
  const [isLoggedIn, setIsLoggedIn] = React.useState(getToken ? true : false);
  const [user, setUser] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(getRole || null);
  
  const navigate = useNavigate()
  React.useEffect(() => {
    (async () => {
      try {
        const me = await getMe();
        console.log(me);
  
        setIsLoggedIn(true);
        setUser(me);
      } catch (err) {

      }
    })();
  }, []);

  const loggedUser = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
    
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
    localStorage.setItem("role", data.user.role);
  };

  const logoutCurrentUser = async (routeToHome) => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    localStorage.removeItem("role");
    await logoutUser();
    routeToHome();
  };

  const handleLogout = async () => {
    logoutCurrentUser(() => {
      navigate("/");
    });
  };
  const values = {
    isLoggedIn,
    user,
    loggedUser,
    isAdmin,
    logoutCurrentUser,
    handleLogout
  };

  return (
    <AuthLoginContext.Provider value={values}>
      {children}
    </AuthLoginContext.Provider>
  );
};
