import { useRouteError } from "react-router-dom";
export default function ErrorApp() {
    const error = useRouteError();
    return (
        <>
            <div>
                <p>Sorry, you navigated to routes that do not exist</p>
                <p>
                    <i>{error.statusText ? error.statusText : error.message}</i>
                </p>
            </div>
        </>
    );
}
