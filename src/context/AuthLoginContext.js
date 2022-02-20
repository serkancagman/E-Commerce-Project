import React from "react";
import { getMe, logoutUser } from "API/trendProductAPI";
import { useNavigate } from "react-router-dom";
export const AuthLoginContext = React.createContext();

export const AuthLoginProvider = ({ children }) => {
  const getToken = localStorage.getItem("refresh-token")
  const [isLoggedIn, setIsLoggedIn] = React.useState(getToken ? true : false);
  const adminToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwOTA0ZGQxMTUzYzA5MzM1MWExMzJhIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQ1MzEzMjEzLCJleHAiOjE2NDYxNzcyMTMsImlzcyI6ImVjb21tZXJjZS5hcHAifQ.FC9qLyjKREZSQ-NmV_5dIB8TCKqBnUePLOOY8eQ8z1Q"
  const getLocalToken = localStorage.getItem("access-token")
  const isAdmin = adminToken === getLocalToken ? true : false
  const [user, setUser] = React.useState(null);
  
 
  const navigate = useNavigate()
  React.useEffect(() => {
    (async () => {
      try {
        const me = await getMe();
        
  
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
