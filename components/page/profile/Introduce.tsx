import { Avatar } from "@/img"
import { Box, Stack } from "@mui/material"
import Image from "next/image"

interface IntroduceProps {
    name?: string,
    level?: string,
    workExperience?: string,
    imageUrl?: string
}

export default function Introduce(props: IntroduceProps) {
    console.log(props)
    return (
        <Box sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            flex: 1,
            padding: '10px 10px'
        }}>
            <Stack gap={'25px'}>
                <Stack flexDirection={'row'} gap={'15px'}>
                    <Image alt="" src={Avatar} width={1} height={1} style={{ height: '60px', width: '60px', borderRadius: '50%' }} />
                    <Box sx={{ height: '40px' }}>
                        <Box sx={{ fontSize: '16px', fontWeight: '500' }}>Jerome Bell</Box>
                        <Box sx={{ fontSize: '12px', fontWeight: '300' }}>Product Designer</Box>
                    </Box>
                </Stack>
                <Box sx={{ height: '1px', width: '100%', border: '0.5px solid #D6DDEB' }}></Box>
                <Stack gap={'15px'}>
                    <Box>Contact</Box>
                    <Stack flexDirection={'row'} gap={'15px'} alignItems={'flex-start'}>
                        <i className="fa-regular fa-envelope" style={{ color: '#7C8493' }}></i>
                        <Box>
                            <Box sx={{ lineHeight: '16px', color: '#7C8493', fontSize: '14px' }}>Email</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>jeromeBell845@gmail.com</Box>
                        </Box>
                    </Stack>
                    <Stack flexDirection={'row'} gap={'15px'} alignItems={'flex-start'}>
                        <i className="fa-solid fa-mobile-screen-button" style={{ color: '#7C8493' }}></i>
                        <Box>
                            <Box sx={{ lineHeight: '16px', color: '#7C8493', fontSize: '14px' }}>Phone</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>+84 343 668 668</Box>
                        </Box>
                    </Stack>
                    <Stack flexDirection={'row'} gap={'15px'} alignItems={'flex-start'}>
                        <i className="fa-brands fa-instagram" style={{ color: '#7C8493' }}></i>
                        <Box>
                            <Box sx={{ lineHeight: '16px', color: '#7C8493', fontSize: '14px' }}>Instagram</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>instagram.com/andoan16</Box>
                        </Box>
                    </Stack>
                    <Stack flexDirection={'row'} gap={'15px'} alignItems={'flex-start'}>
                    <i className="fa-regular fa-map" style={{ color: '#7C8493' }}></i>
                        <Box>
                            <Box sx={{ lineHeight: '16px', color: '#7C8493', fontSize: '14px' }}>Address</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>Số 1 Ngõ 53, Đức Giang, Long Biên, Hà Nội</Box>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}