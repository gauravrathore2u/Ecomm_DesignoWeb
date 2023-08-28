import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incCount } from "../redux/countSlice";
import { pushToCart } from "../redux/cartSlice";



const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSingleProduct = async (el)=>{
        navigate(`/product/${el}`);
      }
    const onAddToCart = ()=>{
      dispatch(incCount());
      dispatch(pushToCart(product))
    }
  return (
    <div>
      <div className="m-4">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography onClick={(e)=>{return onSingleProduct(product._id)}} gutterBottom variant="h5" component="div">
                {product.productName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rs. {product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={onAddToCart}>
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;
