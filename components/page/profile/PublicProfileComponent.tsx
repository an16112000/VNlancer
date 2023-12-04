import { TestImage } from "@/img"
import { Grid, TextField, Button, Stack, Box, Tabs, Tab } from "@mui/material"
import { useEffect, useState } from "react"
import Image from "next/image";
import Introduce from "./Introduce";
import ContactComponent from "./ContactComponent";
import ReviewComponent from "./ReviewComponent";
import { UserProfile } from "@/api/user";
import ProfileComponent from "./ProfileComponent";
import useProfileAPI from "@/api/profile";

interface Props {
    name?: string,
    level?: string,
    workExperience?: string,
    imageUrl?: string
}

interface UserInformation {
    id?: number
    email?: string
    fullName?: string
    address?: string
    gender?: string
    dateOfBirth?: string
    phoneNumber?: string
    imageUrl?: string
    active: boolean
    listReview?: Review[]
}

interface Review {
    id?: number
    content?: string
    rate?: number
    writer?: Writer
    createAt?: string
}

interface Writer {
    id?: number
    fullName?: string
    imageUrl?: string
}

enum Content {
    profile,
    review
}

export default function InformationComponent(props: Props) {
    const [content, setContent] = useState<Content>(Content.profile)
    const [userInformation, setUserInformation] = useState<UserInformation>()
    const { getIntroduction } = useProfileAPI()
    useEffect(() => {
        updateInformation()
    }, [])

    async function updateInformation() {
        const data: UserInformation = await getIntroduction()
        setUserInformation({ ...data })
    }

    return (
        <Stack flexDirection={'row'} gap={'15px'} alignItems={'flex-start'}>
            <Introduce {...userInformation} />
            <Box flex={2} style={{ backgroundColor: '#fff', borderRadius: '8px' }}>
                <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ backgroundColor: '#fff', borderRadius: '8px', }}>
                    <Tab label="Profile" value={Content.profile} />
                    <Tab label="Review" />
                </Tabs>

                <Box sx={{ padding: '10px 10px' }}>
                    {
                        content == Content.profile ? <ProfileComponent /> : <ReviewComponent {...userInformation} resetListReview={async () => await updateInformation()} />
                    }
                </Box>
            </Box>
        </Stack>
    )
}