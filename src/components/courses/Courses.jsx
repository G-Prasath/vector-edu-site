import React from 'react'
import Heading from '../Heading'
import webImg from '../../assets/web-dev.svg'
import appImg from '../../assets/app-dev.svg'
import graphicImg from '../../assets/graphic.svg'
import digitalImg from '../../assets/digital.svg'
import Coursecard from './Coursecard'


const Courses = () => {
    return (
        <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
            <Heading title="Our " title2="Courses" />

            <div className='flex flex-wrap justify-center gap-6 mt-6'>
                <Coursecard image={webImg} title="Web Development" />
                <Coursecard image={appImg} title="App Development" />
                <Coursecard image={graphicImg} title="Graphic Design" />
                <Coursecard image={digitalImg} title="Digital Marketing" />
            </div>
        </div>
    )
}

export default Courses