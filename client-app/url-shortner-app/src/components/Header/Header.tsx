import * as React from 'react';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className='bg-slate-900 shadow-sm'>
      <div className='container mx-auto p-4 flex justify-between items-center'>
        <div className='text-xl font-bold text-white'>Linksy</div>
        <nav className='flex space-x-8 items-center'>
          <a href="#" className='text-white hover:text-blue-400'>Why briefly?</a>
          <a href="#" className='text-white hover:text-blue-400'>Features</a>
          <a href="#" className='text-white hover:text-blue-400'>Contact Us</a>
        </nav>
        <div className='flex space-x-2 items-center'>
          <button className='border border-white text-white px-4 py-1 rounded-full hover:bg-white hover:text-slate-900'>Pricing</button>
          <button className='bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600'>Login</button>
          <button className='bg-slate-900 border border-slate-300 text-white px-4 py-1 rounded-full hover:bg-slate-800'>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
