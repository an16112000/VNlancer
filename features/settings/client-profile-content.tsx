import useProfileAPI from "@/api/profile";
import Btn from "@/components/button";
import TextInput from "@/components/text-input";
import { TestImage } from "@/img";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

function ClientProfileContent() {
  const [sex, setSex] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();
  const [inputs, setInputs] = useState({
    fullName: session?.user.name,
  });

  var bodyFormData = new FormData();

  const hookProfile = useProfileAPI()
  //   const [list, setList] = useState({
  //     fullName:
  //   });
  console.log(session);

  const handleChange = (event: SelectChangeEvent) => {
    const name = event.target.name;
    const value = event.target.value;
    name == "gender"
      ? setSex(event.target.value as string)
      : name == "dateOfBirth"
      ? setDateOfBirth(event.target.value as string)
      : name == "address"
      ? setAddress(value as string)
      : name == "phoneNumber"
      ? setPhoneNumber(value as string)
      : setPassword(value as string);
    setInputs((prev) => ({ ...prev, [name]: value }));
};

async function handleSubmit() {
      bodyFormData.append('form', JSON.stringify(inputs))
      console.log(bodyFormData.get('form'))
    try {
        await hookProfile.createIntroduction(bodyFormData);
    }
    catch(Error) {
        alert('DM')
    }
    console.log(inputs);
  }
  return (
    <Stack
      gap={"20px"}
      sx={{
        width: "100%",
      }}
    >
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box sx={{ fontSize: "20px", fontWeight: 500 }}>Ho so nguoi dung</Box>
        <Btn>Show</Btn>
      </Stack>
      <Box sx={{ width: "100%", cursor: "pointer" }}>
        <Input id="input" type="file" style={{ display: "none" }} />
        <label htmlFor="input">
          <Image
            unoptimized
            src={session?.user.image || TestImage}
            width={100}
            height={100}
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </label>
      </Box>
      <Stack
        gap={"20px"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box flex={1}>
          <label htmlFor="">Full name: </label>
          <TextInput id={"fullname"} label={""} value={session?.user.name} />
        </Box>
        <Box flex={1}>
          <label htmlFor="">Email: </label>
          <TextInput
            disable={true}
            id={"email"}
            label={""}
            value={session?.user.email}
          />
        </Box>
      </Stack>
      <Stack
        gap={"20px"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box flex={1}>
          <label htmlFor="gender">Gender: </label>
          {/* <TextInput id={"gender"} label={""} /> */}
          <FormControl
            fullWidth
            sx={{
              ".MuiInputBase-root ": {
                height: "40px",
                borderRadius: 0,
              },
              fieldset: {
                borderWidth: "0",
                borderBottom: "1px solid #777575",
              },
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sex}
              label="Sex"
              name="gender"
              onChange={handleChange}
              defaultValue={sex}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box flex={1}>
          <Box>Phone number: </Box>
          <Input
            sx={{ width: "100%" }}
            name="phoneNumber"
            defaultValue={phoneNumber}
            onChange={(e: any) => handleChange(e)}
          />
        </Box>
      </Stack>
      <Stack
        gap={"20px"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box flex={1}>
          <Box>Date of Birth: </Box>
          <Input
            sx={{ width: "100%" }}
            name="dateOfBirth"
            defaultValue={dateOfBirth}
            onChange={(e: any) => handleChange(e)}
          />
        </Box>
        <Box flex={1}>
          <Box>Password: </Box>
          <Input
            sx={{ width: "100%" }}
            name="password"
            defaultValue={password}
            onChange={(e: any) => handleChange(e)}
          />
        </Box>
      </Stack>
      <Box flex={1}>
        <Box>Address: </Box>
        <Input
          sx={{ width: "100%" }}
          name="address"
          defaultValue={address}
          onChange={(e: any) => handleChange(e)}
        />
      </Box>
      <Btn onClick={handleSubmit}>Update</Btn>
    </Stack>
  );
}

export default ClientProfileContent;
