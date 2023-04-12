import React from 'react'

interface PlanProps {
    imageSrc: string;
    label: string;
    priceM?: number
    priceY?: number
    duration: boolean
    onSelect?: () => void;
    selected?: boolean
}

const Plan: React.FC<PlanProps> = ({
    imageSrc,
    label,
    priceM,
    priceY,
    duration,
    onSelect,
    selected
}) => {
  return (
    <div 
    onClick={onSelect}
    className={`border-2 cursor-pointer hover:border-sky-500 
    flex-row gap-2 w-[300px]
    ${selected ? "border-sky-500" : ""} border-slate-300 rounded-md flex md:flex-col md:gap-8 px-2 py-2 md:w-[120px]`}>
        <div>
            <img src={imageSrc} alt={label} />
        </div>
        <div>
        <div className='text-md font-semibold'>{label}</div>
            <div className='text-[13px] opacity-60 font-[500]'>{duration ? `$${priceY}/yr` : `$${priceM}/mo`}</div>
            {duration && (
                <div className='text-[14px] font-[500]'>2 months free</div>
            )}
        </div>
    </div>
  )
}

export default Plan