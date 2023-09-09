import {Button} from '@mui/material'

interface BntProps {
    children: string,
    onClick?: any,
    active?: string,
}

function Btn({children, onClick: handleClick, active = ''}: BntProps) {
    const isActive = children === active
    return(
        <Button
            variant="contained"
            sx={{
                height: '40px',
                padding: '0 20px',
                borderRadius: '4px',
                textTransform: 'none',
                backgroundColor: isActive ? 'primary.main' : 'transparent',
                color: isActive ? 'text.secondary' : 'text.primary',
                "&:hover": {
                    color: 'text.secondary'
                }
            }}
            onClick={handleClick}
            >
                {children}
            </Button>
    )
}

export default Btn