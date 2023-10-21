import OptionsPage from "@/features/settings/optionsPage"
import PaymentMethodContent from "@/features/settings/payment-method-content"
import { LayOutWithHeaderAndUser } from "@/layout/layoutWithHeaderAndUser"
import { Box } from "@mui/material"

function PaymentMethod() {
    return(
        <LayOutWithHeaderAndUser>
            <Box flex={1} padding={'0 20px'}>
                <PaymentMethodContent />
            </Box>
            <Box width={'200px'}>
                <OptionsPage />
            </Box>
        </LayOutWithHeaderAndUser>
    )
}

export default PaymentMethod