import UserFrame from "@/components/userFrame";
import { Box, Container, Grid, SxProps } from "@mui/material";
import Header from "./header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function LayOutWithHeaderAndUser({ children }: Props) {

  return (
    <Container maxWidth='xl'>
      <Header />
      <Box sx={contentStyle}>
        <Grid container spacing={2}>
          <Grid item>
            <UserFrame />
          </Grid>
          <Grid item xl xs>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const contentStyle: SxProps = {
  paddingTop: '10px',
}
