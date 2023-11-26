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
import Tippy from "@tippyjs/react";

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

const menu = [
    {
        icon: MessageIcon,
        dropdown: MessageIconDropdown
    },
    {
        icon: Avatar,
        dropdown: AvatarDropdown
    }
];

function HeaderForAdmin() {
  const { status } = useSession()
  return (
    <Stack flexDirection='row' alignItems={'center'} justifyContent={'space-between'} sx={{ backgroundColor: '#fff' }}>
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
      <Stack flexDirection={'row'} gap={'10px'} alignItems={'center'} >
                {
                    menu.map(
                        (item, index) => {
                            const Component = item.dropdown
                            return <Stack key={index} sx={{ height: '40px', width: '40px', borderRadius: '10px' }} alignItems={'center'} justifyContent={'center'} border={'1px solid'} borderColor={'#E9EBFD'}>
                                <Tippy interactive content={
                                    <Stack sx={{
                                        backgroundColor: '#fff',
                                        border: '1px solid',
                                        borderColor: 'primary.main',
                                        borderRadius: '6px'
                                    }}>
                                        <Component />
                                    </Stack>
                                }>
                                    <Image src={item.icon} style={{ height: '20px', width: '20px', cursor: 'pointer' }} alt=""></Image>
                                </Tippy>
                            </Stack>
                        }
                    )
                }
            </Stack>
      </Box>
    </Stack>
  );
}

export default HeaderForAdmin;
