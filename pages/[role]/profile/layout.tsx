import { PageLayout } from "@/layout/PageLayout";
import { RootState } from "@/state/store";
import { UserRole } from "@/state/user";
import { useSelector } from "react-redux";
import FreelancerProfile from "@/components/page/profile/FreelancerProfile";
import ClientProfile from "@/components/page/profile/ClientProfile";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import ContactComponent from "@/components/page/profile/ContactComponent";
import InformationComponent from "@/components/page/profile/PublicProfileComponent";
import { UserProfile } from "@/api/user";
import ReviewComponent from "@/components/page/profile/ReviewComponent";

enum Content {
    information,
    contact,
    review
}

function ProfileLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const userRole = useSelector((state: RootState) => state.user.role)
    const [content, setContent] = useState<Content>(Content.information)
    const [userProfile, setUserProfile] = useState<UserProfile>()
    return (
        <PageLayout>
            <div style={{ marginTop: '10px' }}>
                <InformationComponent {...userProfile} />
            </div>
        </PageLayout>
    )
}
ProfileLayout.requireLogin = true

export default ProfileLayout