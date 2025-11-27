// src/api.ts
import { Product } from "./types/product";

const BASE_URL = "/api";

// GET all products
export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) throw new Error("Failed to fetch products");
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
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
        console.error(error);
        return null;
    }
};

// PUT - update existing product
export const updateProduct = async (id: number, updates: Partial<Product>) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updates),
        });
        return response.ok;
    } catch (error) {
        console.error(error);
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
        console.error(error);
        return false;
    }
};
