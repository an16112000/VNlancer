import { PaletteMode } from '@mui/material'
import { green, blue, red } from '@mui/material/colors'

export const getDesignTokens = (mode: PaletteMode) => ({
    typography: {
        fontFamily: 'Signika, sans-serif'
    },
    palette: {
        mode,
        ...(mode === "light" ?
            {
                primary: {
                    main: "#7950F2",
                },
                secondary: {
                    main: green[500]
                },
                text: {
                    primary: '#7950F2',
                    secondary: '#fff',
                    third: '#000',
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
                    primary: '#fff'
                },
                background: {
                    default: "#CECACA"
                }
            }
        )
    },
})