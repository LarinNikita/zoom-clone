import React from 'react';
import { SignUp } from '@clerk/nextjs';

function SignUpPage() {
  return (
    <main className="flex-center h-screen w-full">
      <SignUp />
    </main>
  );
}

export default SignUpPage;
