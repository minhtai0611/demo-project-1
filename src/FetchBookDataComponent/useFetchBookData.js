import { useEffect, useState } from "react";
export default function useFetchBookData() {
    const [bookDataList, setBookDataList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        async function FetchBookDataList() {
            setIsFetching(true);
            try {
                const response = await fetch("http://localhost:3000/api");
                if (!response.ok) {
                    throw new Error("Fail to fetch book data");
                }
                const jsonBookDataList = await response.json();
                setBookDataList(
                    jsonBookDataList.books.filter(
                        (bookData, index, array) =>
                            array.findIndex(
                                (otherBookData) => bookData.id === otherBookData.id
                            ) === index
                    )
                );
                setIsFetching(false);
            } catch (error) {
                setError(error.message || "Could not to fetch book data");
                setIsFetching(false);
            }
        }
        FetchBookDataList();
    }, []);
    return {
        bookDataList,
        isFetching,
        error,
        setBookDataList,
        setIsFetching,
        setError,
    };
}
