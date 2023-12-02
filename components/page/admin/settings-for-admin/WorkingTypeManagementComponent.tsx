import { useEffect, useState } from "react";
import ListSettings from "./ListSettings";
import useAdminSettingsApi from "@/api/admin/settings";

export default function WorkingTypeManagementComponent() {
    return (
      <>
        <ListSettings type={"working-type"} path={"workingTypes"} />
      </>
    );
}