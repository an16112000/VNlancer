import useProfileAPI from "@/api/profile";
import { Avatar } from "@/img";
import { Box, Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IntroduceProps {
  name?: string;
  level?: string;
  workExperience?: string;
  imageUrl?: string;
}

interface introductionProps {
  fullName: string;
  address: string;
  dateOfBirth: string;
  email: string;
  gender: string;
  phoneNumber: string;
}

export default function Introduce(props: IntroduceProps) {
  const [introduction, setIntroduction] = useState<introductionProps>();
  const { data: session } = useSession();
  const hookProfile = useProfileAPI();

  useEffect(() => {
    async function fetchData() {
      const data = await hookProfile.getIntroduction();
      console.log(data);
      setIntroduction(data);
    }
    fetchData();
  }, [hookProfile]);
  console.log(session);
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        flex: 1,
        padding: "10px 10px",
      }}
    >
      <Stack gap={"25px"}>
        <Stack flexDirection={"row"} gap={"15px"}>
          <Image
            unoptimized
            alt=""
            src={session?.user.image || Avatar}
            width={1}
            height={1}
            style={{ height: "60px", width: "60px", borderRadius: "50%" }}
          />
          <Box sx={{ height: "40px" }}>
            <Box sx={{ fontSize: "16px", fontWeight: "500" }}>
              {introduction?.fullName}
            </Box>
            <Box sx={{ fontSize: "12px", fontWeight: "300" }}>
              {introduction?.email}
            </Box>
          </Box>
        </Stack>
        <Box
          sx={{ height: "1px", width: "100%", border: "0.5px solid #D6DDEB" }}
        ></Box>
        <Stack gap={"15px"}>
          <Box>Contact</Box>
          <Stack flexDirection={"row"} gap={"15px"} alignItems={"flex-start"}>
            <i
              className="fa-regular fa-envelope"
              style={{ color: "#7C8493" }}
            ></i>
            <Box>
              <Box
                sx={{ lineHeight: "16px", color: "#7C8493", fontSize: "14px" }}
              >
                Email
              </Box>
              <Box sx={{ fontSize: "14px", color: "#25324B" }}>
                {session?.user.email}
              </Box>
            </Box>
          </Stack>
          <Stack flexDirection={"row"} gap={"15px"} alignItems={"flex-start"}>
            <i
              className="fa-solid fa-mobile-screen-button"
              style={{ color: "#7C8493" }}
            ></i>
            <Box>
              <Box
                sx={{ lineHeight: "16px", color: "#7C8493", fontSize: "14px" }}
              >
                Phone
              </Box>
              <Box sx={{ fontSize: "14px", color: "#25324B" }}>
                {introduction?.phoneNumber}
              </Box>
            </Box>
          </Stack>

          <Stack flexDirection={"row"} gap={"15px"} alignItems={"flex-start"}>
            <i className="fa-regular fa-map" style={{ color: "#7C8493" }}></i>
            <Box>
              <Box
                sx={{ lineHeight: "16px", color: "#7C8493", fontSize: "14px" }}
              >
                Address
              </Box>
              <Box sx={{ fontSize: "14px", color: "#25324B" }}>
                {introduction?.address}
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
