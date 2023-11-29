import { listProfile } from "@/const"
import { Box, Stack, Tab, Tabs, TextField } from "@mui/material"
import { profile } from "console"
import { useState } from "react"
import CustomProfessionalInfo from "./custom-professionalInfo"

export default function CustomProfessionalInfoComponent() {
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
                            // return <Stack key={profile.id} gap={'12px'}>
                            //     <Stack gap={'5px'}>
                            //         <Box sx={{ fontSize: '14px', color: '#7C8493' }}>About Me</Box>
                            //         <TextField sx={{ fontSize: '14px', color: '#25324B' }} value={profile.aboutMe} />
                            //     </Stack>
                            //     <Stack gap={'5px'}>
                            //         <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Level</Box>
                            //         <Box sx={{ fontSize: '14px', color: '#25324B' }}>{profile.level.name}</Box>
                            //     </Stack>
                            //     <Stack gap={'5px'}>
                            //         <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Work Experience</Box>
                            //         <Box sx={{ fontSize: '14px', color: '#25324B' }}>{profile.workExperience}</Box>
                            //     </Stack>
                            //     <Stack gap={'5px'}>
                            //         <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Category</Box>
                            //         <Box sx={{ fontSize: '14px', color: '#25324B' }}>{profile.category.name}</Box>
                            //     </Stack>
                            //     <Stack gap={'5px'}>
                            //         <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Working Type</Box>
                            //         <Box sx={{ fontSize: '14px', color: '#25324B' }}>{profile.workingType.name}</Box>
                            //     </Stack>
                            //     <Stack gap={'5px'}>
                            //         <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Skill</Box>
                            //         <Box sx={{ fontSize: '14px', color: '#25324B' }}>{profile.skill}</Box>
                            //     </Stack>
                            // </Stack>
                            return <Box  key={index} >
                                <CustomProfessionalInfo profile={profile} />
                                </Box>
                        }
                    }
                )
            }
        </Stack>
    )
}