import ListApplicant from "@/components/page/jobs/ListApplicant";
import { PageLayout } from "@/layout/PageLayout";
import { useRouter } from "next/router";

export default function MyApplicants() {
  const router = useRouter();
  const jobId = router.query.id;
  return (
    <PageLayout>
      This is {jobId} applicant page
      <ListApplicant />
    </PageLayout>
  );
}
