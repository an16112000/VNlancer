import { Box, Button, Modal, Stack, TextField } from "@mui/material";

interface PopUpAppllyProps {
    isOpen: boolean,
    handleClose: Function
}

export default function PopUpApplly({ isOpen, handleClose }: PopUpAppllyProps) {
    return (
        <>
            <Modal
                open={isOpen}
                onClose={() => handleClose()}
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 800,
                    padding: '10px 10px',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    'aria- labelledby': "modal-modal-title",
                    'aria-describedby': "modal-modal-description",
                    p: 4,
                    borderRadius: '10px'
                }}>
                    <Stack gap={"30px"} width={'100%'}>
                        <Box gap={'15px'} width={'100%'}>
                            <Box sx={{ fontSize: '22px', fontWeight: '500' }}>Web</Box>
                            <TextField sx={{ width: '100%', borderColor: '' }} variant="outlined" label="Username"></TextField>
                        </Box>

                        <Box gap={'15px'} width={'100%'}>
                            <Box sx={{ fontSize: '22px', fontWeight: '500' }}>Your CV</Box>
                            {/* <TextField sx={{ width: '100%' }}> */}
                                <input type="file" name="file" />
                            {/* </TextField> */}
                        </Box>

                        <Box gap={'15px'} width={'100%'}>
                            <Box sx={{ fontSize: '22px', fontWeight: '500' }}>Cover letter</Box>
                            <Box>What skills, work project or archievements make you strong candidate?</Box>
                            <TextField sx={{ width: '100%' }}></TextField>
                        </Box>

                        <Button sx={{
                            width: '100%',
                            backgroundColor: '#2E4BB2',
                            color: '#fff',
                            borderRadius: 8,
                            textTransform: 'none'
                        }}>
                            Send my CV
                        </Button>
                    </Stack>
                </Box>
            </Modal >
        </>
    )
}