"use client";

import { Typography, Box, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import CartItem from "@/components/CartItem";

// Mock data for cart items
const cartItems = [
  { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
  { id: 2, name: "Product 2", price: 29.99, quantity: 1 },
];

export default function Cart() {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Your Cart
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Paper elevation={3} className="p-6 mt-4 max-w-2xl w-full">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <Typography variant="h6" className="mt-4">
            Total: ${total.toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary" className="mt-4">
            Proceed to Checkout
          </Button>
        </Paper>
      </motion.div>
    </Box>
  );
}
