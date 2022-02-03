import React from "react";
import { getMe, logoutUser } from "API/trendProductAPI";
import { useNavigate } from "react-router-dom";
export const AuthLoginContext = React.createContext();

export const AuthLoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  let navigate = useNavigate()
  React.useEffect(() => {
    (async () => {
      try {
        const me = await getMe();
        console.log(me);
        setIsLoading(false);
        setIsLoggedIn(true);
        setUser(me);
      } catch (err) {
        setIsLoading(false);
      }
    })();
  }, []);

  const loggedUser = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };

  const logoutCurrentUser = async (routeToHome) => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
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
    logoutCurrentUser,
    handleLogout
  };

  return (
    <AuthLoginContext.Provider value={values}>
      {children}
    </AuthLoginContext.Provider>
  );
};
