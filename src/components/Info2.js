import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

export default function Info2() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  React.useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <Box
      ref={ref}
      sx={{ py: 7, px: 3, backgroundColor: '#ffffff' }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={5}
        sx={{ color: '#003f5c' }}
      >
        Why Choose GalaxyAC?
      </Typography>

      <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center" textAlign="center">
        <Grid item xs={12} md={4}>
          <motion.div initial="hidden" animate={controls} variants={itemVariants}>
            <VerifiedUserIcon sx={{ fontSize: 50, color: '#003f5c', mb: 2 }} />
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Licensed & Insured
            </Typography>
            <Typography variant="body1">
              Trusted professionals delivering safe and reliable service.
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div initial="hidden" animate={controls} variants={itemVariants} transition={{ delay: 0.6 }}>
            <AccessTimeIcon sx={{ fontSize: 50, color: '#003f5c', mb: 2 }} />
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Same-Day Appointments
            </Typography>
            <Typography variant="body1">
              We're ready when you need us — fast response guaranteed.
            </Typography>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={4}>
          <motion.div initial="hidden" animate={controls} variants={itemVariants} transition={{ delay: 0.12 }}>
            <AttachMoneyIcon sx={{ fontSize: 50, color: '#003f5c', mb: 2 }} />
            <Typography variant="h6" fontWeight="bold" mb={1}>
              Transparent Pricing
            </Typography>
            <Typography variant="body1">
              No surprises — honest pricing and professional recommendations.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  )
}