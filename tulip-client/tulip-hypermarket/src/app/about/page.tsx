"use client";

import { Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          About TulipHypermarket
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Paper elevation={3} className="p-6 mt-4 max-w-2xl">
          <Typography variant="body1" paragraph>
            TulipHypermarket is your one-stop shop for all your daily needs. We
            started our journey in 2024 with a simple goal: to provide
            high-quality products at affordable prices.
          </Typography>
          <Typography variant="body1" paragraph>
            Our commitment to customer satisfaction and our wide range of
            products have made us a favorite among shoppers. We continually
            strive to improve our services and expand our offerings to meet the
            evolving needs of our customers.
          </Typography>
          <Typography variant="body1">
            Thank you for choosing TulipHypermarket. We look forward to serving
            you and exceeding your expectations.
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
}
