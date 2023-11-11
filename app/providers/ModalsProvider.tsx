'use client';

import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import NewListingModal from "../components/modals/NewListingModal";

const ModalsProvider = () => {
  return ( 
    <>
      <LoginModal />
      <RegisterModal />
      <NewListingModal />
    </>
   );
}
 
export default ModalsProvider;