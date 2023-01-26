export interface User{
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  cin: string;
  accountType: string;

  grantType:string;
  username:string;
  withRefreshToken:boolean;
  role:string;
  refreshToken:string;




}
