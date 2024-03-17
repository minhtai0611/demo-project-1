import styled from "./AddToWishlist.module.css";
import { wishlist } from "../SearchBookItemComponent/SearchBookItem";
import { useState } from "react";
export default function AddToWishlist() {
    const [removeFromWishlist, setRemoveFromWishlist] = useState(wishlist);
    function functionRemoveFromWishlist(bookData) {
        setRemoveFromWishlist((prevBookWishlist) => {
            return [...prevBookWishlist.filter((book) => book.id !== bookData.id)];
        });
    }
    return (
        <>
            <section className={styled.all}>
                <p>Wishlist</p>
            </section>
            <ul className={styled.ul}>
                {removeFromWishlist.map((bookData) => (
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
                            onClick={() => {
                                functionRemoveFromWishlist(bookData);
                            }}
                        >
                            Remove from wishlist
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
