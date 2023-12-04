import useApplicationApi from "@/api/application";
import useProfileAPI from "@/api/profile";
import useUserApi from "@/api/user";
import { JobDetailData } from "@/interface";
import { Box, Button, Modal, Stack, Tab, Tabs, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface PopUpAppllyProps {
    isOpen: boolean,
    handleClose: Function,
    dataJob: JobDetailData
}

export default function PopUpApplly({ isOpen, handleClose, dataJob }: PopUpAppllyProps) {
    const {data: session} = useSession();
    const [content, setContent] = useState(1);
    const [listProfessional, setListProfessional] = useState([]);
    const hookProfile = useProfileAPI();
    const hookApplication = useApplicationApi()
    const hookUser = useUserApi();

    useEffect(() => {
      async function fetchData() {
        const idUser = (await hookUser.getUserInformation()).id;
        const data = await hookProfile.getAll(idUser);
        setListProfessional(data);
      }
      fetchData();
    }, []);
    async function createApplied() {
        await hookApplication.createApllication({
          jobId: dataJob.id,
          profileId: content,
        });
    }

    console.log(
        {
            jobId: dataJob?.id,
            profileId: content
        }
    )
    return (
      <>
        <Modal open={isOpen} onClose={() => handleClose()}>
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 800,
              padding: "10px 10px",
              bgcolor: "background.paper",
              boxShadow: 24,
              "aria- labelledby": "modal-modal-title",
              "aria-describedby": "modal-modal-description",
              p: 4,
              borderRadius: "10px",
            }}
          >
            <Stack gap={"30px"} width={"100%"}>
              <Box gap={"15px"} width={"100%"}>
                <Box sx={{ fontSize: "22px", fontWeight: "500" }}>
                  {dataJob?.name}
                </Box>
                <TextField
                  sx={{ width: "100%", borderColor: "" }}
                  variant="outlined"
                  label="Username"
                >
                  {dataJob?.owner.fullName}
                </TextField>
              </Box>

              <Box gap={"15px"} width={"100%"}>
                <Box sx={{ fontSize: "22px", fontWeight: "500" }}>Your CV</Box>
                {/* <TextField sx={{ width: '100%' }}> */}
                {/* <input type="file" name="file" /> */}
                {/* </TextField> */}
                <Tabs
                  value={content}
                  onChange={(event: any, value) => setContent(value)}
                  sx={{ borderRadius: "8px" }}
                >
                  {listProfessional.map((profile: any, index: number) => {
                    return (
                      <Tab
                        key={profile.id}
                        label={`CV ${profile.id}`}
                        value={profile.id}
                      />
                    );
                  })}
                  {/* <Tab label="Review" value={Content.review} /> */}
                </Tabs>
              </Box>

              <Box gap={"15px"} width={"100%"}>
                <Box sx={{ fontSize: "22px", fontWeight: "500" }}>
                  Cover letter
                </Box>
                <Box>
                  What skills, work project or archievements make you strong
                  candidate?
                </Box>
                <TextField sx={{ width: "100%" }}></TextField>
              </Box>

              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "#2E4BB2",
                  color: "#fff",
                  borderRadius: 8,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#2E4BB2",
                    opacity: 0.7,
                  },
                }}
                onClick={createApplied}
              >
                Send my CV
              </Button>
            </Stack>
          </Box>
        </Modal>
      </>
    );
}