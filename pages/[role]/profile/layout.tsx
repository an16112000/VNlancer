import { PageLayout } from "@/layout/PageLayout";
import { RootState } from "@/state/store";
import { UserRole } from "@/state/user";
import { useSelector } from "react-redux";
import FreelancerProfile from "@/components/page/profile/FreelancerProfile";
import ClientProfile from "@/components/page/profile/ClientProfile";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import ContactComponent from "@/components/page/profile/ContactComponent";
import InformationComponent from "@/components/page/profile/InformationComponent";
import { UserProfile } from "@/api/user";

enum Content {
    information,
    contact
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
            <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ backgroundColor: '#fff', borderRadius: '8px', }}>
                <Tab label="Information" value={Content.information} />
                <Tab label="Contact" value={Content.contact} />
            </Tabs>
            <div style={{ backgroundColor: '#fff', marginTop: '10px', borderRadius: '8px' }}>
                {content == Content.contact ? <ContactComponent {...userProfile} /> :
                   <InformationComponent {...userProfile} />
                }
            </div>
        </PageLayout>
    )
}
ProfileLayout.requireLogin = true

export default ProfileLayout