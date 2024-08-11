import { useContext } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";

function RequireAuth({ children }) {
  const auth = useContext(AuthContext);
  const location = useLocation();
  console.log(auth);
  console.log(location);
  // if (!auth.user) {
  //   //return <Navigate to="/login" state={{ from: location }} />;
  //   loginCallBack();
  // }
  return children;
}

export default RequireAuth;
