import { Box, FormControl, Modal } from "@mui/material"

interface Category {
    id: number
    name: string
}

interface Job {
    category: Category,
    name: string,
    budget: number,
    information: string,
    need: number,
    dueDate: string
}

interface Props {
    isOpen: boolean,
    open: () => Function,
    close: () => Function
}

export default function CreateJobForm(props: Props) {
    return (
        <Modal open={props.isOpen} onClose={props.close}>
            <FormControl>

            </FormControl>
        </Modal>
    )
}