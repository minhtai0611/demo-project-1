/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "./SearchBookItem.module.css";
import { WishlistPostBookData } from "../WishlistComponent/WishlistComponent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export default function SearchBookItem({ bookData }) {
    const queryClient = useQueryClient();
    const { mutate: wishlistDataMutate, } = useMutation({
        mutationFn: async (bookData) => await WishlistPostBookData(bookData),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["wishlist"] }),
    });
    function functionAddToWishlist(bookDataSearch) {
        return wishlistDataMutate(bookDataSearch);
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
                    onClick={() => functionAddToWishlist(bookData)}
                >
                    Add to wishlist
                </button>
            </li>
        </>
    );
}
