import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import Button from "@/components/button";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
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
    id: 3,
    name: "Senior",
  },
];

const category = [
  {
    id: 1,
    name: "FE",
  },
  {
    id: 2,
    name: "BE",
  },
  {
    id: 3,
    name: "Full stack",
  },
];

const workingType = [
  {
    id: 1,
    name: "full-time",
  },
  {
    id: 2,
    name: "part-time",
  },
];

interface ListSettingsProps {
  type: string;
  path: string
}

export default function ListSettings({ type, path }: ListSettingsProps) {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const hooks = useAdminSettingsApi();

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  async function handleSubmit() {
    await hooks.create(`/${type}`, {
      name: value,
    });
    await fetchData()
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const test1 = await hooks.getAll(`/${type}`, path);
    console.log(test1)
    setList(test1);
  }
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "40%" }} align="center">
                Index
              </TableCell>
              <TableCell align="center" sx={{ textTransform: "capitalize" }}>
                {type}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        gap={"10px"}
        marginTop={"20px"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <input
          style={{
            height: "40px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0px 0px 1px 0px",
            padding: "4px",
          }}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Add</Button>
      </Stack>
    </>
  );
}
