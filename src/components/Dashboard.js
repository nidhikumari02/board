import React, { useState } from 'react'
import { AiFillPieChart, AiOutlineSchedule, AiOutlineSearch, AiOutlineDown } from 'react-icons/ai'
import { BsTags, BsChevronDown } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { MdNotificationsNone, MdKeyboardArrowRight } from 'react-icons/md'
import { RxDotFilled } from 'react-icons/rx'
import Linechart from './Linechart'
import { Userdata } from './Data'
import Piechart from './Piechart'



const Dashboard = () => {

  const [userData, setuserData] = useState({
    labels: Userdata.map((data) => data.week),
    datasets: [{
      label: "number of users gained",
      lineTension: 0.4,
      data: Userdata.map((data) => data.trans1),
      backgroundColor: "#E9A0A0",
      borderColor: "#E9A0A0",
    }, {
      label: "number of users gained",
      lineTension: 0.4,
      data: Userdata.map((data) => data.trans2),
      backgroundColor: "#9BDD7C",
      borderColor: "#9BDD7C"
    }
    ]
  })

  const [pie, setpie] = useState({
    labels: Userdata.map((data) => data.week),
    datasets: [{
      label: "number of users gained",
      lineTension: 0.4,
      data: Userdata.map((data) => data.trans1),
      backgroundColor: ["#E9A0A0", "#9BDD7C", "#F6DC7D"],
      borderColor: "#E9A0A0",
    }
    ]
  })


  


  return (
    <>

      <div className='p-3 grid grid-cols-5 gap-2 bg-[#DDDDDD]'>
        <div className=' h-[105vh] p-6  text-left'>
          <div className="bg-black h-[105%] w-[102%] m-auto rounded-3xl text-white p-4">
            <div className="mt-10 ml-4  h-[90%]">
              <h1 className='font-bold text-left text-4xl'>Board.</h1>
              <div className="flex flex-col justify-between  h-[95%]">
                <div className="my-6">
                  <ul>
                    <li className='my-6 flex'><AiFillPieChart className='mr-4 mt-1' /> <span className='font-bold'>Dashboard</span> </li>
                    <li className='my-6 flex'><BsTags className='mr-4 mt-1' /> <span className=''>Transactions</span> </li>
                    <li className='my-6 flex'><AiOutlineSchedule className='mr-4 mt-1' /> <span className=''>Schedules</span> </li>
                    <li className='my-6 flex'><FaRegUserCircle className='mr-4 mt-1' /> <span className=''>Users</span> </li>
                    <li className='my-6 flex'><FiSettings className='mr-4 mt-1' /> <span className=''>Settings</span> </li>
                  </ul>
                </div>
                <div className="">
                  <ul>
                    <li className='my-3'>Help</li>
                    <li className='my-3'>Contact us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className=' col-span-4 p-4 '>
          <div className="w-[100%] text-left p-4 flex flex-row justify-between">
            <div><h1 className='font-bold text-xl'>Dashboard</h1></div>
            <div className=' flex flex-row  '>
              <div className='flex mx-10'><input type="text" className='p-1 px-4 rounded-md' placeholder='Search' /><AiOutlineSearch className='-mx-8 my-2' /></div>
              <div className='flex'><MdNotificationsNone className='text-3xl mx-5 font-bold ' /></div>
              <div className=""><img src="/image 1.png" className='rounded-xl' alt="" /></div>
            </div>
          </div>


          <div className="my-4">
            <div className="grid grid-cols-4 gap-10">
              <div className=" p-4 bg-[#DDEFE0] rounded-xl">
                <div className="flex justify-end"><img src="/vector.png" alt="" /></div>
                <div className="text-left">
                  <p>Total Revenue</p>
                  <h1 className='font-bold text-2xl'>$2,129,430</h1>
                </div>
              </div>

              <div className=" p-4 bg-[#F4ECDD] rounded-xl">
                <div className="flex justify-end"><BsTags className='text-2xl' /></div>
                <div className="text-left">
                  <p>Total Transactions</p>
                  <h1 className='font-bold text-2xl'>1,520</h1>
                </div>
              </div>

              <div className=" p-4 bg-[#EFDADA] rounded-xl">
                <div className="flex justify-end"><img src="/like.png" alt="" /></div>
                <div className="text-left">
                  <p>Total Likes</p>
                  <h1 className='font-bold text-2xl'>9,721</h1>
                </div>
              </div>

              <div className=" p-4 bg-[#DEE0EF] rounded-xl">
                <div className="flex justify-end"><img src="/user.png" alt="" /></div>
                <div className="text-left">
                  <p>Total Users</p>
                  <h1 className='font-bold text-2xl'>892</h1>
                </div>
              </div>

            </div>
          </div>


          <div className="grid grid-cols-2 gap-6 ">
            <div className="col-span-full border-2 h-[370px] bg-white text-left rounded-2xl">
              <div className="p-6">
                <h1 className='font-bold text-xl'>Activities</h1>
                <div className="flex text-[#858585]  justify-between">
                  <div className='flex' >
                    <p>May - June 2021 </p><BsChevronDown className='m-1 cursor-pointer' />
                  </div>
                  <div className='flex'>
                    <div className='flex'>
                      <RxDotFilled className='text-[#E9A0A0] text-4xl ' /> <span className='my-1 text-black '>Guest</span>
                    </div>
                    <div className='flex mx-2'>
                      <RxDotFilled className='text-[#9BDD7C] text-4xl ' /> <span className='my-1 text-black '>User</span>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <Linechart data={userData} />
                </div>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-5 col-span-full">

              <div className=" h-[280px] w-[100%] bg-white rounded-2xl p-6">
                <div className="flex flex-row justify-between">
                  <div className=""><h1 className='font-bold text-lg'>Top products</h1></div>
                  <div className="flex text-[#858585] text-sm"><p>May - June 2021 </p><BsChevronDown className='m-1 cursor-pointer' /></div>
                </div>
                <div className='flex'>
                  <Piechart data={pie} />
                  <div className='p-4'>
                    <div className='flex'>
                      <RxDotFilled className='text-[#E9A0A0] text-4xl ' /><span className='m-1 font-bold ' >Basic tees <div className='text-left font-normal'>55%</div></span>

                    </div>
                    <div className='flex'>
                      <RxDotFilled className='text-[#9BDD7C] text-4xl ' /><span className='m-1 font-bold ' >Custom Short Pants<div className='text-left font-normal'>31%</div></span>

                    </div>
                    <div className='flex'>
                      <RxDotFilled className='text-[#F6DC7D] text-4xl ' /><span className='m-1 font-bold ' >Super Hoodies <div className='text-left font-normal'>14%</div></span>

                    </div>
                  </div>
                </div>
              </div>
              <div className=" h[270px] w-[100%] bg-white rounded-2xl p-6">
                <div className="flex flex-row justify-between">
                  <div className=""><h1 className='font-bold text-lg'>Today's schedule</h1></div>
                  <div className="flex text-[#858585] text-sm"><p>See all</p> <MdKeyboardArrowRight className='m-1' /></div>
                </div>
                <div className='py-4' >
                  <div className='flex text-sm'>
                    <div className="bg-[#9BDD7C] border-1 border-[#9BDD7C] w-[10px] h-[80px]"></div>
                    <div className='px-2 text-left my-2'>
                      <h1 className='font-bold text-[#666666]'>Meeting with the suppliers from Kuta Bali</h1>
                      <p className='text-[#999999]'>14:00 - 15:00</p>
                      <p className='text-[#999999]'>at Sunset Road,Kuta,Bali</p>
                    </div>
                  </div>
                </div>

                <div className='py-1 text-sm' >
                  <div className='flex'>
                    <div className="bg-[#6972C3] border-1 border-[#9BDD7C] w-[10px] h-[80px]"></div>
                    <div className='px-2 text-left my-2'>
                      <h1 className='font-bold text-[#666666]'>Meeting with the suppliers from Kuta Bali</h1>
                      <p className='text-[#999999]'>14:00 - 15:00</p>
                      <p className='text-[#999999]'>at Sunset Road,Kuta,Bali</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )




}

export default Dashboard
