import Link from "next/link";
import { useState } from "react";
import { toast } from 'react-toastify';
import { setLogin, setTOTP } from "../../../services/auth";
import { useRouter } from "next/router";
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode";

export default function TotpVerify() {
  
  const [counter, setCounter] = useState(60);

  const router = useRouter();

  const userLogin = localStorage.getItem('user-login')
  const form = JSON.parse(userLogin!);

  if(!form){
    router.push('/404')
  }
  
  const [totp, setTotp] = useState('')
  const email = form.email;
  
  const onSubmit = async () => {
    const data = {
      email,
      totp
    };
    
    if(!totp){
      toast.error('TOTP wajib diisi!!')
    }else{
      const response = await setTOTP(data);
      if(response.error){
        toast.error(response.message)
      }else{
        toast.success('Login Berhasil!!')
        const token = response.data.token
        const tokenBase64 = btoa(token)
        Cookies.set('token', tokenBase64, {expires: 1 })
        router.push('/')
      }
    }
}

// const onResending = async () => {
//   const data = {
//     email,
//     password,
//     nomor
//   }
//   if(!email || !password){
//     toast.error('Password dan Email harus diisi!')
//   }else{
//   const response = await setLogin(data);
//   console.log('response: ', response)
//   if(response.error){
//     toast.error(response.message)
//   }else{
//     localStorage.setItem('user-login', JSON.stringify(data));
//     router.push('/totp')
//   }
//   }
// };

// setInterval(() => setCounter(counter - 1), 1000);


  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">TOTP Verify</h2>
      <p className="text-lg color-palette-1 m-0">Check the code sent to your email <b>{form.email}</b> </p>
      <div className="pt-50">
      <label
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Insert Code
        </label>
        <input
          type='text'
          className="form-control rounded-pill text-lg"
          placeholder="123456"
          value={totp}
          onChange={(event)=>  setTotp(event.target.value.replace(/\D/,''))}
          
        />
      </div>
      
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
        className="btn btn-sign-up fw-medium text-lg color-palette-1 text-white rounded-pill mb-16"
        type="button"
          onClick={onSubmit}
          // disabled
        >
          Verify
        </button>
      
        <a
        type="button"
          // className="btn btn-sign-in fw-medium text-lg text-yellow rounded-pill mb-16"
          // onClick={onResending}
        >
          Kirim ulang
        </a>
      </div>
    </>
  );
  
}
