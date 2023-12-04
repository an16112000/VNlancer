import ContentHome from "@/components/page/home/content";
import DefaultLayout from "@/layout";
import { Stack } from "@mui/material";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession()
  console.log(session)
  return (
    <DefaultLayout>
      <Stack gap='50px'>
        <ContentHome />
      </Stack>
    </DefaultLayout>
  );
}