// Define interfaces for different types of responses from the API

// Interface for expenses categorized by type
export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

// Interface for monthly data
export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

// Interface for daily data
export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

// Interface for user data
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  date: string;
}

// Interface for the response when fetching KPIs
export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

// Interface for the response when fetching products
export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

// Interface for the response when fetching transactions
export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}

// Interface for the response when logging in
export interface LoginResponse {
  token: string;
}

// Interface for the response when registering
export interface RegisterResponse {
  id: string;
  name: string;
  email: string;
  date: Date;
}

// Interface for the request body when logging in
export interface LoginRequest {
  email: string;
  password: string;
}

// Interface for the request body when registering
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  date: Date;
}
