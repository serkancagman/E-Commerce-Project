import React from "react";
import { getMe, logoutUser } from "API/trendProductAPI";
import { useNavigate } from "react-router-dom";
export const AuthLoginContext = React.createContext();

export const AuthLoginProvider = ({ children }) => {
  const getToken = localStorage.getItem("refresh-token")
  const [isLoggedIn, setIsLoggedIn] = React.useState(getToken ? true : false);
  const adminToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwOTA0ZGQxMTUzYzA5MzM1MWExMzJhIiwiaWF0IjoxNjQ0ODMyMzIyLCJleHAiOjE2NjAzODQzMjIsImlzcyI6ImVjb21tZXJjZS5hcHAifQ.t5PUodSZhUjHbdlD_KoMagynvrprcYYT8sK-4lFfXf4"
  const getLocalToken = localStorage.getItem("refresh-token")
  const [isAdmin, setIsAdmin] = React.useState(adminToken === getLocalToken ? true : false);
  const [user, setUser] = React.useState(null);
  
 
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
    handleLogout,
    isAdmin
   
  };

  return (
    <AuthLoginContext.Provider value={values}>
      {children}
    </AuthLoginContext.Provider>
  );
};
