export default async function FetchBookData() {
    const response = await fetch("https://www.dbooks.org/api/search/literature");
    if (!response.ok) {
        throw new Error("Fail to fetch book data");
    }
    const jsonBookDataList = await response.json();
    return jsonBookDataList.books;
}
