import { listProfile } from "@/const"
import { ProfessionalInfo } from "@/interface"
import { Box, Stack, Tab, Tabs } from "@mui/material"
import { useState } from "react"



export default function ProfessionalInfoComponent() {
    const [content, setContent] = useState(1)
    return (
        <Stack gap={'15px'}>
            <Box sx={{ fontSize: '16px', fontWeight: '500' }}>Professional Info</Box>
            <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ borderRadius: '8px', }}>
                {
                    listProfile.map(
                        (profile: any, index: number) => {
                            return <Tab key={profile.id} label={`CV ${profile.id}`} value={profile.id} />
                        }
                    )
                }
                {/* <Tab label="Review" value={Content.review} /> */}
            </Tabs>
            {
                listProfile.map(
                    (profile: any, index: number) => {
                        if (profile.id == content) {
                            return <Stack key={profile.id} gap={'12px'}>
                                <Stack gap={'5px'}>
                                    <Box sx={{ fontSize: '14px', color: '#7C8493' }}>About Me</Box>
                                    <Box sx={{ fontSize: '14px', color: '#25324B' }}>{profile.aboutMe}</Box>
                                </Stack>
                                <Stack gap={'5px'}>
                                    <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Level</Box>
                                    <Box sx={{ fontSize: '14px', color: '#25324B' }}>{profile.level.name}</Box>
                                </Stack>
                                <Stack gap={'5px'}>
                                    <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Work Experience</Box>
                                    <Box sx={{ fontSize: '14px', color: '#25324B' }}>{profile.workExperience}</Box>
                                </Stack>
                                <Stack gap={'5px'}>
                                    <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Category</Box>
                                    <Box sx={{ fontSize: '14px', color: '#25324B' }}>{profile.category.name}</Box>
                                </Stack>
                                <Stack gap={'5px'}>
                                    <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Working Type</Box>
                                    <Box sx={{ fontSize: '14px', color: '#25324B' }}>{profile.workingType.name}</Box>
                                </Stack>
                                <Stack gap={'5px'}>
                                    <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Skill</Box>
                                    <Box sx={{ fontSize: '14px', color: '#25324B' }}>{profile.skill}</Box>
                                </Stack>
                            </Stack>
                        }
                    }
                )
            }
            {/* <Stack gap={'12px'}>
                        <Stack gap={'5px'}>
                            <Box sx={{ fontSize: '14px', color: '#7C8493' }}>About Me</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world. <br></br> For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups. </Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Level</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>Fresher</Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Work Experience</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>4 years</Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Working Type</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>IT</Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Skill</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>English, Project Management</Box>
                        </Stack>
                    </Stack> */}
        </Stack>
    )
}