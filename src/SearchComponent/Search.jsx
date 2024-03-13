import styled from "./Search.module.css";
import "../assets/dummy-book.json";
import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-3.png";
import image4 from "../assets/images/image-4.png";
import image5 from "../assets/images/image-5.png";
import image6 from "../assets/images/image-6.png";
export default function Search() {
    return (
        <>
            <section className={styled.all}>
                <p>List books are up to date</p>
            </section>
            <ul>
                <li>
                    <img src={image1} alt="image1"></img>
                </li>
                <li>
                    <img src={image2} alt="image2"></img>
                </li>
                <li>
                    <img src={image3} alt="image3"></img>
                </li>
                <li>
                    <img src={image4} alt="image4"></img>
                </li>
                <li>
                    <img src={image5} alt="image5"></img>
                </li>
                <li>
                    <img src={image6} alt="image6"></img>
                </li>
            </ul>
        </>
    )

}
