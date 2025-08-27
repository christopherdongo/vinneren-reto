// Card.test.tsx
import { render, screen, fireEvent } from "@testing-library/react"
import { vi } from "vitest"
import { Card } from "../Components/ProductCard"
import { useStore } from "../store/useStore"

vi.mock("../store/useStore", () => ({
  useStore: vi.fn(),
}))

const mockProduct =   {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    count: 0,
    rating: {
      rate: 3.9,
      count: 120
    }
  }

describe("Card Component", () => {
  it("debe renderizar la información del producto", () => {
    ;(useStore as unknown as vi.Mock).mockReturnValue({ addToCart: vi.fn() })

    render(<Card product={mockProduct} />)

    expect(screen.getByText("Producto de prueba")).toBeInTheDocument()
    expect(screen.getByText("$20")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("src", mockProduct.image)
  })

  it("debe llamar a addToCart al hacer click en el botón", () => {
    const addToCartMock = vi.fn()
    ;(useStore as unknown as vi.Mock).mockReturnValue({ addToCart: addToCartMock })

    render(<Card product={mockProduct} />)

    const button = screen.getByRole("button", { name: /agregar al carrito/i })
    fireEvent.click(button)

    expect(addToCartMock).toHaveBeenCalledTimes(1)
    expect(addToCartMock).toHaveBeenCalledWith(mockProduct)
  })
})