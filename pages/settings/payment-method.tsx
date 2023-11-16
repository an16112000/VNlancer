import OptionsPage from "@/features/settings/optionsPage"
import PaymentMethodContent from "@/features/settings/payment-method-content"
import { PageLayout } from "@/layout/PageLayout"
import { Box } from "@mui/material"

function PaymentMethod() {
    return(
        <PageLayout>
            <Box flex={1} padding={'0 20px'}>
                <PaymentMethodContent />
            </Box>
            <Box width={'200px'}>
                <OptionsPage />
            </Box>
        </PageLayout>
    )
}

export default PaymentMethod