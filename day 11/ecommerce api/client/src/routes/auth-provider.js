/** @format */
"use client";
import { keepLogin } from "@/redux/middleware/user";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const currPage = usePathname();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(keepLogin());
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [currPage]);
  return <div>{isLoading ? "" : children}</div>;
}
export default AuthProvider;
