import styled from "./Contact.module.css";
export default function Contact() {
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
