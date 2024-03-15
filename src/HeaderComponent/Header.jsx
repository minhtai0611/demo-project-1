import logo from "../assets/logo-book.png";
import styled from "./Header.module.css";
import { Link } from "react-router-dom";
import useFetchBookData from "../FetchBookDataComponent/useFetchBookData";
import { useState } from "react";
import Search from "../SearchComponent/Search";
export default function Header() {
    const { bookDataList, isFetching, error } = useFetchBookData();
    const [filterBookQuery, setFilterBookQuery] = useState("");
    const [filterBookSearch, setFilterBookSearch] = useState(bookDataList);
    function functionChangeInput(event) {
        setFilterBookQuery(() => event.target.value);
    }
    function functionFilterSearch() {
        setFilterBookSearch(() => bookDataList.filter((bookData) =>
            bookData.title.toLowerCase().includes(filterBookQuery.toLowerCase())
        ));
    }
    return (
        <>
            <header className={styled.header + " " + styled.all}>
                <Link to="/" className={styled.a}>
                    <img src={logo} alt="logo" className={styled.headerImg} onClick={functionFilterSearch} />
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
                            onChange={functionChangeInput}
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
                                onClick={functionFilterSearch}
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
            <section className={styled.all + " " + styled.section}>
                {isFetching && <p>Loading to fetch book data, please wait...</p>}
                {!isFetching && !error && <p>Book list is up to date</p>}
                {!isFetching && error && <p>{error}</p>}
            </section>
            <Search bookDataList={filterBookSearch} />
        </>
    );
}
