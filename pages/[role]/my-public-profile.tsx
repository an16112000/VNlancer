import { LayOut } from "@/layout";
import { LayOutWithHeaderAndUser } from "@/layout/layoutWithHeaderAndUser";

function MyPublicProfile() {
    return(
        <LayOutWithHeaderAndUser>
            
        </LayOutWithHeaderAndUser>
    )
}
MyPublicProfile.requireLogin = true

export default MyPublicProfile