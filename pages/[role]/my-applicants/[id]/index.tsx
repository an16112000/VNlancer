import useApplicationApi from "@/api/application";
import ListApplicant from "@/components/page/jobs/ListApplicant";
import { PageLayout } from "@/layout/PageLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid, TextField, Button, Stack, Box, Tabs, Tab } from "@mui/material";

enum Content {
  applied = "APPLIED",
  accepted = "ACCEPTED",
}

export default function MyApplicants() {
  const router = useRouter();
  const { getAllJobApplication } = useApplicationApi();
  const jobId = router.query.id as string;
  const { data: session, status } = useSession();
  const [listApplicant, setListApplicant] = useState([]);
  const [content, setContent] = useState<Content>(Content.applied);

  useEffect(() => {
    if (status == "authenticated") {
      fetchData();
    } else {
    }
    async function fetchData() {
      const data = await getAllJobApplication(jobId);
      setListApplicant(data);
    }
  }, [status]);
  if (status == "authenticated") {
    return (
      <PageLayout>
        This is {jobId} applicant page
        <Tabs
          value={content}
          onChange={(event: any, value) => setContent(value)}
          sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
        >
          <Tab label="APPLIED" value={Content.applied} />
          <Tab label="ACCEPTED" value={Content.accepted} />
        </Tabs>
        <ListApplicant listApplicant={listApplicant} filter={content} />
      </PageLayout>
    );
  } else {
    return <></>;
  }
}
