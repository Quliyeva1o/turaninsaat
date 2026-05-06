import AboutUs from "@/components/home/aboutUs";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
export const metadata: Metadata = {
  title: "Hovuz Tikintisi Bakı | SPA, Hamam, Sauna, Filtrasiya – Turan İnşaat",

  description:
    "Bakıda lisenziyalı hovuz tikintisi şirkəti – Turan İnşaat MMC. Fərdi və ictimai hovuz, türk hamamı, rus hamamı, sauna, duz otağı, SPA kompleksi layihələndirilməsi, tikintisi və quraşdırılması. Pulsuz konsultasiya: +994 55 751 31 15.",

  keywords: [
    // ── Əsas xidmətlər ──
    "hovuz tikintisi bakı",
    "hovuz qurulması azərbaycan",
    "hovuz layihələndirilməsi",
    "hovuz quraşdırılması",
    "hovuz dizaynı bakı",
    "hovuz tikintisi qiyməti",
    "pool construction baku",

    // ── Hovuz növləri ──
    "fərdi hovuz tikintisi",
    "villa hovuzu bakı",
    "infinity hovuz bakı",
    "sonsuzluq hovuzu",
    "daşma hovuz",
    "skimmer hovuz",
    "olimpiya hovuzu",
    "uşaq hovuzu",
    "akrilik hovuz",
    "təbii hovuz",
    "cakuzi quraşdırılması",
    "hidromassajlı hovuz",
    "jet stream hovuz",
    "aquapark sistemi",

    // ── Filtrasiya və kimya ──
    "hovuz filtrasiya sistemi",
    "duz elektroliz sistemi",
    "uv dezinfeksiya sistemi hovuz",
    "avtomatik dozaj sistemi",
    "kartricli filtrasiya",

    // ── İsitmə ──
    "hovuz isitmə sistemi",
    "heat pump hovuz bakı",
    "hovuz eşenjoru",

    // ── SPA ──
    "spa mərkəzi bakı",
    "spa tikintisi bakı",
    "spa kompleksi quraşdırılması",

    // ── Hamam / Sauna ──
    "türk hamamı tikintisi bakı",
    "hamam tikintisi",
    "hammam construction baku",
    "rus hamamı tikintisi",
    "banya tikintisi bakı",
    "sauna tikintisi bakı",
    "sauna quraşdırılması",
    "infraqırmızı sauna",
    "duz otağı bakı",
    "haloterapiya otağı",
    "sulu par otağı",
    "buz otağı ice room",

    // ── Coğrafi ──
    "hovuz tikintisi abşeron",
    "hovuz tikintisi novxanı",
    "hovuz tikintisi bilgəh",
    "hovuz tikintisi badamdar",
    "hovuz tikintisi sumqayıt",

    // ── Brend ──
    "turan inşaat",
    "turan inşaat mmc",
    "turanprojects az",
    "lisenziyalı inşaat şirkəti bakı",
  ],

  alternates: {
    canonical: "https://www.turanprojects.az",
    languages: {
      "az-AZ": "https://www.turanprojects.az",
    },
  },

  openGraph: {
    title: "Hovuz Tikintisi Bakı | SPA, Hamam, Sauna – Turan İnşaat MMC",
    description:
      "Bakıda lisenziyalı hovuz tikintisi, SPA kompleksi, türk hamamı, rus hamamı, sauna və duz otağı tikintisi. Hyatt Regency, My Class kimi nüfuzlu referanslar. Pulsuz konsultasiya: +994 55 751 31 15.",
    url: "https://www.turanprojects.az",
    siteName: "Turan İnşaat",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "https://www.turanprojects.az/assets/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Turan İnşaat MMC – Hovuz, SPA və Hamam Tikintisi Bakı",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hovuz Tikintisi Bakı | SPA, Hamam, Sauna – Turan İnşaat",
    description:
      "Bakıda lisenziyalı hovuz tikintisi, SPA, türk hamamı, sauna, duz otağı. Pulsuz konsultasiya: +994 55 751 31 15.",
    images: ["https://www.turanprojects.az/assets/images/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "https://www.turanprojects.az/assets/images/logo.webp",
    shortcut: "https://www.turanprojects.az/assets/images/logo.webp",
    apple: "https://www.turanprojects.az/assets/images/logo.webp",
  },

  category: "construction",
};


// Lazy components
const OurServices = dynamic(() => import("@/components/home/ourServices"));

const OurProjects = dynamic(
  () => import("@/components/home/ourProjects"),
  {
    loading: () => (
      <div className="h-96 animate-pulse bg-gray-100 rounded-xl" />
    ),
  }
);

const ProductsHome = dynamic(() =>
  import("@/components/home/products").then((mod) => mod.ProductsHome)
);

const WhyChooseUs = dynamic(() => import("@/components/home/chooseUs"));

const ContactSection = dynamic(() =>
  import("@/components/home/contactUs").then((mod) => mod.ContactSection)
);

const HeroWrapper = dynamic(() => import("@/components/home/heroWrapper"));

export default function Home() {
  return (
    <>
      <div style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none", zIndex: -1 }}>
        <h1>Turan İnşaat MMC – Bakıda Hovuz, SPA və Hamam Tikintisi | Lisenziyalı Şirkət</h1>
        <p>
          Turan İnşaat MMC lisenziyalı tikinti şirkəti olaraq, su ilə rahatlığı birləşdirərək mükəmməl hovuz
          və spa həlləri təqdim edir. İllərin təcrübəsi və yenilikçi texnologiyalarla hovuz, spa və sauna
          sistemlərinin layihələndirilməsi, tikintisi və quraşdırılması sahəsində peşəkar xidmət göstəririk.
          Keyfiyyətli materiallar, innovativ dizaynlar və müştəri məmnuniyyəti bizim üçün əsas prinsiplərdir.
          Bakı, Abşeron, Sumqayıt, Gəncə və Azərbaycanın bütün bölgələrində xidmət göstəririk.
          Şirkətimiz Hyatt Regency, My Class (Yasamal), Bilgəh, Badamdar kimi nüfuzlu layihələri
          uğurla başa çatdırmışdır.
        </p>
        <p>
          Turan İnşaat ilə əməkdaşlıq edərək dəyərli investisiya etdiyinizdən əmin ola bilərsiniz.
          Hər layihədə keyfiyyət standartlarına uyğun materiallar, müasir texnologiyalar və peşəkar
          komanda ilə xidmət göstəririk. Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın:
          +994 55 751 31 15 | +994 50 312 76 57 | Ofis: +994 12 348 28 75.
          Ünvan: Bakı şəhəri, Abşeron rayonu, Binəqədi-Novxanı şossesi, Novxanı kəndi.
        </p>

        {/* ─── HOVUZ NÖVLƏRİ ─── */}
        <h2>Hovuz Növləri – Fərdi, İctimai, Olimpiya, Akvapark və Daha Çox</h2>
        <p>
          Turan İnşaat MMC hər növ hovuzun layihələndirilməsi, tikintisi və quraşdırılması xidmətini
          təklif edir. Fərdi hovuzlardan tutmuş olimpiya standartlı hovuzlara qədər geniş portfel
          təqdim edirik. Aşağıda xidmət göstərdiyimiz hovuz növləri haqqında ətraflı məlumat əldə edə bilərsiniz.
        </p>

        <h3>1. Fərdi Hovuzlar – Villa və Bağ Evləri üçün</h3>
        <p>
          Fərdi hovuzlar villalar, bağ evləri və şəxsi mülklər üçün nəzərdə tutulmuşdur. Müştərinin
          istəyinə uyğun ölçü, forma və dizaynda hazırlanır. Bakı, Abşeron, Novxanı, Bilgəh, Nardaran,
          Mərdəkan, Badamdar, Buzovna ərazilərindəki villalara xüsusi hovuz layihələri icra edirik.
          Fərdi hovuzlar skimmer tipli və ya daşma tipli ola bilər, infinity (sonsuzluq) effektli
          dizaynlar da tətbiq edirik.
        </p>

        <h3>2. İctimai Hovuzlar – Otellər, İdman Kompleksləri və SPA Mərkəzləri üçün</h3>
        <p>
          İctimai hovuzlar otellər, idman kompleksləri, sağlamlıq mərkəzləri və spa mərkəzlərində
          istifadə olunan böyük ölçülü hovuzlardır. Yüksək dövriyyəli filtrasiya sistemləri, avtomatik
          kimyəvi tənzimləmə avadanlıqları və uzaqdan idarəetmə sistemləri ilə təchiz olunur.
          Hyatt Regency Bakı kimi dünyaca tanınan otellərə çöl hovuzu tikintisi icra etmişik.
        </p>

        <h3>3. Olimpiya və Yarı Olimpiya Hovuzları</h3>
        <p>
          Peşəkar üzgüçülük yarışları üçün nəzərdə tutulan olimpiya hovuzları 50 metr uzunluğunda
          və 25 metr enindədir. Yarı olimpiya hovuzları isə 25 metr uzunluğunda, 12.5 metr enindədir.
          Bu hovuzlar FINA standartlarına uyğun olaraq layihələndirilir, daşma tipli filtrasiya
          sistemi, elektron zaman ölçmə sistemi və peşəkar üzgüçülük şəriti markalanması ilə
          təchiz edilir.
        </p>

        <h3>4. Şok Hovuz (Soyuq Hovuz) – SPA Mərkəzlərinin Ayrılmaz Hissəsi</h3>
        <p>
          Şok hovuz (soyuq hovuz) spa mərkəzlərində istifadə olunan, aşağı temperaturda saxlanılan
          xüsusi hovuzlardır. Sauna, türk hamamı və ya rus hamamından sonra şok hovuza girmək
          qan dövranını sürətləndirir, immun sistemini gücləndirir və bədəni canlandırır.
          Kontrast terapiyasının əvəzsiz vasitəsi olan şok hovuzlar müasir spa komplekslərinin
          mütləq hissəsidir.
        </p>

        <h3>5. Dalgıc (Diving) Hovuzları – Peşəkar Dalğıclar üçün</h3>
        <p>
          Dalgıc hovuzları peşəkar dalğıclar, tədris mərkəzləri və idman kompleksləri üçün
          xüsusi dərinlikdə tikilən hovuzlardır. Minimum 5 metrdən başlayan dərinlik, su altı
          işıqlandırma sistemləri, dərinlik göstəriciləri və xüsusi keçid platformaları ilə
          təchiz edilir.
        </p>

        <h3>6. Uşaq Hovuzları – Kiçik Ölçülü, Dayaz və Təhlükəsiz</h3>
        <p>
          Uşaq hovuzları kiçik ölçülü, dayaz və xüsusi təhlükəsizlik standartlarına uyğun
          tikilən hovuzlardır. Sürüşməyə qarşı döşəmə kafelləri, yumşaq kənar materiallı
          borular, aşağı su sürəti ilə işləyən filtrasiya sistemləri uşaqların təhlükəsizliyini
          tam təmin edir. Otellər, su parkları və ailə villaları üçün uşaq hovuzları layihələndirilir.
        </p>

        <h3>7. Hidromassajlı və Axınlı Hovuzlar – Cakuzi və Jet Stream Sistemləri</h3>
        <p>
          Hidromassajlı hovuzlar su və hava massajı effekti ilə rahatlama üçün nəzərdə tutulan
          cakuzi və jet stream sistemlərini əhatə edir. Suyun müxtəlif bucaqlardan güclü axını
          əzələ gərginliyini aradan qaldırır, qan dövranını yaxşılaşdırır. Şəxsi villalar,
          otellər və spa mərkəzləri üçün müxtəlif ölçü və konfiqurasiylarda hazırlanır.
        </p>

        <h3>8. Təbii Hovuzlar – Kimyəvisiz, Bioloji Filtrasiya Sistemi</h3>
        <p>
          Təbii hovuzlar kimyəvi maddələrsiz, bioloji filtrasiya sistemi ilə işləyən ekoloji
          hovuzlardır. Bitki filtrasiyası və təbii mikrobioloji proseslərlə su daim təmiz saxlanılır.
          Xlor və digər kimyəvi maddələrə həssas olan istifadəçilər üçün ideal seçimdir.
          Uşaq bağçaları, ekoloji istirahət mərkəzləri və həssas dərili insanlar üçün tövsiyə olunur.
        </p>

        <h3>9. Akrilik Hovuzlar – Şəffaf Divarlar, Lüks Görünüş</h3>
        <p>
          Akrilik hovuzlar şəffaf akrilik şüşədən hazırlanan divarları ilə müasir və estetik görünüş
          yaradan, lüks villalar və otellər üçün ideal hovuzlardır. Su altı dünyasını görmək imkanı
          verən bu hovuzlar möhtəşəm vizual effekt yaradır. Akrilik panel texnologiyası sayəsində
          istənilən forma və ölçüdə hazırlanmaq mümkündür.
        </p>

        {/* ─── SU TƏMİZLƏMƏ SİSTEMLƏRİ ─── */}
        <h2>Su Təmizləmə Sistemlərinə Görə Hovuz Növləri – Skimmer və Daşma Tipli</h2>

        <h3>Skimmer Tipli Hovuzlar – Sərfəli və Effektiv Seçim</h3>
        <p>
          Skimmer tipli hovuzlarda su səviyyəsi hovuzun kənarından bir qədər aşağıda olur.
          Skimmerlər suyun üst səthinə yığılan çirkab maddələrini, yağ ləkələrini, həşəratları
          və digər üzən çirkləri sorub filtrasiya sisteminə ötürür. Skimmerli hovuzlar adətən
          şəxsi bağ evlərində, kiçik ölçülü obyektlərdə və fərdi villalarda geniş istifadə olunur.
          Texniki qurğuların sayı az olduğundan quraşdırma xərcləri daha aşağıdır.
          Sadə, effektiv və texniki baxımdan sərfəli bir hovuz sistemi axtarırsınızsa,
          skimmerli hovuzlar əla seçimdir.
        </p>

        <h3>Daşma Tipli Hovuzlar – Infinity, Izgaralı, Gizli Kanallı</h3>
        <p>
          Daşma tipli hovuzlarda suyun səviyyəsi hovuzun kənarı ilə eyni olur. Bu tip hovuzlar
          ızgaralı, gizli kanallı, tək tərəfli daşma və ya Infinity (sonsuzluq) formatında ola bilər.
          Estetik gözəllik baxımından daşma hovuzlar üstündür – su daim kənarlardan axaraq
          görsel bir hərəkət yaradır. Infinity hovuzlar xüsusilə dəniz mənzərəli, yüksək
          ərazilərdə, terras üzərindəki villalarda yerləşdirildikdə "sonsuzluq effekti" yaradır
          və möhtəşəm mənzərə əldə edilir. Bundan əlavə, su daim kənarlardan daşaraq filtrasiya
          sisteminə ötürüldüyü üçün suyun üst səthi həmişə təmiz qalır və daha keyfiyyətli
          dövriyyə sistemi təmin edilir. Bakı, Badamdar və Bilgəh layihələrində daşma hovuzlar
          uğurla icra edilmişdir.
        </p>

        {/* ─── TƏMİZLİK AVADANLIQLARI ─── */}
        <h2>Hovuz Təmizlik Avadanlıqları – Müasir Texnologiyalar</h2>
        <p>
          Müasir hovuz texnologiyaları hovuzun baxımını çox asanlaşdırır. Turan İnşaat MMC
          aşağıdakı qabaqcıl təmizlik sistemlərini layihələndirərək quraşdırır:
        </p>

        <h3>1. Avtomatik Robot Təmizləyicilər</h3>
        <p>
          Hovuzun dibini, divarlarını və su səthini tam avtomatik olaraq təmizləyən ağıllı
          robot sistemlərdir. Enerjiyə qənaət edir, insan işçiliyinə ehtiyacı azaldır və
          yüksək effektivlik təmin edir. Proqramlaşdırılabilən iş cədvəli sayəsində gecə
          saatlarında avtomatik işə düşür, sabah hovuzunuz kristal təmiz olur.
        </p>

        <h3>2. Ultrabənövşəyi (UV) Dezinfeksiya Sistemləri</h3>
        <p>
          UV dezinfeksiya sistemləri kimyəvi maddələrin istifadəsini minimuma endirərək hovuz
          suyunu bakteriya, virus, yosun və digər mikroorqanizmlərdən təmizləyən müasir
          texnologiyadır. Dəridə qıcıqlanma yaratmır, gözlərə zərər vermir. Xüsusilə uşaqlar
          üçün ideal olan bu sistem ekoloji baxımdan da üstündür.
        </p>

        <h3>3. Avtomatik Kimyəvi Dozaj Sistemi</h3>
        <p>
          Dozaj sistemi ilə avtomatik kimyəvi tənzimləmə hovuz suyunun pH səviyyəsini və xlor
          konsentrasiyasını daim optimal diapazonda saxlayır. Suyun keyfiyyəti elektron sensorlarla
          real vaxtda izlənilir, lazım olduqda kimyəvi maddə avtomatik əlavə edilir. Bu sistem
          həm su keyfiyyətini, həm də avadanlıqların ömrünü artırır.
        </p>

        <h3>4. Duz Elektroliz Sistemləri</h3>
        <p>
          Duz elektroliz sistemləri hovuza əlavə olunan duzdan elektroliz yolu ilə xlor
          istehsal edərək suyu dezinfeksiya edir. Kimyəvi xlor ehtiyacını əhəmiyyətli
          dərəcədə azaldır, suyu daha təbii hiss etdirir. Duz konsentrasiyası göz yaşına
          yaxın olduğundan gözü qıcıqlatmır. Uzunmüddətli perspektivdə xərcləri azaldır.
        </p>

        <h3>5. Kartricli Filtrasiya Sistemi – Borusuz və Ekoloji</h3>
        <p>
          Kartricli filtrasiya sistemi borusuz quraşdırma imkanı sayəsinde rahat tətbiq
          edilir. Ekoloji cəhətdən təmiz bu texnologiya az su itkisi ilə yüksək filtrasiya
          effektivliyi təmin edir. Kiçik fərdi hovuzlardan tutmuş böyük ictimai hovuzlara
          qədər müxtəlif ölçülərdə mövcuddur.
        </p>

        {/* ─── İSİTMƏ VƏ SOYUTMA ─── */}
        <h2>Hovuz Suyunun İsitmə və Soyutma Avadanlıqları</h2>
        <p>
          Hovuz suyunun temperaturu istifadə rahatlığı üçün mühüm əhəmiyyət daşıyır.
          Turan İnşaat MMC aşağıdakı isitmə və soyutma sistemlərini quraşdırır:
        </p>

        <h3>İsitmə Pompası (Heat Pump)</h3>
        <p>
          İsitmə pompası xüsusilə təbii qaz infrastrukturunun olmadığı bölgələrdə hovuz
          suyunu qızdırmaq və lazım olduqda soyutmaq üçün istifadə olunan müasir cihazdır.
          Enerji effektivliyi son dərəcə yüksəkdir – hər 1 kVt enerjiyə qarşılıq 4–6 kVt
          istilik istehsal edir. Yaz-yay mövsümündə hovuzun daha uzun müddət istifadəsini
          mümkün edir.
        </p>

        <h3>Boru Tipli Eşenjorlar</h3>
        <p>
          Hovuz suyunu isitmək üçün istifadə olunan boru tipli eşenjor, isti su və ya buxarla
          hovuz suyunu effektiv şəkildə qızdıran yüksək istilik ötürmə qabiliyyətinə malik
          istilik dəyişdiricisidir. Mərkəzləşdirilmiş istilik sistemlərinə asan inteqrasiya
          olunur. Uzunömürlü və etibarlı iş prinsipi ilə fərqlənir.
        </p>

        <h3>Plaka Tipli Eşenjorlar</h3>
        <p>
          Plaka tipli eşenjor yüksək istilik ötürmə səthinə malik olan, isti və soyuq suyun
          nazik metal plakalardan keçərək istilik mübadiləsi apardığı effektiv istilik
          dəyişdiricisidir. Kompakt ölçüsü, asan baxım imkanı və yüksək effektivliyi ilə
          üstün seçimdir. Hovuz suyunu qısa müddətdə tələb olunan temperaturda saxlayır.
        </p>

        {/* ─── ƏLAVƏ AVADANLIQLAR ─── */}
        <h2>Hovuza Quraşdırılan Əlavə Avadanlıqlar – Şəlalə, Dalğa, Aquapark</h2>

        <h3>Şəlalə Qurğuları – Estetik Su Effekti</h3>
        <p>
          Şəlalə qurğuları hovuzda estetik və vizual təsir yaratmaq üçün istifadə olunan su
          axını sistemlərdir. Duvar tipli şəlalə, kanal tipli şəlalə və köpük effektli şəlalə
          növləri mövcuddur. Bu qurğular suyun yüksəkdən aşağıya doğru axmasını, xoş su
          səsini və görsel estetikanı təmin edir. Həm daxili, həm xarici hovuzlara uyğundur.
        </p>

        <h3>Dalğa Yaradan Qurğular – Dəniz Təcrübəsi Hovuzda</h3>
        <p>
          Dalğa yaradan qurğular hovuzda süni dalğalar yaratmaq üçün istifadə olunan
          sistemlərdir. Suyun səthində müntəzəm dalğalar meydana gətirərək istifadəçilərə
          dənizdə üzmə təcrübəsi yaşadır. Xüsusilə aquaparklarda, böyük istirahət mərkəzlərində
          və otel hovuzlarında geniş istifadə olunur. Dalğa intensivliyi istifadəçilər
          tərəfindən tənzimlənə bilər.
        </p>

        <h3>Aquapark Sistemləri – Su Əyləncəsinin Tam Həlli</h3>
        <p>
          Aquapark sistemləri su ilə əyləncə və idman fəaliyyətləri üçün nəzərdə tutulmuş
          qurğuları əhatə edir. Sürüşən slaydlər, su tunelləri, köpük fışqırdıcıları,
          su topları, müxtəlif yaş qrupları üçün uyğun interaktiv su oyunları daxildir.
          Kommersiya aquaparkları üçün tam layihə xidmətini təqdim edirik.
        </p>

        <h3>Hovuz Suyuna Distansiyon Nəzarət Sistemi</h3>
        <p>
          Distansiyon nəzarət sistemi hovuz suyunun temperaturunu, kimyəvi tərkibini,
          su səviyyəsini və təmizləmə sistemlərini uzaqdan izləyib tənzimləyərək
          hovuzun idarə olunmasını asanlaşdırır. Smartfon tətbiqetməsi vasitəsilə
          hovuzunuzu harada olursanız olun idarə edə bilərsiniz. Avtomatik xəbərdarlıq
          sistemi hər hansı problem yarandıqda sizə dərhal bildiriş göndərir.
        </p>

        {/* ─── SPA VƏ SAĞLAMLIĞ OTAQLARI ─── */}
        <h2>SPA və Sağlamlıq Otaqları – Bakıda Tam SPA Kompleksi Tikintisi</h2>
        <p>
          Turan İnşaat MMC tam SPA komplekslərinin layihələndirilməsi və tikintisi sahəsində
          geniş təcrübəyə malikdir. "Rahatlığın və sağlamlığın mükəmməl vəhdəti" prinsipilə
          xidmət göstəririk. Aşağıdakı SPA otaqları və qurğularını layihələndirərək quraşdırırıq.
        </p>

        <h3>Türk Hamamı – İsti Buxarın Sehri</h3>
        <p>
          Türk hamamı təkcə rahatlıq deyil, həm də dəriyə qulluq və sağlamlıq üçün ən
          effektiv üsullardan biridir. Yüksək temperatur və rütubət dərini dərindən
          təmizləyir, məsamələri açır, toksinləri çıxarır. Dərinin yenilənməsini və
          nəmlənməsini təmin edərək gənc və təravətli görünüş bəxş edir.
          Eksklüziv dizayn üçün təbii mərmər, mis və əl işləri ilə hazırlanan dekorlardan
          istifadə edirik. Türk hamamınıza klassik osmanlı estetikası ilə müasir lüks
          birləşdirilir. Hər detal rahatlıq hissini tamamlamaq üçün diqqətlə seçilir.
          İstər şəxsi villa, istər otel, istər ictimai SPA mərkəzi üçün fərdi istəklərinizə
          uyğun dizayn və quraşdırma xidmətini təqdim edirik. Sərfəli qiymətlər və
          zəmanətli keyfiyyətlə xidmət göstəririk.
        </p>

        <h3>Rus Hamamı (Banya) – Dərin İsidici Buxar Terapiyası</h3>
        <p>
          Rus hamamı (banya) isti buxar, təbii ağac interyeri və kontrast terapiyası ilə
          bədəni canlandırır, əzələləri rahatladır və immuniteti gücləndirir.
          50–70°C temperatur, 60–80% rütubət şəraitində bədəndəki nəfəs yolları açılır,
          tər ifrazı artır, dəri yenilənir, toksinlər orqanizmdən xaric olur.
          Palıd və ağcaqayın budaqları ilə hazırlanan süpürgə terapiyası müalicəvi
          əhəmiyyət daşıyır: qan dövranını sürətləndirir, dərin detoks effekti yaradır,
          əzələ gərginliyini azaldır. Rus hamamları üçün istiyə davamlı ağaclar, keramik
          dəstlər, istilik saxlayan daşlar, elektrik və ya odunla qızdırılan sobalar
          istifadə edirik.
        </p>

        <h3>Sauna – Az Rütubətli İstiliklə Stressi Aradan Qaldırın</h3>
        <p>
          Klassik finlandiya saunası 80–100°C temperatur, 10–20% aşağı rütubət şəraitində
          işləyir. Bədəni dərindən isidərək stres hormonlarını azaldır, yuxu keyfiyyətini
          artırır, immun sistemini gücləndirir. Turan İnşaat saunalar üçün yalnız
          istiyə və rütubətə davamlı keyfiyyətli ağaclardan istifadə edir:
          Lipa-Cökə ağacı (Finlandiya, Rusiya), Palıd (Rusiya), Abaş ağacı (Afrika),
          Kedr ağacı (Kanada), Hemlok ağacı (Kanada), Albalı ağacı (Avstriya).
          Hər növ ağacın özünəməxsus istilik ötürmə xüsusiyyəti, ətri və estetikası var.
          Şəxsi villalar üçün mini sauna kabinlərindən tutmuş otel kompleksləri üçün
          böyük ictimai saunalara qədər bütün ölçülərdə layihə icra edirik.
        </p>

        <h3>Sulu Par Otağı – Bədənin Canlanması və Rahatlıq Məkanı</h3>
        <p>
          Sulu par otağı buxar terapiyası və isti suyun birləşməsi ilə bədəni rahatlandıran
          xüsusi bir otaqdır. Yüksək rütubət və isti su kombinasiyası stressi azaldır,
          bədənə enerji verir, ruhu dinləndirir. Bu otaqda isti su və buxar sayəsində bədən
          dərindən təmizlənir, qan dövranı yaxşılaşır, toxumalar gərginlikdən azad olur.
          Buxar nəfəs almağı asanlaşdırır, toksik maddələri orqanizmdən atmağa kömək edir.
          Müasir texnologiyalar və təbii materiallarla inşa etdiyimiz sulu par otaqları
          yüksək keyfiyyət və funksionallıq təmin edərək ideal rahatlıq mühiti yaradır.
        </p>

        <h3>Duz Otağı (Halotherapy Room) – Nəfəs Alın, Sağalın</h3>
        <p>
          Duz otağı (haloterapiya) təbii duzun müalicəvi xüsusiyyətlərindən istifadə edərək
          bədəni daxildən təmizləyir, nəfəs yollarını açır və stressi azaldır.
          Otaqda havada yüksək duz konsentrasiyası bədənin təbii detoks prosesini dəstəkləyir,
          bütün orqanizmi gücləndirir, immun sistemini möhkəmləndirir.
          Havadakı duz hissəcikləri nəfəs yollarını təmizləyir, astma, bronxit, sinüzit
          kimi tənəffüs sistemi problemlərinə qarşı faydalıdır.
          Duz otaqları müasir texnologiyalar və təbii materiallarla inşa edilir,
          həm istirahət, həm müalicə, həm də gözəllik effekti təmin edir.
          Otel SPA kompleksləri, fizioterapiya mərkəzləri və şəxsi villalar üçün
          fərdi duz otağı layihələri icra edirik.
        </p>

        <h3>Kisə Otağı – Bədəninizə İkinci Həyat Verin</h3>
        <p>
          Kisə otağı dəri üzərindən ölü hüceyrələri, çirkabı və tər maddələrini xüsusi
          kisə əlcəkləri vasitəsilə mexaniki yolla təmizləyən terapiya məkanıdır.
          Türk hamamı ilə birlikdə tətbiq edilən bu prosedur dərinin yenilənməsini sürətləndirir,
          qan dövranını stimullaşdırır, bədənin yaşlanmasını ləngidən effektlər verir.
          Spa mərkəzləri üçün xüsusi kisə otaqları dizayn edir və quraşdırırıq.
        </p>

        <h3>Masaj Otağı – Stressin Son Dayanacağı</h3>
        <p>
          Masaj otağı yüksək standartlı akustik izolyasiya, xüsusi işıqlandırma, rahat
          temperatur rejimi və estetik dizaynla stressdən xilasolmanın ideal məkanıdır.
          İstər klassik üzvi masaj, istər aromaterapi massajı, istər istilik daşları ilə
          masaj üçün mükəmməl şərait yaradılır.
        </p>

        <h3>Buz Otağı (Ice Room) – Sərinliklə Bədəni Oyadın</h3>
        <p>
          Buz otağı (İce Room) sauna və ya türk hamamından sonra kontrast terapiyasının
          ayrılmaz hissəsidir. Soyuq temperatur qan damarlarını büzüşdürür, qan dövranını
          intensivləşdirir, əzələ ağrısını azaldır, enerjini bərpa edir. Buz otaqları
          qar effektli panellərlə, buz heykəlləri ilə və ya buz parçası maşınlarıyla
          dizayn edilə bilər.
        </p>

        <h3>Şok Duş (Shock Shower) / Tropik Duş</h3>
        <p>
          Şok duş güclü soyuq su axını ilə qısa müddətdə bədəni canlandıran terapevtik
          bir vasitədir. Tropik duş isə warm/cool su kombinasiyası ilə daha yumşaq
          kontrast effekti verir. SPA rutininin ən dinamik hissəsi olan bu duşlar
          bədəni bir sonrakı prosedura hazırlayır.
        </p>

        <h3>Aromaterapiya Otağı – Ətirli Harmoniyanın Gücü</h3>
        <p>
          Aromaterapiya otağı efir yağları, aromatik buxar sistemləri və xüsusi hava
          diffuzorları vasitəsilə əsəb sistemini sakinləşdirir, yuxu keyfiyyətini
          yaxşılaşdırır, əhval-ruhiyyəni yüksəldir. Lavanda, evkalipt, nane, bərgamot
          və digər efir yağlarının terapevtik xüsusiyyətlərindən faydalanmağa imkan verir.
        </p>

        <h3>İnfraqırmızı Sauna (Infrared Sauna) – Dərindən İsidən Sağlamlıq</h3>
        <p>
          İnfraqırmızı sauna klassik saunadan fərqli olaraq bədəni birbaşa infraqırmızı
          şüalarla, hava vasitəsilə deyil, dəridən içəriyə doğru isidən texnologiyadır.
          Daha aşağı temperatura (50–60°C) baxmayaraq daha dərin istilik penetrasiyası
          sağlayır. Artrit, əzələ ağrısı, detoks, çəki idarəsi kimi müxtəlif sağlamlıq
          məqsədləri üçün tövsiyə olunur.
        </p>

        {/* ─── ƏLAVƏ SPA AVADANLIQLARI ─── */}
        <h2>Əlavə SPA Avadanlıqları – Şok Vedrəsi, Buz Bulağı və Daha Çox</h2>

        <h3>Şok Vedrəsi (Canlanma və Enerji Mənbəyi)</h3>
        <p>
          Şok vedrəsi sauna, buxar otağı və ya türk hamamı seansından sonra soyuq suyun
          dərhal bədənə axıdılması ilə qan dövranını sürətləndirir, bədəni canlandırır.
          İsti mühitdən sonra toksinləri atmağa kömək edir, immuniteti gücləndirir.
          Klassik bir SPA rutininin vazkeçilmez parçasıdır.
        </p>

        <h3>Buz Bulağı (Kar Çeşməsi)</h3>
        <p>
          Buz bulağı (kar çeşməsi) SPA mərkəzlərindəki müəyyən terapiyalarda istifadə
          etmək üçün buz istehsal edən xüsusi bir cihazdır. İstifadəçilər buz parçalarını
          götürərək bədənin müxtəlif nahiyələrinə sürtərək kontrast terapiyasını özləri
          tətbiq edə bilirlər. Rus hamamı, sauna və bux otaqlarının yanında yerləşdirilir.
        </p>

        {/* ─── REFERANSlar ─── */}
        <h2>Turan İnşaat Referansları – Tamamlanan Layihələr</h2>
        <p>
          Turan İnşaat MMC Azərbaycanda bir çox tanınmış müəssisə və şəxsi mülkdə uğurlu
          layihələr icra etmişdir. Tamamlanan referans layihələrimiz arasında aşağıdakılar
          yer alır:
        </p>
        <ul>
          <li>My Class İdman Kompleksi (Yasamal, Bakı) – Hovuz, Cakuzi, Türk Hamamı, Sauna</li>
          <li>Hyatt Regency Bakı – Çöl (Outdoor) Hovuz Tikintisi</li>
          <li>Özəl Villa – Daşma (Infinity) Hovuz, Bilgəh, Mircəlal küçəsi</li>
          <li>Özəl Villa – Daşma Hovuz, Badamdar layihəsi</li>
        </ul>
        <p>
          Hər bir layihədə müştərinin fərdi tələbləri diqqətlə nəzərə alınır, ən yüksək
          keyfiyyət standartlarına uyğun materiallar seçilir, müddəti dəqiq planlaşdırılmış
          tikinti prosesi icra edilir. Layihə bitimindən sonra zəmanəti xidmət göstəririk.
        </p>

        {/* ─── TƏS-TEZ VERİLƏN SUALLAR ─── */}
        <h2>Tez-tez Verilən Suallar – Hovuz, SPA, Hamam Tikintisi</h2>

        <h3>Hovuz tikintisi nə qədər vaxt aparır?</h3>
        <p>
          Fərdi hovuz tikintisi orta hesabla 4–8 həftə, böyük ictimai hovuzlar isə 3–6 ay
          müddət tələb edir. Dəqiq müddət hovuzun ölçüsünə, tipinə, torpaq şəraitinə
          və quraşdırılacaq avadanlıqlara görə dəyişir. Pulsuz kəşfiyyat üçün bizimlə
          əlaqə saxlayın.
        </p>

        <h3>Bakıda hovuz tikintisinin qiyməti nə qədərdir?</h3>
        <p>
          Hovuz tikintisinin qiyməti hovuzun ölçüsünə, tipinə (skimmer/daşma/infinity),
          istifadə olunan materiallara, kafelə, filtrasiya sisteminin növünə və əlavə
          avadanlıqlara görə müəyyən edilir. Dəqiq qiymət hesablaması üçün saytımızdakı
          forma vasitəsilə müraciət edin və ya +994 55 751 31 15 nömrəsinə zəng edin.
        </p>

        <h3>Hovuz suyunu necə təmiz saxlamaq olar?</h3>
        <p>
          Hovuz suyunu təmiz saxlamaq üçün düzgün filtrasiya sistemi, pH balansının
          mütəmadi nəzarəti, xlor və ya duz elektroliz sisteminin istifadəsi vacibdir.
          Avtomatik robot təmizləyicilər günlük baxımı əhəmiyyətli dərəcədə asanlaşdırır.
          UV dezinfeksiya sistemi kimyəvi istifadəni minimuma endirir.
        </p>

        <h3>Türk hamamı ilə rus hamamı arasındakı fərq nədir?</h3>
        <p>
          Türk hamamında (hammam) temperatura 40–50°C, rütubət isə 90–100% olur, döşəmə,
          divar və taxtlar mərmərdən hazırlanır. Rus hamamında (banya) isə temperatur
          50–70°C, rütubət 60–80% olur, interyerdə ağac materialları üstünlük təşkil edir.
          Süpürgə terapiyası rus hamamının, kisə ritualu isə türk hamamının spesifik
          xüsusiyyətidir.
        </p>

        <h3>İnfraqırmızı sauna klassik saunadan nə ilə fərqlənir?</h3>
        <p>
          Klassik sauna 80–100°C-ə qədər qızdırılmış havada işləyir, rütubəti aşağıdır.
          İnfraqırmızı sauna isə 50–60°C temperaturda bədəni birbaşa infraqırmızı şüalarla
          isidır, bu da daha dərin toxuma penetrasiyası sağlayır. İnfraqırmızı sauna ürək
          problemi olan, yüksək temperaturda narahat hiss edən insanlar üçün daha münasibdir.
        </p>

        <h3>Duz otağı kimlər üçün faydalıdır?</h3>
        <p>
          Duz otağı (haloterapiya) astma, bronxit, sinüzit, allergiya kimi tənəffüs yolu
          xəstəlikləri olan insanlar üçün xüsusilə faydalıdır. Bundan əlavə, dərmatit,
          ekzema kimi dəri problemlərinin yüngülləşdirilməsinə, stress azaldılmasına
          və ümumi immunitətin gücləndirilməsinə kömək edir. Uşaqlar da gündəlik 15–20
          dəqiqəlik duz otağı seansından faydalana bilər.
        </p>

        {/* ─── ƏLAQƏ ─── */}
        <h2>Əlaqə – Turan İnşaat MMC | Hovuz və SPA Tikintisi Bakı</h2>
        <p>
          Hovuz tikintisi, SPA kompleksi, türk hamamı, rus hamamı, sauna, duz otağı,
          filtrasiya sistemi, isitmə avadanlığı mövzularında pulsuz konsultasiya üçün
          bizimlə əlaqə saxlayın. Ünvanımız: Bakı şəhəri, Abşeron rayonu,
          Binəqədi-Novxanı şossesi, Novxanı kəndi (Berlin Avto ilə üzbəüz).
          Telefon: +994 55 751 31 15 | +994 50 312 76 57 | +994 50 635 05 20.
          Ofis telefonu: +994 12 348 28 75.
          E-mail: farizmehdiyevs@mail.ru | Turaninshaat21@mail.ru.
          Sayt: www.turanprojects.az.
          Instagram: @turanprojects.az | TikTok: @turanprojects.az.
          Bakı, Sumqayıt, Gəncə, Abşeron, Şirvan, Lənkəran və Azərbaycanın
          bütün bölgələrinə xidmət göstəririk.
        </p>
      </div>
      <HeroWrapper />
      <AboutUs />

      <OurServices />
      <OurProjects />
      <ProductsHome />

      <WhyChooseUs />
      <ContactSection />
    </>
  );
}