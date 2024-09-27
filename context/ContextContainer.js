import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./ThemeContext";
import { AppProvider } from "./AppContext";

const ContextContainer = ({ children }) => {
  return (
    <AuthProvider>
      <AppProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AppProvider>
    </AuthProvider>
  );
};
export default ContextContainer;
