import useCategoryApi from "@/api/category";
import { useJobApi } from "@/api/get-all-jobs";
import Btn from "@/components/button";
import { listCategoryExample } from "@/const";
import { Category } from "@/model/category";
import { Chip, FormControl, InputLabel, MenuItem, Modal, OutlinedInput, Select, Stack, SxProps, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { SetStateAction, useEffect, useState } from "react";



const names = listCategoryExample.map(item => item);

interface ModalToPostJobProps {
    isOpen: boolean,
    handleClose: any,
}

const style: SxProps = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '600px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    height: '500px',
    overflowY: 'scroll',
    overflowX: "hidden",
    p: 4,
    borderRadius: '10px',
    gap: '10px',
};

function ModalToPostJob({ isOpen, handleClose }: ModalToPostJobProps) {

    const [selectedNames, setSelectedNames] = useState([]);

    const { getAllCategory } = useCategoryApi()
    const { createJob } = useJobApi()
    const [categories, setCategories] = useState<Category[]>([])
    const { status } = useSession()
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const { data } = await getAllCategory()
    //             setCategories(data.categories)
    //         } catch (exception) {
    //         }
    //     })()
    // }, [getAllCategory, status])
    const [categoryId, setCategoryId] = useState<number>();
    const [name, setName] = useState<string>();
    const [budget, setBudget] = useState<number>();
    const [information, setInformation] = useState<string>();
    const [dueDate, setDueDate] = useState<string>();
    const [jobLevel, setJobLevel] = useState<string>()
    const [employeeType, setEmployeeType] = useState<string>()


    // handle Change Value Name Input
    function changeName(e: any) {
        setName(e.target.value)
    }

    //handle Change Budget Input
    function changeBudget(e: any) {
        setBudget(e.target.value)
    }

    //handle Change Information Input 
    function changeInformation(e: any) {
        setInformation(e.target.value)
    }
    function changeDueDate(e: any) {
        setDueDate(e.target.value)
    }
    function changeJobLevel(e: any) {
        setJobLevel(e.target.value)
    }
    function changeEmployeeType(e: any) {
        setEmployeeType(e.target.value)
    }

    // Submit Form
    async function handleSubmitForm() {
        try {
            await createJob({
                name,
                budget,
                information,
                categoryId,
                typeOfEmployee: employeeType,
                jobLevel,
                dueDate
            })
            handleClose()
        } catch (exception) {
            console.log(exception);
        }
    }
    console.log(listCategoryExample)
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            disableScrollLock
        >
            <FormControl
                sx={style}
            >
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: '500'
                }}>POST A JOB</h1>

                 {/* <TextField select label="Type" focused onChange={e => {
                    setCategoryId(Number(e.target.value))
                }}>
                    {categories.map((category, index) => <MenuItem key={index} value={category.id}>{category.name}</MenuItem>)}
                </TextField>  */}
                 <FormControl sx={{ m: 1, width: 500 }}>
                    <InputLabel>Category Name</InputLabel>
                    <Select
                        multiple
                        value={selectedNames}
                        onChange={(e) => setSelectedNames(e.target.value as SetStateAction<never[]>)}
                        input={<OutlinedInput label="Category Name" />}
                        renderValue={(selected) => (
                            <Stack gap={1} direction="row" flexWrap="wrap">
                                {selected.map((value) => (
                                    <Chip
                                        key={value}
                                        label={value}
                                        onDelete={() =>
                                            setSelectedNames(
                                                selectedNames.filter((item) => item !== value)
                                            )
                                        }
                                        deleteIcon={
                                            // <CloseIcon
                                            //     onMouseDown={(event: { stopPropagation: () => any; }) => event.stopPropagation()}
                                            // />
                                            <i className="fa-solid fa-xmark" onMouseDown={(event: { stopPropagation: () => any; }) => event.stopPropagation()}></i>
                                        }
                                    />
                                ))}
                            </Stack>
                        )}
                    >
                        {names.map((name) => {
                            console.log(name)
                            return <MenuItem
                                key={name.id}
                                value={name.name}
                                sx={{ justifyContent: "space-between" }}
                            >
                                {name.name}
                                {/* {selectedNames.includes(name) ? <CheckIcon color="info" /> : null} */}
                            </MenuItem>
                        }
                        )
                        }
                    </Select>
                </FormControl> 

                <TextField label="Name" variant="outlined" focused value={name} onChange={changeName} />

                <TextField type="number" label="Budget" variant='outlined' focused value={budget} onChange={changeBudget} />

                <TextField type='text' label="Information" variant='outlined' focused value={information} onChange={changeInformation} />

                <TextField type='date' label="Due Date" variant='outlined' focused value={dueDate} onChange={changeDueDate} />

                <TextField type='text' label="Employee Type" variant='outlined' focused value={employeeType} onChange={changeEmployeeType} />

                <TextField type='text' label="Job Level" variant='outlined' focused value={jobLevel} onChange={changeJobLevel} /> 

                <Btn onClick={handleSubmitForm}>Submit</Btn>
            </FormControl>
        </Modal>
    )
}

export default ModalToPostJob