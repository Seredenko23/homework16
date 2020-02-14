export interface User {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  repeatedPassword: string;
  region: string;
  gender: string | 'Male' | 'Female' | 'Don`t sure';
  promo: boolean;
  additional: string;
}
