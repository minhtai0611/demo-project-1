import styled from "./AddToWishlist.module.css";
import { wishlist } from "../SearchBookItemComponent/SearchBookItem";
import { useState } from "react";
import { useUploadGetDataForm } from "../UploadDataFormComponent/UploadDataFormComponent";
// import { uploadForm } from "../UploadComponent/Upload";
import HeaderReplica from "../HeaderReplicaComponent/HeaderReplica";
export default function AddToWishlist() {
    // const uploadFormUpdate = [
    //     ...uploadForm.filter((book) => book.idBook !== uploadData.idBook),
    //     uploadData,
    // ];
    // const wishlistUpdate = [
    //     ...wishlist.filter((book) => book.id !== wishlistBookData.id),
    //     wishlistBookData,
    // ];

    const [removeFromWishlist, setRemoveFromWishlist] = useState(wishlist);
    function functionRemoveFromWishlist(bookData) {
        setRemoveFromWishlist((prevBookWishlist) => {
            return [...prevBookWishlist.filter((book) => book.id !== bookData.id)];
        });
    }
    const { uploadBookData } = useUploadGetDataForm();
    // function functionRemoveFromUpload(bookData) {
    //     setRemoveFromUpload((prevBookUpload) => {
    //         return [
    //             ...prevBookUpload.filter((book) => book.idBook !== bookData.idBook),
    //         ];
    //     });
    // }
    return (
        <>
            <HeaderReplica />
            <section className={styled.all}>
                <p>Wishlist</p>
            </section>
            <ul className={styled.ul}>
                {removeFromWishlist.map((bookData) => (
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
                            onClick={() => {
                                functionRemoveFromWishlist(bookData);
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
                            alt="image1"
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
                        >
                            Remove from uploadlist
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
