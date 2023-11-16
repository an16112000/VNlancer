import NavigationButton from "@/components/NavigationButton";
import { Box, Button, Link, Stack, Tab, Tabs } from "@mui/material";
import { Props as NavigationButtonProps } from "@/components/NavigationButton";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
    navigators: NavigationButtonProps[]
}

export default function LeftNavigation(props: Props) {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Tabs value={value} onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Information" value="1" />
            <Tab label="Contact" value="2" />
        </Tabs>
    )
}