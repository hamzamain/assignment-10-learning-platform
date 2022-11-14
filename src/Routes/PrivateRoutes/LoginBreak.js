import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const LoginBreak = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-sky-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-sky-400"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-sky-400"></div>
    </div>;
    return;
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default LoginBreak;
