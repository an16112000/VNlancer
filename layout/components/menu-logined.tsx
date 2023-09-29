import Btn from "@/components/button";
import TextInput from "@/components/text-input";
import AvatarDropdown from "@/features/header/AvatarDropdown";
import MessageIconDropdown from "@/features/header/MessageIconDropdown";
import NotificationIconDropdown from "@/features/header/NotificationIconDropdown";
import { Avatar, MessageIcon, NotificationIcon } from "@/img";
import { Box, Button, Stack } from "@mui/material";
import Tippy from "@tippyjs/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const menu = [
    {
        icon: MessageIcon,
        dropdown: MessageIconDropdown
    },
    {
        icon: NotificationIcon,
        dropdown: NotificationIconDropdown
        // [
        //     {
        //         title: 'NotificationIconDropdown',
        //     }
        // ]
    },
    {
        icon: Avatar,
        dropdown: AvatarDropdown
        //  [     
        //     {
        //         title: 'asaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        //     },{
        //         title: 'My Profile'
        //     },
        //     {
        //         title: 'Sign out',
        //         handleClick: () => signOut()
        //     },
        // ]
    }
];

interface MenuLoginedProps {
    changeRole?: any, 
    role: string,
    linkSwitch: string
}

export function MenuLogined({role, linkSwitch}: MenuLoginedProps) {
    console.log(linkSwitch)
    return (
        <Stack
            flexDirection={'row'}
            flex={'0.9'}
            gap={'20px'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Box flexDirection={'row'} sx={{ width: '530px', height: '40px', display: 'flex', textAlign: 'center' }}>
                <TextInput id={"search"} label={"Search jobs"} styles={{ color: 'text.third', backgroundColor: '#F8F8FD' }} />
                <Btn styles={{ borderRadius: '8px' }}>Search</Btn>
            </Box>
            <Link href={linkSwitch}>
                <Btn styles={{ borderRadius: '10px' }}>Swap to {role}</Btn>
            </Link>
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
        </Stack>
    )
}
