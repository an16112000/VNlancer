import Btn from "@/components/button";
import TextInput from "@/components/text-input";
import {
  Box,
  Modal,
  Stack,
  SwipeableDrawer,
  Typography,
  keyframes,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import TextInputModal from "./text-input-modal";
import TextAreaInputModal from "./text-area-input";
import ButtonTransparent from "@/components/buttontransparent";
import OptionsModal from "./options-modal";
import useProfileAPI from "@/api/profile";

interface ModalCreateNewProfileProps {
  state: boolean;
  onClick: any;
}

interface createProfileData {
  aboutMe?: string;
  levelId?: number;
  workExperience?: string;
  categoryId?: number;
  workingTypeId?: number;
  skill?: string;
}

function ModalCreateNewProfile({
  state,
  onClick: handleClose,
}: ModalCreateNewProfileProps) {
  const [inputs, setInputs] = useState<createProfileData>({
    aboutMe: "",
    levelId: 0,
    workExperience: "",
    categoryId: 0,
    workingTypeId: 0,
    skill: "",
  });
  const hookProfile = useProfileAPI();

  function handleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit() {
    try {
      await hookProfile.createProfile(inputs);
    } catch (Error) {
      alert(Error);
    }
    console.log(inputs);
  }
  return (
    <Modal
      open={state}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "300px",
          transform: "translate(-50%, -50%)",
          transition: "all .9s",
          width: 600,
          backgroundColor: "background.paper",
          border: "2px solid #000",
          height: "100vh",
        }}
      >
        <Stack gap={"20px"} sx={{ width: "100%", padding: "30px 20px" }}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box sx={{ fontSize: "28px", fontWeight: 700 }}>
              Add new profile
            </Box>
            <ButtonTransparent onClick={handleClose}>X</ButtonTransparent>
          </Stack>
          <Box>
            <p>Level</p>
            <OptionsModal
              functionChange={handleChange}
              isMutiple={false}
              type={"level"}
            />
          </Box>
          <Box>
            <p>Category</p>
            <OptionsModal functionChange={handleChange} type={"categories"} />
          </Box>
          <Box>
            <p>Working Type</p>
            <OptionsModal
              functionChange={handleChange}
              type={"working-type"}
              isMutiple={false}
            />
          </Box>
          <Box>
            <p>Work Experience</p>
            <TextInputModal
              functionChange={handleChange}
              type="workExperience"
            />
          </Box>
          <Box>
            <p>Skill</p>
            <TextInputModal functionChange={handleChange} type="skill" />
          </Box>
          <Box>
            <p>About Me</p>
            <TextInputModal functionChange={handleChange} type="aboutMe" />
          </Box>
          <Btn onClick={handleSubmit}>Add</Btn>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default ModalCreateNewProfile;
