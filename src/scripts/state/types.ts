export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface IState {
    products: Product[];
    filteredProducts: Product[];
    filters: {
        brand: string[];
        category: string[];
        checkedInputs: { [key: string]: boolean };
        maxPrice: number;
        minPrice: number;
        minStock: number;
        maxStock: number;
        sortValue: string;
    };
    availableCategoryCount: { [key: string]: number };
    availableBrandCount: { [key: string]: number };
}
