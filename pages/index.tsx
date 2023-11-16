import ContentHome from "@/components/page/home/content";
import DefaultLayout from "@/layout";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <DefaultLayout>
      <Stack gap='50px'>
        <ContentHome />
      </Stack>
    </DefaultLayout>
  );
}