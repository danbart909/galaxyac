import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import BuildIcon from '@mui/icons-material/Build'

export default function Info() {
  return (
    <Box
      sx={{
        py: 6,
        px: 3,
        backgroundColor: '#f7f9fa',
        color: '#333', // ensure all text is dark and readable
      }}
    >
      {/* Three Columns */}
      <Grid container spacing={4} justifyContent="center" textAlign="center">
        <Grid item xs={12} md={4}>
          <AcUnitIcon sx={{ fontSize: 50, color: '#003f5c', mb: 2 }} />
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Air Conditioning & Cooling
          </Typography>
          <Typography variant="body1">
            Certified experts keeping you cool and comfortable.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <WhatshotIcon sx={{ fontSize: 50, color: '#003f5c', mb: 2 }} />
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Heating & Furnaces
          </Typography>
          <Typography variant="body1">
            Reliable heat when you need it the most.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <BuildIcon sx={{ fontSize: 50, color: '#003f5c', mb: 2 }} />
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Services & Maintenance
          </Typography>
          <Typography variant="body1">
            Preventative care to extend your system’s lifespan.
          </Typography>
        </Grid>
      </Grid>

      {/* Intro Paragraphs ~500 words */}
      <Box sx={{ mt: 6, maxWidth: 900, mx: 'auto' }}>
        <Typography variant="body1" paragraph>
          At GalaxyAC, we understand the importance of a comfortable home and a reliable HVAC system. Our team of certified technicians is dedicated to providing exceptional heating, cooling, and maintenance services that keep your home safe, efficient, and comfortable year-round. With years of experience in the industry, we have built a reputation for quality work, transparent pricing, and a commitment to customer satisfaction that is second to none.
        </Typography>

        <Typography variant="body1" paragraph>
          Whether you need routine maintenance, emergency repairs, or a complete system installation, GalaxyAC is your trusted partner. We specialize in a wide range of services, including air conditioning repair and installation, furnace services, and preventative maintenance plans designed to extend the life of your HVAC system. Our goal is to make your home environment as comfortable as possible while ensuring energy efficiency and reliability.
        </Typography>

        <Typography variant="body1" paragraph>
          Every home and system is unique, which is why we take the time to evaluate your specific needs before recommending any service. Our technicians are highly trained and equipped with the latest tools and technology to diagnose and resolve issues quickly and effectively. From simple filter replacements to major system upgrades, we handle each project with professionalism and attention to detail.
        </Typography>

        <Typography variant="body1" paragraph>
          We believe in clear communication and transparency throughout every service we provide. From the moment you call, you will receive honest recommendations and upfront pricing. We want you to feel confident in the decisions you make regarding your heating and cooling systems. Our friendly staff is always available to answer questions, provide guidance, and ensure your experience is smooth from start to finish.
        </Typography>

        <Typography variant="body1" paragraph>
          Preventative maintenance is one of the most important steps you can take to protect your HVAC system and your home’s comfort. Regular inspections and tune-ups help identify small issues before they become major problems, saving you time, money, and stress. Our maintenance plans are customized to fit your schedule and your system, making it easy to keep your home running at peak efficiency year-round.
        </Typography>

        <Typography variant="body1" paragraph>
          At GalaxyAC, we also prioritize safety and compliance. All of our work meets local building codes and industry standards, ensuring that your system is not only efficient but safe. Whether installing a new unit, repairing a furnace, or maintaining an air conditioner, our team follows strict protocols to protect your home and your family.
        </Typography>

        <Typography variant="body1" paragraph>
          Our commitment to excellence extends beyond our technical expertise. We strive to create long-lasting relationships with our clients built on trust, reliability, and exceptional service. Many of our customers return year after year for their HVAC needs and refer their friends and family to us, which is a testament to our dedication and quality of work.
        </Typography>

        <Typography variant="body1" paragraph>
          From the first phone call to the completion of every job, GalaxyAC is focused on delivering comfort, efficiency, and peace of mind. Whether it’s keeping your home cool in the summer, warm in the winter, or maintaining your system for years of trouble-free operation, we are here to provide solutions that meet your unique needs. Trust GalaxyAC to keep your home comfortable, safe, and energy-efficient every day.
        </Typography>
      </Box>
    </Box>
  )
}