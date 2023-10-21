import { Box, Stack } from "@mui/material"
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router"
import { useMemo, useState } from "react";
import OptionDropDown from "./option-drop-down";



function AvatarDropdown() {
    const { asPath } = useRouter()
    const router = useRouter()
    const [mode, setMode] = useState('light')
    const isFreelancerMode = useMemo(() => asPath.includes("/freelancer"), [asPath]);
    const ItemDropDown = {
        'theme': {
            light: {
                title: 'Giao diện sáng',
                icon: <i className="fa-regular fa-sun"></i>
            },
            dark: {
                title: 'Giao diện tối',
                icon: <i className="fa-regular fa-moon"></i>
            }
        },
        'user': [
            {
                icon: <i className="fa-regular fa-bookmark"></i>,
                title: 'Đã lưu'
            },
            {
                icon: <i className="fa-solid fa-list-ul"></i>,
                title: 'Quản lý yêu cầu'
            },
            {
                icon: <i className="fa-regular fa-money-bill-1"></i>,
                title: 'Lịch sử giao dịch'
            },
            {
                icon: <i className="fa-solid fa-gear"></i>,
                title: 'Cài đặt'
            },
        ]
        // {
        //     title: 'Profile',
        //     link: isFreelancerMode ? '/freelancer/my-public-profile' : '/client/my-public-profile'
        // },
        // {
        //     title: 'Sign out',
        //     handleClick: () => signOut()
        // }
    }
    return (
        <Box sx={{ backgroundColor: '#fff', borderRadius: '6px'}}>
            <Stack fontSize={'14px'} justifyContent={'center'} alignItems={'start'} padding={'10px 0'}>
                <Box sx={{ color: '#ccc', fontSize: '12px', paddingLeft: '10px' }}>Giao diện</Box>
                {
                    mode === 'light' 
                    ?
                    <OptionDropDown icon={<i className="fa-regular fa-moon"></i>}>Giao diện tối</OptionDropDown>
                    :
                    <OptionDropDown icon={<i className="fa-regular fa-sun"></i>}>Giao diện sáng</OptionDropDown>
                }
                
                <Box sx={{ backgroundColor: '#ccc', width: '100%', height: '1px', margin: '5px 0' }}></Box>
                <Box sx={{ color: '#ccc', fontSize: '12px', paddingLeft: '10px' }}>@An Đoàn</Box>
                <OptionDropDown icon={<i className="fa-regular fa-bookmark"></i>}>Đã lưu</OptionDropDown>
                <OptionDropDown icon={<i className="fa-solid fa-list-ul"></i>}>Quản lý yêu cầu</OptionDropDown>
                <OptionDropDown onClick={() => router.push('/transactions')} icon={<i className="fa-regular fa-money-bill-1"></i>}>Lịch sử giao dịch</OptionDropDown>
                <OptionDropDown onClick={() => router.push('/settings/client-profile')} icon={<i className="fa-solid fa-gear"></i>}>Cài đặt</OptionDropDown>
                <Box sx={{ backgroundColor: '#ccc', width: '100%', height: '1px' }}></Box>
                <OptionDropDown onClick={() => signOut()} icon={<i className="fa-solid fa-arrow-right-from-bracket"></i>} style={{color: 'red'}}>Đăng xuất</OptionDropDown>

                
                
                
                
                {/* {ItemDropDown.map(
                (item: any, index: number) => {
                    if (item.handleClick) {
                        return <Box sx={{cursor: 'pointer'}} key={index} onClick={item.handleClick}>{item.title}</Box>
                    } else {
                        return <Link key={index} href={item.link}>{item.title}</Link>
                    }
                }
            )} */}
            </Stack>
        </Box>
    )
}

export default AvatarDropdown