// import { Logo, NewIcon, ApplicationIcon, PublicProfileIcon, DashboardIcon, SettingIcon } from "@/img"
// import { RootState } from "@/state/store"
// import { UserRole } from "@/state/user"
// import { Stack, Box } from "@mui/material"
// import { useSession } from "next-auth/react"
// import { useRouter } from "next/router"
// import { useState, useEffect } from "react"
// import { useSelector } from "react-redux"

// const user = {
//     name: 'An',
//     type: 'Senior developer',
//     img: Logo,
// }

// const freelancerNavigator = [
//     {
//         icon: NewIcon,
//         title: 'News',
//         pathName: '/freelancer/news',
//         link: '',
//     },
//     {
//         icon: ApplicationIcon,
//         title: 'My Jobs',
//         pathName: '/freelancer/my-applications',
//         link: '/my-applications'
//     },
//     {
//         icon: PublicProfileIcon,
//         title: 'My Profile',
//         pathName: '/client/my-public-profile',
//         link: '',
//     },
//     {
//         icon: DashboardIcon,
//         title: 'Dashboard',
//         pathName: '/client/dashboard',
//         link: '',
//     },
//     {
//         icon: SettingIcon,
//         title: 'Settings',
//         pathName: '/settings/client-profile',
//         link: '',
//     },
// ]

// const clientNavigator = [
//     {
//         icon: NewIcon,
//         title: 'News',
//         pathName: '/freelancer/news',
//         link: '',
//     },
//     {
//         icon: ApplicationIcon,
//         title: 'My Job',
//         pathName: '/freelancer/my-applications',
//         link: '/my-applications'
//     },
//     {
//         icon: PublicProfileIcon,
//         title: 'My public profile',
//         pathName: '/client/my-public-profile',
//         link: '',
//     },
//     {
//         icon: DashboardIcon,
//         title: 'Dashboard',
//         pathName: '/client/dashboard',
//         link: '',
//     },
//     {
//         icon: SettingIcon,
//         title: 'Settings',
//         pathName: '/settings/client-profile',
//         link: '',
//     },
// ]

// const adminNavigator: any[] = []

// export default function Navigator() {
//     const role = useSelector((state: RootState) => state.user.role)
//     const router = useRouter()
//     const { data: session, status } = useSession()
//     const [navigator, setNavigator] = useState<any>([])
//     useEffect(() => {
//         if (role == UserRole.client) {
//             setNavigator(clientNavigator.map(
//                 (item: any, index: number) => {
//                     const isActive = router.asPath.includes(item.pathName)
//                     return <Stack gap={'10px'} key={index} flexDirection={'row'}
//                         onClick={() => router.push(item.pathName)}
//                         sx={{
//                             backgroundColor: isActive ? 'primary.main' : '',
//                             padding: '5px 5px',
//                             borderRadius: '6px',
//                             cursor: 'pointer',
//                             '&:hover': {
//                                 backgroundColor: 'primary.main',
//                                 opacity: 0.7,
//                             }
//                         }}>
//                         <Image src={item.icon} style={{ height: '20px', width: '20px' }} alt="" />
//                         <p>{item.title}</p>

//                     </Stack>

//                 }
//             ))
//         }
//         if (role == UserRole.freelancer) {
//             setNavigator(freelancerNavigator.map(
//                 (item: any, index: number) => {
//                     const isActive = router.asPath.includes(item.pathName)
//                     return <Stack gap={'10px'} key={index} flexDirection={'row'}
//                         onClick={() => router.push(item.pathName)}
//                         sx={{
//                             backgroundColor: isActive ? 'primary.main' : '',
//                             padding: '5px 5px',
//                             borderRadius: '6px',
//                             cursor: 'pointer',
//                             '&:hover': {
//                                 backgroundColor: 'primary.main',
//                                 opacity: 0.7,
//                             }
//                         }}>
//                         <Image src={item.icon} style={{ height: '20px', width: '20px' }} alt="" />
//                         <p>{item.title}</p>

//                     </Stack>

//                 }
//             ))
//         }
//         if (role == UserRole.admin) {
//             setNavigator(adminNavigator.map(
//                 (item: any, index: number) => {
//                     const isActive = router.asPath.includes(item.pathName)
//                     return <Stack gap={'10px'} key={index} flexDirection={'row'}
//                         onClick={() => router.push(item.pathName)}
//                         sx={{
//                             backgroundColor: isActive ? 'primary.main' : '',
//                             padding: '5px 5px',
//                             borderRadius: '6px',
//                             cursor: 'pointer',
//                             '&:hover': {
//                                 backgroundColor: 'primary.main',
//                                 opacity: 0.7,
//                             }
//                         }}>
//                         <Image src={item.icon} style={{ height: '20px', width: '20px' }} alt="" />
//                         <p>{item.title}</p>

//                     </Stack>

//                 }
//             ))
//         }
//     }, [role])
//     if (status === 'authenticated') {
//         return (
//             <Box sx={{ width: '260px' }}>
//                 <Box position={'fixed'}>
//                     <Stack
//                         flexDirection={'column'}
//                         alignItems={'center'}
//                         gap={'10px'}
//                         sx={{
//                             backgroundColor: '#fff',
//                             // width: '250px',
//                             padding: '20px 50px',
//                             borderRadius: '8px',
//                         }}>
//                         <Image style={{ width: '100px', height: '100px', borderRadius: '6px', border: '1px solid', borderColor: '#ccc' }} src={user.img} alt='' />
//                         <Box textAlign={'center'}>
//                             <h2>{user.name}</h2>
//                             <p>{user.type}</p>

//                         </Box>
//                         <Stack marginTop={'2px'} gap={'10px'} width={'130%'}>
//                             {navigator}
//                         </Stack>
//                     </Stack>

//                 </Box>
//             </Box>
//         )

//     }
//     else {
//         return <></>
//     }
// }