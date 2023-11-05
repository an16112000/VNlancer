import { useJobApi } from "@/api/get-all-jobs";
import Btn from "@/components/button";
import { Box, Button, FormControl, Input, InputBase, InputLabel, MenuItem, Modal, Select, SelectChangeEvent, Stack } from "@mui/material";
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
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [budget, setBudget] = useState('');
    const [information, setInformation] = useState('');
    const { createJob } = useJobApi();

    const handleChangeType = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };
    const handleChangeState = (event: SelectChangeEvent) => {
        setState(event.target.value as string);
    };

    // handle Change Value Name Input
    function handleChangeName(e: any) {
        setName(e.target.value)
    }

    //handle Change Budget Input
    function handleChangeBudget(e: any) {
        setBudget(e.target.value)
    }

    //handle Change Information Input 
    function handleChangeInformation(e: any) {
        setInformation(e.target.value)
    }

    // Submit Form
    async function handleSubmitForm() {
        console.log(type, state, name, budget, information)
        await createJob({
            name,
            budget,
            information,
            categoryId: 1,
            imageUrl: 'a',
            typeOfEmployee: 'a',
            jobLevel: 'a',
        })
    }

    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormControl
                        sx={{
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
                                    value={type}
                                    label="Age"
                                    onChange={handleChangeType}
                                    sx={{
                                        border: 'none'
                                    }}
                                >
                                    <MenuItem value={'Design'}>Design</MenuItem>
                                    <MenuItem value={'Sales'}>Sales</MenuItem>
                                    <MenuItem value={'Marketing'}>Marketing</MenuItem>
                                    <MenuItem value={'Business'}>Business</MenuItem>
                                    <MenuItem value={'Human'}>Human Resource</MenuItem>
                                    <MenuItem value={'Finance'}>Finance</MenuItem>
                                    <MenuItem value={'Engineering'}>Engineering</MenuItem>
                                    <MenuItem value={'Technology'}>Technology</MenuItem>

                                </Select>
                            </FormControl>
                        </Stack>

                        <Stack>
                            <label htmlFor="my-name">Name</label>
                            <Input
                                value={name}
                                onChange={handleChangeName}
                                sx={{
                                    borderBottomColor: '#ccc !important'
                                }} id="my-name" aria-describedby="my-helper-text" />
                        </Stack>

                        <Stack>
                            <label htmlFor="my-budget">Budget</label>

                            <Input
                                value={budget}
                                onChange={handleChangeBudget}
                                id="my-budget"
                                aria-describedby="my-helper-text"
                                type="number" />
                        </Stack>

                        <Stack>
                            <label htmlFor="my-img">Img</label>
                            {/* <Button variant="contained" component="label">
                                Upload */}
                            <input accept="image/*" multiple type="file" />
                            {/* </Button> */}
                            {/* <Input id="my-img" aria-describedby="my-helper-text" /> */}
                        </Stack>

                        <Stack>
                            <label htmlFor="my-information">Information</label>
                            <Input
                                value={information}
                                onChange={handleChangeInformation}
                                id="my-information"
                                aria-describedby="my-helper-text" />
                        </Stack>

                        <Stack>
                            <label htmlFor="my-state">State</label>
                            <FormControl fullWidth sx={{
                                border: 'none'
                            }}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={state}
                                    label="Age"
                                    onChange={handleChangeState}
                                    sx={{
                                        border: 'none'
                                    }}
                                >
                                    <MenuItem value={'Pending'}>Pending</MenuItem>
                                    <MenuItem value={'During'}>During</MenuItem>
                                    <MenuItem value={'Done'}>Done</MenuItem>

                                </Select>
                            </FormControl>
                            {/* <Input id="my-state" aria-describedby="my-helper-text" /> */}
                        </Stack>
                        <Btn onClick={handleSubmitForm}>Submit</Btn>
                    </FormControl>
                </Box>
            </Modal>
        </>
    )
}

export default ModalToPostJob