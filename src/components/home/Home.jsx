import React from 'react'
import { Link } from 'react-scroll'
import Buttoncom from '../../layouts/Button'
import hero from '../../assets/hero.svg'


const Home = () => {
    return (
        <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>

            <div className='md:w-2/4 text-start'>
                <h2 className='text-5xl font-semibold leading-tight'>Knowladge with</h2>
                <span className='text-5xl font-semibold text-brightGreen'>eLearn</span>
                <p className='text-lightText mt-5 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dignissimos beatae pariatur minima, rerum nesciunt sunt recusandae nihil fuga sapiente. Praesentium qui amet velit omnis. Qui sint iusto modi rem.</p>
                <Link to='contact' spy={true} smooth={true} duration={500}>
                    <Buttoncom title='Contact Us' />
                </Link>
            </div>
  
            <div className='w-full md:w-2/4 md:ml-5'>
                <img src={hero} alt="Hero-img"/>
            </div>

        </div>
    );
};

export default Home