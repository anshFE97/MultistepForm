import Check from '../assets/images/icon-thank-you.svg'

const Result = () => {
  return (
    <div className='flex flex-col items-center gap-4 px-4 lg:px-6'>
        <div>
            <img src={Check} alt="thankyou" className='w-full h-full object-contain' />
        </div>
        <div className='text-3xl text-[#02295A] font-semibold'>
            Thank you!
        </div>
        <div className='flex text-center flex-wrap  text-slate-500 opacity-70 font-[400] text-[15px]'>
            Thanks for confirming your subscription! We hope you have fun using our platform.
            If you ever need support, please feel free to email us at support@loremgaming.com.
        </div>
    </div>
  )
}

export default Result