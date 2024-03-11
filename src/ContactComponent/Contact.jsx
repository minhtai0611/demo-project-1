import styled from "./Contact.module.css";
export default function Contact() {
    return (
        <>
            <div className={styled.all}>
                <p>Contact</p>
            </div>
            <form>
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter name... "
                    required
                />
                <label htmlFor="age">Age</label>
                <input
                    name="age"
                    id="age"
                    type="number"
                    placeholder="Enter age..."
                    required
                />

                <label htmlFor="country">Country</label>
                <input
                    name="country"
                    id="country"
                    type="text"
                    placeholder="Enter country..."
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter email..."
                    required
                />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    name="phoneNumber"
                    id="phoneNumber"
                    type="number"
                    placeholder="Enter phone number..."
                    required
                />
                <label htmlFor="comment">Comment</label>
                <textarea
                    name="comment"
                    id="comment"
                    rows="5"
                    placeholder="Enter comment..."
                    required
                />
                <label htmlFor="termCondition">
                    By ticking the box, you agree to these terms and condition of service.
                </label>
                <input
                    name="termCondition"
                    id="termCondition"
                    type="checkbox"
                    required
                />
                <input
                    name="reset"
                    id="reset"
                    type="reset"
                    value="Reset form"
                    required
                />
                <input
                    name="submit"
                    id="submit"
                    type="submit"
                    value="Submit form"
                    required
                />
            </form>
        </>
    );
}
