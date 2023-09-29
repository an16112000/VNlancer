import {Button} from '@mui/material'

interface BntProps {
    children: string | string[],
    onClick?: any,
    active?: string,
    styles?: any,
}

function Btn({children, onClick: handleClick, active = '', styles}: BntProps) {
    const isActive = children === active
    return(
        <Button
            variant="contained"
            sx={{
                ...styles,
                height: '40px',
                padding: '0 20px',
                borderRadius: styles?.borderRadius || '4px',
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