import styled from "./AddToWishlist.module.css";
import {
    WishlistGetBookData,
    WishlistDeleteBookData,
} from "../WishlistComponent/WishlistComponent";
import {
    UploadGetDataForm,
    UploadDeleteDataForm,
} from "../UploadDataFormComponent/UploadDataFormComponent";
import { PublishPostBookData } from "../PublishComponent/PublishComponent";
import HeaderReplica from "../HeaderReplicaComponent/HeaderReplica";
import { useQuery, useMutation } from "@tanstack/react-query";
export default function AddToWishlist() {
    const {
        data: wishlistData,
        isError: isWishlistError,
        isPending: isWishlistPending,
        isSuccess: isWishlistSuccess,
    } = useQuery({
        queryKey: ["wishlist"],
        queryFn: async () => await WishlistGetBookData(),
    });
    const {
        mutate: wishlistDataMutate,
        isError: isWishlistMutateError,
        isPending: isWishlistMutatePending,
        isSuccess: isWishlistMutateSuccess,
    } = useMutation({ mutationFn: async (bookData) => await WishlistDeleteBookData(bookData) });
    function functionRemoveFromWishlist(bookData) {
        wishlistDataMutate({ bookData });
    }
    const {
        data: uploadData,
        isError: isUploadError,
        isPending: isUploadPending,
        isSuccess: isUploadSuccess,
    } = useQuery({
        queryKey: ["upload"],
        queryFn: async () => await UploadGetDataForm(),
    });
    async function functionRemoveFromUpload(bookData) {
        return await UploadDeleteDataForm(bookData);
    }
    async function functionPublishFromUpload(bookData) {
        return await PublishPostBookData(bookData);
    }
    return (
        <>
            <HeaderReplica />
            <section className={styled.all}>
                <p>Wishlist</p>
            </section>
            <ul className={styled.ul}>
                {isWishlistSuccess &&
                    wishlistData.map((bookData) => (
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
                            {/* <button
                            className={
                                styled.p + " " + styled["gayathri-bold"] + " " + styled.button
                            }
                            type="button"
                        >
                            Read book
                        </button>
                        <br /> */}
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
                {isUploadSuccess &&
                    uploadData.map((bookData) => (
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
                                className={
                                    styled.p + " " + styled["gayathri-bold"] + " " + styled.button
                                }
                                type="button"
                                onClick={async () => {
                                    await functionPublishFromUpload(bookData);
                                }}
                            >
                                Publish on platform
                            </button>
                            <br />
                            <button
                                className={
                                    styled.p + " " + styled["gayathri-bold"] + " " + styled.button
                                }
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
