import ProfileComponent from "@/components/ProfileComponent"

export default function ProfileClient() {
    if (process.browser) {
        return (
            <ProfileComponent></ProfileComponent>
        )
    }
    return (
        <div>html</div>
    )
}