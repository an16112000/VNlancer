import Btn from "@/components/button"
import TextInput from "@/components/text-input"
import { TestImage } from "@/img"
import { Box, Input, Stack } from "@mui/material"
import Image from "next/image"


function ClientProfileContent() {
    return (
        <Stack gap={'20px'} sx={{
            width: '100%',
        }}>
            <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box sx={{ fontSize: '20px', fontWeight: 500 }}>Ho so nguoi dung</Box>
                <Btn>Show</Btn>
            </Stack>
            <Box sx={{ width: '100%', cursor: 'pointer' }}>
                <Input id="input" type="file" style={{ display: 'none' }} />
                <label htmlFor="input">
                    <Image src={TestImage} alt="" style={{ width: '100px', height: '100px' }} />
                </label>
            </Box>
            <Stack gap={'20px'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                <Box flex={1}>
                    <label htmlFor="">Full name: </label>
                    <TextInput id={"fullname"} label={""} value="Doan Dinh An" />
                </Box>
                <Box flex={1}>
                    <label htmlFor="">Email: </label>
                    <TextInput disable={true} id={"email"} label={""} value="mictosieunhan@gmail.com" />
                </Box>
            </Stack>
            <Stack gap={'20px'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                <Box flex={1}>
                    <label htmlFor="gender">Gender: </label>
                    <TextInput id={"gender"} label={""} />
                </Box>
                <Box flex={1}>
                    <label htmlFor="language">Language: </label>
                    <TextInput id={"language"} label={""} />
                </Box>
            </Stack>
            <Stack gap={'20px'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                <Box flex={1}>
                    <label htmlFor="dateOfBirth">Date of Birth: </label>
                    <TextInput id={"dateOfBirth"} label={""} />
                </Box>
                <Box flex={1}>
                    <label htmlFor="">Instagram: </label>
                    <TextInput id={"address"} label={""} />
                </Box>
            </Stack>
            <Box flex={1}>
                <label htmlFor="">Address: </label>
                <TextInput id={"address"} label={""} />
            </Box>
            <Btn>Update</Btn>
        </Stack>
    )
}

export default ClientProfileContent