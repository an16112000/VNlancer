import ProfessionalInfoComponent from "@/components/page/profile/ProfessionalInfoComponent"
import { Box } from "@mui/material"
import CustomProfessionalInfoComponent from "./freelancer-profile"

function FreelancerProfileWithContent() {
    return(
        <Box sx={{ backgroundColor: '#fff', borderRadius: '8px', padding: '10px 10px' }}>
            <CustomProfessionalInfoComponent />
        </Box>
    )
}

export default FreelancerProfileWithContent