/* eslint-disable react/prop-types */
import styled from "./Search.module.css";
import SearchBookItem from "../SearchBookItemComponent/SearchBookItem";
export default function Search({ bookDataList }) {
    return (
        <>
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
