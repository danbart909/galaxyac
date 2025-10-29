import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 4 },
        backgroundColor: '#003f5c',
        color: '#ffffff',
        gap: { xs: 1.5, md: 0 }
      }}
    >
      {/* Logo Placeholder */}
      <Typography variant='h6' fontWeight='bold'>
        GalaxyAC
      </Typography>

      {/* Contact Block */}
      <Box textAlign='center'>
        <Typography variant='body2'>Call us Today!</Typography>
        <Typography variant='h6' fontWeight='bold'>1-800-123-4567</Typography>
      </Box>

      {/* Other Info - collapse into two rows on mobile */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Typography variant='body2'>Open 24 Hours</Typography>
        <Typography variant='body2'>Financing Available</Typography>
        <Typography
          variant='body2'
          sx={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Get Service
        </Typography>
      </Box>
    </Box>
  )
}