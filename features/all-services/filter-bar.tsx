import NumberInputIntroduction from "@/components/input-price";
import TextInput from "@/components/text-input";
import { Filter, Logo } from "@/img";
import { Stack, Button, Box, Checkbox } from "@mui/material";
import { useMemo, useState } from "react";

const Options = [
  {
    title: "Type of Employment",
    state: true,
    children: [
      {
        title: "Full-time",
      },
      {
        title: "Part-time",
      },
      {
        title: "Remote",
      },
      {
        title: "Intership",
      },
      {
        title: "Contact",
      },
    ],
  },
  {
    title: "Categories",
    state: true,
    children: [
      {
        title: "Design",
      },
      {
        title: "Sales",
      },
      {
        title: "Marketing",
      },
      {
        title: "Business",
      },
      {
        title: "Human Resource",
      },
      {
        title: "Finance",
      },
      {
        title: "Engineering",
      },
      {
        title: "Technology",
      },
    ],
  },
  {
    title: "Job Level",
    state: true,
    children: [
      {
        title: "Entry Level",
      },
      {
        title: "Mid Level",
      },
      {
        title: "Senior Level",
      },
      {
        title: "Director",
      },
      {
        title: "VP or Above",
      },
    ],
  },
  {
    title: "Salary Range",
    state: true,
    children: [
      {
        title: "$700-$1000",
      },
      {
        title: "$1000-$1500",
      },
      {
        title: "$1500-$2000",
      },
      {
        title: "$3000 or above",
      },
    ],
  },
];

function FilterBar() {
  const [array, setArray] = useState([""]);
  function handleClick(title: string) {
    if (array.includes(title)) {
      setArray((prev) => {
        prev.map((item, index) => {
          if (item === title) {
            prev.splice(index, 1);
          }
        });
        return [...prev];
      });
    } else {
      setArray((prev) => {
        const newArray = [...prev, title];
        return newArray;
      });
    }
  }
  return (
    <Box sx={{ width: '250px' }}>
      <Stack sx={{
        backgroundColor: '#fff',
        borderRadius: '8px',
      }} >
        {Options.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                padding: "8px 10px",
              }}
            >
              <Stack
                onClick={() => handleClick(item.title)}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                }}
              >
                <h1>{item.title}</h1>
                {array.includes(item.title) ? (
                  <i className="fa-solid fa-angle-down"></i>
                ) : (
                  <i className="fa-solid fa-chevron-right"></i>
                )}
              </Stack>
              <Stack display={array.includes(item.title) ? "block" : "none"}>
                {item.children.map((itemChild, indexChild) => {
                  return (
                    <Stack
                      key={indexChild}
                      flexDirection={"row"}
                      alignItems={"center"}
                      alignContent={"center"}
                    >
                      <Checkbox
                        style={{ height: "30px", width: "30px", color: "#ccc" }}
                      />
                      <p>{itemChild.title}</p>
                    </Stack>
                  );
                })}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}

export default FilterBar;

// const Abc = () => {
//   const
//   return
// }
