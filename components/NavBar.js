import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='nav'>
      <Link href='/'>
        <a>
          <div className='logo link'></div>
        </a>
      </Link>
    </div>
  );
};

export default NavBar;
