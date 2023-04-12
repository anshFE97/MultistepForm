import React from 'react'
import Step from './Step'

interface StepsProps {
  page?: number;
}

const Steps: React.FC<StepsProps> = ({page}) => {
  return (
    <div className='z-10 flex md:flex-col gap-8 rounded-md absolute top-8 left-8'>
            <Step number={1} page={page} label="YOUR INFO" />
            <Step number={2} page={page} label="SELECT PLAN" />
            <Step number={3} page={page} label="ADD-ONS" />
            <Step number={4} page={page} label="SUMMARY" />
    </div>
  )
}

export default Steps