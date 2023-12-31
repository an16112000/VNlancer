import TaskStatus from "@/features/myApplications/client/taskStatus";
import Options from "@/features/myApplications/options";
import { LayOutWithHeaderAndUser } from "@/layout/layoutWithHeaderAndUser";
import { Box } from "@mui/material";

const optionsClientApplicants = [
    {
        title: 'Applicants'
    },
    {
        title: 'Job Details'
    }
]

function TaskStatusPage() {
    return (
        <LayOutWithHeaderAndUser>
            <Box sx={{ width: '70%' }}>
                <TaskStatus />                
            </Box>
        </LayOutWithHeaderAndUser>
    )
}

export default TaskStatusPage;