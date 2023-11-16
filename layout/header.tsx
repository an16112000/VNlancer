import { Avatar, Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Logo, MessageIcon } from "../img/index";
import { MenuLogined } from "./components/menu-logined";
import { MenuPublic } from "./components/menu_public";
import AvatarDropdown from "@/components/layout/header/AvatarDropdown";
import MessageIconDropdown from "@/components/layout/header/MessageIconDropdown";

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
    <Stack flexDirection='row' sx={{ backgroundColor: '#fff' }}>
      <Link href={'/'}>
        <Image
          style={{
            height: "50px",
          }}
          src={Logo}
          alt={""}
        />
      </Link>
      {
        status == 'authenticated' ? <MenuLogined /> : <MenuPublic />
      }
    </Stack>
  );
}

export default Header;
