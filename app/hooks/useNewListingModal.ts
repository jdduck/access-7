import { create } from 'zustand';

interface NewListingModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNewListingModal = create<NewListingModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useNewListingModal;
