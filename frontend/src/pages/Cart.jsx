import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { decCount } from '../redux/countSlice';
import Header from '../components/Header';


const Cart = () => {
    const products = useSelector((state)=>state.cart.totalProd);
    const sum = useSelector((state)=>state.cart.sum);
    const dispatch = useDispatch();

    const onRemoveFromCart = (product)=>{
        dispatch(removeFromCart(product));
        dispatch(decCount());
    }
  return (
    <div>
        <Header/>
      <div className="m-4">
        {products.map((product)=>(
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rs. {product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>onRemoveFromCart(product)}>
                Remove
              </Button>
            </CardActions>
          </Card>
        ))}

        <div>
            Total amout to be paid {sum}
        </div>
        
      </div>
    </div>
  )
}

export default Cart