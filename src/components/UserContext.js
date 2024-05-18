import { createContext } from "react";

const UserContext = createContext({
    userSearchText : "",
    isLogin : false,
    user : "",
    favList : []
})
export default UserContext;