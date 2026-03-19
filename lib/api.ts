"use client";
import { Product } from "../types/product";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/products`, {
    next: { revalidate: 3600 } 
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${API_BASE_URL}/products/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function getFilteredProducts(type: string, category: string): Promise<Product[]> {
  const params = new URLSearchParams();
  if (type) params.append("type", type);
  if (category) params.append("category", category);

  const res = await fetch(`${API_BASE_URL}/products/filter?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to filter products");
  return res.json();
}
