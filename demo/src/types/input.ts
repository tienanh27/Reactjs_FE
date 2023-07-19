export interface InputTypes {
  placeholder?: string;
  size?: string;
  name?: string;
  type?: string;
  icon: React.ReactElement;
}

export interface ISignUp {
  email: string;
  passWord: string;
  name: string;
  phoneNumber: string;
}

export interface ISignIn {
  email: string;
  passWord: string;
}
