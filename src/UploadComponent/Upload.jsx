/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import styled from "./Upload.module.css";
import HeaderReplica from "../HeaderReplicaComponent/HeaderReplica";
import { UploadPostDataForm } from "../UploadDataFormComponent/UploadDataFormComponent";
export default function Upload() {
    const [imageFile, setImageFile] = useState();
    function functionImageFile(event) {
        setImageFile(URL.createObjectURL(event.target.files[0]));
    }
    async function functionSubmitForm(event) {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const data = Object.fromEntries(formdata.entries());
        data.imageBook = imageFile;
        try {
            const response = await UploadPostDataForm(data);
            if (!response.ok) {
                throw new Error("Fail to send data form");
            }
        }
        catch (error) {
            console.log(error.message || "Could not to send data form");
        }
    }
    return (
        <>
            <HeaderReplica />
            <section className={styled.all}>
                <p>Upload</p>
            </section>
            <section className={styled.section}>
                <form
                    className={
                        styled.p + " " + styled["gayathri-bold"] + " " + styled.form
                    }
                    onSubmit={async (event) => await functionSubmitForm(event)}
                >
                    <fieldset>
                        <label htmlFor="idBook">
                            ID{" "}
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="idBook"
                                id="idBook"
                                type="text"
                                placeholder="Enter ID book..."
                                required
                                minLength="5"
                                maxLength="10"
                            />
                        </label>
                        <label htmlFor="titleBook">
                            Title book{" "}
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="titleBook"
                                id="titleBook"
                                type="text"
                                placeholder="Enter title book... "
                                required
                                minLength="10"
                                maxLength="20"
                            />
                        </label>

                        <label htmlFor="authorBook">
                            Author book{" "}
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="authorBook"
                                id="authorBook"
                                type="number"
                                placeholder="Enter author book..."
                                required
                                minLength="10"
                                maxLength="20"
                            />
                        </label>

                        <label htmlFor="imageBook">
                            Image{" "}
                            <input
                                className={styled.p + " " + styled["gayathri-bold"]}
                                name="imageBook"
                                id="imageBook"
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                placeholder="Attach image book file..."
                                required
                                onChange={(event) => functionImageFile(event)}
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
                            &nbsp;&nbsp;By checking the mark, you agree to these terms and
                            conditions of service.
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
