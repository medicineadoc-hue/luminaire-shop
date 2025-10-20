
import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20elegant%20lighting%20fixtures%20suspended%20from%20ceiling%20in%20contemporary%20interior%20design%20with%20warm%20ambient%20lighting%20and%20sophisticated%20atmosphere%20showcasing%20luxury%20luminaires%20in%20beautiful%20home%20setting&width=1920&height=1080&seq=hero1&orientation=landscape')`
             }}>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Illuminez vos rêves<br />
              avec des créations<br />
              lumineuses intemporelles.
            </h1>
            <Button 
              variant="primary" 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Offres Spéciales
              <i className="ri-arrow-right-line ml-2"></i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
