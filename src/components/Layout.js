import React from 'react'
import AccountsBarCharts from './AccountsBarCharts'
import ProgressBars from './ProgressBars'
import NetWorthChart from './NetWorthChart'
import ProfitLoss from './ProfitLoss'

const Layout = () => {
    return (
        <div>
            <div className='grid grid-cols-3 h-3/6'>

                <div className='col-span-2'>
                    <div className='grid-cols-4 grid '>
                        <div className='flex justify-center flex-col items-center bg-white m-1'>
                            <p className='font-semibold text-sm'>Total Accounts Receivable</p>
                            <span className='text-xl text-blue-400'>$6,621,280</span>
                        </div>
                        <div className='flex justify-center flex-col items-center  bg-white m-1'>
                            <p className='font-semibold text-sm'>Total Accounts Receivable</p>
                            <span className='text-xl text-red-400'>$6,621,280</span>
                        </div>
                        <div className='flex justify-center flex-col items-center  bg-white m-1'>
                            <p className='font-semibold text-sm'>Total Accounts Receivable</p>
                            <span className='text-xl text-blue-500'>$6,621,280</span>
                        </div>
                        <div className='flex justify-center flex-col items-center  bg-white m-1'>
                            <p className='font-semibold text-sm'>Total Accounts Receivable</p>
                            <span className='text-xl text-blue-600'>$6,621,280</span>
                        </div>
                        <div className=' bg-white m-1'><ProgressBars /></div>
                        <div className=' bg-white m-1'><ProgressBars /></div>
                        <div className=' bg-white m-1'><ProgressBars /></div>
                        <div className=' bg-white m-1'><ProgressBars /></div>

                    </div>
                </div>
                <div className=' bg-white m-1' >
                    <AccountsBarCharts />
                </div>
            </div>
            <div className='h-full grid grid-cols-2'>
                <div className=' bg-white m-1'><NetWorthChart /></div>
                <div className=' bg-white m-1'><ProfitLoss /></div>
            </div>
        </div>
    )
}

export default Layout
