/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "./SearchBookItem.module.css";
import { WishlistPostBookData } from "../WishlistComponent/WishlistComponent";
// export let wishlist = [];
// export let wishlistBookData = null;
export default function SearchBookItem({ bookData }) {
    // const [addToWishlist, setAddToWishlist] = useState([]);
    async function functionAddToWishlist(bookDataSearch) {
        // wishlistBookData = bookDataSearch;
        // setAddToWishlist((prevBookWishlist) => {
        //     return [
        //         ...prevBookWishlist.filter((book) => book.id !== bookDataSearch.id),
        //         bookDataSearch,
        //     ];
        // });
        try {
            const response = await WishlistPostBookData(bookDataSearch);
            if (!response.ok) {
                throw new Error("Fail to send data form");
            }
        }
        catch (error) {
            console.log(error.message || "Could not to send data form");
        }
    }
    // wishlist = [...new Set([...wishlist, ...addToWishlist])];
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
                    onClick={async () => await functionAddToWishlist(bookData)}
                >
                    Add to wishlist
                </button>
            </li>
        </>
    );
}
