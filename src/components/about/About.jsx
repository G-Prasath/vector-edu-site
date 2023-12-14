import React from 'react'
import about from '../../assets/about.svg'
import { Link } from 'react-scroll'
import Buttoncom from '../../layouts/Button'
import Heading from '../Heading'

const About = () => {
    return (
        <div className='md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14'>
            <div className='w-full md:w-2/4'>
                <img src={about} alt="About-Img" />
            </div>
            <div className='w-full md:w-2/4 text-justify space-y-2 '>
                <Heading title="About " title2="Us" />
                <p className='text-lightText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde repellat aliquid maxime ipsum, voluptatem, animi dolorum voluptate cum eaque nisi dolore velit autem, est doloremque enim eos saepe consectetur nesciunt.</p>
                <Link to='contact' spy={true} smooth={true} duration={500}>
                    <Buttoncom title='Contact Us' />
                </Link>
            </div>
        </div>
    )
}

export default About