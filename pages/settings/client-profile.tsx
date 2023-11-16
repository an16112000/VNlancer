import ClientProfileContent from "@/features/settings/client-profile-content";
import OptionsPage from "@/features/settings/optionsPage";
import { PageLayout } from "@/layout/PageLayout";
import { Box } from "@mui/material";

export default function ClientProfile() {

    return (
        <PageLayout>
            <Box flex={1} padding={'0 20px'}>
                <ClientProfileContent />
            </Box>
            <Box width={'200px'}>
                <OptionsPage />
            </Box>

        </PageLayout>
    )
}

ClientProfile.requireLogin = true
