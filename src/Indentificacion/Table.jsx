import React from 'react';
import { useTable } from 'react-table';
import data from './Datasets.json'; // Importa tu JSON de datos

const columns = [
  {
    Header: 'Número',
    accessor: 'Numero',
  },
  {
    Header: 'Secuencia de ADN',
    accessor: 'SecuenciaADN',
  },
  {
    Header: 'Patógeno Identificado',
    accessor: 'PatogenoIdentificado',
  },
  {
    Header: 'Fecha de Identificación',
    accessor: 'FechaIdentificacion',
  },
];

const MyTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} style={{ border: '1px solid black' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: '2px solid black',
                  background: 'aliceblue',
                  padding: '8px',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '8px',
                      borderBottom: '1px solid black',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;
