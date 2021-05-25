import React, {useState} from 'react'
import './TableComponent.css'

function TableComponent() {

  const data = [
    {id: "1", product_name: "Weetabix", product_category: "Cereal",unit_price: "501"},
    {id: "2",product_name: "Colgate Toothpaste",product_category: "Toiletries",unit_price: "119"},
    {id: "3",product_name: "Imperial Leather Soap",product_category: "Toiletries",unit_price: "235"},
    {id: "4",product_name: "Sunlight Detergent",product_category: "Toiletries",unit_price: "401"},
    {id: "5", product_name: "Colgate Toothpaste",product_category: "Toiletries",unit_price: "119"},
    {id: "6", product_name: "Imperial Leather Soap",product_category: "Toiletries",unit_price: "235"}
  ]


  return (
    <div>
      <table className="table__wrapper">
        <thead className="table__header"> 
          <tr>
          <th className="table__header-item">+</th>
            <th className="table__header-item">Product Name</th>
            <th className="table__header-item">Category</th>
            <th className="table__header-item">Unit Price</th>
          
           </tr>
        </thead>


        <tbody className="table-body">
        {data.map(data => (
          <tr className="table-body-row" key={data.index}>
              <td className="table-body-plain">{data.id}</td>
              <td className="table-body-plain">{data.product_name}</td>
              <td className="table-body-plain">{data.product_category}</td>
              <td className="table-body-plain">{data.unit_price}</td>
          </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
