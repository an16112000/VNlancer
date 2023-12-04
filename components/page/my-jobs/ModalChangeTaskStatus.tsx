import useApplicationApi from "@/api/application";
import useMyTaskApi from "@/api/my-task";
import {
  Box,
  Button,
  Modal,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface ModalChangeTaskStatusProps {
  open: boolean;
  handleClose: Function;
  taskId: number;
  status?: string;
}

export default function ModalChangeTaskStatus({
  open,
  handleClose,
  taskId,
  status = "",
}: ModalChangeTaskStatusProps) {
  const { updateTask } = useMyTaskApi();
  console.log(taskId, status);
  async function changeStatus() {
    await updateTask(taskId, status);
  }

  console.log(taskId, status);
  return (
    <>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            borderRadius: "10px",
            p: 4,
          }}
        >
          <Stack alignItems={"center"} gap={"20px"}>
            <Box
              textAlign={"center"}
              sx={{
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Do you agree change status to "{status}"?
            </Box>
            <Stack
              gap={"120px"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Button
                onClick={() => {status && changeStatus()}}
                sx={{
                  backgroundColor: "#1876d3",
                  color: "#fff",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#1876d3",
                    opacity: 0.7,
                  },
                }}
              >
                Yes
              </Button>
              <Button
                onClick={() => handleClose()}
                sx={{
                  backgroundColor: "#ff0000",
                  color: "#fff",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#ff0000",
                    opacity: 0.7,
                  },
                }}
              >
                No
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
