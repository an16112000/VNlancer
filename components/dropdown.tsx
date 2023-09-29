import { Box, Button } from "@mui/material";
import Tippy from "@tippyjs/react";
import Btn from "./button";

function TippyCustom({value}: any) {
    return(
        <>  
            <Tippy interactive content={
                <Box sx={{backgroundColor: '#fff', marginTop: '5px', width: '200px', borderRadius: '8px', padding: '5px 8px'}}>
                    {
                        value.children.map(
                            (item: any, index: number) => {
                                return <Button sx={{padding: '5px 0', cursor: 'pointer', width: '100%', color: 'text.third', textAlign: 'end'}} key={index}>{item.title}</Button>
                            }
                        )
                    }
                </Box>
                        }>
                            <p style={{
                            textTransform: 'uppercase',
                            color: 'text.third',
                        }}>{value.title}</p>
                        </Tippy>
        </>
    )
}

export default TippyCustom