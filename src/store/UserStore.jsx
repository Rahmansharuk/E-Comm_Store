// Context API method

import { createContext } from "react";

const UserStore = createContext({
    name: "Rahu"  // Anytime we can change so tis calld default value
})

export default UserStore;