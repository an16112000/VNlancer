import { Button } from "@mui/material";

interface ButtonTransparentProps {
    children: string,
    active?: boolean,
    onClick?: any
}

function ButtonTransparent({children, active, onClick: handleClick}: ButtonTransparentProps) {
    return(
        <>
            <Button 
            onClick={handleClick}
            sx={{
                height: '40px', 
                color: active ? 'text.primary' : 'text.third', 
                borderBottom: '3px solid', 
                borderBottomColor: active ? 'primary.main' : 'transparent', 
                fontSize: '14px', 
                borderRadius: '0',
                textTransform: 'none'
            }}
            >
                {children}
            </Button>
        </>
    )
}

export default ButtonTransparent