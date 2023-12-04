import useProfileAPI from "@/api/profile";
import { Avatar } from "@/img";
import { Box, Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IntroduceProps {
  fullName?: string;
  address?: string;
  dateOfBirth?: string;
  email?: string;
  gender?: string;
  phoneNumber?: string;
  imageUrl?: string
}

export default function Introduce(props: IntroduceProps) {
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
            src={props.imageUrl || Avatar}
            width={1}
            height={1}
            style={{ height: "60px", width: "60px", borderRadius: "50%" }}
          />
          <Box sx={{ height: "40px" }}>
            <Box sx={{ fontSize: "16px", fontWeight: "500" }}>
              {props?.fullName}
            </Box>
            <Box sx={{ fontSize: "12px", fontWeight: "300" }}>
              {props?.email}
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
                {props.email}
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
                {props?.phoneNumber}
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
                {props?.address}
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
