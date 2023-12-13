import React from 'react'

const Buttoncom = (props) => {
  return (
    <div>
        <button className='bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[ragba(0,0,0,0.24) 0px 3px 8px] hover:bg-brightGreen hover:text-white transition-all'>
            {props.title}
        </button>
    </div>
  )
}

export default Buttoncom