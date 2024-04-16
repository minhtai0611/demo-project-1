import styled from "./About.module.css";
import HeaderReplica from "../HeaderReplicaComponent/HeaderReplica";
export default function About() {
    return (
        <>
            <HeaderReplica />
            <section className={styled.all}>
                <p>About</p>
            </section>
            <main className={styled.p + " " + styled["gayathri-bold"]}>
                <p>
                    Welcome to Everbook, your gateway to a world of literature and
                    knowledge! Dive into a vast collection of ebooks, magazines, and more.
                    Explore diverse genres and topics, from fiction to non-fiction,
                    history to science fiction. Find your next great read and expand your
                    horizons with Everbook. Start exploring today!
                </p>
            </main>
            <section className={styled.all}>
                <p>Key Features</p>
            </section>
            <article className={styled.p + " " + styled["gayathri-bold"]}>
                {/* <ul className={styled.ul}>
                        <li>Diverse Content</li>
                        <li>User-Friendly Interface</li>
                        <li>Personalized Recommendations</li>
                        <li>
                            Everbook offers a wide selection of ebooks, magazines, and other literary content across various genres and interests, ensuring there is something for every reader.
                        </li>
                        <li>
                            With an intuitive interface, navigating Everbook is a breeze. Easily search, browse, and discover new titles and authors with convenient filters and categories.
                        </li>
                        <li>
                            Experience tailored recommendations based on your reading preferences and browsing history. Discover new favorites and hidden gems as Everbook helps you explore the vast world of literature.
                        </li>
                    </ul> */}
                <table className={styled.table}>
                    <thead>
                        <tr>
                            <th>Exclusive Content</th>
                            <th>Author Support</th>
                            <th>Protect Copyright</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Explore unique literary treasures unavailable elsewhere,
                                including rare editions, exclusive releases, and original works
                                from emerging and renowned authors.
                            </td>
                            <td>
                                Foster author success through fair compensation
                                models, promotional opportunities, and a supportive community,
                                empowering writers to thrive in the digital landscape.
                            </td>
                            <td>
                                Prioritize copyright protection, implementing robust
                                measures to safeguard authors&amp;#39; intellectual property rights and
                                ensure ethical distribution practices across its platform.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}
