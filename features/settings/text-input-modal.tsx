import { TextField } from "@mui/material"
import { ChangeEventHandler } from "react"

interface TextInputModalProps {
    style?: any,
    type?: string,
    functionChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

function TextInputModal({style, type, functionChange=() => {}}: TextInputModalProps) {
    return(
        <TextField
         onChange={functionChange}
         name={type}
        sx={{
            width: '100%',
            ".MuiOutlinedInput-input": {
                padding: '12px 15px'
            },
            ...style
        }}  />
            
        
    )
}

export default TextInputModal