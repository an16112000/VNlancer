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
        icon: ApplicationIcon,
        title: 'My Applications',
        pathName: '/freelancer/my-applications',
        link: '/my-applications'
    },
    {
        icon: ApplicationIcon,
        title: 'My Saved Jobs',
        pathName: '/freelancer/my-saved-jobs',
        link: '/my-applications'
    },
    {
        icon: PublicProfileIcon,
        title: 'My Profile',
        pathName: '/freelancer/profile',
        link: '',
    },
    {
        icon: SettingIcon,
        title: 'Settings',
        pathName: '/settings',
        link: ''
    }
    // {
    //     icon: DashboardIcon,
    //     title: 'Dashboard',
    //     pathName: '/freelancer/dashboard',
    //     link: '',
    // },
    // {
    //     icon: SettingIcon,
    //     title: 'Settings',
    //     pathName: '/settings/client-profile',
    //     link: '',
    // },
]

const clientNavigator = [
    {
        icon: NewIcon,
        title: 'News',
        pathName: '/client/news',
        link: '',
    },
    {
        icon: ApplicationIcon,
        title: 'My Jobs',
        pathName: '/client/my-jobs',
        link: '/my-applications'
    },
    {
        icon: ApplicationIcon,
        title: 'My Open Jobs',
        pathName: '/client/my-open-jobs',
        link: '/my-applications'
    },
    {
        icon: ApplicationIcon,
        title: 'Saved Freelancer',
        pathName: '/client/my-saved-freelancer',
        link: '/my-applications'
    },
    {
        icon: PublicProfileIcon,
        title: 'My Profile',
        pathName: '/client/profile',
        link: '',
    },
    {
        icon: SettingIcon,
        title: 'Settings',
        pathName: '/settings',
        link: ''
    }
    // {
    //     icon: DashboardIcon,
    //     title: 'Dashboard',
    //     pathName: '/client/dashboard',
    //     link: '',
    // },
    // {
    //     icon: SettingIcon,
    //     title: 'Settings',
    //     pathName: '/settings/client-profile',
    //     link: '',
    // },
]

const adminNavigator = [
    {
        icon: ApplicationIcon,
        title: 'Management',
        pathName: '/admin/management-for-admin',
        link: ''
    },
    {
        icon: SettingIcon,
        title: 'Settings',
        pathName: '/admin/settings-for-admin',
        link: '',
    },
]

function LeftNavigation() {
    const role = useSelector((state: RootState) => state.user.role)
    const { asPath } = useRouter()
    console.log(role)
    const router = useRouter()
    const { status } = useSession()
    const [navigator, setNavigator] = useState<any>([])
    useEffect(() => {
        if (asPath.includes('admin')) {
            setNavigator([...adminNavigator])
        }
        else {
            if (role == UserRole.client) {
                setNavigator([...clientNavigator])
            }
            if (role == UserRole.freelancer) {
                setNavigator([...freelancerNavigator])
            }
        }
    }, [asPath, role, router])
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
                        (item: any, index: number) => <NavigationButton key={index} {...item} index={item.pathName} />
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