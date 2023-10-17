'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {GiWindmill} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Community',
    icon: TbBeach,
    description: 'This property is in a Manufactured Housing Community',
  },
  {
    label: 'Land/Home',
    icon: GiWindmill,
    description: 'This property includes real estate!',
  },
  {
    label: 'Ready to Move',
    icon: MdOutlineVilla,
    description: 'This home is ready for transport'
  },
  {
    label: 'NOT Ready to Move',
    icon: TbMountain,
    description: 'This home must be prepared for transport'
  },
  {
    label: 'Fixer Upper',
    icon: TbPool,
    description: 'This home will require special attention'
  }  
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;