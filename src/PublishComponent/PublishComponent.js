import { useEffect, useState } from "react";
export function usePublishGetBookData() {
    const [publishBookDataList, setPublishBookDataList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        async function PublishBookDataList() {
            setIsFetching(true);
            try {
                const response = await fetch("http://localhost:3000/publish");
                if (!response.ok) {
                    throw new Error("Fail to get book data");
                }
                const jsonPublishBookData = await response.json();
                setPublishBookDataList(jsonPublishBookData);
                setIsFetching(false);
            } catch (error) {
                setError(error.message || "Could not to get book data");
                setIsFetching(false);
            }
        }
        PublishBookDataList();
    }, []);
    return {
        publishBookDataList,
        isFetching,
        error,
        setPublishBookDataList,
        setIsFetching,
        setError,
    };
}
export async function PublishPostBookData(data) {
    try {
        const response = await fetch("http://localhost:3000/publish", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Fail to post book data");
        }
        const responsePublish = await response.json();
        return responsePublish;
    } catch (error) {
        console.log(error.message || "Could not to post book data");
    }
}
export async function PublishPutBookData(data) {
    try {
        const response = await fetch("http://localhost:3000/publish", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Fail to put book data");
        }
        const responsePublish = await response.json();
        return responsePublish;
    } catch (error) {
        console.log(error.message || "Could not to put book data");
    }
}
export async function PublishDeleteBookData(data) {
    try {
        const response = await fetch("http://localhost:3000/publish", {
            method: "DELETE",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Fail to delete book data");
        }
        const responsePublish = await response.json();
        return responsePublish;
    } catch (error) {
        console.log(error.message || "Could not to delete book data");
    }
}
