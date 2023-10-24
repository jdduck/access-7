'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import CategoryBox from "../CategoryBox";
import {GiWindmill} from 'react-icons/gi';


export const regions = [
  {
    label: 'Northeast',
    icon: GiWindmill,
    description: "'CT', 'ME', 'MA', 'NH', 'RI', 'VT', 'NJ', 'NY', 'PA'",
  },
  {
    label: 'Midwest',
    icon: GiWindmill,
    description: "'IL', 'IN', 'MI', 'OH', 'WI', 'IA', 'KS', 'MN', 'MO', 'NE', 'ND', 'SD', 'ON'",
  },
  {
    label: 'South',
    icon: GiWindmill,
    description: "'FL', 'GA', 'MD', 'NC', 'SC', 'VA', 'DC', 'WV', 'AL', 'KY', 'MS', 'TN', 'AR', 'LA', 'OK', 'TX'"
  },
  {
    label: 'West',
    icon: GiWindmill,
    description: "'AZ', 'CO', 'ID', 'MT', 'NV', 'NM', 'UT', 'WY', 'AK', 'CA', 'HI', 'OR', 'WA'"
  },
  {
    label: 'All',
    icon: GiWindmill,
    description: 'This home will require special attention'
  }  
]

const Regions = () => {
  const params = useSearchParams();
  const region = params?.get('region');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <div className="pt-4 flex flex-row flex-grow items-center justify-evenly overflow-x-auto">
      <div className="w-[25rem] align-middle p-4">
          <div className="bg-red-700 text-white ml-2 p-2">
            <p className="text-xl">Where would you like to search ?</p>
            <p>Please select a region</p>
          </div>
      </div>
      {regions.map((item) => (
        <CategoryBox 
          key={item.label}
          label={item.label}
          icon={item.icon}
          description={item.description}
          selected={region === item.label}
        />
      ))}
    </div>
  );
}
 
export default Regions;