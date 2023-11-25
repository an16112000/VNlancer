import LeftNavigation from "@/components/LeftNavigation";
import { Box, Container, Grid, SxProps } from "@mui/material";
import Header from "./header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function PageLayout({ children }: Props) {
  return (
    <Container maxWidth='lg' >
      <Header />
      <Box sx={contentStyle}>
        <Grid container spacing={{ md: 1 }}>
          <Grid item md={3} lg={2.5} display={{ xs: 'none', md: 'block' }}>
            <LeftNavigation />
          </Grid>
          <Grid item xs>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const contentStyle: SxProps = {
  paddingTop: '10px',
  width: '100%',
  justifyContent: 'space-between',
  display: 'flex',
}
