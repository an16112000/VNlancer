import { FormControl, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Theme, useTheme } from "@mui/material"
import { useState } from "react";

interface OptionsModalProps {
    style?: any,
    type: string
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
    'Level 1',
    'Level 2',
    'Level 3',
    'Level 4',
    'Level 5',
];

const optionsForCategory = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
];

const optionsForTypeWorking = [
    'Type Working 1',
    'Type Working 2',
    'Type Working 3',
    'Type Working 4',
    'Type Working 5',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


function OptionsModal({ style, type }: OptionsModalProps) {
    const theme = useTheme();
    const [personName, setPersonName] = useState<string[]>([]);
    const options = type == 'Level' ? optionsForLevel : type == 'Category' ? optionsForCategory : optionsForTypeWorking

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
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
                    multiple
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>Placeholder</em>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Placeholder</em>
                    </MenuItem>
                    {options.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>


    )
}

export default OptionsModal