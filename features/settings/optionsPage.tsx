import { Box, Stack, Tab, Tabs } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import ClientProfileContent from "./client-profile-content"
import FreelancerProfileContent from "./freelancer-profile-content"

interface OptionsPageProps {
    options: any[],
    onClick: any
}

const options = [{
    title: 'Freelancer Profile',
    linkTo: '/settings/freelancer-profile',
}, {
    title: 'Client Profile',
    linkTo: '/settings/client-profile'
},
{
    title: 'Payment Method',
    linkTo: '/settings/payment-method'
}
]

enum Content {
    FreelancerProfile,
    ClientProfile,
    // review
}

const OptionsPage = () => {
    const [content, setContent] = useState<Content>(Content.FreelancerProfile)

    // const router = useRouter()
    // console.log(router.asPath)
    // const [page, setPage] = useState(
    //     router.asPath.includes('/settings/client-profile') ? 'Client Profile' : `${router.asPath.includes('/settings/freelancer-profile') ? 'Freelancer Profile' : 'Payment Method'}`
    // )
    // const handleClick = (page: string, option: any) => {
    //     setPage(page)
    //     router.push(option.linkTo)
    // }
    // console.log(page)
    return (
        <>
            <Stack>
                <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ backgroundColor: '#fff', borderRadius: '8px', }}>
                    <Tab label="Freelancer Profile" value={Content.FreelancerProfile} />
                    <Tab label="Client Profile" value={Content.ClientProfile} />
                    {/* <Tab label="Review" value={Content.review} /> */}
                </Tabs>
                {content == Content.FreelancerProfile ? <FreelancerProfileContent /> :
                   <ClientProfileContent />
                }
                {/* {
                    options.map(
                        (option, index) => {
                            const isActive = page === option.title
                            return <Box key={index} onClick={(e) => {
                                const input = e.target as HTMLElement;
                                handleClick(input.innerText, option)
                            }} sx={{
                                height: '40px',
                                lineHeight: '40px',
                                width: '200px',
                                textAlign: 'right',
                                borderLeft: '2px solid',
                                borderColor: isActive ? 'primary.main' : '#fff',
                                padding: '0 4px',
                                cursor: 'pointer'
                            }}>
                                {option.title}
                            </Box>
                        }
                    )
                } */}
            </Stack>
        </>
    )
}

export default OptionsPage