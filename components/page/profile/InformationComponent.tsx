import { TestImage } from "@/img"
import { Grid, TextField, Button } from "@mui/material"
import { useState } from "react"
import Image from "next/image";

interface Props {
    name?: string,
    level?: string,
    workExperience?: string,
    imageUrl?: string
}

export default function InformationComponent(props: Props) {
    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [workExperience, setWorkExperience] = useState('')

    function saveInformation() { }

    return (
        <>
            <Grid container padding={2}>
                <Grid item xs={3} alignSelf='center'>Full Name</Grid>
                <Grid item xs={8}><TextField fullWidth value={name} onChange={(e) => setName(e.target.value)} /></Grid>
            </Grid>
            <Grid container padding={2}>
                <Grid item xs={3} alignSelf='center'>Level</Grid>
                <Grid item xs={8}><TextField fullWidth value={level} onChange={(e) => setLevel(e.target.value)} /></Grid>
            </Grid>
            <Grid container padding={2}>
                <Grid item xs={3} alignSelf='center'>Work Experience</Grid>
                <Grid item xs={8}><TextField fullWidth value={workExperience} onChange={(e) => setWorkExperience(e.target.value)} /></Grid>
            </Grid>
            <Grid container padding={2}>
                <Grid item xs={3} alignSelf='center'>Avatar</Grid>
                <Grid item xs={8}><Image style={{ height: 'auto', width: '100%' }} src={TestImage} alt="" /></Grid>
            </Grid>
            <Grid container padding={2}>
                <Grid item xs={3} alignSelf='center' />
                <Grid item xs={8} display='flex' direction='row-reverse'><Button sx={{ backgroundColor: '#1976d2', color: '#fff' }} onClick={saveInformation}>Save Information</Button></Grid>
            </Grid>
        </>
    )
}