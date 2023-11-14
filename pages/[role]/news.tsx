import { PostListForCustomer, PostListForFreelancer } from "@/features/news";
import { Layout } from "@/layout";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";


function NewsPage() {
    const router = useRouter()
    const role = router.query.role
    return (
        <Layout>
            <Stack width={'45%'} justifyContent={'center'}>
                {
                    role === 'freelancer' ? <PostListForFreelancer /> : <PostListForCustomer />
                }
            </Stack>
        </Layout>
    )
}

NewsPage.requireLogin = true

export default NewsPage