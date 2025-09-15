import { Footer } from "../../components/Footer/Footer";

export const HomePage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section with Video */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/FBMA_MAIN_PAGE_VIDEO.mp4"
          autoPlay
          loop
          muted
        />
        {/* Overlay for text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#ee7120] mb-4">
            Welcome to FBMA
          </h1>
          <p className="text-lg md:text-2xl text-white max-w-2xl mb-6">
            Empowering women in sports through education, events, and research.
          </p>
          {/* Example CTA buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#about"
              className="px-6 py-3 bg-[#ee7120] text-white font-semibold rounded-lg hover:bg-[#d66a2a] transition-colors"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-[#ee7120] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Placeholder for Features / Highlights */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            FBMA empowers women in sports by providing education, hosting events,
            promoting research, and connecting a strong network of partners.
          </p>
        </div>
      </section>

      {/* Example Events / Gallery Section */}
      <section id="events" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay tuned for workshops, competitions, and seminars designed to
            elevate women in sports.
          </p>
          {/* You can add a carousel or cards here */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
