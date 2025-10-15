import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

export const Search = ({onChange}: {onChange: (input: string) => void}) => {
  return (
    <TextField
      id='search'
      label='Search'
      type='search'
      onChange={(event) => onChange(event.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }
      }}
      variant='filled'
      sx={{
        width: '25%',
        backgroundColor: '#2e394eff',
        '& .MuiInputBase-input': {
          color: 'rgba(255,255,255,.92)',
        },
        '& .MuiInputLabel-root': {
          color: 'rgba(255,255,255,.92)'
        }
      }}
    />
  );
};