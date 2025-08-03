export default function ClientsSection() {
  const clients = [
    {
      name: "Resort Paradise",
      logo: "/images/logo-01.png?height=80&width=120",
    },
    {
      name: "Mountain Resort",
      logo: "/images/logo-02.png?height=80&width=120",
    },
    {
      name: "Tropical Getaway",
      logo: "/images/logo-03.png?height=80&width=120",
    },
    {
      name: "Island Homes",
      logo: "/images/logo-04.png?height=80&width=120",
    },
    {
      name: "Beach Lounge",
      logo: "/images/logo-05.png?height=80&width=120",
    },
    {
      name: "Sky Resort",
      logo: "/images/logo-06.png?height=80&width=120",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            OUR CLIENTS
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            We Have More Then 150+
            <br />
            Global Clients
          </h2>
        </div>

        {/* Clients Logo Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 lg:gap-12 items-center justify-items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={120}
                  height={80}
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
