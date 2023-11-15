import { Nunito } from 'next/font/google'

import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import NewListingModal from '@/app/components/modals/NewListingModal';

import ToasterProvider from '@/app/providers/ToasterProvider';

import './globals.css'
import ClientOnly from './components/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Access Housing',
  description: 'World\'\s Finest Manufactured Housing Listing Service',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();


  return (
    <html lang="en">
      <script async src="https://maps.googleapis.com/maps/api/js?key=NEXT_PUBLIC_GOOGLE_MAPS_KEY&callback=Function.prototype&libraries=places"></script>      
      
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <NewListingModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-4 pt-2">
          {children}
        </div>
      </body>
      
    </html>
  )
}
