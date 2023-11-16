import { Grid } from "@mui/material";
import LeftNavigation from "./LeftNavigation";
import { Props as NavigationButtonProps } from "@/components/NavigationButton";
import { ReactNode } from "react";
const navigators: NavigationButtonProps[] = [
    {
        title: 'Contract',
        pathName: '/freelancer/profile/contract'
    },
    {
        title: 'Experience',
        pathName: '/freelancer/profile/experience'
    },
    {
        title: 'Information',
        pathName: '/freelancer/profile/information'
    }
]

export default function FreelancerProfile({ children }: { children: ReactNode }) {
    return (
        <Grid container gap='10px'>
            <LeftNavigation navigators={navigators} />
            {children}
        </Grid>
    )
}