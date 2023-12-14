import React from 'react'

const Coursecard = (props) => {
    return (
        <div className='flex flex-col justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,0,0,0.24) 0px 3px 8px] transition-all'>
            <div className='w-full w-3/5'>
                <img src={props.image} alt="Course Card" />
            </div>
            <div>
                <h3 className='font-semibold text-lg text-center my-5'>{props.title}</h3>
                <p className='text-lightText text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis delectus qui architecto quos at eligendi, porro sint quisquam explicabo!</p>
            </div>
        </div>
    )
}

export default Coursecard