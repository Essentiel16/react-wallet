import React from 'react'
import './TableComponent.css'

function TableComponent() {
  return (
    <div>
      <table className="table__wrapper">
        <thead className="table__header">
          <tr>
          <th className="table__header-item"></th>
            <th className="table__header-item">Transaction ID</th>
            <th className="table__header-item">Beneficiary Name</th>
            <th className="table__header-item">Transfer Type</th>
            <th className="table__header-item">Amount</th>
            <th className="table__header-item">Status</th>
            <th className="table__header-item">Response Date</th>
          </tr>
        </thead>

        <tbody className="table-body">
          <tr className="table-body-row">
            <td className="table-body-plain">
              oneaz
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
