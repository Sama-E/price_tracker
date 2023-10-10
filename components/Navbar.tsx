import Image from 'next/image';
import Link from 'next/link';

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

        <div className="flex justify-items-end gap-2">
          <Link href="/amazon">
            Amazon
          </Link>
          <Link href="/">
            Google Flights (coming)
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;