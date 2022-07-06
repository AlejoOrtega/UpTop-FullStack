import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({plans, selected, onChange}) {
  const [option, setOption] = useState('');
  const [planOptions, setPlanOptions] = useState([])

  useEffect(()=>{
    if(selected && plans.length !== 0){
      setOption(()=>plans[selected-1].id)
      setPlanOptions(plans)
    }
  },[selected, plans])

  const handleChange = (event) => {
    setOption(event.target.value);
    onChange(event)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Plan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Age"
          name='plan_id'
          onChange={handleChange}
        >
            {planOptions.map(plan => <MenuItem key={plan.id} value={plan.id}>{plan.title}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}