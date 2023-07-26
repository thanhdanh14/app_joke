import logo1 from '../assets/logoReadingtime.png'
import {RiArrowDropDownFill} from 'react-icons/ri' 
import {CgMenuRightAlt} from 'react-icons/cg'
export default function Header() {
  return (
    <>
      <div className='flex justify-center my-2  '>
        <h1 className=' py-1'>
          <img src={logo1} alt='logo' />
        </h1>
        <div className='flex gap-[10px] '>
          <div>
            <button className='peer px-5 pt-[40px] rounded-none text-black hover:underline decoration-[#f4a5c7] decoration-4 flex'>리딩타임이란  <RiArrowDropDownFill size={'25px'}/></button>
            
            <div
              className='hidden peer-hover:grid hover:flex w-[180px] flex-col bg-[#5353ac] rounded-tl-2xl rounded-br-2xl absolute py-[20px] mb-0'
            >
              <a className='px-5 text-[#fff] py-3 hover:bg-[#f4a5c7] text-[15px]' href='#'>
              리딩타임 소개
              </a>
              <a className='px-5 py-3 text-[#fff] hover:bg-[#f4a5c7] text-[15px]' href='#'>
                C라즈키즈(Raz-kids)
              </a>
              <a className='px-5 text-[#fff] py-3 hover:bg-[#f4a5c7] text-[15px]' href='#'>
              에픽(Epic)
              </a>
            </div>
          </div>
          <div>
            <button className='peer px-5 pt-[40px] rounded-none text-black hover:underline decoration-[#f4a5c7] decoration-4'>수업후기</button>

          </div>
          <div>
            <button className='peer px-5 pt-[40px] rounded-none font-black hover:underline decoration-[#f4a5c7] decoration-4 '>무료체험 신청</button>
          </div>
          <div>
            <button className='peer px-5 pt-[40px] rounded-none text-black hover:underline decoration-[#f4a5c7] decoration-4'>이용권 구매</button>
          </div>
          <div>
            <button className='peer px-5 pt-[40px] rounded-none text-black hover:underline decoration-[#f4a5c7] decoration-4 flex'>고객센터 <RiArrowDropDownFill size={'25px'} /></button>

            <div
              className='hidden peer-hover:grid hover:flex w-[170px] flex-col bg-[#5353ac] rounded-tl-2xl rounded-br-2xl  absolute py-[20px]'
            >
              <a className='px-5 py-3 text-[#fff] hover:bg-[#f4a5c7] text-left text-[15px] ' href='#'>
              공지사항
              </a>
              <a className='px-5 py-3 text-[#fff] hover:bg-[#f4a5c7] text-left text-[15px]' href='#'>
              FAQ
              </a>
              <a className='px-5 py-3 text-[#fff] hover:bg-[#f4a5c7] text-left text-[15px]' href='#'>
              Q&A
              </a>
            </div>
          </div>
         
         <div className='flex gap-2'>
         <button className="rounded-full mt-[35px] w-[60px] h-[26px]  text-[#5353ac] border border-[#5353ac] hover:bg-slate-300">Login</button>
         <button className="rounded-full mt-[35px] w-[64px] h-[26px]  text-[#fff] bg-[#5353ac] hover:border border-transparent">Join us</button>
         <div className='mt-[35px]'>

         <CgMenuRightAlt size={'30px'}/>
         </div>
         </div>
        </div>
      </div>
      
    </>
  )
}
