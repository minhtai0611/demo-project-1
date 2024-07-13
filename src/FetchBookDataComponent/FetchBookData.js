// import { useEffect, useState } from "react";
export default async function FetchBookData() {
    // const [bookDataList, setBookDataList] = useState([]);
    // const [isFetching, setIsFetching] = useState(false);
    // const [error, setError] = useState();
    // useEffect(() => {
    //     async function FetchBookData() {
    //         setIsFetching(true);
    //         try {
    //             const response = await fetch("https://demo-project-1.onrender.com/api");
    //             if (!response.ok) {
    //                 throw new Error("Fail to fetch book data");
    //             }
    //             const jsonBookDataList = await response.json();
    //             setBookDataList(
    //                 await jsonBookDataList.books.filter(
    //                     (bookData, index, array) =>
    //                         array.findIndex(
    //                             (otherBookData) => bookData.id === otherBookData.id
    //                         ) === index
    //                 )
    //             );
    //             setIsFetching(false);
    //         } catch (error) {
    //             setError(error.message || "Could not to fetch book data");
    //             setIsFetching(false);
    //         }
    //     }
    //     FetchBookData();
    // }, []);
    // return {
    //     bookDataList,
    //     isFetching,
    //     error,
    //     setBookDataList,
    //     setIsFetching,
    //     setError,
    // };
    const response = await fetch("https://demo-project-1.onrender.com/api");
    if (!response.ok) {
        throw new Error("Fail to fetch book data");
    }
    const jsonBookDataList = await response.json();
    const jsonBookDataListFilter = await jsonBookDataList.books.filter(
        (bookData, index, array) =>
            array.findIndex((otherBookData) => bookData.id === otherBookData.id) ===
            index
    );
    return await jsonBookDataListFilter;
}
