import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Button, Stack, TextField } from "@mui/material";
import { LayOut as Section } from "../layout";
import NumberInputIntroduction from "@/components/input-price";
import { blue } from "@mui/material/colors";
import TextInput from "@/components/text-input";
import FilterBar from "@/features/all-services/filter-bar";
import Title from "@/components/title";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Section>
      <Box>
        <Title value="Tất cả dịch vụ" />
        <FilterBar />
      </Box>
    </Section>
  );
}
