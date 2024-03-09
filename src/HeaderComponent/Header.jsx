import LogoBook from "../assets/logo-book.png";
import HeaderCSS from "./Header.module.css";
export default function Header() {
    return (
        <>

            <header className={HeaderCSS.header + " " + HeaderCSS.all}>
                <a href="#" className={HeaderCSS.a}>
                    <img src={LogoBook} alt="LogoBook" className={HeaderCSS.headerImg} />
                </a>
                <nav className={HeaderCSS.headerNavAll}>
                    <input className={HeaderCSS.headerNavAll + " " + HeaderCSS.headerInput + " " + HeaderCSS.all}
                        type="search"
                        name="searchBook"
                        placeholder="Search ebooks, magazines and more..."
                        maxLength="50"
                    />
                    <ul className={HeaderCSS.headerNavAll + " " + HeaderCSS.ul}>
                        <li className={HeaderCSS.headerLi + " " + HeaderCSS.headerNavAll}>
                            <a href="#about" className={HeaderCSS.a + " " + HeaderCSS.all + " " + HeaderCSS.headerNavAll}>About</a>
                        </li>
                        <li className={HeaderCSS.headerLi + " " + HeaderCSS.headerNavAll}>
                            <a href="#price" className={HeaderCSS.a + " " + HeaderCSS.all + " " + HeaderCSS.headerNavAll}>Pricing</a>
                        </li>
                        <li className={HeaderCSS.headerLi + " " + HeaderCSS.headerNavAll}>
                            <a href="#contact" className={HeaderCSS.a + " " + HeaderCSS.all + " " + HeaderCSS.headerNavAll}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    );
}
