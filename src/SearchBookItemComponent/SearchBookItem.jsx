/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "./SearchBookItem.module.css";
export let wishlist = [];
export let wishlistBookData = null;
export default function SearchBookItem({ bookData }) {
    const [addToWishlist, setAddToWishlist] = useState([]);
    function functionAddToWishlist(bookDataSearch) {
        wishlistBookData = bookDataSearch;
        setAddToWishlist((prevBookWishlist) => {
            return [
                ...prevBookWishlist.filter((book) => book.id !== bookDataSearch.id),
                bookDataSearch,
            ];
        });
    }
    wishlist = [...new Set([...wishlist, ...addToWishlist])];
    return (
        <>
            <li key={bookData.id}>
                <img
                    src={bookData.image}
                    alt="image1"
                    className={styled.img}
                    decoding="async"
                    loading="lazy"
                ></img>
                <p className={styled.p + " " + styled["gayathri-bold"]}>
                    {bookData.title}
                </p>
                <p className={styled.p + " " + styled["gayathri-bold"]}>
                    {bookData.authors}
                </p>
                <button
                    className={
                        styled.p + " " + styled["gayathri-bold"] + " " + styled.button
                    }
                    type="button"
                >
                    Read book
                </button>
                <br />
                <button
                    className={
                        styled.p + " " + styled["gayathri-bold"] + " " + styled.button
                    }
                    type="button"
                    onClick={() => functionAddToWishlist(bookData)}
                >
                    Add to wishlist
                </button>
            </li>
        </>
    );
}
