import { PageLayout } from "@/layout/PageLayout";
import { RootState } from "@/state/store";
import { UserRole } from "@/state/user";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import JobContent from "@/components/page/jobs/[id]";

interface Props {
    id: number,
    status: string
}

export default function JobDetail(props: Props) {
    const router = useRouter()
    return (
        <PageLayout>
            <div>
                {/* job {router.query.id} */}
                <JobContent />
            </div>
        </PageLayout>
    )
}