/* eslint-disable react/prop-types */
import styled from "./SearchBookItem.module.css";
export default function SearchBookItem({ titleBook, authorBook, imageBook }) {
    return (
        <>
            <li>
                <img src={imageBook} alt="image1" className={styled.img}></img>
                <p className={styled.p + " " + styled["gayathri-bold"]}>
                    {titleBook}
                </p>
                <p className={styled.p + " " + styled["gayathri-bold"]}>
                    {authorBook}
                </p>
                <button
                    className={
                        styled.p + " " + styled["gayathri-bold"] + " " + styled.button
                    }
                    type="button"
                >
                    Read book
                </button>
                <br />
                <button
                    className={
                        styled.p + " " + styled["gayathri-bold"] + " " + styled.button
                    }
                    type="button"
                >
                    Add to wishlist
                </button>
            </li>
        </>
    );
}
