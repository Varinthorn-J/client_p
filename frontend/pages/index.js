import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function Home({ token }) {
  return (
    <Layout>
      <Navbar />

      <div class="justify-center flex flex-row mt-10">
        <div class="basis-1/4">
          <img src="https://backend.tops.co.th/media/catalog/product/8/8/8850127004908_14-03-2022.jpg" />
          <div class="text-center">
            <p class="r mt-4 text-gray-700">
              เพียวริน่า วัน เท็นเดอร์ ซีเล็กซ์ เบลนด์ สูตรปลาแซลมอน<br></br>
              อาหารแมวชนิดเม็ด เกรดซุปเปอร์พรีเมี่ยม
            </p>
            <h3 class=" mt-4 text-gray-700">สำหรับแมว อายุ 1 ปีขึ้นไป</h3>
            <li>
              สนับสนุนการทำงานของระบบภูมิคุ้มกันพร้อมช่วยเรื่องขน และผิวหนัง
            </li>
            <li>ช่วยในการดูดซึมสารอาหารได้ดีจากวัตถุดิบคุณภาพสูง</li>

            <p class="mt-1 text-lg font-medium text-gray-900">320 บาท</p>
          </div>
        </div>
        <div class="basis-1/4">
          <div class="w-200 h-200">
            <img src="/2.jpg" />
          </div>
          <div class="text-center">
            <p class="r mt-4 text-gray-700">
              เพียวริน่า วัน เท็นเดอร์ ซีเล็กซ์ เบลนด์ สูตรปลาแซลมอน<br></br>
              อาหารแมวชนิดเม็ด เกรดซุปเปอร์พรีเมี่ยม
            </p>
            <h3 class=" mt-4 text-gray-700">สำหรับแมว อายุ 1 ปีขึ้นไป</h3>
            <li>
              สนับสนุนการทำงานของระบบภูมิคุ้มกันพร้อมช่วยเรื่องขน และผิวหนัง
            </li>
            <li>ช่วยในการดูดซึมสารอาหารได้ดีจากวัตถุดิบคุณภาพสูง</li>

            <p class="mt-1 text-lg font-medium text-gray-900">320 บาท</p>
          </div>
        </div>
        <div class="basis-1/4">
          <img src="https://backend.tops.co.th/media/catalog/product/8/8/8850127004908_14-03-2022.jpg" />
          <div class="text-center">
            <p class="r mt-4 text-gray-700">
              เพียวริน่า วัน เท็นเดอร์ ซีเล็กซ์ เบลนด์ สูตรปลาแซลมอน<br></br>
              อาหารแมวชนิดเม็ด เกรดซุปเปอร์พรีเมี่ยม
            </p>
            <h3 class=" mt-4 text-gray-700">สำหรับแมว อายุ 1 ปีขึ้นไป</h3>
            <li>
              สนับสนุนการทำงานของระบบภูมิคุ้มกันพร้อมช่วยเรื่องขน และผิวหนัง
            </li>
            <li>ช่วยในการดูดซึมสารอาหารได้ดีจากวัตถุดิบคุณภาพสูง</li>

            <p class="mt-1 text-lg font-medium text-gray-900">320 บาท</p>
          </div>
        </div>
      </div>
      {/* <div className="w-screen h-screen bg-stone-200 border-2 flex flex-col items-center">
        
        <div className=" flex flex-row items-center " >
          <div class="flex flex-row justify-center border-2 ">
            <div class="w-6/12 sm:w-4/12 px-4 ">
            <a class="text-2xl text-red-600">KANIVA</a><br></br>
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img src="https://backend.tops.co.th/media/catalog/product/8/8/8850127004908_14-03-2022.jpg" class="w-full w-full object-center object-cover group-hover:opacity-75" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." />
    </div>
            <a class="text-xl">Kanivaมีทั้งหมด 3 สูตร</a>
            
            </div>
            <ul class="list-disc">
  <li>ต้องบอกว่าสำหรับทาสแมวนอกจากต้องดูแลทำความสะอาดที่จะต้องมีห้องน้ำแมวหรืออุปกรณ์ต่างๆ แต่วันนี้สาระทีมจะมาแนะนำอาหารแมวยอดฮิตกินแล้ว</li>
    <li>สุขภาพดี ขนไม่ร่วง ขนนุ่ม ฟู สวยงาม เรามาดูกันว่ามีอะไรบ้าง</li>

</ul>
          </div>

          <div class="flex flex-row justify-center border-2">
            <div class="w-6/12 sm:w-4/12 px-4">
              
            </div>
          </div>

          <div class="flex flex-row justify-center border-2">
            <div class="w-6/12 sm:w-4/12 px-4">
            
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
