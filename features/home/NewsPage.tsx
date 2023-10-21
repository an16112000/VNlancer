import { ApplicationIcon, DashboardIcon, Logo, NewIcon, PublicProfileIcon, SettingIcon } from "@/img"
import { LayOut as Section } from "@/layout"
import { Box, Stack } from "@mui/material"
import Image from "next/image"
import UserFrame from "../../components/userFrame"
import { useState } from "react"
import FilterBar from "../all-services/filter-bar"
import Posts from "../news/postListForFreelancer"




// const Navigators = [
//     {
//         icon: NewIcon,
//         title: 'News',
//     },
//     {
//         icon: ApplicationIcon,
//         title: 'My applications',
//     },
//     {
//         icon: PublicProfileIcon,
//         title: 'My public profile',
//     },
//     {
//         icon: DashboardIcon,
//         title: 'Dashboard',
//     },
//     {
//         icon: SettingIcon,
//         title: 'Settings',
//     },
// ]

function NewsPage() {
    const [data, setData] = useState('News')
    function callbackFunction(childData: string) {
        setData(childData)
    }
    return (
        <Section>
            {/* <Stack flexDirection={'row'} justifyContent={'space-between'}>
                <UserFrame parentFunction={callbackFunction} active={data} /> */}
                <Posts />
                {/* <FilterBar /> */}
            {/* </Stack> */}
        </Section>
    )
}

export default NewsPage