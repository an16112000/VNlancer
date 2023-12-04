import useApplicationApi from "@/api/application";
import useJobApi from "@/api/jobs";
import useUserApi from "@/api/user";
import PendingJobComponent from "@/components/page/my-jobs/PendingJob";
import { PageLayout } from "@/layout/PageLayout";
import { Tab, Tabs } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function MyApplications() {
    const {data: session, status} = useSession()
    if(status == 'authenticated') {
        return (
            <PageLayout>
                <Tabs value={'Applied'} >
                    <Tab label="Applied" value={'Applied'} />
                </Tabs>
                <PendingJobComponent />
            </PageLayout>
        )
    }
    else {
        return <></>
    }
}