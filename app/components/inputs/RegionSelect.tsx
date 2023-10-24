import Select from 'react-select'

interface RegionSelectProps {
  label: string;
  region: string;
  onChange: (label: string) => void;
}

const RegionSelect: React.FC<RegionSelectProps> = ({
  label,
  onChange
}) => {
  return ( 
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        // options={}
        value={label}
        onChange={(value) => onChange(value as string)}
        formatOptionLabel={(option: any) => (
          <div className="
          flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">
                {option.region}
              </span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg'
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6'
          }
        })}
      />
    </div>
   );
}
 
export default RegionSelect;