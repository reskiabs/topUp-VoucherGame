import callAPI from '../config/api';
import { LoginTypes, TotpTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setSignUp(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callAPI({
    url,
    method: 'POST',
    data
  })
}

export async function setLogin(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;
  
  return callAPI({
    url,
    method: 'POST',
    data
  })
}

export async function setTOTP(data: TotpTypes) {
  const url = `${ROOT_API}/${API_VERSION}/auth/totp`;
  
  return callAPI({
    url,
    method: 'POST',
    data
  })
}