import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabsQr({ onTabChange }) {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(newValue); // Notifica el cambio de tab
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="URL" />
        <Tab value="two" label="Coordenadas" />
        <Tab value="three" label="Texto" />

      </Tabs>
    </Box>
  );
}
