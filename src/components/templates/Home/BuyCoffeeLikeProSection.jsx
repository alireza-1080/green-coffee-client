import React from 'react'
import BuyCoffeLikeProContent from '@/components/modules/BuyCoffeLikePro/BuyCoffeLikeProContent'
import BuyCoffeLikeProPicture from '@/components/modules/BuyCoffeLikePro/BuyCoffeLikeProPicture'

const BuyCoffeeLikeProSection = () => {
  return (
    <div className='w-full h-fit bg-gray-200 py-10 sm:px-5 sm:py-16 lg:container mx-auto'>
        <div className='flex flex-col gap-10 mx-auto overflow-hidden md:flex-row'> 
            <div className='sm:self-start md:w-1/2 md:h-full  md:justify-self-end md:self-center'>
                <BuyCoffeLikeProContent />
            </div>
            <div className='flex justify-center items-center sm:self-end md:w-1/2'>
                <BuyCoffeLikeProPicture />
            </div>
        </div>
    </div>
  )
}

export default BuyCoffeeLikeProSection

//md:flex-row md:gap-0 md:justify-between md:items-center md:h-full