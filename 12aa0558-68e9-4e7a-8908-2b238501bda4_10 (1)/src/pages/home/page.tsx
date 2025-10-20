
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CategoryGallery from './components/CategoryGallery';
import BestSellers from './components/BestSellers';
import ProjectShowcase from './components/ProjectShowcase';
import NewProducts from './components/NewProducts';
import BrandsSection from './components/BrandsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CategoryGallery />
        <BestSellers />
        <ProjectShowcase />
        <NewProducts />
        <BrandsSection />
      </main>
      <Footer />
    </div>
  );
}
