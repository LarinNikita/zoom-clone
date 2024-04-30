import React from 'react';
import { SignIn } from '@clerk/nextjs';

function SignInPage() {
  return (
    <main className="flex-center h-screen w-full">
      <SignIn />
    </main>
  );
}

export default SignInPage;
