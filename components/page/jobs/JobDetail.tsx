import { Grid, Stack } from "@mui/material";

export interface JobDetailData {
    id: number,
    name: string,
    budget: number,
    information: string,
    categoryName: string,
    typeOfEmployee: string,
    jobLevel: string,
    postDate: string,
    dueDate: string,
    status: string,
    client: {
        name: string,
        avatarUrl?: string
    }
}

interface Props {
    jobDetail: JobDetailData
}

export default function JobDetail({ jobDetail }: Props) {
    return (
        <>
            <Stack sx={{ backgroundColor: '#fff', borderRadius: '6px', padding: '10px' }}>
                <div>{jobDetail.postDate} - {jobDetail.dueDate}</div>
                <Grid container sx={{ backgroundColor: '#fff', borderRadius: '6px', padding: '10px' }}>
                    <Grid item xs={6}>
                        {/* <Grid container gap='10px'>
                            <Grid item xs={3}>Id</Grid>
                            <Grid item xs={8}>{jobDetail.id}</Grid>
                        </Grid>
                        <Grid container gap='10px'>
                            <Grid item xs={3}>Name</Grid>
                            <Grid item xs={8}>{jobDetail.name}</Grid>
                        </Grid>
                        <Grid container gap='10px'>
                            <Grid item xs={3}>Budget</Grid>
                            <Grid item xs={8}>{jobDetail.budget}</Grid>
                        </Grid>
                        <Grid container gap='10px'>
                            <Grid item xs={3}>Job Type</Grid>
                            <Grid item xs={8}>{jobDetail.typeOfEmployee}</Grid>
                        </Grid>
                        <Grid container gap='10px'>
                            <Grid item xs={3}>Category</Grid>
                            <Grid item xs={8}>{jobDetail.categoryName}</Grid>
                        </Grid> */}
                        <div>{jobDetail.name}</div>
                        <div>{jobDetail.client.name}</div>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container gap='10px'>
                            <Grid item xs={3}>Post Date</Grid>
                            <Grid item xs={8}>{jobDetail.postDate}</Grid>
                        </Grid>
                        <Grid container gap='10px'>
                            <Grid item xs={3}>Due Date</Grid>
                            <Grid item xs={8}>{jobDetail.dueDate}</Grid>
                        </Grid>
                        <Grid container gap='10px'>
                            <Grid item xs={3}>Status</Grid>
                            <Grid item xs={8}>{jobDetail.status}</Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container gap='10px'>
                    <Grid item xs={3}>Information</Grid>
                    <Grid item xs={8}>{jobDetail.information}</Grid>
                </Grid>
            </Stack>
        </>
    )
}