import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import bg_img from '/bg_image.jpg'

gsap.registerPlugin(useGSAP,ScrollTrigger,MotionPathPlugin,TextPlugin);
export default function Banner() {
    const links = [
        { name: 'Categories ', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Our Promise', href: '#' },
        { name: 'Stores Worldwide', href: '#' },
      ]
      const stats = [
        { name: 'Products Sold', value: '1M+' },
        { name: 'Daily Visitors', value: '5000+' },
        { name: 'Support Availability', value: '24/7' },
        { name: 'Return Policy', value: '30-Days' },
      ]
      const title =useRef(null)
      const texts = ['Wear Your Story, Every Day', 'Smart Choices, Smarter Living!', 'Redefine Your Living!', 'Style, Power, Comfort – Everything Under One Roof'];
      const [index,setIndex]=useState(0)

      useEffect(() => {
        function animateText(){
          if (title.current) {
            const text = texts[index];
            title.current.innerText = '';
            gsap.to(title.current, { 
              duration: text.length * 0.1, 
              text: text, 
              ease: 'none', 
              repeat:0 ,
              onComplete:()=>{
                gsap.to(title.current,{
                  duration: text.length * 0.1, 
                  text: '', 
                  ease:'none', 
                  repeat:0 ,
                  delay:1,
                  onComplete:()=>{
                    setIndex((prevIndex)=>(prevIndex+1)%texts.length)
                  }
                })
               
               
              },
              
            });
          }
        }
        animateText()
      
      }, [index]);
     
      
  return (

          <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
              alt=""
              src={bg_img}
              className="absolute inset-0 -z-10 size-full md:object-cover object-none "
            />
            <div
              aria-hidden="true"
              className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-7xl" ref={title}></h2>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-2xl">
                Discover the perfect blend of style, innovation, and comfort – from trendy apparel to cutting-edge electronics and elegant furniture, all in one place </p>
              </div>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                  {links.map((link) => (
                    <a key={link.name} href={link.href}>
                      {link.name} <span aria-hidden="true">&rarr;</span>
                    </a>
                  ))}
                </div>
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.name} className="flex flex-col-reverse gap-1">
                      <dt className="lg:text-base/10 text-sm text-gray-300">{stat.name}</dt>
                      <dd className="lg:text-4xl text-sm font-semibold tracking-tight text-white">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        )
      }
      
