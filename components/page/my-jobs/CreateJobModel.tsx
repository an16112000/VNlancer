import useCategoryApi from "@/api/category";
import useJobApi from "@/api/jobs";
import Btn from "@/components/button";
import { listCategoryExample } from "@/const";
import OptionsModal from "@/features/settings/options-modal";
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
  TextField,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { SetStateAction, useEffect, useState } from "react";

const names = listCategoryExample.map((item) => item);

interface ModalToPostJobProps {
  isOpen: boolean;
  handleClose: any;
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

function ModalToPostJob({ isOpen, handleClose }: ModalToPostJobProps) {
  const [selectedNames, setSelectedNames] = useState([]);

  const { getAllCategory } = useCategoryApi();
  const { createJob } = useJobApi();
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
  const [name, setName] = useState<string>('');
  const [budget, setBudget] = useState<number>(0);
  const [information, setInformation] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [jobLevel, setJobLevel] = useState<string>('');
  const [employeeType, setEmployeeType] = useState<string>('');

  // handle Change Value Name Input
  function changeName(e: any) {
    setName(e.target.value);
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
  function changeJobLevel(e: any) {
    setJobLevel(e.target.value);
  }
  function changeEmployeeType(e: any) {
    setEmployeeType(e.target.value);
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
        
      });
      handleClose();
    } catch (exception) {
      console.log(exception);
    }
  }
  console.log(selectedNames);
  return (
    <Modal open={isOpen} onClose={handleClose} disableScrollLock>
      <FormControl sx={style}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          POST A JOB
        </h1>

        {/* <TextField select label="Type" focused onChange={e => {
                    setCategoryId(Number(e.target.value))
                }}>
                    {categories.map((category, index) => <MenuItem key={index} value={category.id}>{category.name}</MenuItem>)}
                </TextField>  */}

        <Box>
          <p>Categories: </p>
          <OptionsModal type={"categories"} isMutiple={true} />
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
          <OptionsModal type={"working-type"} isMutiple={true} />
        </Box>

        <Box>
          <p>Levels:</p>
          <OptionsModal type={"level"} isMutiple={true} />
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

        <Btn onClick={handleSubmitForm}>Submit</Btn>
      </FormControl>
    </Modal>
  );
}

export default ModalToPostJob;
