import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {
  

  return (
    <Layout>
       <Navbar />
      <div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img src="https://backend.tops.co.th/media/catalog/product/8/8/8850127004908_14-03-2022.jpg" class="w-full h-full object-center object-cover group-hover:opacity-75" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." />
    </div>
        <h1 class="mt-4 text-sm text-gray-700">เพียวริน่า วันอาหารแมวชนิดเม็ดเกรดซุปเปอร์พรีเมี่ยม</h1>
        <p class="mt-1 text-lg font-medium text-gray-900">320 บาท</p>
      </a>
      <a href="#" class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img src="https://backend.tops.co.th/media/catalog/product/8/8/8850125078222_14-03-2022.jpg" class="w-full h-full object-center object-cover group-hover:opacity-75" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." />
    </div>
        <h3 class="mt-4 text-gray-700">เพียวริน่า วัน เท็นเดอร์ ซีเล็กซ์ เบลนด์ สูตรปลาแซลมอน<br></br>อาหารแมวชนิดเม็ด เกรดซุปเปอร์พรีเมี่ยม</h3>
        <h3 class="mt-4 text-gray-700">สำหรับแมว อายุ 1 ปีขึ้นไป</h3>
        <ul class="list-disc">
          <li>สนับสนุนการทำงานของระบบภูมิคุ้มกันพร้อมช่วยเรื่องขน และผิวหนัง</li>
          <li>ช่วยในการดูดซึมสารอาหารได้ดีจากวัตถุดิบคุณภาพสูง</li>
        </ul>
        <p class="mt-1 text-lg font-medium text-gray-900">320 บาท</p>
      </a>
      </div>
      </div>
      </div>

    </Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
