import FreelancerProfileContent from "@/features/settings/freelancer-profile-content";
import OptionsPage from "@/features/settings/optionsPage";
import { LayOutWithHeaderAndUser } from "@/layout/layoutWithHeaderAndUser";
import { Box } from "@mui/material";

export default function FreelancerProfile() {
    return (
        <LayOutWithHeaderAndUser>
            <Box flex={1} padding={'0 20px'}>
                <FreelancerProfileContent />
            </Box>
            <Box width={'200px'}>

                <OptionsPage />
            </Box>
        </LayOutWithHeaderAndUser>
    )
}

FreelancerProfile.requireLogin = true
