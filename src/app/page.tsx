'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/Button';

const Home = () => {
  return (
    <div>
      <Button onClick={() => signIn()}> Log in</Button>
    </div>
  );
};

export default Home;
