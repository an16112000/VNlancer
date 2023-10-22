import GetAllJobs from "@/api/get-all-jobs";
import { PostListForCustomer, PostListForFreelancer } from "@/features/news";
import { LayOut } from "@/layout";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";


function NewsPage() {
    const router = useRouter()
    const role = router.query.role
    GetAllJobs()
    return (
        <>
            <LayOut>
                <Stack width={'45%'} justifyContent={'center'}>

                    {
                        role === 'freelancer' ? <PostListForFreelancer /> : <PostListForCustomer />
                    }
                </Stack>
            </LayOut>
        </>
    )
}

NewsPage.requireLogin = true

export default NewsPage