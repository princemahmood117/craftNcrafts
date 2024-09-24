import { createContext } from "react";


const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const info = "my name"
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;