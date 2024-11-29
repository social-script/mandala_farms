import Link from 'next/link';

export default function Navigation() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/the-farm', label: 'The Farm' },
    { href: '/araku-valley', label: 'Araku Valley' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/tariff', label: 'Tariff' },
    { href: '/the-cottages', label: 'The Cottages' },
    { href: '/cafe', label: 'Café & Restaurant' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Mandala Farms
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 