import React from 'react'
import heroVid from './../assets/video.mp4'
import aryaVid from './../assets/Arya.mp4'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top=[90px]'>
        <video className='object-cover h-full w-full absolute -z-10'
         src={aryaVid} 
        autoPlay
        loop
        muted/>
        <div className='w-full h-[90%] flex justify-center items-center flex-col text-white px-4 text-center'>
            <h1>Decentralized</h1>
            <h1 className='py-2'> <span className='text-blue-600'>Trading</span> Protocol</h1>
            <p className='text-xl py-4'>Guarranteed liquidity trading for millions of users and top Ethereum applications</p>
            <div>
                <button className='m-2'>Use Defi</button>
                <button className='m-2 px-6'>FAQ</button>
            </div>
            <div>
                <p className='text-center text-white text-2xl font-bold flex-row'>Total Volume Secured: $45, 543, 767, 987</p>
            </div>
        </div>



    </div>
  )
}

export default Hero