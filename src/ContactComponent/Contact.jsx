import styled from "./Contact.module.css";
export default function Contact() {
    function functionSubmitForm(event) {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const data = Object.fromEntries(formdata.entries());
        console.log(data);
        async function functionPostDataForm() {
            try {
                const response = await fetch("http://localhost:3000/contact", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const responseForm = await response.json();
                if (!response.ok) {
                    throw new Error("Fail to send data form");
                }
                return responseForm;
            }
            catch (error) {
                console.log(error.message || "Could not to send data form");
            }
        }
        functionPostDataForm();
    }

    return (
        <>
            <section className={styled.all}>
                <p>Contact</p>
            </section>
            <section className={styled.section}>
                <form
                    className={
                        styled.p + " " + styled["gayathri-bold"] + " " + styled.form
                    }
                    action="/contact"
                    method="post"
                    onSubmit={(event) => functionSubmitForm(event)}
                >
                    <fieldset>
                        <label htmlFor="name">
                            Name{" "}
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Enter name... "
                                required
                            />
                        </label>

                        <label htmlFor="age">
                            Age{" "}
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="age"
                                id="age"
                                type="number"
                                placeholder="Enter age..."
                                required
                            />
                        </label>

                        <label htmlFor="country">
                            Country{" "}
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="country"
                                id="country"
                                type="text"
                                placeholder="Enter country..."
                                required
                            />
                        </label>

                        <label htmlFor="email">
                            Email{" "}
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Enter email..."
                                required
                            />
                        </label>

                        <label htmlFor="phoneNumber">
                            Phone Number{" "}
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="phoneNumber"
                                id="phoneNumber"
                                type="number"
                                placeholder="Enter phone number..."
                                required
                            />
                        </label>

                        <label htmlFor="comment">
                            Comment{" "}
                            <textarea
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="comment"
                                id="comment"
                                rows="3"
                                cols="25"
                                placeholder="Enter comment..."
                                required
                            />
                        </label>

                        <label htmlFor="termCondition">
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="termCondition"
                                id="termCondition"
                                type="checkbox"
                                required
                            />
                            &nbsp;&nbsp;By checking the mark, you agree to these terms and conditions of
                            service.
                        </label>
                        <div>
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="reset"
                                id="reset"
                                type="reset"
                                value="Reset form"
                                required
                            />
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="submit"
                                id="submit"
                                type="submit"
                                value="Submit form"
                                required
                            />
                        </div>

                    </fieldset>
                </form>
            </section>
        </>
    );
}
