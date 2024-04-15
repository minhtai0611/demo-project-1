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
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
export default function AddToWishlist() {
    const queryClient = useQueryClient();
    const {
        data: wishlistData,
        // isError: isWishlistError,
        // isPending: isWishlistPending,
        isSuccess: isWishlistSuccess,
    } = useQuery({
        queryKey: ["wishlist"],
        queryFn: async () => await WishlistGetBookData(),
    });
    const {
        mutate: wishlistDataMutate,
        // isError: isWishlistMutateError,
        // isPending: isWishlistMutatePending,
        // isSuccess: isWishlistMutateSuccess,
    } = useMutation({
        mutationFn: async (bookData) => await WishlistDeleteBookData(bookData),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["wishlist"] }),
    });
    function functionRemoveFromWishlist(bookData) {
        return wishlistDataMutate({ id: bookData.id });
    }

    const {
        data: uploadData,
        // isError: isUploadError,
        // isPending: isUploadPending,
        isSuccess: isUploadSuccess,
    } = useQuery({
        queryKey: ["upload"],
        queryFn: async () => await UploadGetDataForm(),
    });
    const {
        mutate: uploadDataMutate,
        // isError: isUploadMutateError,
        // isPending: isUploadMutatePending,
        // isSuccess: isUploadMutateSuccess,
    } = useMutation({
        mutationFn: async (bookData) => await UploadDeleteDataForm(bookData),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["upload"] }),
    });
    function functionRemoveFromUpload(bookData) {
        return uploadDataMutate({ idbook: bookData.idbook });
    }

    const {
        mutate: publishDataMutate,
        // isError: isPublishMutateError,
        // isPending: isPublishMutatePending,
        // isSuccess: isPublishMutateSuccess,
    } = useMutation({
        mutationFn: async (bookData) => await PublishPostBookData(bookData),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["publish"] }),
    });
    function functionPublishFromUpload(bookData) {
        return publishDataMutate(bookData);
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
                                onClick={() => functionRemoveFromWishlist(bookData)}
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
                                onClick={() => functionPublishFromUpload(bookData)}
                            >
                                Publish on platform
                            </button>
                            <br />
                            <button
                                className={
                                    styled.p + " " + styled["gayathri-bold"] + " " + styled.button
                                }
                                type="button"
                                onClick={() => functionRemoveFromUpload(bookData)}
                            >
                                Remove from uploadlist
                            </button>
                        </li>
                    ))}
            </ul>
        </>
    );
}
