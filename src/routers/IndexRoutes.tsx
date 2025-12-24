import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export function Router() {
    const user = null;

    return (
        <BrowserRouter>
            {/* {user ? <AppRoutes /> : <AuthRoutes />} */}
            <AppRoutes/>
        </BrowserRouter>
    );
}