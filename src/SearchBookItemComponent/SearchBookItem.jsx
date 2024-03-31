/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "./SearchBookItem.module.css";
import { WishlistPostBookData } from "../WishlistComponent/WishlistComponent";
export default function SearchBookItem({ bookData }) {
    async function functionAddToWishlist(bookDataSearch) {
        try {
            const response = await WishlistPostBookData(bookDataSearch);
            if (!response.ok) {
                throw new Error("Fail to post book data");
            }
        }
        catch (error) {
            console.log(error.message || "Could not to post book data");
        }
    }
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
                    <Link to="/pricing" className={styled.a}>
                        Read book
                    </Link>
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
