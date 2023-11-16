import { PageLayout } from "@/layout/PageLayout";
import { RootState } from "@/state/store";
import { UserRole } from "@/state/user";
import { useSelector } from "react-redux";
import FreelancerProfile from "@/components/page/profile/FreelancerProfile";
import ClientProfile from "@/components/page/profile/ClientProfile";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";

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

    return (
        <PageLayout>
            <Tabs value={content} onChange={(event: any, value) => setContent(value)}>
                <Tab label="Information" value={Content.information} />
                <Tab label="Contact" value={Content.contact} />
            </Tabs>
            {content == Content.contact ? <div>contact</div> :
                content == Content.information ? <div>information</div> : <div></div>
            }
        </PageLayout>
    )
}
ProfileLayout.requireLogin = true

export default ProfileLayout