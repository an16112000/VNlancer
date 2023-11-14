import ContentHome from "@/features/home/content";
import { Stack } from "@mui/material";
import LayOutWithOnlyHeader from "@/layout/layoutWithOnlyHeader";

export default function Home() {
  return (
    <LayOutWithOnlyHeader>
      <Stack gap='50px'>
        <ContentHome />
      </Stack>
    </LayOutWithOnlyHeader>
  );
}