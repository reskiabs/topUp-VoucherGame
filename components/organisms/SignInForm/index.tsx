import Link from "next/link";
import { useState } from "react";
import { toast } from 'react-toastify';
import { setLogin } from "../../../services/auth";
import { useRouter } from "next/router";
import Cookies from "js-cookie"

export default function SignInForm() {
  const [email, setEmail] = useState('')
  // const [nomor, setNomor] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
      // nomor
    }
    if(!email || !password){
      toast.error('Password dan Email harus diisi!')
    }else{
    const response = await setLogin(data);
    console.log('response: ', response)
    if(response.error){
      toast.error(response.message)
    }else{
      localStorage.setItem('user-login', JSON.stringify(data));
      router.push('/totp')
    }
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
      <div className="pt-50">
        <label  className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          placeholder="Enter your email address"
          value={email}
          onChange={(event)=> setEmail(event.target.value)}
        />
      </div>
      
      {/* <div className="pt-50">
        <label  className="form-label text-lg fw-medium color-palette-1 mb-10">
          Phone Number
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          placeholder="Enter your email address"
          value={nomor}
          onChange={(event)=> setNomor(event.target.value)}
        />
      </div> */}

      <div className="pt-30">
        <label
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event)=> setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
        type="button"
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>
        <Link href="/sign-up">
        <a
          className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
          role="button"
        >
          Sign
          Up
        </a>
        </Link>
      </div>
    </>
  );
}
