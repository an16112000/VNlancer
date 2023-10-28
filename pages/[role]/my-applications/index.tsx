import { ClientApplications } from "@/features/myApplications/client";
import { FreelancerApplications } from "@/features/myApplications/freelancer";
import { LayOutWithHeaderAndUser } from "@/layout/layoutWithHeaderAndUser";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useMemo } from "react";



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
