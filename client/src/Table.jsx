import React from 'react'
import './table.css';

const Table = ({datas}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Eamil</th>
                <th>Gender</th>
            </tr>
            {datas.map(data=>
            <tr>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
            </tr>
                )}
        </tbody>
    </table>
  )
}

export default Table;