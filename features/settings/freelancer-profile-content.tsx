import { Box, Stack } from "@mui/material"
import FreelancerProfileWith0Content from "./freelancer-profile-with-0-profile"
import FreelancerProfileWithContent from "./freelancer-profile-with-content"

const listProfile = [
    // {
    //     id: 1,
    //     title: 'Title',
    //     area: 'Information Technology',
    //     decribe: 'Describe somethings...',
    //     ability: 'some abilitis...',
    //     portfolio: [],
    //     knownledge: [],
    //     experience: [],    
    // }
]

function FreelancerProfileContent() {
    return (
        <Stack gap={'20px'} sx={{ width: '100%' }}>
            <Box sx={{ fontWeight: 500, fontSize: '20px' }}>
                Freelancer Profile
            </Box>
            {
                listProfile.length === 0
                    ?
                    <FreelancerProfileWith0Content />
                    :
                    <FreelancerProfileWithContent />
            }
        </Stack>
    )
}

export default FreelancerProfileContent