import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";


interface StatusProps {
    value: any
}

function Status({ value }: StatusProps) {
    const [current, setCurrent] = useState('0');
    console.log(current)
    const handleChange = (event: SelectChangeEvent) => {
        setCurrent(event.target.value as string);
    };
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ color: '#000' }}>Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={current}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem sx={{ display: 'none' }} value={0}>{value}</MenuItem>
                    <MenuItem value={10}>During</MenuItem>
                    <MenuItem value={20}>Pending</MenuItem>
                    <MenuItem value={30}>Done</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default Status