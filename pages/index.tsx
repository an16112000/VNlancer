import Auth from "@/assets/common/auth";
import ContentHome from "@/features/home/content";
import { Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import { LayOut as Section } from "../layout";
<<<<<<< HEAD
import NumberInputIntroduction from "@/components/input-price";
import { blue } from "@mui/material/colors";
import TextInput from "@/components/text-input";
import FilterBar from "@/features/all-services/filter-bar";
import Title from "@/components/title";
import axios from "axios";
=======
import NewsPage from "@/features/home/NewsPage";
import LayOutWithOnlyHeader from "@/layout/layoutWithOnlyHeader";
>>>>>>> 4376d050f7aba4400ce5284841ee661b047e5f33

const inter = Inter({ subsets: ["latin"] });

async function callBackendDemo() {
  const result = await axios.post("http://localhost:1337/api/users-permissions/auth/login", {
    username: "phucnq@ttlab.com",
    password: "Ctsv@2021"
  })
  console.log(result);
}

export default function Home() {
<<<<<<< HEAD
  return (
    <Section>
      <Box>
        <Title value="Tất cả dịch vụ" />
        <FilterBar />
      </Box>
      <Button onClick={() => {
        callBackendDemo()
      }}>click me !!</Button>
    </Section>
  );
=======
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
>>>>>>> 4376d050f7aba4400ce5284841ee661b047e5f33
}

