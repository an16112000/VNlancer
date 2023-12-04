import useProfileAPI from "@/api/profile";
import useUserApi from "@/api/user";
import { listProfile } from "@/const";
import { ProfessionalInfo } from "@/interface";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { JobStatus } from "../../dashboard/JobStatusLabel";

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

interface CVAnotherFreelancerProps {
  listData: {
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

export default function CVAnotherFreelancer({ listData }: CVAnotherFreelancerProps) {
  const { profile } = listData;

  return (
    <Stack gap={"15px"}>
      <Box sx={{ fontSize: "16px", fontWeight: "500" }}>Professional Info</Box>

      <Stack key={profile.id} gap={"12px"}>
        <Stack gap={"5px"}>
          <Box sx={{ fontSize: "14px", color: "#7C8493" }}>About Me</Box>
          <Box sx={{ fontSize: "14px", color: "#25324B" }}>
            {profile.aboutMe}
          </Box>
        </Stack>
        <Stack gap={"5px"}>
          <Box sx={{ fontSize: "14px", color: "#7C8493" }}>Level</Box>
          <Box sx={{ fontSize: "14px", color: "#25324B" }}>
            {profile.level.name}
          </Box>
        </Stack>
        <Stack gap={"5px"}>
          <Box sx={{ fontSize: "14px", color: "#7C8493" }}>Work Experience</Box>
          <Box sx={{ fontSize: "14px", color: "#25324B" }}>
            {profile.workExperience}
          </Box>
        </Stack>
        <Stack gap={"5px"}>
          <Box sx={{ fontSize: "14px", color: "#7C8493" }}>Category</Box>
          <Box sx={{ fontSize: "14px", color: "#25324B" }}>
            {profile.category.name}
          </Box>
        </Stack>
        <Stack gap={"5px"}>
          <Box sx={{ fontSize: "14px", color: "#7C8493" }}>Working Type</Box>
          <Box sx={{ fontSize: "14px", color: "#25324B" }}>
            {profile.workingType.name}
          </Box>
        </Stack>
        <Stack gap={"5px"}>
          <Box sx={{ fontSize: "14px", color: "#7C8493" }}>Skill</Box>
          <Box sx={{ fontSize: "14px", color: "#25324B" }}>{profile.skill}</Box>
        </Stack>
      </Stack>

      {/* <Stack gap={'12px'}>
                        <Stack gap={'5px'}>
                            <Box sx={{ fontSize: '14px', color: '#7C8493' }}>About Me</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world. <br></br> For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups. </Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Level</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>Fresher</Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Work Experience</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>4 years</Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Working Type</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>IT</Box>
                        </Stack>
                        <Stack gap={'5px'}>
                            <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Skill</Box>
                            <Box sx={{ fontSize: '14px', color: '#25324B' }}>English, Project Management</Box>
                        </Stack>
                    </Stack> */}
    </Stack>
  );
}
