import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import '../styles/shoppingcartpage.css';

const Button = ({ children, onClick, className, variant }) => (
  <button
    onClick={onClick}
    className={`btn ${variant === 'outline' ? 'btn-outline' : 'btn-primary'} ${className}`}
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

export default function ShoppingCartPage() {
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Feature not implemented yet!");
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  if (items.length === 0) {
    return (
      <div className="page-container">
        <Header />
        <div className="empty-cart-container">
          <h2 className="empty-cart-title">Your Cart is Empty</h2>
          <p className="empty-cart-text">Add some beautiful plants to get started!</p>
          <Button onClick={handleContinueShopping} className="continue-shopping-btn">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Header />

      <main className="main-container">
        <div className="cart-header">
          <h2 className="cart-title">Shopping Cart</h2>
          <p className="cart-subtitle">
            Total Items: <span className="total-quantity">{totalQuantity}</span>
          </p>
        </div>

        <div className="cart-items-grid">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <Card className="summary-card">
          <CardContent className="summary-content">
            <div className="summary-info">
              <div>
                <p className="total-plants">Total Plants: {totalQuantity}</p>
                <p className="total-cost">Total Cost: ${totalAmount.toFixed(2)}</p>
              </div>
            </div>

            <div className="action-buttons">
              <Button onClick={handleContinueShopping} variant="outline" className="continue-btn">
                Continue Shopping
              </Button>
              <Button onClick={handleCheckout} className="checkout-btn">
                Checkout
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}