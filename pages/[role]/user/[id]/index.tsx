import { PageLayout } from "@/layout/PageLayout";
import { TestImage } from "@/img";
import { Grid, TextField, Button, Stack, Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { UserProfile } from "@/api/user";
import ProfileAnotherFreelancer from "@/components/page/user/[id]/ProfileAnotherFreelancer";
import ReviewComponent from "@/components/page/profile/ReviewComponent";
import CVAnotherFreelancer from "@/components/page/user/[id]/CVAnotherFreelancer";

enum Content {
  profile,
  review,
}

export default function watchCVFreelancer() {
  const [content, setContent] = useState<Content>(Content.profile);
  const [userProfile, setUserProfile] = useState<UserProfile>();

  return (
    <PageLayout>
      <Box flex={2} style={{ backgroundColor: "#fff", borderRadius: "8px" }}>
        <Tabs
          value={content}
          onChange={(event: any, value) => setContent(value)}
          sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
        >
          <Tab label="Profile" value={Content.profile} />
          <Tab label="Review" />
        </Tabs>
        <Box sx={{ padding: "10px 10px" }}>
          {content == Content.profile ? (
            <>
              <ProfileAnotherFreelancer />
              <CVAnotherFreelancer />
            </>
          ) : (
            <ReviewComponent {...userProfile} />
          )}
        </Box>
      </Box>
    </PageLayout>
  );
}
