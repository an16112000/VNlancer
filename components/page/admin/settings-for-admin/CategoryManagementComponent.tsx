import { useEffect, useState } from "react";
import ListSettings from "./ListSettings";
import useAdminSettingsApi from "@/api/admin/settings";

export default function CategoryManagementComponent() {
    const [list, setList] = useState([]);
    const hooks = useAdminSettingsApi();

    useEffect(() => {
      async function fetchData() {
        const test1 = await hooks.getAll(`/categories`, 'categories');
        // console.log(test1)
        setList(test1);
      }
      fetchData();
    }, [hooks]);
    return (
      <>
        <ListSettings type="categories" path={"categories"} />
      </>
    );
}