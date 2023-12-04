import { Avatar, TestImage } from "@/img";
import { Stack, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { JobDetailData } from "@/interface";
import { VND } from "@/components/VNDformat";
import JobStatusLabel from "../dashboard/JobStatusLabel";

interface Prop {
    list: JobDetailData[];
}

export interface JobOwner {
    id: number,
    ownerName: string,
    avatar: string
}
export default function NewJobs(prop: Prop) {
    console.log(prop)
    const router = useRouter()
    return (
        <Stack flex={0.8} gap={'30px'} width={'100%'}>
            {prop.list.map((job: JobDetailData, index: number) => {
                return (
                    <Box key={job.id} sx={{ backgroundColor: "#fff", borderRadius: '12px', padding: '10px 12px' }} onClick={() => { router.push(`/jobs/${job.id}`) }}>
                        <Stack flexDirection={'row'} sx={{ height: "30px" }} justifyContent={'space-between'} alignItems={'center'} marginBottom={'10px'}>
                            <Stack width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box sx={{ fontSize: '20px', fontWeight: 500, textTransform: 'capitalize' }}>{job.name}</Box>
                                <JobStatusLabel jobStatus={job.status} />
                            </Stack>
                            <Box>
                                {job.owner.fullName}
                            </Box>
                        </Stack>
                        <Stack gap={'6px'}>
                            <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Box><p style={{ fontWeight: 500, display: 'inline' }}>Budget:</p> {VND.format(job.budget)}</Box>
                                <Box><p style={{ fontWeight: 500, display: 'inline' }}>Level:</p> {job.level.name}</Box>
                            </Stack>
                            <Stack flexDirection={'row'} justifyContent={'flex-start'} gap={'10px'}>
                                <p style={{ fontWeight: 500, display: 'inline' }}>Category:</p>
                                {job.category.name}
                            </Stack>
                        </Stack>

                        <Box sx={{
                            border: '1px solid #ccc',
                            borderRadius: '8px'
                        }}>
                            <img width='auto' height='100%' src={job.imageUrl} alt="Job Image" />
                        </Box>
                        <Box>
                            <Box sx={{ textOverflow: 'ellipsis', overflow: 'hidden', WebkitLineClamp: 4, WebkitBoxOrient: "vertical", display: '-webkit-box', padding: '6px 12px' }}>{job.information}</Box>
                        </Box>
                    </Box>
                );
            })}
        </Stack>
    );
}