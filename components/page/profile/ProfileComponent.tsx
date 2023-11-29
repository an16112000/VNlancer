import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import ProfessionalInfoComponent from "./ProfessionalInfoComponent";

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



export default function ProfileComponent() {

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
                <ProfessionalInfoComponent />
            </Stack>
        </Box>
    )
}