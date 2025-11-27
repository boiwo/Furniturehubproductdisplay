import { Product } from "./types/product";

// Choose correct backend automatically
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://furniturehubproductdisplay-1.onrender.com/api" // Render backend (production)
    : "http://127.0.0.1:5000/api"; // Local backend

// GET all products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    console.log("🔄 Fetching products from:", `${BASE_URL}/products`);
    const response = await fetch(`${BASE_URL}/products`, {
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      console.error("❌ Failed to fetch:", response.status, response.statusText);
      return [];
    }

    const data = await response.json();
    console.log("✅ Products fetched:", data.length);
    return data;
  } catch (error) {
    console.error("⚠️ Error fetching products:", error);
    return [];
  }
};

// POST - add new product
export const addProduct = async (product: Product): Promise<Product | null> => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error("Failed to add product");
    return await response.json();
  } catch (error) {
    console.error("❌ Error adding product:", error);
    return null;
  }
};

// PUT - update existing product
export const updateProduct = async (
  id: number,
  updates: Partial<Product>
) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    return response.ok;
  } catch (error) {
    console.error("❌ Error updating product:", error);
    return false;
  }
};

// DELETE - remove product
export const deleteProduct = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch (error) {
    console.error("❌ Error deleting product:", error);
    return false;
  }
};

