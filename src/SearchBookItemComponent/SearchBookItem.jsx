/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "./SearchBookItem.module.css";
export let wishlist = [];
export default function SearchBookItem({ bookData }) {
    const [addToWishlist, setAddToWishlist] = useState([]);
    function functionAddToWishlist(bookData) {
        setAddToWishlist((prevBookWishlist) => {
            return [...prevBookWishlist.filter((book) => book.id !== bookData.id), bookData];
        });
    }
    wishlist = [...new Set([...wishlist, ...addToWishlist])];
    return (
        <>
            <li key={bookData.id}>
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
