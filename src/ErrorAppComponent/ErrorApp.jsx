import { useRouteError } from "react-router-dom";
import ErrorAppCSS from "./ErrorApp.module.css";
export default function ErrorApp() {
    const error = useRouteError();
    return (
        <>
            <div className={ErrorAppCSS.div}>
                <p>Page {error.statusText ? error.statusText : error.message}</p>
            </div>
        </>
    );
}
