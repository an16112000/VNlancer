import { Box, Button, Grid, Stack, TextField } from "@mui/material"
import Comment from "./Comment"
import { Logo } from "@/img"
import { EventData } from "../jobs/ListEvent"
import { useState } from "react"
import { useReviewApi } from "@/api/review"

interface Props {
    id?: number
    listReview?: Review[]
    resetListReview: Function
}

interface Review {
    id?: number
    content?: string
    rate?: number
    writer?: Writer
    createAt?: string
}

interface Writer {
    id?: number
    fullName?: string
    imageUrl?: string
}

// const comment_1 = {
//     user
// }


// const listCommentExample: EventData[] = [
//     {
//         id: 1,
//         user: {
//             id: 1,
//             avatar: './43ea182674ce427ca19fcbe3b36fa924.jpeg',
//             email: 'doanan16112000@gmail.com'
//         },
//         content: 'Tot lam cac anh',
//         createAt: '10:30 18/11/2023',
//         rank: 3
//     },
//     {
//         id: 2,
//         user: {
//             id: 2,
//             avatar: './43ea182674ce427ca19fcbe3b36fa924.jpeg',
//             email: 'phunq@gmail.com'
//         },
//         content: '10 diem, xuat sac',
//         createAt: '10:35 18/11/2023',
//         rank: 5
//     },
//     {
//         id: 3,
//         user: {
//             id: 3,
//             avatar: './43ea182674ce427ca19fcbe3b36fa924.jpeg',
//             email: 'mictosieunhan@gmail.com'
//         },
//         content: 'Tuyet doi trong chat luong',
//         createAt: '11:46 18/11/2023',
//         rank: 4
//     }
// ]

export default function ReviewComponent(props: Props) {
    const [comment, setComment] = useState()
    const { createReView } = useReviewApi()
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
                        <TextField variant="standard" label="Comment" sx={{ flex: 1, fontSize: '12px', height: '65px' }} onChange={event => {
                            setComment(event.target.value as any)
                        }}></TextField>
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
                        }}
                            onClick={() => {
                                createReView({ content: comment, userId: props.id })
                                props.resetListReview()
                            }}
                        >Comment</Button>
                    </Box>

                </Stack>
                {
                    props.listReview?.map(
                        (item: Review, index) => {
                            return <Comment key={item.id} {...item}></Comment>
                        }
                    )
                }

            </Stack>
        </>
    )
}