import styled from "./AddToWishlist.module.css";
// import { wishlist } from "../SearchBookItemComponent/SearchBookItem";
// import { useState } from "react";
import { useWishlistGetBookData, WishlistDeleteBookData } from "../WishlistComponent/WishlistComponent";
import { useUploadGetDataForm, UploadDeleteDataForm } from "../UploadDataFormComponent/UploadDataFormComponent";
import HeaderReplica from "../HeaderReplicaComponent/HeaderReplica";
export default function AddToWishlist() {
    // const wishlistUpdate = [
    //     ...wishlist.filter((book) => book.id !== wishlistBookData.id),
    //     wishlistBookData,
    // ];

    const { wishlistBookData } = useWishlistGetBookData();
    async function functionRemoveFromWishlist(bookData) {
        return await WishlistDeleteBookData(bookData);
    }
    const { uploadBookData } = useUploadGetDataForm();
    async function functionRemoveFromUpload(bookData) {
        return await UploadDeleteDataForm(bookData);
    }
    return (
        <>
            <HeaderReplica />
            <section className={styled.all}>
                <p>Wishlist</p>
            </section>
            <ul className={styled.ul}>
                {wishlistBookData.map((bookData) => (
                    <li key={bookData.id}>
                        <img
                            src={bookData.image}
                            alt="imageWishlist"
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
                            onClick={async () => {
                                await functionRemoveFromWishlist(bookData);
                            }}
                        >
                            Remove from wishlist
                        </button>
                    </li>
                ))}
            </ul>
            <section className={styled.all}>
                <p>Uploadlist</p>
            </section>
            <ul className={styled.ul}>
                {uploadBookData.map((bookData) => (
                    <li key={bookData.idbook}>
                        <img
                            src={bookData.imagebook}
                            alt="imageUpload"
                            className={styled.img}
                            decoding="async"
                            loading="lazy"
                        ></img>
                        <p className={styled.p + " " + styled["gayathri-bold"]}>
                            {bookData.titlebook}
                        </p>
                        <p className={styled.p + " " + styled["gayathri-bold"]}>
                            {bookData.authorbook}
                        </p>
                        <button
                            className={styled.p + " " + styled["gayathri-bold"] + " " + styled.button}
                            type="button"
                        >
                            Publish on platform
                        </button>
                        <br />
                        <button
                            className={styled.p + " " + styled["gayathri-bold"] + " " + styled.button}
                            type="button"
                            onClick={async () => {
                                await functionRemoveFromUpload(bookData);
                            }}
                        >
                            Remove from uploadlist
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
