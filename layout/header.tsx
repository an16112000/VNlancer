import { Avatar, Box, Stack, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Logo, MessageIcon } from "../img/index";
import { MenuLogined } from "./components/menu-logined";
import { MenuPublic } from "./components/menu_public";
import AvatarDropdown from "@/components/layout/header/AvatarDropdown";
import MessageIconDropdown from "@/components/layout/header/MessageIconDropdown";
import TextInput from "@/components/text-input";
import Btn from "@/components/button";

const loginHeaderItems = [
  {
    icon: MessageIcon,
    dropdown: MessageIconDropdown
  },
  {
    icon: Avatar,
    dropdown: AvatarDropdown
  }
];

const publicHeaderItems = [
  {
    title: "Hire freelancer",
    children: [
      {
        title: 'Find and post',
        children: [
          {
            title: 'Post job and rececive information about freelancer',
            children: []
          },
          {
            title: "Find service packages",
            link: '',
          },
          {
            title: "VNlancer for bussiness",
            link: '',
          }
        ]
      },
      {
        title: 'Find and post',
        children: [
          {
            title: 'Post job and rececive information about freelancer',
            children: []
          },
          {
            title: "Find service packages",
            link: '',
          },
          {
            title: "VNlancer for bussiness",
            link: '',
          }
        ]
      }
    ]
  },
  {
    title: "Find jobs",
    children: [
      {
        title: 'Find and post',
        children: [
          {
            title: 'Post job and rececive information about freelancer',
            children: []
          },
          {
            title: "Find service packages",
            link: '',
          },
          {
            title: "VNlancer for bussiness",
            link: '',
          }
        ]
      },
    ]
  }
]

function Header() {
  const { status } = useSession()
  return (
    <Stack flexDirection='row' alignItems={'center'} justifyContent={'space-between'} sx={{ backgroundColor: '#fff' }} width="100%" position='fixed' zIndex='100'>
      <Link href={'/'}>
        <Image
          style={{
            height: "50px",
          }}
          src={Logo}
          alt={""}
        />
      </Link>
      <Box flex={0.8} flexDirection={'row'} sx={{ width: '530px', height: '40px', display: 'flex', textAlign: 'center' }}>
        <TextInput id={"search"} label={"Search"} styles={{ color: 'text.third', backgroundColor: '#F8F8FD' }} />
        <Btn styles={{ borderRadius: '8px' }}>Search</Btn>
      </Box>
      <Box>
        {
          status == 'authenticated' ? <MenuLogined /> : <MenuPublic />
        }
      </Box>
    </Stack>
  );
}

export default Header;
