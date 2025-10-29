import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import YelpIcon from '@mui/icons-material/StarRate'; // Placeholder for Yelp icon

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1c3b57',
        color: '#fff',
        padding: '40px 20px',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        
        {/* Column 1 — Logo */}
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="h6" fontWeight="bold">
            GalaxyAC
          </Typography>
          <Typography variant="body2">Heating & Cooling</Typography>
        </Grid>

        {/* Column 2 — Social Links */}
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Connect With Us
          </Typography>

          <Box display="flex" justifyContent="center" gap={2}>
            <IconButton
              href="#"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              href="#"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <YelpIcon />
            </IconButton>

            <IconButton
              href="#"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <RoomIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Column 3 — Service Contact */}
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Schedule Service Online
          </Typography>

          <Link
            href="tel:6788982477"
            underline="none"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '18px'
            }}
          >
            <PhoneIcon /> 678-898-2477
          </Link>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box mt={4} textAlign="center" fontSize="12px" opacity={0.7}>
        © {new Date().getFullYear()} GalaxyAC — All Rights Reserved
      </Box>
    </Box>
  );
}