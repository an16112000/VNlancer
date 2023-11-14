import useCategoryApi from "@/api/category";
import { useJobApi } from "@/api/get-all-jobs";
import Btn from "@/components/button";
import { Category } from "@/model/category";
import { FormControl, MenuItem, Modal, SxProps, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

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
    const { getAllCategory } = useCategoryApi()
    const [categories, setCategories] = useState<Category[]>([])
    const { status } = useSession()
    useEffect(() => {
        (async () => {
            try {
                const { data } = await getAllCategory()
                setCategories(data.categories)
            } catch (exception) {
            }
        })()
    }, [status])
    const [category, setCategory] = useState<Category>();
    const [name, setName] = useState<string>();
    const [budget, setBudget] = useState<number>();
    const [information, setInformation] = useState<string>();
    const [dueDate, setDueDate] = useState<string>();
    const [need, setNeed] = useState<number>();
    const [jobLevel, setJobLevel] = useState<string>()
    const [employeeType, setEmployeeType] = useState<string>()
    const { createJob } = useJobApi();


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
    function changeNeed(e: any) {
        setNeed(e.target.value)
    }
    function changeJobLevel(e: any) {
        setJobLevel(e.target.value)
    }
    function changeEmployeeType(e: any) {
        setEmployeeType(e.target.value)
    }

    // Submit Form
    async function handleSubmitForm() {
        console.log(name, category, budget, information, dueDate, need)
        // await createJob({
        //     name,
        //     budget,
        //     information,
        //     categoryId: type,
        //     imageUrl: 'a',
        //     typeOfEmployee: 'a',
        //     jobLevel: 'a',
        // })
    }

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

                <TextField select label="Type" focused>
                    {categories.map(category => <MenuItem value={category.id}>{category.name}</MenuItem>)}
                </TextField>

                <TextField label="Name" variant="outlined" focused value={name} onChange={changeName} />

                <TextField type="number" label="Budget" variant='outlined' focused value={budget} onChange={changeBudget} />

                <TextField type='text' label="Information" variant='outlined' focused value={information} onChange={changeInformation} />

                <TextField type='date' label="Due Date" variant='outlined' focused value={dueDate} onChange={changeDueDate} />

                <TextField type='text' label="Employee Type" variant='outlined' focused value={employeeType} onChange={changeEmployeeType} />

                <TextField type='text' label="Job Level" variant='outlined' focused value={jobLevel} onChange={changeJobLevel} />

                <TextField type='number' label="Need" variant='outlined' focused value={need} onChange={changeNeed} />

                <Btn onClick={handleSubmitForm}>Submit</Btn>
            </FormControl>
        </Modal>
    )
}

export default ModalToPostJob