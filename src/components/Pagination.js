import React from 'react'

function Pagination({limit, totalPosts, paginate}) {
  const pageNumber = []

  for(let i = 1; i <= Math.ceil(totalPosts / limit); i++) {
    pageNumber.push(i)
  }
  return (
    <>
      <ul className="pagination">
        {pageNumber.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Pagination
