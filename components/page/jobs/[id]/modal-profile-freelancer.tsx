import { Box, Modal } from "@mui/material";
import ProfileAnotherFreelancer from "../../user/[id]/ProfileAnotherFreelancer";
import CVAnotherFreelancer from "../../user/[id]/CVAnotherFreelancer";
import { JobStatus } from "../../dashboard/JobStatusLabel";

interface ModalProfileFreelancerProps {
  open: boolean;
  handleClose: Function;
  userId: number;
  profile: {
    id: number;
    user: {
      id: number;
      fullName: string;
      gender: string;
      dateOfBirth: string;
      phoneNumber: string;
      address: string;
    };
    profile: {
      id: number;
      workingType: {
        id: number;
        name: string;
      };
      category: {
        id: number;
        name: string;
      };
      level: {
        id: number;
        name: string;
      };
      skill: string;
      workExperience: string;
      aboutMe: string;
    };
    job: {
      id: number;
      name: string;
    };
    status: JobStatus;
  };
}

export default function ModalProfileFreelancer({
  open,
  handleClose,
  userId,
  profile
}: ModalProfileFreelancerProps) {
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
            width: 600,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            borderRadius: "10px",
            p: 4,
          }}
        >
          <ProfileAnotherFreelancer listData={profile} />
          <CVAnotherFreelancer listData={profile} />
        </Box>
      </Modal>
    </>
  );
}
