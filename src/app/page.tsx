import Header from '@/components/layouts/Header';
import Jsonld from '@/app/_seo/jsonld';
import Questions from '@/app/_components/Questions';
import Reviews from '@/app/_components/Reviews';
import Features from '@/app/_components/Features';
import { HeroSection } from '@/app/_components/HeroSection';
import StartSection from '@/app/_components/StartSection';
import Footer from '@/components/layouts/Footer';
export {generateMetadata} from '@/app/_seo/metadata'

export default function Home() {
  return (
    <>
      <Jsonld />
      <main className="flex flex-col items-center">
        <Header />
        <HeroSection />
        <Features />
        <Questions />
        <Reviews />
        <StartSection />
        <Footer />
      </main>
    </>
  );
}
