import useCategoryApi from "@/api/category";
import useJobApi from "@/api/jobs";
import Btn from "@/components/button";
import { listCategoryExample } from "@/const";
import OptionsModal from "@/features/settings/options-modal";
import { Avatar } from "@/img";
import { Category } from "@/model/category";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Stack,
  SxProps,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import { SetStateAction, useEffect, useState } from "react";

const names = listCategoryExample.map((item) => item);

enum Content {
  Information,
  Image,
}

interface ModalToPostJobProps {
  isOpen: boolean;
  handleClose: any;
  refreshList: Function;
}

const style: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "600px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: "500px",
  overflowY: "scroll",
  overflowX: "hidden",
  p: 4,
  borderRadius: "10px",
  gap: "10px",
};

function ModalToPostJob({
  isOpen,
  handleClose,
  refreshList,
}: ModalToPostJobProps) {
  const [selectedNames, setSelectedNames] = useState([]);

  const { getAllCategory } = useCategoryApi();
  const { createJob, uploadImage } = useJobApi();
  const [categories, setCategories] = useState<Category[]>([]);
  const { status } = useSession();
  // useEffect(() => {
  //     (async () => {
  //         try {
  //             const { data } = await getAllCategory()
  //             setCategories(data.categories)
  //         } catch (exception) {
  //         }
  //     })()
  // }, [getAllCategory, status])
  const [categoryId, setCategoryId] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [budget, setBudget] = useState<number>(0);
  const [information, setInformation] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [levelId, setLevelId] = useState<number>(0);
  const [workingTypeId, setWorkingTypeId] = useState<number>(0);
  const [image, setImage] = useState(Avatar);
  const [jobId, setJobId] = useState<number>(0);

  const [content, setContent] = useState<Content>(Content.Information);

  // function handleCreateJob() {

  // }
  console.log(categoryId, name, budget, information, levelId, workingTypeId);
  // handle Change Value Name Input
  function changeName(e: any) {
    setName(e.target.value);
  }

  function changeCategoryId(e: any) {
    const id = e.target.value;
    setCategoryId(id);
  }

  //handle Change Budget Input
  function changeBudget(e: any) {
    setBudget(e.target.value);
  }

  //handle Change Information Input
  function changeInformation(e: any) {
    setInformation(e.target.value);
  }
  function changeDueDate(e: any) {
    setDueDate(e.target.value);
  }
  function changeLevelId(e: any) {
    setLevelId(e.target.value);
  }
  function changeWorkingTypeId(e: any) {
    setWorkingTypeId(e.target.value);
  }

  function changeImage(e: any) {
    setImage(e.target.value);
  }

  // Submit Form
  async function handleSubmitForm() {
    if (content == Content.Information) {
      try {
        const data = await createJob({
          name,
          budget,
          information,
          categoryId,
          workingTypeId,
          levelId,
        });
        setJobId(data.id);
        setContent(Content.Image);
      } catch (exception) {
        console.log(exception);
      }
    } else if (content == Content.Image) {
      const form = document.querySelector("form");
      const formData = new FormData(form ?? undefined);
      await uploadImage(jobId, formData)
      refreshList();
      setContent(Content.Information)
      handleClose();
    }
  }
  // console.log(selectedNames);
  return (
    <Modal open={isOpen} onClose={handleClose} disableScrollLock>
      <FormControl sx={style}>
        <Tabs
          value={content}
          onChange={(event: any, value) => setContent(value)}
          sx={{ borderRadius: "8px" }}
        >
          <Tab label="Information" value={Content.Information} />
          <Tab disabled label="Image" value={Content.Image} />
        </Tabs>
        {content == Content.Information ? (
          <>
            <h1
              style={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              POST A JOB
            </h1>

            <Box>
              <p>Categories: </p>
              <OptionsModal type={"categories"} onChange={changeCategoryId} />
            </Box>

            <Box>
              <p>Name:</p>
              <TextField
                label="Name"
                variant="outlined"
                focused
                value={name}
                onChange={changeName}
                sx={{
                  width: "100%",
                  label: {
                    color: "#ccc !important",
                  },
                  fieldset: {
                    border: "1px solid #ccc",
                  },
                }}
              />
            </Box>

            <Box>
              <p>Budget:</p>
              <TextField
                type="number"
                label="Budget"
                variant="outlined"
                focused
                value={budget}
                onChange={changeBudget}
                sx={{
                  width: "100%",
                  label: {
                    color: "#ccc !important",
                  },
                  fieldset: {
                    border: "1px solid #ccc",
                  },
                }}
              />
            </Box>

            <Box>
              <p>Due Date:</p>
              <TextField
                type="date"
                label="Due Date"
                variant="outlined"
                focused
                value={dueDate}
                onChange={changeDueDate}
                sx={{
                  width: "100%",
                  label: {
                    color: "#ccc !important",
                  },
                  fieldset: {
                    border: "1px solid #ccc",
                  },
                }}
              />
            </Box>

            <Box>
              <p>Working Types:</p>
              <OptionsModal
                type={"working-type"}
                onChange={changeWorkingTypeId}
              />
            </Box>

            <Box>
              <p>Levels:</p>
              <OptionsModal type={"level"} onChange={changeLevelId} />
            </Box>

            <Box>
              <p>Informations: </p>
              <TextField
                type="text"
                label="Information"
                variant="outlined"
                focused
                value={information}
                onChange={changeInformation}
                sx={{
                  width: "100%",
                  label: {
                    color: "#ccc !important",
                  },
                  fieldset: {
                    border: "1px solid #ccc",
                  },
                }}
              />
            </Box>
          </>
        ) : (
          <>
            <form onSubmit={(event) => {
              event.currentTarget
            }}>
              <input type="file" name="image" />
            </form>
          </>
        )}
        <Btn onClick={handleSubmitForm}>Submit</Btn>
      </FormControl>
    </Modal>
  );
}

export default ModalToPostJob;
