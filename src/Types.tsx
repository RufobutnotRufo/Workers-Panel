interface User {
  fullName: string;
  department: string;
  country: string;
  status: string;
  id: number;
}
export default User;

export interface Country {
  name: string;
  value: string;
}

export interface countrySelect {
  name: string;
  value: string;
}

export interface statuses {
  name: string;
  value: string;
}
