import { Box, Stack } from "@mui/material";

export default function ProfileComponent() {
    return (
        <Box>
            <Stack gap={'15px'}>
                <Box sx={{fontSize: '16px', fontWeight: '500'}}>Personal Info</Box>
                <Stack gap={'10px'}>
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box flex={1}>
                            <Box sx={{ fontSize: '14px', fontWeight: 300, color: '#7C8493' }}>Full Name</Box>
                            <Box sx={{ fontSize: '14px', fontWeight: 500, color: '#25324B' }}>Jerome Bell</Box>
                        </Box>
                        <Box flex={1}>
                            <Box sx={{ fontSize: '14px', fontWeight: 300, color: '#7C8493' }}>Gender</Box>
                            <Box sx={{ fontSize: '14px', fontWeight: 500, color: '#25324B' }}>Male</Box>
                        </Box>
                    </Stack>

                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box flex={1}>
                            <Box sx={{ fontSize: '14px', fontWeight: 300, color: '#7C8493' }}>Date of Birth</Box>
                            <Box sx={{ fontSize: '14px', fontWeight: 500, color: '#25324B' }}>March 23, 1995</Box>
                        </Box>
                        <Box flex={1}>
                            <Box sx={{ fontSize: '14px', fontWeight: 300, color: '#7C8493' }}>Language</Box>
                            <Box sx={{ fontSize: '14px', fontWeight: 500, color: '#25324B' }}>English, French, Vietnamese</Box>
                        </Box>
                    </Stack>

                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box flex={1}>
                            <Box sx={{ fontSize: '14px', fontWeight: 300, color: '#7C8493' }}>Address</Box>
                            <Box sx={{ fontSize: '14px', fontWeight: 500, color: '#25324B' }}>Số 1 Ngõ 53, Đức Giang, Long Biên, Hà Nội</Box>
                        </Box>
                    </Stack>
                </Stack>
                <Box sx={{ height: '1px', width: '100%', border: '0.5px solid #D6DDEB', margin: '15px 0' }}></Box>
                <Stack gap={'15px'}>
                    <Box sx={{fontSize: '16px', fontWeight: '500'}}>Professional Info</Box>
                    <Stack gap={'12px'}>
                        <Stack gap={'5px'}>
                            <Box sx={{fontSize: '14px', color: '#7C8493'}}>About Me</Box>
                            <Box sx={{fontSize: '14px', color: '#25324B'}}>I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world. <br></br> For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups. </Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{fontSize: '14px', color: '#7C8493'}}>Current Job</Box>
                            <Box sx={{fontSize: '14px', color: '#25324B'}}>Product Designer</Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{fontSize: '14px', color: '#7C8493'}}>Highest Qualification Held</Box>
                            <Box sx={{fontSize: '14px', color: '#25324B'}}>Bachelors in Engineering</Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{fontSize: '14px', color: '#7C8493'}}>Experience in Years</Box>
                            <Box sx={{fontSize: '14px', color: '#25324B'}}>4 Years</Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{fontSize: '14px', color: '#7C8493'}}>Skill set</Box>
                            <Box sx={{fontSize: '14px', color: '#25324B'}}>English, Project Management</Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}