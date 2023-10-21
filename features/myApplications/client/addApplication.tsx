import Btn from "@/components/button";
import { Stack } from "@mui/material";

function AddApplication() {
    return (
        <Stack justifyContent={'end'} flexDirection={'row'}>
            <Btn>+ Competition</Btn>
            <Btn>+ Post a job</Btn>
        </Stack>
    )
}

export default AddApplication