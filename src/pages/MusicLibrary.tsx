
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Play, Heart, Share2, Clock } from "lucide-react";

const MusicLibrary = () => {
  const songs = [
    { title: "أنت عمري", length: "58:00", composer: "محمد عبد الوهاب", poet: "أحمد شفيق كامل" },
    { title: "الأطلال", length: "61:00", composer: "رياض السنباطي", poet: "إبراهيم ناجي" },
    { title: "سيرة الحب", length: "45:00", composer: "بليغ حمدي", poet: "مرسي جميل عزيز" },
    { title: "أمل حياتي", length: "52:20", composer: "محمد عبد الوهاب", poet: "أحمد شفيق كامل" },
    { title: "لسه فاكر", length: "48:00", composer: "رياض السنباطي", poet: "عبد الفتاح مصطفى" },
    { title: "القلب يعشق كل جميل", length: "34:00", composer: "رياض السنباطي", poet: "بيرم التونسي" },
  ];

  return (
    <div className="font-arabic text-white py-12">
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">المكتبة الموسيقية</h1>
            <p className="text-gray-400 text-xl">استمتع بتراث كوكب الشرق الغنائي</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {songs.map((song, idx) => (
              <Card key={idx} className="bg-neutral-800/50 border-yellow-900/20 hover:border-yellow-500/50 transition-all group overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center p-6 gap-6">
                    <div className="w-24 h-24 bg-yellow-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-500 overflow-hidden relative">
                      <Music size={40} className="text-white/80" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                         <Play fill="white" className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold text-white mb-2">{song.title}</h3>
                        <div className="flex gap-2 text-gray-500">
                          <Heart size={18} className="hover:text-red-500 cursor-pointer transition-colors" />
                          <Share2 size={18} className="hover:text-blue-500 cursor-pointer transition-colors" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-4">
                        <div><span className="text-yellow-500/80">ألحان:</span> {song.composer}</div>
                        <div><span className="text-yellow-500/80">كلمات:</span> {song.poet}</div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Clock size={14} />
                        <span>{song.length} دقيقة</span>
                      </div>
                    </div>
                  </div>
                  {/* Fake Audio Wave */}
                  <div className="h-1 w-full bg-neutral-700 flex">
                    <div className="h-full bg-yellow-600 w-1/3 group-hover:w-full transition-all duration-[3s]" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 p-12 bg-yellow-900/10 rounded-[3rem] border border-yellow-600/20 text-center">
            <h2 className="text-3xl font-bold mb-6">هل تعلم؟</h2>
            <p className="text-xl text-gray-300 leading-loose max-w-4xl mx-auto">
              أن أغنية "الأطلال" تُعتبر عند الكثيرين أفضل ما غنت أم كلثوم، ووصفها الموسيقيون بـ "هرم النغم العربي"، حيث استغرق السنباطي سنوات في تلحينها لتخرج بهذه الصورة الملحمية التي تُدرس حتى اليوم في المعاهد الموسيقية حول العالم.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default MusicLibrary;
