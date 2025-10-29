import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
} from "@mui/material";

const serviceList = [
  {
    title: "Air Conditioning & Cooling",
    text: "Save time and money with our certified Air Conditioning repair technicians.",
  },
  {
    title: "Heating & Furnaces",
    text: "Furnace solutions to keep your house warm, including furnace repairs.",
  },
  {
    title: "Service & Maintenance",
    text: "Maintenance is essential to the functioning of your Heating and Cooling system.",
  },
];

export default function Services() {
  return (
    <Box id="air" sx={{ py: 6, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Some Of Our Heating and Cooling Services Offered
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {serviceList.map((s, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {s.title}
                  </Typography>
                  <Typography variant="body2">{s.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h6" gutterBottom>
            Local Residential & Commercial HVAC
          </Typography>
          <List>
            <ListItem>Air Purifier System</ListItem>
            <ListItem>HVAC Parts, Repair, Installation</ListItem>
            <ListItem>Ductless Systems</ListItem>
            <ListItem>Attic Insulation and Ventilation</ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
}