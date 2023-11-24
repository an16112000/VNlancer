import { Box, Slider, Stack } from "@mui/material"
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router"
import { useMemo, useState } from "react";
import OptionDropDown from "./option-drop-down";



function AvatarDropdown() {
    const router = useRouter()
    return (
        <Box sx={{ backgroundColor: '#fff', borderRadius: '6px' }}>
            <Stack fontSize={'14px'} justifyContent={'center'} alignItems={'start'} padding={'10px 0'}>
                <Box sx={{ color: '#ccc', fontSize: '12px', paddingLeft: '10px' }}>Giao diện</Box>
                <OptionDropDown icon={<i className="fa-regular fa-moon"></i>}>Giao diện tối</OptionDropDown>
                <Box sx={{ backgroundColor: '#ccc', width: '100%', height: '1px', margin: '5px 0' }}></Box>
                <Box sx={{ color: '#ccc', fontSize: '12px', paddingLeft: '10px' }}>@An Đoàn</Box>
                <OptionDropDown icon={<i className="fa-regular fa-bookmark"></i>}>Đã lưu</OptionDropDown>
                <OptionDropDown icon={<i className="fa-solid fa-list-ul"></i>}>Quản lý yêu cầu</OptionDropDown>
                <OptionDropDown onClick={() => router.push('/transactions')} icon={<i className="fa-regular fa-money-bill-1"></i>}>Lịch sử giao dịch</OptionDropDown>
                <OptionDropDown onClick={() => router.push('/settings/client-profile')} icon={<i className="fa-solid fa-gear"></i>}>Cài đặt</OptionDropDown>
                <Box sx={{ backgroundColor: '#ccc', width: '100%', height: '1px' }}></Box>
                <OptionDropDown onClick={() => signOut()} icon={<i className="fa-solid fa-arrow-right-from-bracket"></i>} style={{ color: 'red' }}>Đăng xuất</OptionDropDown>
            </Stack>
        </Box>
    )
}

export default AvatarDropdown