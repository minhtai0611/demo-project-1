export default async function ContactDataForm(data) {
    try {
        const response = await fetch("http://localhost:3000/contact", {
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
        const responseContact = await response.json();
        return { responseContact, responseOk };
    } catch (error) {
        console.log(error.message || "Could not to post data form");
    }
}
