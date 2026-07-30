import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='P-4 flex item-center justify-between rounded-full'>
        <div>
            <img className='w-10 h-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gjTRd51rYY1lk5QNzdaMKJTyUp7E4lKT3oTOI2gi8w&s=10" alt="Users" />
        </div>
        <div className='flex gap-6 font-semibold'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <button onClick={() => setToggle((prev) => !prev)} className='p-2 bg-blue-600 text-white cursor-pointer rounded'>Create User</button>
    </div>
  )
}

export default Navbar