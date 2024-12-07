import React from 'react'

export default function TodoCard(props) {

    const {children} = props

    return (
        <li className="list-group-item d-flex justify-content-between">
            {children}
            <div className='button-group' >
                <button className='edit-button bg-warning'>Edit</button>
                <button className='remove-button bg-info'>Remove</button>
            </div>
        </li>
  )
}
