import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box sx={{

      bottom: '0',
      width: '100%',
      backgroundColor: '#9c27b0',
      height: '100px',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      boxSizing: 'border-box',
      color: '#fff',
      transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    }} >
      <Typography alignItems={'center'}>&copy; Haznto 2023</Typography>
    </Box >
  )
}
