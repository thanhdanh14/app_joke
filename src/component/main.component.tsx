import Header from './header.component'
import Slider from './swiper/slider.component'
export default function App_Web() {
  return (
    <div className='h-screen absolute'>
      <div className='bg-white  w-[100%]  z-10'>
        <Header />
      </div>
      <div className=' h-[450px] mt-[20px] pl-[22%] w-[80%] text-center z-[1] relative'>
        <Slider />
        <div>
          <div>
            <div className='text-center mt-[250px] mb-[100px]'>
              <h1 className='text-[#5353ac] text-[33px] font-black'>왜 독서일까요?</h1>
            </div>
            <div className='flex flex-col box-border float-right...'>
            <div className='flex gap-5 mt-5'>
                <img className='rounded-tl-2xl rounded-br-2xl w-[700px] h-[200px]' src='https://reading-time.co.kr/resources/img/main/why1.png' />
                <div className='text-left '>
                  <p >외국어 학습에 있어 책 읽기는 필수입니다.</p> 
                  <p >특히 어린 아이일수록 언어 습득이 빠르기 때문에 영어를 전부 익히지 않았더라도</p> 
                  <p className='w-[690px]'>그림을 통해 내용을 유추함으로써 Reading Comprehension Skill을 향상시킬 수 있습니다.</p> 
                  <p>단순 말하기 보다 다양한 표현과 구조를 습득할 수 있는</p> 
                  <p>독서야말로 영어 학습에 있어 최고의 방법 중 하나입니다.</p> 
                  <p > (Moeller & Meyer, 1995) </p>
                </div>
               
              </div>
              <div className='flex flex-row-reverse gap-5 mt-5'>
                <img className='rounded-tl-2xl rounded-br-2xl w-[500px] h-[200px]' src='https://reading-time.co.kr/resources/img/main/why2.png' />
                <div className='text-right mt-[120px] '>
                 
                  <p >리딩타임은 미국/캐나다 공교육에서 사용하는 라즈키즈,에픽 도서를 활용하고 있으며,</p> 
                  <p>그 중에서 학습에 적합한 내용만 엄선하였습니다.</p> 
                  <p className='w-[653px]'>독서전문선생님과 책 읽기부터 토론까지 하며 자연스럽게 영어와 친해지는 경험을 해보세요!</p> 
                
                </div>
               
              </div>
            </div>
          </div>
          <div className='text center mt-[50px]' >
            <h1 className='text-[33px] text-[#5353ac]'>리딩타임 체험후기</h1>
            <h3 className='mt-[10px] text-[22px]'>리딩타임의 리얼한 체험후기를 영상으로 만나보세요.</h3>

          </div>

        </div>
      </div>
    </div>
  )
}
