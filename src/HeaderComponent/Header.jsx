import logo from "../assets/logo-book.png";
import styled from "./Header.module.css";
import { Link } from "react-router-dom";
import FetchBookData from "../FetchBookDataComponent/FetchBookData";
import { useState } from "react";
import Search from "../SearchComponent/Search";
import { PublishGetBookData } from "../PublishComponent/PublishComponent";
import { useQuery } from "@tanstack/react-query";
export default function Header() {
    const { data, isError, isPending, isSuccess } = useQuery({
        queryKey: ["api"],
        queryFn: async () => await FetchBookData(),
    });
    const {
        data: publishData,
        isError: isPublishError,
        isPending: isPublishPending,
        isSuccess: isPublishSuccess,
    } = useQuery({
        queryKey: ["publish"],
        queryFn: async () => await PublishGetBookData(),
    });
    // const publishDataMatch = [...publishData.map((bookData) => {
    //     return {
    //         id: bookData.idbook,
    //         title: bookData.titlebook,
    //         authors: bookData.authorbook,
    //         image: bookData.imagebook
    //     }
    // })];
    // const bookDataListFinal = [...publishDataMatch, ...data];
    const [filterBookQuery, setFilterBookQuery] = useState("");
    //const [filterSearch, setFilterSearch] = useState([]);
    function functionChangeInput(event) {
        setFilterBookQuery(event.target.value);
    }
    function functionFilterSearchKeyDown(event) {
        if (event.key === "Enter") {
            functionFilterSearch();
        }
    }
    function functionFilterSearch() {
        [
            ...publishData.map((bookData) => {
                return {
                    id: bookData.idbook,
                    title: bookData.titlebook,
                    authors: bookData.authorbook,
                    image: bookData.imagebook,
                };
            }),
            ...data,
        ].filter((bookData) =>
            bookData.title.toLowerCase().includes(filterBookQuery.toLowerCase())
        );
    }
    // const filterResult = bookDataListFinal.filter((bookData) =>
    //     bookData.title.toLowerCase().includes(filterBookQuery.toLowerCase())
    // )
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
                            onChange={(event) => functionChangeInput(event)}
                            onKeyDown={(event) => functionFilterSearchKeyDown(event)}
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
                                onClick={(event) => functionFilterSearch(event)}
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
                {isPending && isPublishPending && (
                    <p>Loading to fetch book data, please wait...</p>
                )}
                {isSuccess && isPublishSuccess && <p>Book list is up to date</p>}
                {isError && isPublishError && <p>Fail to fetch book data</p>}
            </section>
            {isSuccess && isPublishSuccess && (
                <Search
                    bookDataList={[
                        ...publishData.map((bookData) => {
                            return {
                                id: bookData.idbook,
                                title: bookData.titlebook,
                                authors: bookData.authorbook,
                                image: bookData.imagebook,
                            };
                        }),
                        ...data,
                    ].filter((bookData) =>
                        bookData.title.toLowerCase().includes(filterBookQuery.toLowerCase())
                    )}
                />
            )}
        </>
    );
}
