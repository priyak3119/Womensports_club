
import { Footer } from "../../components/Footer/Footer";

export const NewsletterPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
     
      <main className="relative py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#ee7120] mb-6">Newsletter Signup</h1>
          <p className="text-lg text-gray-600 mb-12">Subscribe to our newsletter for the latest updates.</p>
          <div className="bg-gray-100 rounded-xl p-12 text-gray-400">Newsletter signup coming soon.</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
