import { Avatar, Button, Grid, Stack, TextField } from "@mui/material"

export interface EventData {
    id: number,
    user: {
        id: number,
        avatar: string,
        email: string
    },
    content: string,
    createAt: string,
    rank: number
}

interface Props {
    listEvent: EventData[]
}

export default function ListEvent(props: Props) {
    return (
        <Stack sx={{ backgroundColor: '#fff', borderRadius: '6px', padding: '10px' }}>
            <Grid container sx={{ paddingBottom: '5px' }}>
                <Grid item xs={1} textAlign='center'><Avatar /></Grid>
                <Grid item xs={11} alignSelf='center'>
                    <TextField placeholder="Looks like I'm focused but no" label='New Message' fullWidth variant="standard"></TextField>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={1} textAlign='center' />
                <Grid item xs={11} >
                    <Stack justifyContent='flex-end' direction='row'>
                        <Button>Cancel</Button>
                        <Button>Comment</Button>
                    </Stack>
                </Grid>
            </Grid>
            {props.listEvent?.map(event => {
                return (
                    <>
                        <Grid container sx={{ paddingTop: '10px' }}>
                            <Grid item xs={1} textAlign='center'><Avatar /></Grid>
                            <Grid item xs={11} alignSelf='center'>
                                <div>{event.user.email}</div>
                                <div>{event.createAt}</div>
                            </Grid>
                            {/* <Grid item xs={3} textAlign='center'>{event.content}</Grid>
                            <Grid item xs={3} textAlign='center'>{event.createAt}</Grid> */}
                        </Grid>
                        <Grid container sx={{ paddingBottom: '5px' }}>
                            <Grid item xs={1} textAlign='center' />
                            <Grid item xs={11} alignSelf='center'>
                                {event.content}
                            </Grid>
                            {/* <Grid item xs={3} textAlign='center'>{event.content}</Grid>
                            <Grid item xs={3} textAlign='center'>{event.createAt}</Grid> */}
                        </Grid>
                    </>
                )
            })}
        </Stack>
    )
}