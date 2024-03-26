export default async function functionUploadDataForm(data) {
    try {
        const response = await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const responseOk = response.ok;
        if (!response.ok) {
            throw new Error("Fail to post data form");
        }
        const responseForm = await response.json();
        return { responseForm, responseOk };
    } catch (error) {
        console.log(error.message || "Could not to post data form");
    }
}
