import { Stack } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export interface Props {
    pathName: string,
    title: string,
    icon?: any
}

export default function NavigationButton(props: Props) {
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        router.asPath.includes(props.pathName) ? setIsActive(true) : setIsActive(false)
    })
    return <Stack gap={'10px'} flexDirection={'row'}
        onClick={() => router.push(props.pathName)}
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
        {props.icon ? <Image src={props.icon} style={{ height: '20px', width: '20px' }} alt="" /> : <></>
        }
        <p>{props.title}</p>
    </Stack>
}
