import React, { useState } from 'react'
import { Box, Typography, TextField, Button, Grid } from '@mui/material'
import emailjs from "emailjs-com"

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
  e.preventDefault();

  emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    formData,
    "YOUR_PUBLIC_KEY"
  )
  .then(() => {
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  })
  .catch((error) => {
    console.error("Email sending error:", error);
    alert("Oops! Something went wrong. Please try again.");
  });
};

  return (
  <Box
    sx={{
      minHeight: '80vh',
      py: 8,
      px: 3,
      maxWidth: 600,
      mx: 'auto'
    }}
  >
    <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
      Contact Us
    </Typography>

    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Message"
        name="message"
        multiline
        rows={8}
        value={formData.message}
        onChange={handleChange}
        required
        sx={{ mb: 4 }}
      />

      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ px: 6, py: 1.6, fontWeight: 'bold' }}
        >
          Submit
        </Button>
      </Box>
    </form>
  </Box>
)
}