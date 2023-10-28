import Btn from "@/components/button";
import { Box, FormControl, Input, InputLabel, MenuItem, Modal, Select, SelectChangeEvent, Stack } from "@mui/material";
import { useState } from "react";

interface ModalToPostJobProps {
    isOpen: boolean,
    handleClose: any,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    gap: '10px'
};

function ModalToPostJob({ isOpen, handleClose }: ModalToPostJobProps) {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormControl sx={{
                        width: '100%',
                        gap: '15px',
                        border: 'none',
                        '.MuiOutlinedInput-notchedOutline': {
                            border: '2px solid',
                            borderColor: '#fff',
                            borderBottomColor: '#cacaca'
                        }
                    }}>
                        <h1 style={{
                            textAlign: 'center',
                            fontSize: '18px',
                            fontWeight: '500'
                        }}>POST A JOB</h1>
                        <Stack width={'100%'} >
                            <label htmlFor="my-email">Type</label>
                            {/* <Input id="my-email" aria-describedby="my-helper-text" /> */}
                            <FormControl fullWidth sx={{
                                border: 'none'
                            }}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                    sx={{
                                        border: 'none'
                                    }}
                                >
                                    <MenuItem value={10}>Design</MenuItem>
                                    <MenuItem value={20}>Sales</MenuItem>
                                    <MenuItem value={30}>Marketing</MenuItem>
                                    <MenuItem value={40}>Business</MenuItem>
                                    <MenuItem value={50}>Human Resource</MenuItem>
                                    <MenuItem value={60}>Finance</MenuItem>
                                    <MenuItem value={70}>Engineering</MenuItem>
                                    <MenuItem value={80}>Technology</MenuItem>

                                </Select>
                            </FormControl>
                        </Stack>

                        <Stack>
                            <label htmlFor="my-name">Name</label>
                            <Input sx={{
                                borderBottomColor: '#ccc !important'
                            }} id="my-name" aria-describedby="my-helper-text" />
                        </Stack>

                        <Stack>
                            <label htmlFor="my-budget">Budget</label>
                            
                            <Input id="my-budget" aria-describedby="my-helper-text" type="number" />
                        </Stack>

                        <Stack>
                            <label htmlFor="my-img">Img</label>
                            <Input id="my-img" aria-describedby="my-helper-text" />
                        </Stack>

                        <Stack>
                            <label htmlFor="my-information">Information</label>
                            <Input id="my-information" aria-describedby="my-helper-text" />
                        </Stack>

                        <Stack>
                            <label htmlFor="my-state">State</label>
                            <Input id="my-state" aria-describedby="my-helper-text" />
                        </Stack>
                        <Btn>Submit</Btn>
                    </FormControl>
                </Box>
            </Modal>
        </>
    )
}

export default ModalToPostJob