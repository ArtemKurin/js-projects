import React, { useState } from 'react';
import _ from 'lodash';
import cn from 'classnames';

const Pagination = ({ countPages, maxRows, filteredCollection, setRenderNow, setDirection }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const page = [];
    
    for (let i = 1; i <= countPages; i += 1) {
        page.push(i)
    }

    const cnNext = cn({
        'page-item': true,
        'cursor-pointer': currentPage < page.length,
        'disabled': currentPage === page.length,
    })
    const cnPrev = cn({
        'page-item': true,
        'cursor-pointer': currentPage > 1,
        'disabled': currentPage === 1,
    })

    const handleSwitch = (e) => {
        const number = typeof e == 'number' ? e : Number(e.target.textContent)
        if (!isNaN(number)) {
            const firstRow = number * maxRows - maxRows
            const lastRow = number * maxRows
            setRenderNow(filteredCollection.slice(firstRow, lastRow))
            setDirection(true)
            setCurrentPage(number)
        } else {
            if (e.target.textContent === 'Prev') {
                currentPage !== 1 ? handleSwitch(currentPage - 1) : handleSwitch(currentPage)
            }
            if (e.target.textContent === 'Next') {
                handleSwitch(currentPage + 1)
            }
        }
    }

    const render = page.map((item) => {
        return (
            <li className={cn('page-item',{ 'active': currentPage === item })} key={_.uniqueId()}>
                <span className="page-link cursor-pointer" onClick={handleSwitch}>
                    {item}
                </span>
            </li>
        )
    })

    return (
        <nav aria-label="...">
            <ul className="pagination" style={{userSelect: 'none'}}>
                <li className={cnPrev}>
                    <span className="page-link" href="#" onClick={handleSwitch}>Prev</span>
                </li>
                {render}
                <li className={cnNext}>
                    <span className="page-link" href="#" onClick={handleSwitch}>Next</span>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;