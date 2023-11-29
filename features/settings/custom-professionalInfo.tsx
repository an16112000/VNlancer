import { Box, Stack, TextField } from "@mui/material";
import { useState } from "react";

interface CustomProfessionalInfoProps {
    profile: any
}

export default function CustomProfessionalInfo({ profile }: CustomProfessionalInfoProps) {
    const [inputs, setInputs] = useState({...profile});

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values: any) => ({ ...values, [name]: value }))
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        console.log(inputs)
    }
    return (
        <>
            <form key={profile.id} name="myForm" onSubmit={handleSubmit}>
                <Stack key={profile.id} gap={'12px'}>
                    <Stack gap={'5px'}>
                        <Box sx={{ fontSize: '14px', color: '#7C8493' }}>About Me</Box>
                        <textarea onChange={handleChange} rows={4} style={{ fontSize: '14px', color: '#25324B' }} defaultValue={profile.aboutMe} name="aboutMe" />
                    </Stack>
                    <Stack gap={'5px'}>
                        <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Level</Box>
                        <TextField onChange={handleChange} sx={{ fontSize: '14px', color: '#25324B' }} defaultValue={profile.level.name} name="level" />
                    </Stack>
                    <Stack gap={'5px'}>
                        <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Work Experience</Box>
                        <TextField onChange={handleChange} sx={{ fontSize: '14px', color: '#25324B' }} defaultValue={profile.workExperience} name="workExperience" />

                    </Stack>
                    <Stack gap={'5px'}>
                        <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Category</Box>
                        <TextField onChange={handleChange} sx={{ fontSize: '14px', color: '#25324B' }} defaultValue={profile.category.name} name="category" />

                    </Stack>
                    <Stack gap={'5px'}>
                        <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Working Type</Box>
                        <TextField onChange={handleChange} sx={{ fontSize: '14px', color: '#25324B' }} defaultValue={profile.workingType.name} name="workingType" />

                    </Stack>
                    <Stack gap={'5px'}>
                        <Box sx={{ fontSize: '14px', color: '#7C8493' }}>Skill</Box>
                        <TextField onChange={handleChange} sx={{ fontSize: '14px', color: '#25324B' }} defaultValue={profile.skill} name="skill" />

                    </Stack>
                    <input type="submit" value="Submit"></input>
                </Stack>
            </form>
        </>
    )
}