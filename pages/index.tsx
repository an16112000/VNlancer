import Auth from "@/assets/common/auth";
import ContentHome from "@/features/home/content";
import { Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import { LayOut as Section } from "../layout";
import NewsPage from "@/features/home/NewsPage";
import LayOutWithOnlyHeader from "@/layout/layoutWithOnlyHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session, status);
  
    return (
      <>
        <LayOutWithOnlyHeader>
          <Stack gap={'50px'}>
            <ContentHome />
          </Stack>
        </LayOutWithOnlyHeader>
      </>
    );
}

