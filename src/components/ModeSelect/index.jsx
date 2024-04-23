import { Box, FormControl, InputLabel, MenuItem, Select, useColorScheme } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';

export default function ModeSelect() {
    const { mode, setMode } = useColorScheme();
    const handleChange = (event) => {
        setMode(event.target.value);
    }
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Theme</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={mode}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={'light'}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LightModeIcon fontSize='small' />
                        Light
                    </Box>
                </MenuItem>
                <MenuItem value={'dark'}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <DarkModeIcon fontSize='small' />
                        Dark
                    </Box>
                </MenuItem>
                <MenuItem value={'system'}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SettingsSystemDaydreamIcon fontSize='small' />
                        System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    )
}
