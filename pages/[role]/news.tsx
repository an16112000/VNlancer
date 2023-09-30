import { PostListForCustomer, PostListForFreelancer } from "@/features/news";
import { LayOut } from "@/layout";
import {useRouter} from "next/router"

function NewsPage() {
    const router = useRouter()
    const role = router.query.role
    return(
        <>
            <LayOut>
                {
                    role === 'freelancer' ? <PostListForFreelancer />  : <PostListForCustomer />
                }
            </LayOut>
        </>
    )
}

NewsPage.requireLogin = true

export default NewsPage