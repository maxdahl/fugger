import React from "react";

import { useTranslation } from "react-i18next";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { AnTableHeadProps } from "./propTypes";

function getHeaderRowCells(rowCells, t, depth = 0) {
  const cells = [];

  for (const [index, cell] of rowCells.entries()) {
    let sx = {
      backgroundColor: "table.header.backgroundColor",
      color: "table.header.fontColor",
      borderBottom: 0,
    };
    let className = `an-header-col an-header-col-${depth}-${index + 1}`;

    if (typeof cell === "string") {
      cells.push(
        <TableCell className={className} key={`${cell}-${index}`} sx={sx}>
          {t(cell)}
        </TableCell>
      );
    } else {
      const value = cell.value ?? "";
      if (cell.className) className = `${className} ${cell.className}`;

      let key = cell.key ?? `${cell.value}-${index}`;
      if (!key) key = `nk-${index}-${Math.random()}`;

      let colSpan = 1;
      if (cell.colSpan) colSpan = cell.colSpan;

      let align = "left";
      if (cell.align) align = cell.align;

      if (cell.sx) sx = { ...sx, ...cell.sx };

      cells.push(
        <TableCell
          className={`${className}`}
          key={key}
          colSpan={colSpan}
          align={align}
          sx={sx}
        >
          <span>{t(value)}</span>
        </TableCell>
      );
    }
  }

  return cells;
}

function AnTableHead(props) {
  const { headers } = props;
  const rows = [];

  const { t } = useTranslation();
  for (const [index, row] of headers.entries()) {
    rows.push(
      <TableRow key={`row-${index}`}>
        {getHeaderRowCells(row, t, index)}
      </TableRow>
    );
  }

  return <TableHead key="table-head">{rows}</TableHead>;
}

AnTableHead.propTypes = AnTableHeadProps;

export default AnTableHead;
