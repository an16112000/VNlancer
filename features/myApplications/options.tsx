import ButtonTransparent from "@/components/buttontransparent"
import { Stack } from "@mui/material"
import { useState } from "react"

interface OptionsOfApplicationProps {
    options: any[],
    onClick?: any
}

function OptionsOfApplication({options, onClick: handleChangePage}: OptionsOfApplicationProps) {
    const [active, setActive] = useState(options[0].title)
    function handleClick(e: any) {
        setActive(e.target.innerText);
        () => handleChangePage(e.target.innerText)
    }
    return (
        <Stack flexDirection={'row'} sx={{ borderBottom: '1px solid #D6DDEB', width: '100%' }}>
            {
                options.map(
                    (item: any, index: number) => {
                        return <ButtonTransparent onClick={(e: any) => handleClick(e)} key={index} active={active === item.title ? true : false}>{item.title}</ButtonTransparent>
                    }
                )
            }
        </Stack>
    )
}

export default OptionsOfApplication