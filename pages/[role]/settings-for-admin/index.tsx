import { Box, Tab, Tabs } from "@mui/material";
import { PageLayoutForAdmin } from "@/layout/PageLayoutForAdmin";
import { useEffect, useState } from "react";
import LevelManagementComponent from "@/components/page/admin/settings-for-admin/LevelManagementComponent";
import CategoryManagementComponent from "@/components/page/admin/settings-for-admin/CategoryManagementComponent";
import WorkingTypeManagementComponent from "@/components/page/admin/settings-for-admin/WorkingTypeManagementComponent";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

enum Content {
  LevelManagement,
  CategoryManagement,
  WorkingTypeManagement,
}

export default function SettingsForAdmin() {
  const [content, setContent] = useState<Content>(Content.LevelManagement);
  const { data, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status == 'unauthenticated') router.push("/")

    if (!data?.isAdmin && status == 'authenticated') router.push("/")
  })

  return (
    <PageLayoutForAdmin>
      <Tabs
        value={content}
        onChange={(event: any, value) => setContent(value)}
        sx={{ borderRadius: "8px" }}
      >
        <Tab
          sx={{ flex: 1 }}
          label="Level Management"
          value={Content.LevelManagement}
        />
        <Tab
          sx={{ flex: 1 }}
          label="Category Management"
          value={Content.CategoryManagement}
        />
        <Tab
          sx={{ flex: 1 }}
          label="Working Type Management"
          value={Content.WorkingTypeManagement}
        />
      </Tabs>
      {content == Content.LevelManagement ? (
        <LevelManagementComponent />
      ) : content == Content.CategoryManagement ? (
        <CategoryManagementComponent />
      ) : (
        <WorkingTypeManagementComponent />
      )}
    </PageLayoutForAdmin>
  );
}
