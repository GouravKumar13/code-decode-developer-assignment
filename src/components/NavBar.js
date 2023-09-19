import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ErrorIcon from '@mui/icons-material/Error';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const NavBar = () => {
    return (
        <div className='w-full h-20%'>
            <div className='bg-blue-950  text-blue-950 w-full h-1/2 '>..</div>
            <div className='flex justify-between m-1 bg-white'>
                <div className='text-black flex items-center gap-3 ml-3'>
                    <KeyboardBackspaceIcon className='border-r-2 pr-2' />
                    <span>Financial Management <ErrorIcon /></span>
                </div>
                <div className='flex items-center gap-4  '>
                    <div className='flex gap-4 border-r-2 pr-4'>
                        <RemoveRedEyeOutlinedIcon />
                        <OpenInFullIcon />
                    </div>
                    <div>
                        <MoreHorizIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
