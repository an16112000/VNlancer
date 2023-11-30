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
import { useState } from "react";

interface OptionsModalProps {
  style?: any;
  type: string;
  isMutiple?: boolean;
  functionChange?: Function;
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
}: OptionsModalProps) {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);
  const options =
    type == "Level"
      ? optionsForLevel
      : type == "Category"
      ? optionsForCategory
      : optionsForTypeWorking;

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    functionChange(event);
  };
  return (
    // <TextField sx={{
    //     width: '100%',
    //     ".MuiOutlinedInput-input": {
    //         padding: '12px 15px'
    //     },
    //     ...style
    // }}  />
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple={isMutiple}
          displayEmpty
          value={personName}
          name={type}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {options.map(({ name, id }) => (
            <MenuItem
              key={id}
              value={id}
              style={getStyles(name, personName, theme)}
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
