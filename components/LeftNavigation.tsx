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
        title: 'My Applicants',
        pathName: '/freelancer/my-applicants',
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
        icon: ApplicationIcon,
        title: 'My Jobs',
        pathName: '/client/my-jobs',
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
        title: 'Users management',
        pathName: '/admin/users-management',
        link: ''
    },
    {
        icon: PublicProfileIcon,
        title: 'Jobs Managements',
        pathName: '/admin/jobs-management',
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