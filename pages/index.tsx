import Auth from "@/assets/common/auth";
import ContentHome from "@/features/home/content";
import { Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import { LayOut as Section } from "../layout";
import NewsPage from "@/features/home/NewsPage";
import LayOutWithOnlyHeader from "@/layout/layoutWithOnlyHeader";

const inter = Inter({ subsets: ["latin"] });

// async function callBackendDemo() {
//   const result = await axios.post("http://localhost:1337/api/users-permissions/auth/login", {
//     username: "phucnq@ttlab.com",
//     password: "Ctsv@2021"
//   })
//   console.log(result);
// }

export default function Home() {
  const { data } = useSession();
  console.log(data);
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

