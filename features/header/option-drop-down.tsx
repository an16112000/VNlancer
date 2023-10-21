import { Stack } from "@mui/material"

interface OptionDropDownProps {
    children: any,
    style?: any,
    icon: any,
    onClick?: any
}

function OptionDropDown({children, style, icon, onClick: handleClick}: OptionDropDownProps) {
    return (
        <>
            <Stack onClick={handleClick} gap={'6px'} flexDirection={'row'} alignItems={"center"} sx={{...style, cursor: 'pointer',width: '100%', padding: '10px 20px 10px 18px', '&:hover': {backgroundColor: '#877575'}}}>
                {icon}
                <p>{children}</p>
            </Stack>
        </>
    )
}

export default OptionDropDown