import logo  from '../assets/logo1.png'
import avatar from '../assets/avatar.png'
export default function Header() {
  return (
    <>
      <div className='flex justify-around my-2  '>
        <h1 className=' py-1'>
          <img src={logo} alt='logo'/>
        </h1>
        <div className='flex'>
          <div className='flex-col pt-[15px]'>
          <h2 className='text-gray-400 w-[120px] '>Handicrafted by</h2>
          <h2 className='flex justify-end mr-[4px]'>Jim HLS</h2>
          </div>
          <img src={avatar} alt='avatar'/>
        </div>
      </div>
    </>
  )
}
