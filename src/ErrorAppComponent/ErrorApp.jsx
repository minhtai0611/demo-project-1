import { useRouteError } from "react-router-dom";
// import ErrorAppCSS from "./ErrorApp.module.css"
export default function ErrorApp() {
    const error = useRouteError();
    return (
        <>
            <div>
                <p>The page you&apos;re looking for doesn&apos;t exist.</p>
                <p>
                    <i>Page {error.statusText ? error.statusText : error.message}</i>
                </p>
            </div >
        </>
    );
}
