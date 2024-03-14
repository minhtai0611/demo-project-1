import styled from "./Search.module.css";
import SearchBookItem from "../SearchBookItemComponent/SearchBookItem";
import { useEffect, useState } from "react";
export default function Search() {
    const [bookDataList, setBookDataList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        async function FetchBookDataList() {
            setIsFetching(true);
            try {
                const response = await fetch("https://www.dbooks.org/api/recent");
                if (!response.ok) {
                    throw new Error("Fail to fetch book data");
                }
                const jsonBookDataList = await response.json();
                setBookDataList(jsonBookDataList.books);
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
                {!isFetching && !error && <p>List books are up to date</p>}
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
