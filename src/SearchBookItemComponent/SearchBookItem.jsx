/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import styled from "./SearchBookItem.module.css";
import { WishlistPostBookData } from "../WishlistComponent/WishlistComponent";
export default function SearchBookItem({ bookData }) {
    async function functionAddToWishlist(bookDataSearch) {
        try {
            await WishlistPostBookData(bookDataSearch);
        }
        catch (error) {
            console.log(error.message || "Could not to send data form");
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
