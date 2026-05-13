
import { motion } from "framer-motion";
import { img } from "@/lib/img";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { PlayCircle, Award, History, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomeView = () => {
  return (
    <div className="font-arabic">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={img("um-kalthoum", 1920, 1080)} 
            className="w-full h-full object-cover brightness-50 contrast-125"
            alt="Om Kalthoum Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
        </div>

        <Container className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              كوكب الشرق <br/>
              <span className="text-yellow-500">أم كلثوم</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              صوتٌ لم يتكرر في تاريخ الموسيقى العربية، قصة حياة بدأت من قرية ريفية لتصل إلى ذرى المجد الفني العالمي.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-8 h-12 text-lg">
                اكتشف مسيرتها
              </Button>
              <Link to="/music">
                <Button variant="outline" size="lg" className="border-yellow-600 text-yellow-500 hover:bg-yellow-600/10 rounded-full px-8 h-12 text-lg">
                  استمع لأغانيها
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <Section className="bg-neutral-900 py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "عام من العطاء", val: "60+", icon: <History className="text-yellow-500"/> },
              { label: "أغنية خالدة", val: "300+", icon: <PlayCircle className="text-yellow-500"/> },
              { label: "جائزة دولية", val: "50", icon: <Award className="text-yellow-500"/> },
              { label: "عاشق للفن", val: "مليار", icon: <Heart className="text-yellow-500"/> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-neutral-800/50 rounded-2xl border border-yellow-900/20"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Brief Portrait Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              <img 
                src={img("ancient-egypt-woman", 800, 1000)}
                className="rounded-3xl shadow-2xl grayscale transition group-hover:grayscale-0 duration-700 h-[600px] w-full object-cover"
                alt="Om Kalthoum Portraits"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-600 p-8 rounded-2xl hidden md:block">
                <p className="text-white font-bold text-xl italic">"لا أغني بلساني، بل أغني بقلبي"</p>
              </div>
            </motion.div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white border-r-4 border-yellow-500 pr-4">إرثٌ يتخطى الحدود</h2>
              <p className="text-lg text-gray-300">
                بدأت فاطمة إبراهيم البلتاجي مسيرتها كمنشدة في الموالد النبوية، متنكرة في زي صبي، حتى أصبحت السيدة التي تجمع العرب من المحيط إلى الخليج في الخميس الأول من كل شهر.
              </p>
              <p className="text-lg text-gray-300">
                لم تكن مجرد مطربة، بل كانت رمزاً وطنياً وثقافياً ساهم في تشكيل وجدان الأمة العربية لعقود طويلة. تميزت بصوتها القوي، وقدرتها الفائقة على أسر المستمعين لساعات في أغنية واحدة.
              </p>
              <ul className="space-y-4">
                {["تعاونت مع أعظم الملحنين (القصبجي، السنباطي، بليغ حمدي)", "غنت لأكبر الشعراء (أحمد شوقي، نزار قباني)", "أسست نقابة الموسيقيين المصرية"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Songs Preview */}
      <Section className="bg-black/40">
        <Container>
          <h2 className="text-4xl font-bold text-white text-center mb-12">أهم الروائع الموسيقية</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "أنت عمري", year: "1964", desc: "لقاء السحاب مع الموسيقار محمد عبد الوهاب." },
              { title: "الأطلال", year: "1966", desc: "درة الأغنية العربية وقصيدة إبراهيم ناجي الخالدة." },
              { title: "ألف ليلة وليلة", year: "1969", desc: "تحفة فنية تجسد سحر الشرق وألحان بليغ حمدي." },
            ].map((song, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-neutral-800 p-8 rounded-3xl border border-yellow-900/30 text-center"
              >
                <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-500">
                  <PlayCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{song.title}</h3>
                <span className="text-yellow-600 font-medium block mb-4">{song.year}</span>
                <p className="text-gray-400">{song.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default HomeView;
