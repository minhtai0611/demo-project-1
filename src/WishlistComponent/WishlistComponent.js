// import { useEffect, useState } from "react";
export async function WishlistGetBookData() {
    // const [wishlistBookData, setWishlistBookData] = useState([]);
    // const [isFetching, setIsFetching] = useState(false);
    // const [error, setError] = useState();
    // useEffect(() => {
    //     async function wishlistBookData() {
    //         setIsFetching(true);
    //         try {
    //             const response = await fetch("https://demo-project-1.onrender.com/wishlist");
    //             if (!response.ok) {
    //                 throw new Error("Fail to get book data");
    //             }
    //             const jsonWishlistBookData = await response.json();
    //             setWishlistBookData(jsonWishlistBookData);
    //             setIsFetching(false);
    //         } catch (error) {
    //             setError(error.message || "Could not to get book data");
    //             setIsFetching(false);
    //         }
    //     }
    //     wishlistBookData();
    // }, []);
    // return {
    //     wishlistBookData,
    //     isFetching,
    //     error,
    //     setWishlistBookData,
    //     setIsFetching,
    //     setError,
    // };
    const response = await fetch("https://demo-project-1.onrender.com/wishlist");
    if (!response.ok) {
        throw new Error("Fail to get book data");
    }
    const jsonWishlistBookData = await response.json();
    return await jsonWishlistBookData;
}
export async function WishlistPostBookData(data) {
    // try {
    //     const response = await fetch("https://demo-project-1.onrender.com/wishlist", {
    //         method: "POST",
    //         body: JSON.stringify(data),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     if (!response.ok) {
    //         throw new Error("Fail to post wishlist book data");
    //     }
    //     const responseWishlist = await response.json();
    //     return responseWishlist;
    // } catch (error) {
    //     console.log(error.message || "Could not to post wishlist book data");
    // }
    const response = await fetch("https://demo-project-1.onrender.com/wishlist", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Fail to post wishlist book data");
    }
    const responseWishlist = await response.json();
    return await responseWishlist;
}
export async function WishlistPutBookData(data) {
    try {
        const response = await fetch("https://demo-project-1.onrender.com/wishlist", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Fail to put wishlist book data");
        }
        const responseWishlist = await response.json();
        return responseWishlist;
    } catch (error) {
        console.log(error.message || "Could not to put wishlist book data");
    }
}
export async function WishlistDeleteBookData(data) {
    // try {
    //     const response = await fetch("https://demo-project-1.onrender.com/wishlist", {
    //         method: "DELETE",
    //         body: JSON.stringify(data),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     if (!response.ok) {
    //         throw new Error("Fail to delete wishlist book data");
    //     }
    //     const responseWishlist = await response.json();
    //     return responseWishlist;
    // } catch (error) {
    //     console.log(error.message || "Could not to delete wishlist book data");
    // }
    const response = await fetch("https://demo-project-1.onrender.com/wishlist", {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Fail to delete wishlist book data");
    }
    const responseWishlist = await response.json();
    return await responseWishlist;
}
