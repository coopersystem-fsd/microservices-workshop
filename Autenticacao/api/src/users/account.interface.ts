export interface Account {
  email: string;
  name: string;
  password: string;
  enabled?: boolean;
  profile?: {
    picture?: string; // (Base64)
  };
}
