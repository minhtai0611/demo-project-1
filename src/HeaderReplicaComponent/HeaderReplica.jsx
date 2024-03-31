import logo from "../assets/logo-book.png";
import styled from "./HeaderReplica.module.css";
import { Link } from "react-router-dom";
export default function HeaderReplica() {
    return (
        <>
            <header className={styled.header + " " + styled.all}>
                <Link to="/" className={styled.a}>
                    <img src={logo} alt="logo" className={styled.headerImg} />
                </Link>
                <nav className={styled.headerNavAll}>
                    <div className={styled.headerNavAll + " " + styled.divInput}>
                        <input
                            className={
                                styled.headerNavAll +
                                " " +
                                styled.headerInput +
                                " " +
                                styled.all
                            }
                            type="search"
                            name="searchBook"
                            placeholder="Search ebooks, magazines and more..."
                            minLength="5"
                            maxLength="20"
                        />
                        <Link
                            to="/"
                            className={
                                styled.a + " " + styled.all + " " + styled.headerNavAll
                            }
                        >
                            <button
                                type="button"
                                title="button"
                                className={
                                    styled.buttonInput +
                                    " " +
                                    styled.headerNavAll +
                                    " " +
                                    styled.all
                                }
                            >
                                <i className="fa fa-search" />
                            </button>
                        </Link>
                        <ul className={styled.headerNavAll + " " + styled.ul}>
                            <li className={styled.headerLi + " " + styled.headerNavAll}>
                                <Link
                                    to="/about"
                                    className={
                                        styled.a + " " + styled.all + " " + styled.headerNavAll
                                    }
                                >
                                    About
                                </Link>
                            </li>
                            <li className={styled.headerLi + " " + styled.headerNavAll}>
                                <Link
                                    to="/pricing"
                                    className={
                                        styled.a + " " + styled.all + " " + styled.headerNavAll
                                    }
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li className={styled.headerLi + " " + styled.headerNavAll}>
                                <Link
                                    to="/contact"
                                    className={
                                        styled.a + " " + styled.all + " " + styled.headerNavAll
                                    }
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className={styled.headerLi + " " + styled.headerNavAll}>
                                <Link
                                    to="/wishlist"
                                    className={
                                        styled.a + " " + styled.all + " " + styled.headerNavAll
                                    }
                                >
                                    Wishlist
                                </Link>
                            </li>
                            <li className={styled.headerLi + " " + styled.headerNavAll}>
                                <Link
                                    to="/upload"
                                    className={
                                        styled.a + " " + styled.all + " " + styled.headerNavAll
                                    }
                                >
                                    Upload
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
