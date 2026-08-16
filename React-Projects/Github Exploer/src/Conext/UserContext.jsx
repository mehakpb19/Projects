import { createContext, useState } from "react";

export const UserdataContext = createContext();
const UserContext = ({ children }) => {
  const [User, setUser] = useState({});
  return (
    <UserdataContext.Provider value={{User,setUser}}>
      {children}
    </UserdataContext.Provider>
  );
};

export default UserContext;
