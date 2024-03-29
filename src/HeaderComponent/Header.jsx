import logo from "../assets/logo-book.png";
import styled from "./Header.module.css";
import { Link } from "react-router-dom";
import useFetchBookData from "../FetchBookDataComponent/useFetchBookData";
import { useState } from "react";
import Search from "../SearchComponent/Search";
import { usePublishGetBookData } from "../PublishComponent/PublishComponent";
export default function Header() {
    const { bookDataList, isFetching, error } = useFetchBookData();
    const { publishBookDataList } = usePublishGetBookData();
    const publishBookDataListMatch = publishBookDataList.map((bookData) => {
        return {
            id: bookData.idbook,
            title: bookData.titlebook,
            authors: bookData.authorbook,
            image: bookData.imagebook
        }
    })
    let bookDataListFinal = [...publishBookDataListMatch, ...bookDataList];
    const [filterBookQuery, setFilterBookQuery] = useState("");
    function functionChangeInput(event) {
        setFilterBookQuery(event.target.value);
    }
    const filterResult = bookDataListFinal.filter((bookData) =>
        bookData.title.toLowerCase().includes(filterBookQuery.toLowerCase())
    )
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
                            onChange={functionChangeInput}
                        />
                        {/* <Link
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
                        </Link> */}
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
                {!isFetching && error && <p>Fail to fetch book data</p>}
            </section>
            <Search bookDataList={filterResult} />
        </>
    );
}
