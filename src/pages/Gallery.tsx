
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { img } from "@/lib/img";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    { src: img("egypt-vintage-1", 800, 800), title: "حفل مسرح الأزبكية" },
    { src: img("egypt-vintage-2", 800, 1000), title: "مع المنديل الشهير" },
    { src: img("egypt-vintage-3", 1000, 800), title: "في الاستوديو" },
    { src: img("egypt-vintage-4", 800, 800), title: "لقاء مع الجمهور" },
    { src: img("egypt-vintage-5", 900, 900), title: "مقتنيات نادرة" },
    { src: img("egypt-vintage-6", 800, 1200), title: "أناقة لا تنتهي" },
  ];

  return (
    <div className="font-arabic text-white py-12">
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">معرض الصور</h1>
            <p className="text-gray-400 text-xl">لحظات خالدة من حياة الست</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 p-4">
            {images.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative mb-6 group cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent hover:border-yellow-500/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-yellow-500">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Gallery;
