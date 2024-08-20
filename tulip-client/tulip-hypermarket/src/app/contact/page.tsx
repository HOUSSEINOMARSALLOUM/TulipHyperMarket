"use client";

import { Typography, Box, TextField, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Us
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Paper elevation={3} className="p-6 mt-4 max-w-md w-full">
          <form className="flex flex-col gap-4">
            <TextField label="Name" variant="outlined" fullWidth required />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </form>
        </Paper>
      </motion.div>
    </Box>
  );
}
