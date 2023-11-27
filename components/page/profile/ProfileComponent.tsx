import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";

interface Profile {
    id: number,
    aboutMe: string,
    skill: string,
    workExperience: string
    category: {
        id: number,
        name: string
    },
    level: {
        id: number,
        name: string
    },
    workingType: {
        id: number,
        name: string
    },
}

const listProfile = [
    {
        id: 1,
        aboutMe: 'I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world. <br></br> For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups. ',
        skill: 'English, Project Management',
        workExperience: '4 years',
        category: {
            id: 1,
            name: 'Information Technology'
        },
        level: {
            id: 1,
            name: 'Fresher'
        },
        workingType: {
            id: 1,
            name: 'IT'
        },
    },
    {
        id: 2,
        aboutMe: 'I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world. <br></br> For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups. ',
        skill: 'Frech, System Management',
        workExperience: '5 years',
        category: {
            id: 1,
            name: 'Operation Systems'
        },
        level: {
            id: 2,
            name: 'Senior'
        },
        workingType: {
            id: 1,
            name: 'IT'
        },
    },
    {
        id: 3,
        aboutMe: 'I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world. <br></br> For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups. ',
        skill: 'English, Design',
        workExperience: '2 years',
        category: {
            id: 1,
            name: 'Designer'
        },
        level: {
            id: 1,
            name: 'Fresher'
        },
        workingType: {
            id: 1,
            name: 'Fashion'
        },
    },
]

export default function ProfileComponent() {
    const [content, setContent] = useState(1)
    
    return (
        <Box>
            <Stack gap={'15px'}>
                <Box sx={{ fontSize: '16px', fontWeight: '500' }}>Personal Info</Box>
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
                    <Box sx={{ fontSize: '16px', fontWeight: '500' }}>Professional Info</Box>
                    <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ borderRadius: '8px', }}>
                    {
                        listProfile.map(
                            (profile: any, index: number) => {
                        return <Tab key={profile.id} label={`CV ${profile.id}`} value={profile.id}  />
                            }
                        )
                    }
                        {/* <Tab label="Review" value={Content.review} /> */}
                    </Tabs>
                    {
                        listProfile.map(
                            (profile: any, index: number) => {
                                if(profile.id == content) {
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
            </Stack>
        </Box>
    )
}