'use client'
import { signIn, signOut } from 'next-auth/react';

export default function Login() {
  return (
    <>
      <div className={'border border-[#0057FF33] w-full max-w-[564px] h-[90vh] rounded-[16px] mx-auto p-4'}>
        <button onClick={() => signIn('google')}> Google login</button>
        <button onClick={() => signOut()}> Google out</button>
      </div>
    </>
  );
}
