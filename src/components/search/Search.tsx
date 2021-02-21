import React, { useEffect, useState } from 'react'
import { AppActions } from '../../service/types/actions'
import './search.scss'

const Search = (
    props: {
        filterBy: (payload: string) => AppActions
    }
) => {
    const { filterBy } = props
    const [open, isOpen] = useState(false)
    const [value, setValue] = useState('')
    useEffect(() => {
        if (open === false) {
            setValue('')
            filterBy('')
        }
    }, [filterBy, open])

    function getValue(e: React.ChangeEvent<HTMLInputElement>) {
        let value: string = e.target.value
        setValue(value)
        filterBy(value)
    }

    function onClick(e: React.MouseEvent<HTMLSpanElement>) {
        isOpen(!open)
    }

    return (
        <div className="search">
            <input
                type="text"
                onChange={getValue}
                className={`search-input ${open ? 'active' : 'close'}`}
                disabled={open ? false : true}
                value={value}
            />
            <span className={`searchBnt ${open ? 'active' : ''}`} onClick={onClick}>
                <span className='search-circle'>
                    <span className='search-line'></span>
                </span>
            </span>
        </div>
    )
}
export default Search