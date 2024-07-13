// import { useEffect, useState } from "react";
export async function UploadGetDataForm() {
    // const [uploadBookData, setUploadBookData] = useState([]);
    // const [isFetching, setIsFetching] = useState(false);
    // const [error, setError] = useState();
    // useEffect(() => {
    //     async function UploadBookData() {
    //         setIsFetching(true);
    //         try {
    //             const response = await fetch("https://demo-project-1.onrender.com/upload");
    //             if (!response.ok) {
    //                 throw new Error("Fail to get book data form");
    //             }
    //             const jsonUploadBookData = await response.json();
    //             setUploadBookData(jsonUploadBookData);
    //             setIsFetching(false);
    //         } catch (error) {
    //             setError(error.message || "Could not to get book data form");
    //             setIsFetching(false);
    //         }
    //     }
    //     UploadBookData();
    // }, []);
    // return {
    //     uploadBookData,
    //     isFetching,
    //     error,
    //     setUploadBookData,
    //     setIsFetching,
    //     setError,
    // };
    const response = await fetch("https://demo-project-1.onrender.com/upload");
    if (!response.ok) {
        throw new Error("Fail to get book data form");
    }
    const jsonUploadBookData = await response.json();
    return await jsonUploadBookData;
}
export async function UploadPostDataForm(data) {
    // try {
    //     const response = await fetch("https://demo-project-1.onrender.com/upload", {
    //         method: "POST",
    //         body: JSON.stringify(data),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     if (!response.ok) {
    //         throw new Error("Fail to post data form");
    //     }
    //     const responseUpload = await response.json();
    //     return responseUpload;
    // } catch (error) {
    //     console.log(error.message || "Could not to post data form");
    // }
    const response = await fetch("https://demo-project-1.onrender.com/upload", {
        method: "POST",
        body: data,
        // headers: {
        //     "Content-Type": "multipart/form-data",
        // },
    });
    if (!response.ok) {
        throw new Error("Fail to post data form");
    }
    const responseUpload = await response.json();
    return await responseUpload;
}
export async function UploadPutDataForm(data) {
    try {
        const response = await fetch("https://demo-project-1.onrender.com/upload", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Fail to put data form");
        }
        const responseUpload = await response.json();
        return responseUpload;
    } catch (error) {
        console.log(error.message || "Could not to put data form");
    }
}
export async function UploadDeleteDataForm(data) {
    // try {
    //     const response = await fetch("https://demo-project-1.onrender.com/upload", {
    //         method: "DELETE",
    //         body: JSON.stringify(data),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     if (!response.ok) {
    //         throw new Error("Fail to delete data form");
    //     }
    //     const responseUpload = await response.json();
    //     return responseUpload;
    // } catch (error) {
    //     console.log(error.message || "Could not to delete data form");
    // }
    const response = await fetch("https://demo-project-1.onrender.com/upload", {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Fail to delete data form");
    }
    const responseUpload = await response.json();
    return await responseUpload;
}
