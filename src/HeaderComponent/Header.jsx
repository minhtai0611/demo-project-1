import LogoBook from "../assets/logo-book.png";
import HeaderCSS from "./Header.module.css";
export default function Header() {
    return (
        <>
            <header>
                <a href="#">
                    <img src={LogoBook} alt="LogoBook" className={HeaderCSS.img} />
                </a>
                <nav>
                    <input
                        type="search"
                        name="searchBook"
                        placeholder="Search ebooks, magazines and more..."
                    />
                    <ul>
                        <li>
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#price">Pricing</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
