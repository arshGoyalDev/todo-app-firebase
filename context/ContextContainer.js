import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./ThemeContext";

const ContextContainer = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
};
export default ContextContainer;
