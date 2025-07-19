import { useSelector, useDispatch } from "react-redux"
import { addItemToCart } from "../store/cartSlice"
import { plantsArray } from "../data/plantsData"
import Header from "./Header"
import { useRef } from "react"
import { useNavigate } from 'react-router-dom';
import '../styles/productlistingpage.css'

export default function ProductListingPage() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const scrollRefs = useRef({})
  const navigate = useNavigate();

  const handleAddToCart = (plant) => {
    dispatch(addItemToCart(plant))
  }

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId)
  }

  const scrollLeft = (category) => {
    const container = scrollRefs.current[category]
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = (category) => {
    const container = scrollRefs.current[category]
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const groupedPlants = plantsArray.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = []
    }
    acc[plant.category].push(plant)
    return acc
  }, {})

  return (
    <div className="product-listing-container">
      <Header />

      <main className="product-listing-main">
        <div className="section-header">
          <h1 className="main-heading">Our Plant Collection</h1>
          <p className="main-heading-description">
            Discover our carefully curated selection of beautiful, healthy plants perfect for your home or office.
          </p>
        </div>

        {Object.entries(groupedPlants).map(([category, plants]) => (
          <div key={category} className="category-section">
            <div className="category-header">
              <h2 className="category-heading">{category}</h2>
              <div className="scroll-controls">
                <button
                  className="scroll-arrow"
                  onClick={() => scrollLeft(category)}
                  aria-label={`Scroll ${category} plants left`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="scroll-arrow"
                  onClick={() => scrollRight(category)}
                  aria-label={`Scroll ${category} plants right`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="plant-card-container">
              <div
                className="plant-card-grid"
                ref={(el) => scrollRefs.current[category] = el}
              >
                {plants.map((plant) => (
                  <div key={plant.id} className="plant-card">
                    <div className="plant-card-header">
                      <div className="plant-image-container">
                        <img
                          className="plant-image"
                          src={plant.image}
                          alt={plant.name}
                        />
                      </div>
                    </div>

                    <div className="plant-card-content">
                      <h3 className="plant-name">
                        {plant.name}
                      </h3>
                      <p className="plant-description">
                        {plant.description}
                      </p>
                      <p className="plant-price">
                        ${plant.cost}
                      </p>
                    </div>

                    <div className="plant-card-footer">
                      <button
                        className={`add-to-cart-btn ${isInCart(plant.id) ? 'secondary' : 'primary'}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}