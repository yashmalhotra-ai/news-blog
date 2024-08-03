import React from 'react'

const Button = ({ buttonName }) => {
    return (
        <>
            <button className='p-2 m-1 rounded-lg font-semibold text-[15px] text-[#666666] border border-[#C4C4C4
]'>
                {buttonName}
            </button>        </>
    )
}

export default Button
