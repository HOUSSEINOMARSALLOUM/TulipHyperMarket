"use client";

import { Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

// Mock data for products
const products = [
  { id: 1, name: "Product 1", price: 19.99, image: "/product1.jpg" },
  { id: 2, name: "Product 2", price: 29.99, image: "/product2.jpg" },
  { id: 3, name: "Product 3", price: 39.99, image: "/product3.jpg" },
  { id: 4, name: "Product 4", price: 49.99, image: "/product4.jpg" },
];

export default function Products() {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Our Products
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Grid container spacing={4} className="mt-4">
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
