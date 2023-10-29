import Link from 'next/link';
import React from 'react'

const MenuItems = () => {
  return (
    <div className="flex flex-col gap-8 min-h-screen my-10">
      <div className="border lg:hidden md:block border-gray-400/75 p-4 max-w-xs rounded-md w-full">
        Search components
      </div>
      <div className="lg:hidden md:flex xs:flex flex-col  gap-8 justify-center px-2">
        <Link href="/">Products</Link>
        <Link href="/">Categories</Link>
        <Link href="/">Community</Link>
        <Link href="/">Marketplace</Link>
        <Link href="/">Advertise</Link>
        <Link href="/">About</Link>
      </div>
    </div>
  );
}

export default MenuItems