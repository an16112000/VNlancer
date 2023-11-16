import { PageLayout } from "@/layout/PageLayout";
import { useRouter } from "next/router";
import FreelancerView from "./FreelancerView";
import ClientView from "./ClientView";

export default function JobDetail() {
    const { asPath } = useRouter()
    return (
        <PageLayout>
            {
                asPath.includes('freelancer') ? <FreelancerView /> : <ClientView />
            }
        </PageLayout>
    )
}