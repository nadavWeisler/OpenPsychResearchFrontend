import Option from './Option'
import React from 'react'

const OptionsList = ({list_data}) => {
    return (
        <div>
            {
                list_data.map((item) => (
                    <Option {...item} />
                ))
            }
        </div>
    )
}

export default OptionsList;