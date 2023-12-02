import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ListSettings from "./ListSettings";
import useAdminSettingsApi from "@/api/admin/settings";

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
  const [list, setList] = useState([]);
  const listLevelHook = useAdminSettingsApi();
  const [refresh, setRefresh] = useState(true)

  function handleClick() {
    setRefresh(prev => !prev)
  }

  useEffect(() => {
    async function fetchData() {
      const test1 = await listLevelHook.getAll(`/level`, 'levels');
      // console.log(test1)
      setList(test1);
    }
    fetchData();
  }, []);

  return <ListSettings type={"level"} path={"levels"} />;
}
