import SwapRoleButton from "@/components/layout/button/SwapRole";
import AvatarDropdown from "@/components/layout/header/AvatarDropdown";
import MessageIconDropdown from "@/components/layout/header/MessageIconDropdown";
import { Avatar, MessageIcon } from "@/img";
import { Stack } from "@mui/material";
import Tippy from "@tippyjs/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const menu = [
    {
        icon: Avatar,
        dropdown: AvatarDropdown
    }
];

export const MenuLogined = () => {
    const { data } = useSession()
    return (
        <Stack
            flexDirection='row'
            gap='20px'
            justifyContent='flex-end'
            alignItems='center'
            width='100%'
            paddingRight='10px'
        >
            <SwapRoleButton />
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
                                    <img style={{
                                        height: '40px',
                                        width: '40px',
                                        borderRadius: '50%',
                                    }} src={data?.user.image as string} alt="image" />
                                    {/* <img src={data?.user.image as string} style={{ height: '20px', width: '20px', cursor: 'pointer' }} alt="" /> */}
                                </Tippy>
                            </Stack>
                        }
                    )
                }
            </Stack>
        </Stack>
    )
}
