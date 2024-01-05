import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Auth, onAuthStateChanged } from "firebase/auth";

interface UserContextProps {
  children: ReactNode;
}

interface UserData {
  username: string;
  email: string;
  fullName: string;
  goal: string;
  interest: string;
  avatar: string;

}

type AuthContextType = {
  user: UserData | null;
  username: string;
  email: string;
  loading: boolean;
  auth: Auth;
  setUser: (userData: UserData | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
  auth: Auth;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children, auth }) => {
const [user, setUser] = useState<UserData | null>(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const userData: UserData = {
                username: user.displayName || "",
                email: user.email || "",
                fullName: "",
                goal: "",
                interest: "",
                avatar: "",
            };
            setUser(userData);
        } else {
            setUser(null);
        }
        setLoading(false);
    });

    return () => unsubscribe();
}, [auth]);

return (
    <AuthContext.Provider
        value={{
            user,
            username: user?.username || "",
            email: user?.email || "",
            loading,
            auth,
            setUser,
        }}
    >
        {children}
    </AuthContext.Provider>
);
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
