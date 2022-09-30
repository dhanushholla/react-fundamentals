import React from "react";

//step 1 -- every context object created using a createcontext() will have a provider and a consumer method
const UserContext=React.createContext()

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}

//going to export usercontext for finding the contexttype
export default UserContext