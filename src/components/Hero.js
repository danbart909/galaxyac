import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import heroBg from '../images/hero-bg.jpg'
import { Link as RouterLink } from 'react-router-dom'

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '80vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        color: '#fff',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: { xs: '65% center', md: 'center' },
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.45)',
        }}
      />

      {/* Hero Content */}
      <Box sx={{ position: 'relative', zIndex: 1, px: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant='h3'
            fontWeight='bold'
            sx={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)', mb: 2 }}
          >
            Reliable Comfort Solutions
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Typography
            variant='h6'
            sx={{
              maxWidth: '600px',
              margin: 'auto',
              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
              mb: 4
            }}
          >
            Heating, Cooling & Maintenance for Every Season
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            variant='contained'
            component={RouterLink}
            to="/contact"
            sx={{
              px: 4,
              py: 1.5,
              backgroundColor: '#003f5c',
              fontSize: '1rem',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#00597f' },
            }}
          >
            Schedule Service
          </Button>
        </motion.div>
      </Box>
    </Box>
  )
}