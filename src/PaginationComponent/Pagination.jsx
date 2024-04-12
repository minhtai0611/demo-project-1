/* eslint-disable react/prop-types */
import styled from "./Pagination.module.css";
import Search from "../SearchComponent/Search"
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
export default function Pagination({ page, setPage, totalPage, data }) {
    return (
        <>
            {data && <Search bookDataList={data} />}
            <ReactPaginate
                containerClassName={styled.section}
                pageClassName={styled.button + " " + styled["gayathri-bold"] + " " + styled.p}
                activeClassName={styled.pActive + " " + styled.active}
                onPageChange={async (currentPage) => await setPage(currentPage.selected)}
                forcePage={page}
                pageCount={totalPage}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                breakLabel="..."
                breakClassName={styled.break + " " + styled["gayathri-bold"] + " " + styled.pBreak}
                previousLabel={
                    <IconContext.Provider value={{ className: styled.icon }}>
                        <AiFillLeftCircle />
                    </IconContext.Provider>
                }
                nextLabel={
                    <IconContext.Provider value={{ className: styled.icon }}>
                        <AiFillRightCircle />
                    </IconContext.Provider>
                }
                disabledClassName={styled.disabled}
            />;
        </>
    )
}