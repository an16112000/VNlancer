import { LayOutWithHeaderAndUser } from "@/layout/layoutWithHeaderAndUser";
import { RootState } from "@/state/store";
import { UserRole } from "@/state/user";
import { useSelector } from "react-redux";
import FreelancerProfile from "@/components/page/profile/FreelancerProfile";
import ClientProfile from "@/components/page/profile/ClientProfile";

function MyPublicProfile() {
    const userRole = useSelector((state: RootState) => state.user.role)
    return (
        <LayOutWithHeaderAndUser>
            {userRole == UserRole.client ? <ClientProfile /> : <FreelancerProfile />}
        </LayOutWithHeaderAndUser>
    )
}
MyPublicProfile.requireLogin = true

export default MyPublicProfile