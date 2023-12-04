import ContentHome from "@/components/page/home/content";
import DefaultLayout from "@/layout";
import { Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  return (
    <DefaultLayout>
      <Stack gap='50px'>
        <ContentHome />
      </Stack>
    </DefaultLayout>
  );
}