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
            {/* <Tabs value={content} onChange={(event: any, value) => setContent(value)} sx={{ backgroundColor: '#fff', borderRadius: '8px', }}>
                <Tab label="Information" value={Content.information} />
                <Tab label="Contact" value={Content.contact} />
                <Tab label="Review" value={Content.review} />
            </Tabs> */}
            <div style={{ marginTop: '10px' }}>
                {/* {content == Content.contact ? <ContactComponent {...userProfile} /> :
                   content == Content.information ? <InformationComponent {...userProfile}/> : <ReviewComponent {...userProfile}/>
                } */}
                <InformationComponent {...userProfile} />
            </div>
        </PageLayout>
    )
}
ProfileLayout.requireLogin = true

export default ProfileLayout