import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <Navbar />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-6xl font-bold mb-6">Our Story</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Discover the passion, vision, and values that drive Casas XIO to create exceptional living spaces.
                    </p>
                </div>
            </section>

            {/* Our History */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-gray-900">Our History</h2>
                    <div className="space-y-6 text-lg text-gray-700">
                        <p>
                            Founded over a decade ago, Casas XIO began with a simple yet powerful vision: to transform 
                            the real estate landscape by creating homes that are not just structures, but sanctuaries 
                            where families thrive and memories are made.
                        </p>
                        <p>
                            From our humble beginnings, we've grown into a trusted name in the industry, known for our 
                            unwavering commitment to quality, innovation, and customer satisfaction. Every project we 
                            undertake reflects our dedication to excellence and our passion for creating spaces that 
                            inspire and endure.
                        </p>
                        <p>
                            Today, with hundreds of satisfied families calling our properties home, we continue to push 
                            boundaries and set new standards in residential development. Our journey is a testament to 
                            the trust our clients place in us and the dedication of our talented team.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Core Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ValueCard 
                            title="Excellence" 
                            description="We pursue excellence in every detail, from design to construction, ensuring the highest quality in all our projects."
                        />
                        <ValueCard 
                            title="Innovation" 
                            description="We embrace innovative design and sustainable building practices to create homes for the future."
                        />
                        <ValueCard 
                            title="Integrity" 
                            description="Honesty and transparency guide all our interactions with clients, partners, and communities."
                        />
                        <ValueCard 
                            title="Sustainability" 
                            description="We're committed to environmentally responsible practices that protect our planet for future generations."
                        />
                        <ValueCard 
                            title="Community" 
                            description="We build more than homes; we create vibrant communities where neighbors become friends."
                        />
                        <ValueCard 
                            title="Customer Focus" 
                            description="Your satisfaction is our priority. We listen, understand, and deliver on your dreams."
                        />
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Mission</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        To create exceptional living spaces that enhance the quality of life for our clients and communities, 
                        through innovative design, sustainable practices, and unwavering commitment to excellence. We strive 
                        to be more than developers—we aim to be partners in building your dreams and shaping the future of 
                        residential living.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Meet Our Team</h2>
                    <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                        Behind every successful project is a team of dedicated professionals who bring expertise, 
                        creativity, and passion to their work. Our diverse team of architects, engineers, designers, 
                        and project managers work collaboratively to turn visions into reality.
                    </p>
                    <div className="text-center">
                        <p className="text-gray-600 italic">
                            "Great homes are built by great people. Our team is our greatest asset."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ValueCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}
