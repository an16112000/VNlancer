import { ClientApplications } from "@/features/myApplications/client";
import { FreelancerApplications } from "@/features/myApplications/freelancer";
import { LayOutWithHeaderAndUser } from "@/layout/layoutWithHeaderAndUser";
import { RootState } from "@/state/store";
import { UserRole, changeRole } from "@/state/user";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function MyApplications() {
  useSelector((state: RootState) => state.user)
  const { asPath } = useRouter()
  const [isFreelancer, setIsFreelancer] = useState(true)
  useEffect(() => {
    if (asPath.includes("/freelancer")) {
      setIsFreelancer(true)
    }
    else {
      setIsFreelancer(false)
    }
  })
  return (
    <LayOutWithHeaderAndUser>
      <Box>
        {
          isFreelancer ? (
            <FreelancerApplications />
          ) : (
            <ClientApplications />
          )
        }
      </Box>
    </LayOutWithHeaderAndUser>
  )
}
MyApplications.requireLogin = true

export default MyApplications;