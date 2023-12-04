import { Box, Button, Grid, Stack, TextField } from "@mui/material"
import Comment from "./Comment"
import { useState } from "react"
import { useReviewApi } from "@/api/review"

interface Props {
    id?: number
    imageUrl?: string
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

export default function ReviewComponent(props: Props) {
    const [comment, setComment] = useState<string>()
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
                        <img style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%',
                        }} src={props.imageUrl} alt="image" />
                        <TextField value={comment} variant="standard" label="Comment" sx={{ flex: 1, fontSize: '12px', height: '65px' }} onChange={event => {
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
                            onClick={async () => {
                                await createReView({ content: comment, userId: props.id })
                                await props.resetListReview()
                                setComment("")
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