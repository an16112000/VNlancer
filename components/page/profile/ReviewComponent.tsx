import { Box, Button, Grid, Stack, TextField } from "@mui/material"
import Comment from "./Comment"
import { Logo } from "@/img"
import { EventData } from "../jobs/ListEvent"

interface Props {
    name?: string,
    level?: string,
    workExperience?: string,
    imageUrl?: string
}

// const comment_1 = {
//     user
// }


const listCommentExample: EventData[] = [
    {
        id: 1,
        user: {
            id: 1,
            avatar: './43ea182674ce427ca19fcbe3b36fa924.jpeg',
            email: 'doanan16112000@gmail.com'
        },
        content: 'Tot lam cac anh',
        createAt: '10:30 18/11/2023',
        rank: 3
    },
    {
        id: 2,
        user: {
            id: 2,
            avatar: './43ea182674ce427ca19fcbe3b36fa924.jpeg',
            email: 'phunq@gmail.com'
        },
        content: '10 diem, xuat sac',
        createAt: '10:35 18/11/2023',
        rank: 5
    },
    {
        id: 3,
        user: {
            id: 3,
            avatar: './43ea182674ce427ca19fcbe3b36fa924.jpeg',
            email: 'mictosieunhan@gmail.com'
        },
        content: 'Tuyet doi trong chat luong',
        createAt: '11:46 18/11/2023',
        rank: 4
    }
]

export default function ReviewComponent(props: Props) {
    return (
        <>
            <Stack sx={{
                padding: '20px 20px'
            }}
                gap={'20px'}>
                <Stack>
                    <Stack
                        flexDirection={'row'}
                        gap={'20px'}
                        alignItems={'center'}
                    >
                        <Box sx={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%',
                            backgroundColor: 'red'
                        }}></Box>
                        <TextField variant="standard" label="Comment" sx={{ flex: 1, fontSize: '12px', height: '65px' }}></TextField>
                    </Stack>
                    <Box sx={{ textAlign: 'right' }}>
                        <Button sx={{
                            textTransform: 'none', color: '#000', fontSize: '12px', '&:hover': {
                                backgroundColor: '#D9D9D9'
                            }
                        }}>Cancel</Button>
                        <Button sx={{
                            textTransform: 'none', color: '#000', fontSize: '12px', '&:hover': {
                                backgroundColor: '#D9D9D9'
                            }
                        }}>Comment</Button>
                    </Box>

                </Stack>
                {/* <Stack
                    gap={'10px'}
                >
                    <Stack
                        flexDirection={'row'}
                        alignItems={'center'}
                        gap={'20px'}
                    >
                        <Box sx={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%',
                            backgroundColor: 'red'
                        }}></Box>
                        <Stack>
                            <Box sx={{ fontSize: '16px', fontWeight: 500 }}>Đoàn An</Box>
                            <Box sx={{ fontSize: '10px', fontWeight: 500 }}>10:30 18/11/2023</Box>
                        </Stack>
                    </Stack>

                    <Box sx={{ fontSize: '12px', paddingLeft: '60px' }}>Tôi rất hài lòng với sự phục vụ của bạn. CHúng tôi chúc bạn thành công trong tương lai và hi vọng chúng ta sẽ có lần hợp tác trong thơi gian tới</Box>
                </Stack> */}
                {
                    listCommentExample.map(
                        (item: EventData, index) => {
                            return <Comment key={item.id}>{item}</Comment>
                        }
                    )
                }

            </Stack>
        </>
    )
}