import { TextField } from '@mui/material'
import { blue } from '@mui/material/colors'

interface TextInputProps {
    id: string,
    label: string
}

 
function TextInput({id, label}: TextInputProps) {
    return(
        <TextField
            id={`${id}`}
            label={`${label}`}
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "#fff",
              border: "1px solid blue",
              borderRadius: "8px",
              "&:hover": {
                borderColor: `${blue[200]}`,
                boxShadow: `0 0 0 3px  ${blue[200]}`,
              },
              ".MuiFormLabel-root": {
                fontSize: '0.875rem',
                opacity: '0.7',
                letterSpacing: '0.05px',
                fontWeight: '400',
                lineHeight: '1.5',
                fontFamily: 'IBM Plex Sans,sans-serif'
              }
            }}
          />
    )
}

export default TextInput

