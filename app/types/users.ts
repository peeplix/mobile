export interface User {
  id: number;
  name: string;
  address?: string;
  city: string;
  country: string;
  phone?: string | undefined;
  email?: string | undefined;
  description: string;
  image: string | undefined;
}

export interface BasicUser {
  id: number;
  name: string;
  image: string | undefined;
  description: string | undefined;
}
