import { PropsWithChildren } from 'react';
import QueryClientProvider from './QueryClientProvider';

const Providers = async ({ children }: PropsWithChildren) => {
  return <QueryClientProvider>{children}</QueryClientProvider>;
};

export default Providers;
