import styled from "./Search.module.css";
import SearchBookItem from "../SearchBookItemComponent/SearchBookItem";
import FetchBookData from "../FetchBookDataComponent/FetchBookData";
import { useEffect, useState } from "react";
export default function Search() {
    const [bookDataList, setBookDataList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        async function FetchBookDataList() {
            setIsFetching(true);
            try {
                const rawBookDataList = await FetchBookData();
                setBookDataList(rawBookDataList);
                setIsFetching(false);
            }
            catch (error) {
                setError(error.message || "Could not to fetch book data");
                setIsFetching(false);
            }
        }
        FetchBookDataList();
    }, []);
    return (
        <>
            <section className={styled.all}>
                {isFetching && <p>Loading to fetch book data, please wait...</p>}
                {!isFetching && !error && <p>Book list is up to date</p>}
                {!isFetching && error && <p>{error}</p>}
            </section>
            <ul className={styled.ul}>
                {bookDataList.map((bookData) => (
                    <SearchBookItem
                        key={bookData.id}
                        titleBook={bookData.title}
                        authorBook={bookData.authors}
                        imageBook={bookData.image}
                    />
                ))}
            </ul>
        </>
    );
}
