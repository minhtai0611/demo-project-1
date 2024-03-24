import { useRouteError, Link } from "react-router-dom";
import styled from "./ErrorApp.module.css";
import HeaderReplica from "../HeaderReplicaComponent/HeaderReplica";
export default function ErrorApp() {
    const error = useRouteError();
    return (
        <>
            <HeaderReplica />
            <div className={styled.all}>
                <p>
                    <i className={styled.i}>Sorry, this page you looked for that is {(error.statusText ? error.statusText : error.message).toLowerCase()} now ☹</i>
                    <br />
                    <Link to="/" className={styled.a}>Return to Home Page</Link>
                </p>
            </div>
        </>
    );
}
