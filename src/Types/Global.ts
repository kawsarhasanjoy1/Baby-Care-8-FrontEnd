import { USER_ROLE } from "@/constanc/constant";
import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TInput = {
  type: string;
  edit: string;
  name: string;
};

export interface TProduct {
  _id: number;
  createdAt: string;
  discountEndDate: string;
  price: number;
  discountPrice: number;
  name: string;
  category: string;
  image: string;
  isFlash: boolean;
  description: string;
  nutrients: {
    vitamins: string[];
    minerals: string[];
  };
  rating: number;
}

export interface TTopCard {
  category?: string;
  image?: string;
  name?: string;
  price?: number;
  discountPrice?: number;
  product?: TProduct;
  path: string;
}
export type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

export type TForm = {
  children: ReactNode;
  defaultValues?: any;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

export type UserRole = keyof typeof USER_ROLE;
