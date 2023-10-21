import { ClientApplicants } from "@/features/myApplications/client/applicants";
import { LayOutWithHeaderAndUser } from "@/layout/layoutWithHeaderAndUser";
import { Box } from "@mui/material";

function MyApplicants() {
    return (
            <LayOutWithHeaderAndUser>
                <Box sx={{ width: '70%' }}>
                    <ClientApplicants />
                </Box>
            </LayOutWithHeaderAndUser>
    )
}

export default MyApplicants