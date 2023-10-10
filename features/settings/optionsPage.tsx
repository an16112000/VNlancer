import { Box, Stack } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

interface OptionsPageProps {
    options: any[],
    onClick: any
}

const options = [{
    title:'Freelancer Profile',
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

const OptionsPage = () => {
    const router = useRouter()
    console.log(router.asPath)
    const [page, setPage] = useState(
        router.asPath.includes('/settings/client-profile') ?  'Client Profile' : `${router.asPath.includes('/settings/freelancer-profile') ?  'Freelancer Profile' : 'Payment Method' }`
    )
    const handleClick = (page: string, option: any) => {
        setPage(page)
        router.push(option.linkTo)
    }
    console.log(page)
    return (
        <>
            <Stack>
                {
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
                                {/* <Link href={option.linkTo}> */}
                                    {option.title}
                                {/* </Link> */}
                            </Box>
                        }
                    )
                }
            </Stack>
        </>
    )
}

export default OptionsPage