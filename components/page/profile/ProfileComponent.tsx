import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import ProfessionalInfoComponent from "./ProfessionalInfoComponent";
import useProfileAPI from "@/api/profile";
import { useSession } from "next-auth/react";

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

interface introductionProps {
  fullName: string;
  address: string;
  dateOfBirth: string;
  email: string;
  gender: string;
  phoneNumber: string;
}

export default function ProfileComponent() {
    const [introduction, setIntroduction] = useState<introductionProps>()
    const {data: session} = useSession()
    const hookProfile = useProfileAPI()

    useEffect(
        () => {
            async function fetchData() {
                const data = await hookProfile.getIntroduction()
                console.log(data)
                setIntroduction(data)
            }
            fetchData()
        }, []
    )
    return (
        <Box>
            <Stack gap={'15px'}>
                <Box sx={{ fontSize: '16px', fontWeight: '500' }}>Personal Info</Box>
                <Stack gap={'10px'}>
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box flex={1}>
                            <Box sx={{ fontSize: '14px', fontWeight: 300, color: '#7C8493' }}>Full Name</Box>
                            <Box sx={{ fontSize: '14px', fontWeight: 500, color: '#25324B' }}>{session?.user.name}</Box>
                        </Box>
                        <Box flex={1}>
                            <Box sx={{ fontSize: '14px', fontWeight: 300, color: '#7C8493' }}>Gender</Box>
                            <Box sx={{ fontSize: '14px', fontWeight: 500, color: '#25324B' }}>{introduction?.gender}</Box>
                        </Box>
                    </Stack>

                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box flex={1}>
                            <Box sx={{ fontSize: '14px', fontWeight: 300, color: '#7C8493' }}>Date of Birth</Box>
                            <Box sx={{ fontSize: '14px', fontWeight: 500, color: '#25324B' }}>{introduction?.dateOfBirth}</Box>
                        </Box>
                        <Box flex={1}>
                            <Box sx={{ fontSize: '14px', fontWeight: 300, color: '#7C8493' }}>Phone Number</Box>
                            <Box sx={{ fontSize: '14px', fontWeight: 500, color: '#25324B' }}>{introduction?.phoneNumber}</Box>
                        </Box>
                    </Stack>

                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box flex={1}>
                            <Box sx={{ fontSize: '14px', fontWeight: 300, color: '#7C8493' }}>Address</Box>
                            <Box sx={{ fontSize: '14px', fontWeight: 500, color: '#25324B' }}>{introduction?.address}</Box>
                        </Box>
                    </Stack>
                </Stack>
                <Box sx={{ height: '1px', width: '100%', border: '0.5px solid #D6DDEB', margin: '15px 0' }}></Box>
                <ProfessionalInfoComponent />
            </Stack>
        </Box>
    )
}