import TextInput from "@/components/text-input"
import { Avatar, Filter, Logo } from "@/img"
import { PageLayout } from "@/layout/PageLayout"
import { Box, Stack } from "@mui/material"
import Image from "next/image"

const messages = [
    {
        id: 1,
        name: 'Jan Mayer',
        logo: Filter,
        lastMessage: 'We want to invite you for a quick interview',
    },
    {
        id: 2,
        name: 'Jan Dude',
        logo: Avatar,
        lastMessage: 'We want to invite you for dinneraaaaaaaaaaaaaaaaa',
    },
]

function Chat() {
    return (
        <PageLayout>
            <Stack flexDirection={'row'} sx={{ backgroundColor: '#fff', height: '80vh' }}>
                <Stack sx={{ width: '300px', padding: '20px 25px 20px 25px' }} border={'1px solid #ccc'}>
                    <TextInput id={"Search-messages"} label={"Search messages"} styles={{marginBottom: '20px'}} />
                    <Stack gap={'20px'} flexDirection={'column'} width={'100%'}>
                        {
                            messages.map(
                                (mess, index) => {
                                    return <>
                                        <Stack key={index} flexDirection={'row'} width={'236px'} alignItems={'center'} gap={'10px'}>
                                            <Image style={{ width: '25px', height: '25px' }} src={mess.logo} alt="" />
                                            <Box sx={{ width: '90%' }} >
                                                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                                    <Box sx={{ fontSize: '16px', fontWeight: 500 }}>{mess.name}</Box>
                                                    <Box flex={1} sx={{ fontSize: '12px', fontWeight: 300, textAlign: 'right' }}>10 minutes ago</Box>
                                                </Stack>
                                                <Box sx={{
                                                    width: '100%',
                                                    fontSize: '14px',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}>
                                                    {mess.lastMessage}
                                                </Box>
                                            </Box>
                                        </Stack>
                                        <Box sx={{height: '1px', width: '100%', backgroundColor: '#ccc'}}></Box>
                                    </>
                                }
                            )
                        }
                    </Stack>
                </Stack>
                <Stack flex={1} sx={{ border: '1px solid #ccc' }}>

                </Stack>
            </Stack>
        </PageLayout>
    )
}

Chat.requireLogin = true

export default Chat