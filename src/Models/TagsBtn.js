import React from 'react'
import Button from '../Utils/Button'

const TagsBtn = () => {
    const btnType = ['Travel', 'LifeStyle', 'Fashion', 'Technology', 'Business', 'Design', 'Health', 'Food', 'Art']
    return (
        <div className='mt-5'>
            {btnType.map((item, index) => {
                return (
                    <Button key={item + index} buttonName={item} />
                )
            })}
        </div>
    )
}

export default TagsBtn
