import { TestImage } from "@/img"
import { Grid, TextField, Button, Stack, Box, Tabs, Tab } from "@mui/material"
import { useState } from "react"
import Image from "next/image";
import Introduce from "./Introduce";
import ContactComponent from "./ContactComponent";
import ReviewComponent from "./ReviewComponent";
import { UserProfile } from "@/api/user";
import ProfileComponent from "./ProfileComponent";

interface Props {
    name?: string,
    level?: string,
    workExperience?: string,
    imageUrl?: string
}

enum Content {
    profile,
    review
}

export default function InformationComponent(props: Props) {
    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [workExperience, setWorkExperience] = useState('')
    const [content, setContent] = useState<Content>(Content.profile)
    const [userProfile, setUserProfile] = useState<UserProfile>()

    function saveInformation() { }

    return (
        <Stack flexDirection={'row'} gap={'15px'} alignItems={'flex-start'}>
            <Introduce {...props} />
            <Box flex={2} style={{ backgroundColor: '#fff', borderRadius: '8px' }}>
                <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ backgroundColor: '#fff', borderRadius: '8px', }}>
                    <Tab label="Profile" value={Content.profile} />
                    <Tab label="Review"  />
                </Tabs>
            
                <Box sx={{padding: '10px 10px'}}>
                    {
                        content == Content.profile ? <ProfileComponent /> : <ReviewComponent {...userProfile}/>
                    }
                </Box>
                
                    
                
                {/* <Grid container padding={2}>
                    <Grid item xs={3} alignSelf='center'>Full Name</Grid>
                    <Grid item xs={8}><TextField disabled fullWidth value={name} label={'Đoàn An'} /></Grid>
                </Grid>
                <Grid container padding={2}>
                    <Grid item xs={3} alignSelf='center'>Level</Grid>
                    <Grid item xs={8}><TextField disabled fullWidth value={level} label={'Đoàn An'} /></Grid>
                </Grid>
                <Grid container padding={2}>
                    <Grid item xs={3} alignSelf='center'>Work Experience</Grid>
                    <Grid item xs={8}><TextField disabled fullWidth value={workExperience} label={'Đoàn An'} /></Grid>
                </Grid>
                <Grid container padding={2}>
                    <Grid item xs={3} alignSelf='center'>Avatar</Grid>
                    <Grid item xs={8}><Image style={{ height: 'auto', width: '100%' }} src={TestImage} alt="" /></Grid>
                </Grid>
                <Grid container padding={2}>
                    <Grid item xs={3} alignSelf='center' />
                    <Grid item xs={8} display='flex' direction='row-reverse'><Button sx={{ backgroundColor: '#1976d2', color: '#fff' }} onClick={saveInformation}>Save Information</Button></Grid>
                </Grid> */}
            </Box>
        </Stack>
    )
}