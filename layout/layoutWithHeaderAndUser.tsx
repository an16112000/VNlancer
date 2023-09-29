import UserFrame from "@/components/userFrame";
import Header from "./header";
import { Box, Container, Stack } from "@mui/material";
import Posts from "@/features/home/posts";
import FilterBar from "@/features/all-services/filter-bar";
import { useState } from "react";

interface LayOutProps {
  children: any;
}

export function LayOutWithHeaderAndUser({ children }: LayOutProps) {
  
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Box marginTop={'120px'}>
          <Stack flexDirection={'row'} justifyContent={'space-between'}>
            <UserFrame />
            {children}
          </Stack>
        </Box>
      </Container>
    </>
  );
}
