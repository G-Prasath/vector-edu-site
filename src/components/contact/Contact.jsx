import React from 'react'
import Heading from '../Heading'
import Buttoncom from '../../layouts/Button'
import Img from '../../assets/contact.svg'

const Contact = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10 '>
            <Heading title="Contact" title2="Us" />

            <div className='flex flex-col md:flex-row justify-between w-full'>
                <form className='w-full md:w-2/5 space-y-5 pt-20'>
                    <div className='flex flex-col'>
                        <label htmlFor="userName">Your Name</label>
                        <input
                            className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                            type="text"
                            name='userName'
                            id='userName'
                            placeholder='Enter Your Name'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="userEmail">Your Email</label>
                        <input
                            className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                            type="text"
                            name='userEmail'
                            id='userEmail'
                            placeholder='Enter Your Email'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="userNumber">Your Number</label>
                        <input
                            className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                            type="text"
                            name='userNumber'
                            id='userNumber'
                            placeholder='Enter Your Number'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <Buttoncom title="send Message" />
                    </div>
                </form>
                <div className='w-full md:w-2/4'>
                    <img src={Img} alt="Conact Image" />
                </div>
            </div>
        </div>
    )
}

export default Contact