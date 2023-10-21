import Btn from "@/components/button"
import { Box, Stack } from "@mui/material"
import { useState } from "react";
import ModalCreateNewProfile from "./modal-create-new-profile";

function FreelancerProfileWith0Content() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Stack gap={'20px'} sx={{ width: '100%', height: '200px' }} alignItems={'center'} justifyContent={'center'}>
            <Box sx={{ fontWeight: 500 }}>
                You have not had profile yet. Please create profile!
            </Box>
            <Btn onClick={handleOpen}>Add profile</Btn>
            <Box sx={{ width: '300px', height: '100vh' }}>
                <ModalCreateNewProfile state={open} onClick={handleClose} />
            </Box>
        </Stack>
    )
}

export default FreelancerProfileWith0Content