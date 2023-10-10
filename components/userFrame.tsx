import { ApplicationIcon, DashboardIcon, Logo, NewIcon, PublicProfileIcon, SettingIcon } from "@/img"
import { Box, Stack } from "@mui/material"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"

interface UserFrameProps {
    parentFunction: any,
    active: any,
}



const user = {
    name: 'An',
    type: 'Senior developer',
    img: Logo,
}

function UserFrame() {
    const router = useRouter()
    const isFreelancerMode = useMemo(() => router.asPath.includes("/freelancer"), [router])
    const Navigators = [
        {
            icon: NewIcon,
            title: 'News',
            pathName: isFreelancerMode ? '/freelancer/news' : '/client/news',
            link: '',
        },
        {
            icon: ApplicationIcon,
            title: 'My applications',
            pathName: isFreelancerMode ? '/freelancer/my-applications' : '/client/my-applications',
            link: '/my-applications'
        },
        {
            icon: PublicProfileIcon,
            title: 'My public profile',
            pathName: isFreelancerMode ? '/freelancer/my-public-profile' : '/client/my-public-profile',
            link: '',
        },
        {
            icon: DashboardIcon,
            title: 'Dashboard',
            pathName: isFreelancerMode ? '/freelancer/dashboard' : '/client/dashboard',
            link: '',
        },
        {
            icon: SettingIcon,
            title: 'Settings',
            pathName: isFreelancerMode ?  '/settings/freelancer-profile' : '/settings/client-profile' ,
            link: '',
        },
    ]
    const { data: session, status } = useSession()
    if (status === 'authenticated') {
        return (
            <Box sx={{width: '260px'}}>  
                <Box position={'fixed'}>
                    <Stack
                        flexDirection={'column'}
                        alignItems={'center'}
                        gap={'10px'}
                        sx={{
                            backgroundColor: '#fff',
                            // width: '250px',
                            padding: '20px 50px',
                            borderRadius: '8px',
                        }}>
                        <Image style={{ width: '100px', height: '100px', borderRadius: '6px', border: '1px solid', borderColor: '#ccc' }} src={user.img} alt='' />
                        <Box textAlign={'center'}>
                            <h2>{user.name}</h2>
                            <p>{user.type}</p>

                        </Box>
                        <Stack marginTop={'2px'} gap={'10px'} width={'130%'}>
                            {
                                Navigators.map(
                                    (item: any, index: number) => {
                                        const isActive = router.asPath.includes(item.pathName)
                                        console.log(item.pathName, router.asPath)
                                        return <Stack gap={'10px'} key={index} flexDirection={'row'}
                                            onClick={() => router.push(item.pathName)}
                                            sx={{
                                                backgroundColor: isActive ? 'primary.main' : '',
                                                padding: '5px 5px',
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    backgroundColor: 'primary.main',
                                                    opacity: 0.7,
                                                }
                                            }}>
                                            <Image src={item.icon} style={{ height: '20px', width: '20px' }} alt="" />
                                            <p>{item.title}</p>

                                        </Stack>

                                    }
                                )
                            }
                        </Stack>
                    </Stack>

                </Box>
            </Box>
        )

    }
    else {
        return <></>
    }
}

export default UserFrame