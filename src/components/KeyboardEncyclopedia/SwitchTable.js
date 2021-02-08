import React, { useMemo } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const SwitchTable = (props) => {
  const data = props.data;
  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Brand/Manufacturer",
      accessor: "brandManufacturer",
    },
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "Mount",
      accessor: "mount",
    },
    {
      Header: "Materials",
      accessor: "materials",
    },
    {
      Header: "Spring",
      accessor: "spring",
    },
  ]);

  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SwitchTable;

