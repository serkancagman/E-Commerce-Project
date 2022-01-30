import React from "react";

const HeaderContext = React.createContext();

export const HeaderProvider = ({ children }) => {
  const [userForm, setUserForm] = React.useState(false);
  const [selected, setSelected] = React.useState(
    localStorage.getItem("language") || "US"
  );
  const [currency, setCurrency] = React.useState(
    localStorage.getItem("currency") || "USD"
  );
  const [asideActive, setAsideActive] = React.useState(false);
  const [pageHeigt, setPageHeight] = React.useState({ height: 0 });
  const [navSticky, setNavSticky] = React.useState({ sticky: false });
  const [shopCart, setShopCart] = React.useState(false);
  const currentWidth = window.innerWidth;
  const handleAside = () => setAsideActive(!asideActive);
  const showCart = () => setShopCart(!shopCart);

  console.log(currentWidth);
  console.log(pageHeigt)
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    let stickyStatus;

    if(currentWidth >= 768) {

    if (pageHeigt.height >= 132) {
      stickyStatus = true;
    } else if (pageHeigt.height < 132) {
      stickyStatus = false;
    }
  } else {
    if(pageHeigt.height >= 295) {
      stickyStatus = true;
    }else{
      stickyStatus = false;
    }
  }
    setNavSticky({ sticky: stickyStatus });
  }, [pageHeigt,currentWidth]);



  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setPageHeight({ height: scrollTop });
  };



  const handleUserForm = () => setUserForm(!userForm);

  // Navbar States *************************************************

  const openerMenus = {
    firstMenu: "firstMenu",
    secondMenu: "secondMenu",
    thirthMenu: "thirthMenu",
    fourthMenu: "fourthMenu",
    fifthMenu: "fifthMenu",
    sixthMenu: "sixthMenu",
    seventhMenu: "seventhMenu",
  };

  const [selectedMenu, setSelectedMenu] = React.useState(null);
  const handleNavUser = () => setUserForm(!userForm);

  const values = {
    userForm,
    setUserForm,
    selected,
    setSelected,
    currency,
    setCurrency,
    asideActive,
    setAsideActive,
    navSticky,
    shopCart,
    setShopCart,
    handleAside,
    showCart,
    handleUserForm,
    selectedMenu,
    setSelectedMenu,
    openerMenus,
    handleNavUser,
  };
  return (
    <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>
  );
};

export default HeaderContext;
