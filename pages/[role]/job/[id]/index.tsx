import { PageLayout } from "@/layout/PageLayout";
import { useRouter } from "next/router";
import FreelancerView from "./FreelancerView";
import ClientView from "./ClientView";

function JobDetail() {
    const { asPath } = useRouter()
    return (
        <PageLayout>
            {
                asPath.includes('freelancer') ? <FreelancerView /> : <ClientView />
            }
        </PageLayout>
    )
}

JobDetail.requireLogin = true

export default JobDetail