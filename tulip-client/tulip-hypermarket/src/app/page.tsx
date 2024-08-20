"use client";

import { Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to TulipHypermarket
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Your one-stop shop for all your needs
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/products"
        >
          Shop Now
        </Button>
      </motion.div>
    </Box>
  );
}
