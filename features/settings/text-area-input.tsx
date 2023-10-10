import { TextareaAutosize } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { styled } from '@mui/system';

function TextAreaInputModal() {
    const StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => `
        width: 320px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
        
        &:hover {
          border-color: #7950F2;
        }
    
        &:focus {
          border-color: #7950F2;
          box-shadow: 0 0 0 1px ${theme.palette.mode === 'dark' ? '#7950F2' : '#7950F2'};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );
    return(
        <StyledTextarea style={{
            width: '100%',
            border: '1px solid #ccc',
            padding: '12px 15px',
            height: '120px',
            borderRadius: '8px'
        }}
        />
    )
}

export default TextAreaInputModal