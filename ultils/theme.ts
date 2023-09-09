import { PaletteMode } from '@mui/material'
import { green, blue, red } from '@mui/material/colors'
import { root } from 'postcss'

export const getDesignTokens = (mode: PaletteMode) => ({
    typography: {
        fontFamily: 'Signika, sans-serif'
    },
    palette: {
        mode,
        ...(mode === 'light' ? 
        {
            primary: {
                main: "#7950F2",
            },
            secondary: {
                main: green[500]
            },
            text: {
                default: '#7950F2',
                white: '#fff'
            },
            background: {
                default: "#CECACA"
            }
        }
        : {
            primary: {
                main: blue[500]
            },
            secondary: {
                main: red[500]
            }, 
            text: {
                main: '#fff'
            },
            background: {
                default: "#CECACA"
            }
        }
        )
    },
    
})