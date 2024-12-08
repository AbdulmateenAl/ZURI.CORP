import Image from "next/image";

import { CiLight } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";


export default function Home() {
  return (
      <div className="flex flex-col gap-10 pt-6 pl-6 pr-6">
        <header className="flex justify-between">
          <div className="flex items-center justify-center w-32 text-black bg-white rounded-2xl h-7">
            <Image width={25} height={25} alt="zuricorp logo" src='/Zuricorplogo.png' className="max-w-full"/>
            <p>ZURI.CORP</p>
          </div>
          <div className="flex gap-3">
            <CiLight className="text-2xl text-white cursor-pointer"/>
            <div className="px-5 text-black cursor-pointer rounded-2xl bg-custom-green"><p>Contact us</p></div>
          </div>
        </header>
        <main className="flex flex-col gap-10">
          <div className="flex flex-col space-y-4 w- md:flex-row">
            <div className="md:w-3/5">
              <h1 className="text-4xl font-semibold">The Future of Innovation, Engineered.</h1>
              <p className="mt-5 text-sm">At Zuri.corp, we aspire to establish a paradigm where innovation takes root within Africa. Our core objective is to tackle the pressing problems inherent to our region, to devise comprehensive solutions that resonate with the unique complexities of out local environment while crafting compelling brand experiences, tailored to the discerning brands that refuse to settle for
              anything less than excellence.</p>
            </div>
            <div className="md:w-1/5">
              <Image src='/group1.png' alt="the world" width={800} height={450}/>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl">
            <h1 className="text-xl font-medium text-black md:w-1/3">Fueling innovation, driving growth, and shaping the future of technology</h1>
            <div className="flex flex-col mt-7 md:flex-row">
              <div className="flex flex-col gap-5">
                <p className="text-black">Creating innovative software solutions tailored to specific needs.</p>
                <Image src='/undraw_programming_re_kg9v 1.png' alt="undraw programming" width={700} height={700}/>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-black">Nurturing and supporting promising startups from ideation to market launch.</p>
                <Image src='/undraw_cloud_docs_re_xjht.png' alt="undraw cloyd" width={700} height={700}/>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-black">Providing expert advice on digital transformation and cloud solutions.</p>
                <Image src='/undraw_in_progress_re_m1l6 1.png' alt="undraw_in_progress_re_m1l6 1" width={700} height={700}/>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-black">Leveraging advanced technologies to drive innovation and efficiency.</p>
                <Image src='/undraw_standing.png' alt="undraw_standing" width={700} height={700}/>
              </div>
            </div>
          </div>
          <div className="w-auto p-3 md:w-1/5 bg-custom-green rounded-2xl">
            <p className="text-black">{"Here’s what we are building"}</p>
          </div>
          <div className="flex flex-col items-center gap-4 justify-evenly md:flex-row">
            <div className="p-2 mb-1 md:w-1/4 rounded-xl bg-custom-darkgreen">
              <Image src="/Pinelogo.png" alt="Pine logo" width={100} height={50}/>
              <p className="m-3 text-sm">A digital innovation hub where startup ideas come to life. Pine fosters collaboration among entrepreneurs, developers, and investors, providing the resources and community needed to turn groundbreaking concepts into reality.</p>
              <div className="flex items-center justify-center w-40 px-6 py-1 m-4 border border-white rounded-3xl"><p>Go to Pine</p><MdArrowOutward /></div>
            </div>
            <div className="p-2 md:w-1/4 rounded-xl bg-custom-blue">
              <Image src="/Findr.png" alt="Findr logo" width={100} height={50}/>
              <p className="m-1 text-sm">A next-generation navigation app that redefines urban exploration. Findr offers hyper-localized insights, real-time updates, and personalized recommendations,transforming the way people navigate cities.</p>
              <div className="flex items-center justify-center w-40 px-6 py-1 m-4 border border-white rounded-3xl"><p>Go to Findr</p><MdArrowOutward /></div>
            </div>
          </div>
        </main>
        <footer className="py-6 -ml-6 -mr-6 text-black bg-white pt-14 rounded-t-3xl">
          <div className="flex flex-col items-center p-5 gap-7 md:justify-between md:flex-row md:mr-32 md:-mt-24 md:ml-10">
            <div>
              <h3 className="font-semibold">{"Let’s make things happen!"}</h3>
              <p className="text-sm">contact us today to learn how our software service can help you bring your ideas to life.</p>
              <button className="px-10 py-1 mt-4 bg-custom-green rounded-2xl">Get started</button>
            </div>
            <div>
              <Image src="/undraw_interview.png" alt="undraw interview" width={200} height={300} className="mb-10"/>
            </div>
          </div>
          <div className="flex flex-col text-white gap-y-7 md:flex-row">
            <div className="flex flex-row justify-between pt-5 pb-5 pl-10 bg-black md:w-1/2 rounded-t-2xl">
              <div className="flex flex-row w-1/3 gap-1">
                <Image src="/zurilogo.png" alt="Zuri logo" width={25} height={25} className="w-6 h-6"/>
                <p className="">zuri.corp</p>
              </div>
              <div className="w-2/3">
                <h4>Quick Access</h4>
                <div className="flex flex-row mt-5 text-xs font-thin">
                  <div className="flex flex-col w-1/3 gap-5">
                    <a href="">About us</a>
                    <a href="">services</a>
                    <a href="">Careers</a>
                  </div>
                  <div className="w-2/3">
                    <a href="">FAQS</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-5 pb-5 pl-10 bg-black md:w-1/2 rounded-t-2xl">
              <p className="text-xs">To know the latest news and updates, enter your email so that we can contact you</p>
              <div className="flex items-center w-2/3 bg-white border md:w-1/2 rounded-3xl">
                <input type="email" className="flex-1 p-1 text-black bg-transparent border-none outline-none rounded-l-3xl"/>
                <button className="px-3 py-1 text-black bg-custom-green rounded-3xl">subscribe</button>
              </div>
              <div className="flex flex-row items-center gap-5">
                <p>contact us:</p>
                <FaTwitter className="text-white cursor-pointer"/>
                <RiInstagramFill className="text-white cursor-pointer" />
                <MdEmail className="text-white cursor-pointer"/>
                <IoIosCall className="text-white cursor-pointer"/>
              </div>
            </div>
          </div>
          <p className="flex items-center justify-center -mb-5 text-sm">copyright © 2024 zuri.corp All rights reserved.</p>
        </footer>
      </div>
  );
}
