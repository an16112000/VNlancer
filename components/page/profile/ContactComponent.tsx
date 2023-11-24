import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
export interface Contact {
    address: string,
    phoneNumber: string
}

interface Props {
    address?: string,
    phoneNumber?: string,
    email?: string
}

export default function ContactComponent(props: Props) {
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('')
    useEffect(() => {
        setEmail(props.email ? props.email : '')
        setPhoneNumber(props.phoneNumber ? props.phoneNumber : '');
        setAddress(props.address ? props.address : '')
    }, [])
    function saveContact() {
        console.log(address);

    }
    return (
        <>
            <Grid container padding={2}>
                <Grid item xs={3} alignSelf='center'>Address</Grid>
                <Grid item xs={8}><TextField fullWidth value={address} onChange={(e) => setAddress(e.target.value)} /></Grid>
            </Grid>
            <Grid container padding={2}>
                <Grid item xs={3} alignSelf='center'>Phone Number</Grid>
                <Grid item xs={8}><TextField fullWidth value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /></Grid>
            </Grid>
            <Grid container padding={2}>
                <Grid item xs={3} alignSelf='center'>Email</Grid>
                <Grid item xs={8}><TextField fullWidth value={email} onChange={(e) => setEmail(e.target.value)} /></Grid>
            </Grid>
            <Grid container padding={2}>
                <Grid item xs={3} alignSelf='center' />
                <Grid item xs={8} display='flex' direction='row-reverse'><Button sx={{ backgroundColor: '#1976d2', color: '#fff' }} onClick={saveContact}>Save Contact</Button></Grid>
            </Grid>
        </>
    )
}