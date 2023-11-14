import Btn from "@/components/button";
import { Modal, Box, FormControl, Stack, Select, MenuItem } from "@mui/material";
import { Input } from "postcss";
interface Props {
    isOpen: boolean,
    closeModel: Function
}

export default function CreateJobModel(props: Props) {
    return (
        <>
            <Modal
                open={props.isOpen}
                onClose={() => props.closeModel()}
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
                            <input accept="image/*" multiple type="file" />
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
                        </Stack>
                        <Btn onClick={handleSubmitForm}>Submit</Btn>
                    </FormControl>
                </Box>
            </Modal>
        </>
    )
}