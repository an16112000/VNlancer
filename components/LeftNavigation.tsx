import { ApplicationIcon, DashboardIcon, Logo, NewIcon, PublicProfileIcon, SettingIcon } from "@/img"
import { RootState } from "@/state/store"
import { UserRole } from "@/state/user"
import { Box, Stack } from "@mui/material"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import NavigationButton from "./NavigationButton"

const freelancerNavigator = [
    {
        icon: NewIcon,
        title: 'News',
        pathName: '/freelancer/news',
        link: '',
    },
    {
        icon: ApplicationIcon,
        title: 'My Jobs',
        pathName: '/freelancer/my-jobs',
        link: '/my-applications'
    },
    {
        icon: PublicProfileIcon,
        title: 'My Profile',
        pathName: '/freelancer/profile',
        link: '',
    },
    {
        icon: DashboardIcon,
        title: 'Dashboard',
        pathName: '/freelancer/dashboard',
        link: '',
    },
    {
        icon: SettingIcon,
        title: 'Settings',
        pathName: '/settings/client-profile',
        link: '',
    },
]

const clientNavigator = [
    {
        icon: ApplicationIcon,
        title: 'My Job',
        pathName: '/client/my-jobs',
        link: '/my-applications'
    },
    {
        icon: PublicProfileIcon,
        title: 'My public profile',
        pathName: '/client/profile',
        link: '',
    },
    {
        icon: DashboardIcon,
        title: 'Dashboard',
        pathName: '/client/dashboard',
        link: '',
    },
    {
        icon: SettingIcon,
        title: 'Settings',
        pathName: '/settings/client-profile',
        link: '',
    },
]

const adminNavigator: any[] = []

function LeftNavigation() {
    const role = useSelector((state: RootState) => state.user.role)
    const router = useRouter()
    const { status } = useSession()
    const [navigator, setNavigator] = useState<any>([])
    useEffect(() => {
        if (role == UserRole.client) {
            setNavigator([...clientNavigator])
        }
        if (role == UserRole.freelancer) {
            setNavigator([...freelancerNavigator])
        }
        if (role == UserRole.admin) {
            setNavigator(adminNavigator.map(
                (item: any) => {
                    const isActive = router.asPath.includes(item.pathName)
                    return <Stack gap={'10px'} key={item.pathName} flexDirection={'row'}
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
            ))
        }
    }, [role])
    if (status === 'authenticated') {
        return (
            <Stack
                flexDirection={'column'}
                alignItems={'center'}
                gap={'10px'}
                sx={{
                    backgroundColor: '#fff',
                    padding: '20px 50px',
                    borderRadius: '8px',
                }}>
                <Stack marginTop={'2px'} gap={'10px'} width={'130%'}>
                    {navigator.map(
                        (item: any) => <NavigationButton {...item} index={item.pathName} />
                    )}
                </Stack>
            </Stack>
        )

    }
    else {
        return <></>
    }
}

export default LeftNavigation