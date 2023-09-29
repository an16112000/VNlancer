import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { LayOut as Section } from "@/layout";
import Title from "@/components/title";
import Btn from "@/components/button";
import TextInput from "@/components/text-input";
import { LayOutWithHeaderAndUser } from "@/layout/layoutWithHeaderAndUser";
import ButtonTransparent from "@/components/buttontransparent";
import { useEffect, useMemo, useState } from "react";
import OptionsOfApplication from "@/features/myApplications/options";
import TableOfApplication from "@/features/myApplications/table";
import { FreelancerApplications } from "@/features/myApplications/freelancer";
import { useRouter } from "next/router";
import { ClientApplications } from "@/features/myApplications/client";



function MyApplications() {
  const { asPath } = useRouter()
  const isFreelancerMode = useMemo(() => asPath.includes("/freelancer"), [asPath]);
  let Component = useMemo(() => (isFreelancerMode ? FreelancerApplications : ClientApplications), [isFreelancerMode])
  return (
    <LayOutWithHeaderAndUser>
      <Box sx={{ width: '70%' }}>
        <Component />
      </Box>
    </LayOutWithHeaderAndUser>
  )
}
MyApplications.requireLogin = true

export default MyApplications;
