import { Box, Button, Modal, Stack } from "@mui/material";
import { useState } from "react";

interface ModalCVProps {}

export default function ModalCV() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Modal
      open={open}
      onClose={() => handleClose}
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
          p: 4,
        }}
      >
        <Button onClick={() => handleClose()}>x</Button>
        123
      </Box>
    </Modal>
  );
}
