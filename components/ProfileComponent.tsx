"use client"
import useAuthentication from "@/ultils/authentication"

export default function ProfileComponent() {
    useAuthentication()
    return (
        <>
            This is Profile Client page
        </>
    )
}