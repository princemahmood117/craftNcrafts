import { createContext } from "react";


const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const info = "my name"
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;