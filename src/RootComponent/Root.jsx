import { Outlet } from "react-router-dom";
import Header from "../HeaderComponent/Header"
export default function Root() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>

        </>
    );
}
