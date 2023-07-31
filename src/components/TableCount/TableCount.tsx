import React from 'react'
import "../../styles/Tables.css";

const TableCount: React.FC = () => {
    return (
      
    <table className="table">
          <thead className="table-head">    
            <tr className="table-head-row">
              <td className="table-head-item">Note category</td>
              <td className="table-head-item">Active</td>
              <td className="table-head-item">Archived</td>
            </tr>
          </thead>
            <tbody id="count-table"></tbody>
            </table>
                
  )
}

export default TableCount;
