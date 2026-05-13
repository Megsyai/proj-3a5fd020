
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import { img } from "@/lib/img";

const Biography = () => {
  const timeline = [
    { year: "1898", event: "الميلاد في قرية طماي الزهايرة بمحافظة الدقهلية.", details: "نشأت في أسرة ريفية بسيطة." },
    { year: "1923", event: "الانتقال إلى القاهرة والاحتراف الفني.", details: "بدأت الغناء في المسارح الكبرى وتعرفت على النخبة الفنية." },
    { year: "1940", event: "عصر السنباطي الذهبي.", details: "قدمت في هذه الفترة أروع القصائد الفصحى مع الموسيقار رياض السنباطي." },
    { year: "1964", event: "لقاء السحاب.", details: "أول تعاون فني مع محمد عبد الوهاب في أغنية أنت عمري، وهو الحدث الأبرز في تاريخ الفن العربي." },
    { year: "1975", event: "الوداع الأخير.", details: "رحلت عن عالمنا تاركة خلفها ملايين القلوب المنكسرة وإرثاً لا يفنى." },
  ];

  return (
    <div className="font-arabic py-12">
      <Section pt={false}>
        <Container>
          <div className="relative h-[400px] w-full overflow-hidden rounded-3xl mb-16">
            <img src={img("vintage-egypt", 1600, 600)} className="w-full h-full object-cover brightness-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white">النشأة والمسيرة</h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-yellow-500">الطفولة المتنكرة</h2>
              <p className="text-gray-300 leading-loose text-xl">
                ولدت فاطمة إبراهيم في أواخر القرن التاسع عشر. كانت طفولتها شاقة، حيث اكتشف والدها موهبتها الفطرية وبدأ في تعليمها الإرشاد الديني. وبسبب القيود الاجتماعية آنذاك، كانت تخرج للغناء في الموالد والقرى المجاورة وهي ترتدي ملابس الفتيان (العقال والبالطو) حتى لا يكتشف أحد أنها فتاة.
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-yellow-500">التربع على العرش</h2>
              <p className="text-gray-300 leading-loose text-xl">
                في عشرينيات القرن الماضي، بدأت ملامح "أم كلثوم" كنجمة تتضح. خلعت زي الصبي وارتدت الفساتين الأنيقة، وبدأت في تقديم أغاني عاطفية لاقت رواجاً كبيراً. استطاعت بذكائها أن تحيط نفسها بكبار الشعراء مثل أحمد رامي، الذي كتب لها أكثر من 130 أغنية، وملحنين عباقرة مثل القصبجي والسنباطي.
              </p>
            </div>

            {/* Timeline */}
            <div className="border-r-2 border-yellow-600/30 pr-8 space-y-12">
              <h2 className="text-4xl font-bold text-white mb-12">محطات تاريخية</h2>
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <div className="absolute -right-[43px] top-0 w-5 h-5 bg-yellow-600 rounded-full border-4 border-neutral-900" />
                  <div className="bg-neutral-800/40 p-6 rounded-2xl border border-yellow-900/10 hover:border-yellow-600/40 transition-colors">
                    <span className="text-2xl font-bold text-yellow-500">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{item.event}</h3>
                    <p className="text-gray-400 mt-2">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Biography;
