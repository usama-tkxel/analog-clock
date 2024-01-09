import { Route, Routes, Navigate} from "react-router-dom";
import { IsLogin } from "../../utils/utilAuth";

export default function PrivateRouteValidator({ children }) {
  const isLogin = IsLogin();
  if(!isLogin){
    return <Navigate to="/login" replace />
  }else{
    return children
  }
}
