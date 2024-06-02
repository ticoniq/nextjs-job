import {
  ClerkProvider
} from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin panel for managing jobs",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}