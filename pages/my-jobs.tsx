import { Box } from "@mui/material";
import { useEffect } from "react";
import useSWR from "swr";

function MyJobs() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(data);
  if (error) return <div>Error</div>;
  if (isLoading) return <><h1>Loading...</h1></>;
  return (
    <Box bgcolor="background.default" color="primary.main">
      This is My Jobs page
      <ul>
        {
          data.map((item: any, index: number) => (
            <li key={index}>
              <label>{item.title}</label>
              <p>{item.body}</p>
            </li>
          ))}
      </ul>
    </Box>
  );
}

export default MyJobs;
