export interface Local {
  id: number;
  name: string;
  address?: string;
  city: string;
  phone?: string | undefined;
  email?: string | undefined;
  description: string;
  image: string | undefined;
}

export interface BasicLocal {
  id: number;
  name: string;
  image: string | undefined;
  description: string | undefined;
}
