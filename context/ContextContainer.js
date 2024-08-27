import {AuthProvider} from "./AuthContext"

const ContextContainer = ({children}) => {
  return (
    <AuthProvider>

      {children}

    </AuthProvider>
  )
}
export default ContextContainer