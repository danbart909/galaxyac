import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../images/logo.png'

export default function Header() {
  return (
    <Box
      sx={{
        maxWidth: '100vw',
        overflowX: 'hidden',
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        // py: { xs: 2, md: 3 },
        // px: { xs: 2, md: 4 },
        backgroundColor: '#003f5c',
        color: '#ffffff',
        gap: { xs: 1.5, md: 0 }
      }}
    >
      {/* Logo */}
      <Box
        component={RouterLink}
        to="/"
        sx={{ display: 'flex', alignItems: 'center', marginLeft: { xs: 0, md: "2vw" } }}
      >
        <Box
          component="img"
          src={logo}
          alt="Company Logo"
          sx={{
            height: { xs: 80, md: 105 },
            width: 'auto'
          }}
        />
      </Box>

      {/* Contact Block */}
      <Box textAlign='center'>
        <Typography variant='body2'>Call us Today!</Typography>
        <Typography
          component="a"
          href="tel:6788982477"
          sx={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 'bold',
            '&:hover': {
              textDecoration: 'underline',
              opacity: 0.8,
            }
          }}
        >
          123-456-7890
        </Typography>
      </Box>

      {/* Other Info - collapse into two rows on mobile */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          marginRight: { xs: 0, md: "2vw" }
        }}
      >
        <Typography variant='body2'>Open 24 Hours</Typography>
        <Typography variant='body2'>Financing Available</Typography>
        <Typography
          component={RouterLink}
          to="/contact"
          sx={{
            cursor: 'pointer',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#fff',
            '&:hover': { color: '#d9e8ff' }
          }}
        >
          Get Service
        </Typography>
      </Box>
    </Box>
  )
}