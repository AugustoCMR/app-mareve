import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function AuthRoutes() {
  const router = useNavigate();
  const local = useLocation();
  useEffect(() => {

    if (local.pathname != '/register') {
      router("/login");
    }

  }, [router]);

  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
}