"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import {
  TextField,
  Button,
  Typography,
  Box,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useRouter } from "next/navigation";

const steps = ["Shipping Address", "Payment Details", "Review Order"];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePlaceOrder = async () => {
    // Replace with actual API call
    try {
      await fetch("/api/placeOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: user?.id,
          cart,
          shippingAddress,
          paymentDetails,
        }),
      });
      clearCart();
      router.push("/order-confirmation");
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <TextField
            label="Shipping Address"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            required
          />
        );
      case 1:
        return (
          <TextField
            label="Payment Details"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            {cart.map((item) => (
              <Typography key={item.id}>
                {item.name} - Quantity: {item.quantity} - $
                {item.price * item.quantity}
              </Typography>
            ))}
            <Typography variant="h6" className="mt-4">
              Total: $
              {cart
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </Typography>
          </Box>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box className="flex flex-col items-center justify-center min-h-screen p-4">
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} className="w-full max-w-md mb-8">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box className="w-full max-w-md">
        {getStepContent(activeStep)}
        <Box className="mt-4 flex justify-between">
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={
              activeStep === steps.length - 1 ? handlePlaceOrder : handleNext
            }
          >
            {activeStep === steps.length - 1 ? "Place Order" : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
