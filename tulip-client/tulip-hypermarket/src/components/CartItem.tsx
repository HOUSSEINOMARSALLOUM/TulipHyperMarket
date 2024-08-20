import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <Box className="flex justify-between items-center py-2 border-b">
      <Box>
        <Typography variant="subtitle1">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price.toFixed(2)} x {item.quantity}
        </Typography>
      </Box>
      <Box className="flex items-center">
        <Typography variant="subtitle1" className="mr-4">
          ${(item.price * item.quantity).toFixed(2)}
        </Typography>
        <IconButton color="error" size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
