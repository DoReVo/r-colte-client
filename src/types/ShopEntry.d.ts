export interface ShopEntry {
  id?: string;
  userId?: string;
  shopId: string;
  shopName: string;
  searchQuery: string;
  productMatch: string[];
  createdAt?: string;
  updatedAt?: string;
}
