import { TextField } from "@mui/material"

interface TextInputModalProps {
    style?: any
}

function TextInputModal({style}: TextInputModalProps) {
    return(
        <TextField sx={{
            width: '100%',
            ".MuiOutlinedInput-input": {
                padding: '12px 15px'
            },
            ...style
        }}  />
            
        
    )
}

export default TextInputModal