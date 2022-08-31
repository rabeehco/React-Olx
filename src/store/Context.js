/* b4 import it and create a context and export it :index.js */
import {createContext} from 'react'
import { useState } from 'react' 

export const FirebaseContext = createContext(null)
/* Creating context for authorization */
export const AuthContext = createContext(null)

/* Making this function for storing user details and use passing it to everywhere */
export default function Context({children}) {
    const [user, setUser] = useState(null) 

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </ AuthContext.Provider>
    )
}