import ClientProfileContent from "@/features/settings/client-profile-content";
import OptionsPage from "@/features/settings/optionsPage";
import { LayOutWithHeaderAndUser } from "@/layout/layoutWithHeaderAndUser";
import { Box } from "@mui/material";

export default function ClientProfile() {

    return (
        <LayOutWithHeaderAndUser>
            <Box flex={1} padding={'0 20px'}>
                <ClientProfileContent />
            </Box>
            <Box width={'200px'}>
                <OptionsPage />
            </Box>

        </LayOutWithHeaderAndUser>
    )
}

ClientProfile.requireLogin = true
