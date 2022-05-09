import React from "react";
import s from './Pagination.module.css'

export const Pagination = ({totalAmount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalAmount / pageSize)

    let pages = []
    for(let i = 1; i<=pagesCount; i++) {
        pages.push(i)
    }

    // const onPageChanged = (p, APIMethod) => {
    //     APIMethod(p, pageSize)
    //   }
        
        return (
            <div className={s.pagination}>{
                pages.map(p => 
                    <span key={p} className={currentPage === p ? s.selectedPage : undefined}
                    onClick={() =>{onPageChanged(p, pageSize)}}>{p}</span>
                )
            }
            </div>
        )
    
}