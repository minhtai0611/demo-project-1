/* eslint-disable react/prop-types */
import styled from "./SearchBookItem.module.css";
import image1 from "../assets/images/image-1.png";
export default function SearchBookItem({ nameBook, authorBook, ratingBook }) {
    return (
        <>
            <li>
                <img src={image1} alt="image1" className={styled.img}></img>
                <p className={styled.p + " " + styled["gayathri-bold"]}>
                    Name: {nameBook}
                </p>
                <p className={styled.p + " " + styled["gayathri-bold"]}>
                    Author: {authorBook}
                </p>
                <p className={styled.p + " " + styled["gayathri-bold"]}>
                    Rating: {ratingBook}
                </p>
                <button
                    className={styled.p + " " + styled["gayathri-bold"] + " " + styled.button}
                    type="button"
                >
                    Read book
                </button>
                <br />
                <button
                    className={styled.p + " " + styled["gayathri-bold"] + " " + styled.button}
                    type="button"
                >
                    Add to wishlist
                </button>
            </li>
        </>
    )
}
