/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "./SearchBookItem.module.css";
export let wishlist = [];
export default function SearchBookItem({ bookData }) {
    const [addToWishlist, setAddToWishlist] = useState([]);
    function functionAddToWishlist(bookData) {
        setAddToWishlist((prevBookWistlist) => {
            if (prevBookWistlist.every((book) => book.id !== bookData.id))
                return [...prevBookWistlist, bookData];
            return [...prevBookWistlist];
        });
    }
    wishlist = [...new Set([...wishlist, ...addToWishlist])];
    return (
        <>
            <li>
                <img src={bookData.image} alt="image1" className={styled.img}></img>
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
