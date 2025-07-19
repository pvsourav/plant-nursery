import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import "../styles/plantcard.css";

export default function PlantCard({ plant, onAddToCart, isInCart }) {
  return (
    <Card className="plant-card-container">
      <div className="plant-image-wrapper">
        <img
          src={plant.image || "/placeholder.svg"}
          alt={plant.name}
          className="plant-image" 
          loading="lazy"
        />
      </div>
      <CardContent className="plant-card-content">
        <h4 className="plant-name">{plant.name}</h4>
        <p className="plant-description">{plant.description}</p>
        <p className="plant-cost">${plant.cost}</p>
      </CardContent>
      <CardFooter className="plant-card-footer">
        <Button
          onClick={() => onAddToCart(plant)}
          disabled={isInCart}
          className={`add-to-cart-button ${isInCart ? "in-cart" : ""}`}
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}