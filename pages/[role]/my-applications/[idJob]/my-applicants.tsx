import { ClientApplicants } from "@/features/myApplications/client/applicants";
import { LayOutWithHeaderAndUser } from "@/layout/layoutWithHeaderAndUser";
import { Box } from "@mui/material";

function MyApplicants() {
    return (
        <LayOutWithHeaderAndUser>
            <ClientApplicants />
        </LayOutWithHeaderAndUser>
    )
}

export default MyApplicants