import React, { createContext, Dispatch, ReactNode, ReactElement, SetStateAction, useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";

type AuthContext = {
    isAuthenticated: boolean;
    isLoading: boolean;
    setAuthenticated: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContext>({
    isAuthenticated: false,
    isLoading: false,
    setAuthenticated: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }): ReactElement => {
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
    const [isLoading, setLoading] = React.useState<boolean>(true);

    useEffect(() => {
        const initaliseAuth = async (): Promise<void> => {
            const response = await fetch("/api/authCheck");
            setAuthenticated(response.status === 200);
            setLoading(false);
        };
        initaliseAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, setAuthenticated }}>{children}</AuthContext.Provider>
    );
};

export function useAuth(): AuthContext {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export function useIsAuthenticated(): boolean {
    const context = useAuth();
    return context.isAuthenticated;
}
