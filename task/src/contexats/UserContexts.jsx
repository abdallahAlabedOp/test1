import React ,{ createContext, useState} from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {

    const [userName,setUserName]  =  useState(""); 
    const [userId,setUserId]  =  useState(-1); 
    const [email,setEmail]  =  useState(""); 
    const [isLogedIn,setIsLogedIn]  =  useState( false); 
    
   
    const userInfo = {
        userName : userName,
        setUserName: setUserName,
        userId:userId,
        setUserId:setUserId,
        email:email,
        setEmail:setEmail,
        isLogedIn:isLogedIn,
        setIsLogedIn:setIsLogedIn
    }

    return ( 
        <UserContext.Provider value={userInfo}>
            {props.children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;