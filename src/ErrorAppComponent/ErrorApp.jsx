import { useRouteError } from "react-router-dom";
import styled from "./ErrorApp.module.css";
export default function ErrorApp() {
    const error = useRouteError();
    return (
        <>
            <div className={styled.div}>
                <p>
                    Sorry, page you looked that doesn&apos;t exist. <br />
                    <i>Page {error.statusText ? error.statusText : error.message}</i>
                </p>
            </div>
        </>
    );
}
