import useAdminSettingsApi from "@/api/admin/settings";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Theme,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

interface OptionsModalProps {
  style?: any;
  type: string;
  isMutiple?: boolean;
  functionChange?: Function;
  defaultValue?: string[];
  onChange?: Function;
  name?: string
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const optionsForLevel = [
  { id: "1", name: "Level 1" },
  { id: "2", name: "Level 2" },
  { id: "3", name: "Level 3" },
  { id: "4", name: "Level 4" },
  { id: "5", name: "Level 5" },
];

const optionsForCategory = [
  { id: "1", name: "Category 1" },
  { id: "2", name: "Category 2" },
  { id: "3", name: "Category 3" },
  { id: "4", name: "Category 4" },
  { id: "5", name: "Category 5" },
];

const optionsForTypeWorking = [
  { id: "1", name: "Type Working 1" },
  { id: "2", name: "Type Working 2" },
  { id: "3", name: "Type Working 3" },
  { id: "4", name: "Type Working 4" },
  { id: "5", name: "Type Working 5" },
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function OptionsModal({
  style,
  type,
  functionChange = () => {},
  isMutiple = false,
  defaultValue = [],
  onChange = () => {},
}: OptionsModalProps) {
  const [list, setList] = useState([]);
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>(defaultValue);
  console.log(defaultValue, personName);
  const options =
    type == "level"
      ? optionsForLevel
      : type == "categories"
      ? optionsForCategory
      : optionsForTypeWorking;
  const path =
    type == "level"
      ? "levels"
      : type == "categories"
      ? "categories"
      : "workingTypes";

      const name = type == 'level' ? 'levelId' : type == 'categories' ? 'categoryId' : 'workingTypeId';
  const hook = useAdminSettingsApi();

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    functionChange(event);
    onChange(event);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await hook.getAll(`/${type}`, path);
      setList(data);
    }
    fetchData();
  }, []);

  console.log(defaultValue);
  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <Select
          multiple={isMutiple}
          label={"123"}
          displayEmpty
          value={personName}
          name={name}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          defaultValue={defaultValue}
        >
          <MenuItem disabled value={personName}>
            <em>{personName}</em>
          </MenuItem>
          {list.map(({ name, id }) => (
            <MenuItem
              key={id}
              value={id}
              // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default OptionsModal;
