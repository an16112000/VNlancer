import ButtonTransparent from "@/components/buttontransparent"
import { Stack } from "@mui/material"
import { useState } from "react"

interface OptionsProps {
    options: any[],
    onClick?: any,
    activeOption?: any
}

function Options({options, onClick: handleChangePage = () => {}, activeOption = options[0].title}: OptionsProps) {
    const [active, setActive] = useState(activeOption)
    function handleClick(e: any) {
        console.log(e.target.innerText)
        setActive(e.target.innerText);
        handleChangePage(e.target.innerText);
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

export default Options