import { TextField } from '@mui/material'
import { blue } from '@mui/material/colors'

interface TextInputProps {
    id: string,
    label: string,
    styles?: any;
    handleChange?: any,
    type?: string,
    value?: string,
    disable?: boolean
}

 
function TextInput({id, disable = false, label, styles = {}, ...props}: TextInputProps) {
    return(
        <TextField
            disabled={disable}
            onChange={props.handleChange}
            type={props.type}
            value={props.value}
            id={`${id}`}
            label={`${label}`}
            variant="outlined"
            size="small"
            sx={{
              color: '#000',
              // backgroundColor: "#fff",
              border: "1px solid blue",
              borderRadius: "8px",
              width: '100%',
              ...styles,
              "&:hover": {
                borderColor: `${blue[200]}`,
                boxShadow: `0 0 0 1px  ${blue[200]}`,
              },
              ".MuiFormLabel-root": {
                color: styles?.color || 'text.primary',
                fontSize: '0.875rem',
                opacity: '0.7',
                letterSpacing: '0.05px',
                fontWeight: '400',
                lineHeight: '1.5',
                fontFamily: 'IBM Plex Sans,sans-serif'
              },
              ".MuiInputBase-root": {
                height: '100%'
              }
            }}
          />
    )
}

export default TextInput

