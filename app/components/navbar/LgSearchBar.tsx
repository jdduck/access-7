'use client'
import { useState } from 'react'
import Regions from './Regions'
import Categories from './Categories'

const LgSearchBar: React.FC<any> = () => {
  const [switchBox, setSwitchBox] = useState(true)

  return (
    <div className="flex align-middle">
      {switchBox ? <Regions />:<Categories/>}

      <button type="button" className="h-[60%] w-28 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => setSwitchBox(switchBox => !switchBox)}>{switchBox?"Categories" : "Region"}</button>
      
    </div>    
  )
}
export default LgSearchBar

