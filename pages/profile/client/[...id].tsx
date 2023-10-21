import useAuthentication from "@/ultils/authentication"

export default function ProfileClient() {
    useAuthentication()
    return (
        <>
            This is Profile Client page
        </>
    )
}
