import { TestImage } from "@/img";
import { Stack, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

interface Prop {
    list: Job[];
}
export interface Job {
    id: number,
    name: string,
    budget: number,
    information: string,
    categoryName: string,
    typeOfEmployee: string,
    jobLevel: string,
    postDate: string,
    owner: JobOwner
}

export interface JobOwner {
    id: number,
    ownerName: string,
    avatar: string
}
export default function NewJobs(prop: Prop) {
    const router = useRouter()
    return (
        <Stack gap={'30px'} width={'100%'}>
            {prop.list.map((job: Job, index: number) => {
                return (
                    <Box key={job.id} sx={{ backgroundColor: "#fff", borderRadius: '12px', padding: '10px 12px' }} onClick={() => { router.push(`/jobs/${job.id}`) }}>
                        <Stack flexDirection={'row'} sx={{ height: "30px" }} justifyContent={'space-between'} alignItems={'center'}>
                            <Box>
                                <Button sx={{ backgroundColor: '' }}>{job.categoryName}</Button>
                            </Box>
                            <Box>
                                {job.name}
                            </Box>
                        </Stack>
                        <Stack flexDirection={"row"} sx={{ height: "50px" }} alignItems={'center'}>
                            <Stack flex={8} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Box sx={{ height: "100%" }}>
                                    <p style={{ fontSize: '16x', fontWeight: '500' }}>{job.postDate}</p>
                                    <p style={{ fontSize: '12px', fontWeight: '300' }}>{job.owner.ownerName}</p>
                                </Box>
                                <Box sx={{ height: '100%' }}>
                                    <p>{job.budget}</p>
                                </Box>
                            </Stack>
                        </Stack>
                        <Box>
                            <Image style={{ height: 'auto', width: '100%' }} src={TestImage} alt="" />
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