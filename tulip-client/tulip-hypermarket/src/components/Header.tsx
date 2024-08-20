import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TulipHypermarket
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/about">
          About
        </Button>
        <Button color="inherit" component={Link} href="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} href="/products">
          Products
        </Button>
        <Button color="inherit" component={Link} href="/cart">
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
