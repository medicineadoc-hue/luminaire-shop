
export default function FeaturesSection() {
  const features = [
    {
      icon: "ri-truck-line",
      title: "Livraison Gratuite",
      description: "Pour les commandes\nE-Commerce"
    },
    {
      icon: "ri-arrow-go-back-line",
      title: "Retour Marchandise",
      description: "Retour gratuit moins de\n7 jours"
    },
    {
      icon: "ri-secure-payment-line",
      title: "Payement Simplifié",
      description: "Vous payez à\nla livraison"
    },
    {
      icon: "ri-customer-service-2-line",
      title: "Support 24h / 7j",
      description: "Nous sommes à votre\nécoute 24/24"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${feature.icon} text-2xl text-orange-500`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
