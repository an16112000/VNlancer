import { Box, Stack, Tab, Tabs } from "@mui/material";

const data = {
  id: 1,
  user: {
    id: 1,
    fullName: "An",
    gender: "Male",
    dateOfBirth: "2000-11-16",
    phoneNumber: "0343668668",
    address: "Ngọc Lâm",
  },
  profile: {
    id: 1,
    aboutMe: "3333",
    level: {
      id: 1,
      name: "Intern",
    },
    workExperience: "4 years",
    category: {
      id: 1,
      name: "FE",
    },
    workingType: {
      id: 1,
      name: "PT",
    },
    skill: "123",
  },
  job: {
    id: 1,
    name: "1",
    workingType: {
      id: 1,
      name: "PT",
    },
  },
  status: "APPLIED",
};

export default function ProfileAnotherFreelancer() {
  const { user, job } = data;
  return (
    <Box>
      <Stack gap={"15px"}>
        <Box sx={{ fontSize: "16px", fontWeight: "500" }}>Personal Info</Box>
        <Stack gap={"10px"}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box flex={1}>
              <Box sx={{ fontSize: "14px", fontWeight: 300, color: "#7C8493" }}>
                Full Name
              </Box>
              <Box sx={{ fontSize: "14px", fontWeight: 500, color: "#25324B" }}>
                {user?.fullName}
              </Box>
            </Box>
            <Box flex={1}>
              <Box sx={{ fontSize: "14px", fontWeight: 300, color: "#7C8493" }}>
                Gender
              </Box>
              <Box sx={{ fontSize: "14px", fontWeight: 500, color: "#25324B" }}>
                {user?.gender}
              </Box>
            </Box>
          </Stack>

          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box flex={1}>
              <Box sx={{ fontSize: "14px", fontWeight: 300, color: "#7C8493" }}>
                Date of Birth
              </Box>
              <Box sx={{ fontSize: "14px", fontWeight: 500, color: "#25324B" }}>
                {user?.dateOfBirth}
              </Box>
            </Box>
            <Box flex={1}>
              <Box sx={{ fontSize: "14px", fontWeight: 300, color: "#7C8493" }}>
                Phone Number
              </Box>
              <Box sx={{ fontSize: "14px", fontWeight: 500, color: "#25324B" }}>
                {user?.phoneNumber}
              </Box>
            </Box>
          </Stack>

          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box flex={1}>
              <Box sx={{ fontSize: "14px", fontWeight: 300, color: "#7C8493" }}>
                Address
              </Box>
              <Box sx={{ fontSize: "14px", fontWeight: 500, color: "#25324B" }}>
                {user?.address}
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            border: "0.5px solid #D6DDEB",
            margin: "15px 0",
          }}
        ></Box>
        {/* <ProfessionalInfoComponent /> */}
      </Stack>
    </Box>
  );
}
