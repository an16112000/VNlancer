import { Button } from "@mui/material";

interface ButtonApplyProps {
    children: string,
    onClick?: Function
}

export default function ButtonApply({children, onClick: handleClick = () => {}}: ButtonApplyProps) {
    return <Button 
    onClick={() => handleClick()}
    sx={{ 
        flex: 1, 
        backgroundColor: '#4B69B6', 
        color: '#fff', 
        borderRadius: '6px',
        '&:hover': {
            opacity: 0.8,
            backgroundColor: 'red'
        }
    }}>
        {children}
    </Button>
}