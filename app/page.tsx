import Image from "next/image";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <main className="relative flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden">
              {/* background video */}
              <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              >
                <source src="/droneFootage.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="text-7xl font-bold mb-4 text-white relative z-10">Welcome to Casas XIO</h1>
            </main>

            {/* About Us Section */}
            <section className="py-24 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                  <div>
                    <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">
                      About Casas XIO
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      Crafting homes with purpose, quality, and care.
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      We deliver exceptional living spaces that balance modern design with everyday comfort. Our
                      commitment to integrity, craftsmanship, and client experience guides every project—from
                      first conversation to final walkthrough.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                        Full-service real estate and property solutions
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                        Design-forward homes built for long-term value
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                        Local expertise across the Rio Grande Valley
                      </li>
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href="/about"
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                      <p className="text-3xl font-bold text-gray-900">5+ years</p>
                      <p className="mt-2 text-sm text-gray-600">Delivering trusted real estate solutions</p>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                      <p className="text-3xl font-bold text-gray-900">500+ families</p>
                      <p className="mt-2 text-sm text-gray-600">Helped find the right place to call home</p>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                      <p className="text-3xl font-bold text-gray-900">100% focus</p>
                      <p className="mt-2 text-sm text-gray-600">On quality, service, and long-term value</p>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                      <p className="text-3xl font-bold text-gray-900">RGV local</p>
                      <p className="mt-2 text-sm text-gray-600">Deep roots in our communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Projects />
        </div>
    );
}
