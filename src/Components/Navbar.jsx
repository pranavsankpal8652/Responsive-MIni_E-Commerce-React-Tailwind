import {React,useContext,useState} from 'react'
'use client'
import logo from '../assets/images/logo.webp'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router'
import { context } from './Context'
import { use } from 'react'
import Cart from './Cart'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const products = [
        { name: 'Men', description: 'Get a better Clothing of your Choice', href: '#', icon: ChartPieIcon },
        { name: 'Women', description: 'Show Fashion to your Loved ones', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Home Essentials', description: 'Bring Glory to your home', href: '#', icon: FingerPrintIcon },
        { name: 'Kids', description: 'Pamper your child with our collection', href: '#', icon: SquaresPlusIcon },
        { name: 'Electronics', description: 'Get the stuff with smart quality and low budget', href: '#', icon: ArrowPathIcon },
      ]
      const callsToAction = [
        { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
        { name: 'Contact sales', href: '#', icon: PhoneIcon },
      ]

      const {cartItems} = useContext(context)
      
      const [displayCanvas,setDisplayCanvas]=useState(false)

     
      const toggleOffcanvas=()=>{

        
        setDisplayCanvas(!displayCanvas)
       
     
      }
  return (
    <>
    <header className="bg-gradient-to-t from-[#B23B35] via-[#D3705F] to-[#E4947A] sticky top-0 z-10">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 z-[100]">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={logo}
              className="h-20 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <Link to="/products" className="text-sm font-semibold text-gray-900">
            Products
          </Link>
          <Link to="/" className="text-sm font-semibold text-gray-900">
            Home
          </Link>
          <Link to="/about_us" className="text-sm font-semibold text-gray-900">
            About Us
          </Link>
          <Link to="#" className="text-sm font-semibold text-gray-900">
            Services
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a  className="text-sm/6 font-semibold text-gray-900 bg-blue-400 p-2 rounded-lg cursor-pointer"  onClick={toggleOffcanvas}>
            View Cart{`(${cartItems.length})`}  <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        {
           console.log(displayCanvas)
        }
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden z-[200]">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={logo}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col gap-10 py-6">
                
                <a href="/products" className="text-sm/6 font-semibold text-gray-900">
                  Products
                </a>
                <a href="/" className="text-sm/6 font-semibold text-gray-900">
                  Home
                </a>
                <a href="/about_us" className="text-sm/6 font-semibold text-gray-900">
                  About Us
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Services
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={toggleOffcanvas}>
                  View Cart{`(${cartItems.length})`}  
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <Cart displayCanvas={displayCanvas} toggleOffcanvas={toggleOffcanvas} setDisplayCanvas={setDisplayCanvas} />
    </>
  )
}

  