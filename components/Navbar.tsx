import Image from 'next/image';
import Link from 'next/link';

const navIcons = [
  {src: '/assets/icons/search.svg', alt: 'search'},
  {src: '/assets/icons/black-heart.svg', alt: 'heart'},
  {src: '/assets/icons/user.svg', alt: 'user'},
]

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/flame.svg"
            width={15}
            height={15}
            alt="logo"
          />
          <p className="nav-logo">
            <span className="text-primary">Tracker</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
        <Link href="/amazon">
          Amazon
        </Link>
        <Link href="/">
          Google Flights (coming)
        </Link>
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar;