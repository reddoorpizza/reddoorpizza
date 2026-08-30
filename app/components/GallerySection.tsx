import Image from "next/image";

const galleryImages = [
  { src: "/Gallery/img-1.webp", alt: "Wood-fired pizza coming out of the oven at Red Door Pizza" },
  { src: "/Gallery/img-2.webp", alt: "Outdoor courtyard dining area with festoon lighting" },
  { src: "/Gallery/img-3.webp", alt: "Wood-fired pizza with fresh toppings" },
  { src: "/Gallery/img-4.webp", alt: "Interior dining area at Red Door Pizza Buninyong" },
  { src: "/Gallery/img-5.webp", alt: "Fresh pasta being prepared" },
  { src: "/Gallery/img-6.webp", alt: "Kids corner play area" },
  { src: "/Gallery/img-7.webp", alt: "Il piccolo gelato dessert" },
  { src: "/Gallery/img-8.webp", alt: "Group dining in the beer garden" },
  { src: "/Gallery/img-9.webp", alt: "Take-home vacuum-sealed pizza bases" },
  { src: "/Gallery/img-10.webp", alt: "Red Door Pizza storefront in Buninyong" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18181B] mb-2">
            Life at Red Door Pizza
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Wood-fired craft, local ingredients, and our heritage venue in historic Buninyong.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
