import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ListSettings from "./ListSettings";

const level = [
  {
    id: 1,
    name: "Intern",
  },
  {
    id: 2,
    name: "Fresher",
  },
  {
    id: 1,
    name: "Senior",
  },
];

function createData(index: number, name: string) {
  return { index, name };
}

const rows = [
  createData(1, "Frozen yoghurt"),
  createData(2, "Ice cream sandwich"),
  createData(3, "Eclair"),
  createData(4, "Cupcake"),
  createData(5, "Gingerbread"),
];

export default function LevelManagementComponent() {
  return (
    <ListSettings type={"level"} />
  );
}
