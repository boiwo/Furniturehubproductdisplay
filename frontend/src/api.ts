// src/api.ts
import { Product } from "./types/product";

const BASE_URL = "/api";

// GET all products
export const fetchProducts = async (): Promise<Product[]> => {
    try {
        console.log('🔄 Fetching products from:', `${BASE_URL}/products`);
        const response = await fetch(`${BASE_URL}/products`);
        console.log('📡 Response status:', response.status);
        console.log('📡 Response ok:', response.ok);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('✅ Products fetched successfully:', data.length, 'items');
        console.log('📋 First product:', data[0]);
        
        return data;
    } catch (error) {
        console.error('❌ Error fetching products:', error);
        console.log('📋 Returning empty array as fallback');
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
