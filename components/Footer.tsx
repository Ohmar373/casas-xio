import Image from "next/image";
import Link from "next/link";

const areas = [
  "Brownsville",
  "Harlingen",
  "San Benito",
  "Los Fresnos",
  "Weslaco",
  "McAllen",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/CasasXio.jpg"
                alt="Casas XIO logo"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <div>
                <p className="text-lg font-semibold">Casas XIO LLC</p>
                <p className="text-sm text-gray-400">Real estate & housing solutions</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Contact Us
            </Link>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Areas We Operate</h3>
            <p className="text-sm text-gray-400 mb-3">Rio Grande Valley</p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-gray-300">
              {areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Casas XIO LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
