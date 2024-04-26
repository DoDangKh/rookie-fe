import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'antd'

export default function Home() {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <main className="">
      <div>
        {/* <navbar/> */}

        <Carousel autoplay>
          <div>
            <img src='https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg'></img>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        {/* <h1>
          Hello
        </h1>
        <Link href='/users'>users</Link> */}
      </div>
    </main >
  )
}
