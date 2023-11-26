import './Dropdown.css'

export const Dropdown = () =>{
    return(
    <div className='dropdown'>
        <button className='dropdown-button'>Username ▾</button>
        <div className="content">
            <div className='log-out-button'>Log Out</div>
        </div>
    </div>
    )
}