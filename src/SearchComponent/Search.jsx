import styled from "./Search.module.css";
import jsonBooks from "../assets/dummy-book.json";
import SearchBookItem from "../SearchBookItemComponent/SearchBookItem";
export default function Search() {
    return (
        <>
            <section className={styled.all}>
                <p>List books are up to date</p>
            </section>
            <ul className={styled.ul}>
                {jsonBooks.map((jsonBook) => (
                    <SearchBookItem
                        key={jsonBook.idBook}
                        nameBook={jsonBook.nameBook}
                        authorBook={jsonBook.authorBook}
                        ratingBook={jsonBook.ratingBook}
                    />
                ))}
            </ul>
        </>
    );
}
