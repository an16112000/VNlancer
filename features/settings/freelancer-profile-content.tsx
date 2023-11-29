import { Box, Stack } from "@mui/material"
import FreelancerProfileWith0Content from "./freelancer-profile-with-0-profile"
import FreelancerProfileWithContent from "./freelancer-profile-with-content"
import { listProfile } from "@/const"
import ModalCreateNewProfile from "./modal-create-new-profile";
import Btn from "@/components/button";
import { useState } from "react";



function FreelancerProfileContent() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Stack gap={'20px'} sx={{ width: '100%' }}>
            <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Box sx={{ fontWeight: 500, fontSize: '20px' }}>
                    Freelancer Profile
                </Box>
                <Btn onClick={handleOpen}>Add profile</Btn>
            </Stack>
            {
                listProfile.length === 0
                    ?
                    <FreelancerProfileWith0Content />
                    :
                    <FreelancerProfileWithContent />
            }
            <Box sx={{ width: '300px', height: '100vh' }}>
                <ModalCreateNewProfile state={open} onClick={handleClose} />
            </Box>
        </Stack>
    )
}

export default FreelancerProfileContent