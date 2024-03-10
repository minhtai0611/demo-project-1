import { useRouteError, Link } from "react-router-dom";
import styled from "./ErrorApp.module.css";
export default function ErrorApp() {
    const error = useRouteError();
    return (
        <>
            <div className={styled.all}>
                <p>
                    <i className={styled.i}>Sorry, page {(error.statusText ? error.statusText : error.message).toLowerCase()} ☹</i>
                    <br />
                    <br />
                    <br />
                    <Link to="/" className={styled.a}>Return to Home Page</Link>
                </p>
            </div>
        </>
    );
}
