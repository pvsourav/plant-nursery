import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItemFromCart } from '../store/cartSlice';
import { Plus, Minus, Trash2 } from 'lucide-react';
import '../styles/cartitem.css';

const Button = ({ children, onClick, className, variant, size }) => (
  <button 
    onClick={onClick} 
    className={`btn ${variant === 'outline' ? 'btn-outline' : variant === 'destructive' ? 'btn-destructive' : 'btn-primary'} ${size === 'sm' ? 'btn-sm' : ''} ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`card-content ${className}`}>
    {children}
  </div>
);

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementQuantity(item.id));
  const handleDecrement = () => dispatch(decrementQuantity(item.id));
  const handleRemove = () => dispatch(removeItemFromCart(item.id));

  return (
    <Card className="cart-item-card">
      <CardContent className="cart-item-content">
        <div className="cart-item-container">
          <div className="item-image-container">
            <img 
              src={item.image || "/placeholder.svg"} 
              alt={item.name} 
              className="item-image"
            />
          </div>
          
          <div className="item-details">
            <h3 className="item_name">{item.name}</h3>
            <p className="item_price">${item.cost} each</p>
            <p className="item_subtotal">Subtotal: ${item.totalPrice.toFixed(2)}</p>
          </div>
          
          <div className="quantity-controls">
            <Button onClick={handleDecrement} variant="outline" size="sm" className="quantity-btn">
              <Minus className="icon" />
            </Button>
            <span className="quantity-display">{item.quantity}</span>
            <Button onClick={handleIncrement} variant="outline" size="sm" className="quantity-btn">
              <Plus className="icon" />
            </Button>
            <Button onClick={handleRemove} variant="destructive" size="sm" className="remove-btn">
              <Trash2 className="icon" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
