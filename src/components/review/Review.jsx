import React from 'react'
import Heading from '../Heading'
import Reviewcard from './Reviewcard'
import pic1 from '../../assets/images/pic1.png'
import pic2 from '../../assets/images/pic2.png'
import pic3 from '../../assets/images/pic3.png'

const Review = () => {
    return (
        <div className='min-h-[80vh] flex flex-col items-center justify-center md:px-32 py-5'>
            <Heading title="Our" title2="Reviews" />

            <div className='flex flex-col md:flex-row gap-5 mt-5'>
                <Reviewcard img={pic1} />
                <Reviewcard img={pic2} />
                <Reviewcard img={pic3} />
            </div>
        </div>
    )
}

export default Review