import React, { useState } from 'react'
import { Box, Typography, TextField, Button, Grid } from '@mui/material'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you can integrate an email service or backend API
    alert('Thank you! Your message has been submitted.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <Box
      sx={{
        minHeight: '80vh',
        py: 8,
        px: 3,
        maxWidth: 800,
        mx: 'auto'
      }}
    >
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        Contact Us
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ px: 5, py: 1.5, fontWeight: 'bold' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}