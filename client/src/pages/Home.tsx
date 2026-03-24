/*
 * Design: 모던 에듀테크 그라디언트 랜딩 페이지
 * - 보라-핑크 그라디언트 히어로 섹션
 * - Before/After, 커리큘럼, 일정, 강사 소개, CTA 섹션
 * - 모바일 퍼스트 반응형 디자인
 * - framer-motion 스크롤 애니메이션
 */

import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  GraduationCap,
  Monitor,
  Sparkles,
  Star,
  Users,
  Video,
  XCircle,
  Zap,
} from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/fPqsBHYP691gBzXX6";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/114049990/YdgtC7PpC5Kr9cJZ6Lu7yX/hero-main-RmVEd3XZo42he7GTgQWPsN.webp";
const CERT_BADGE = "https://d2xsxph8kpxj0f.cloudfront.net/114049990/YdgtC7PpC5Kr9cJZ6Lu7yX/certificate-badge-9pDc7uQ4KFzmrjGArUuESa.webp";
const CURRICULUM_BG = "https://d2xsxph8kpxj0f.cloudfront.net/114049990/YdgtC7PpC5Kr9cJZ6Lu7yX/curriculum-bg-eVfdog6GivLeg9LGSds4kn.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const curriculum = [
  { no: "01", icon: "🖥️", title: "캔바 인터페이스 완전 정복", desc: "템플릿 활용법, 그리드·텍스트·이미지·도형 넣기" },
  { no: "02", icon: "✨", title: "POP 효과로 홍보물 만들기", desc: "시선을 사로잡는 텍스트 & 그래픽 효과" },
  { no: "03", icon: "🤖", title: "캔바AI로 캐릭터·이미지 생성", desc: "AI 프롬프트로 나만의 캐릭터와 이미지 창작" },
  { no: "04", icon: "🪄", title: "사진 편집 & Magic Studio", desc: "배경 제거, AI 확장, 마법 편집 기능 마스터" },
  { no: "05", icon: "🎨", title: "컬러링북 만들기", desc: "아이들이 좋아하는 나만의 컬러링북 제작" },
  { no: "06", icon: "🖌️", title: "수채화 라인아트 + 디지털아트", desc: "작품 제작 후 목업(Mock-up)에 적용하기" },
  { no: "07", icon: "💫", title: "포토샵 효과 내기", desc: "돈 버는 미러링 효과, 얼굴 반 그림자·질감 표현" },
  { no: "08", icon: "🎬", title: "스탑모션 만들기", desc: "생동감 넘치는 짧은 영상 콘텐츠 제작" },
  { no: "09", icon: "📖", title: "전자책 디자인하기", desc: "내 지식을 수익화하는 전자책 표지·내지 디자인" },
  { no: "10", icon: "🌐", title: "포트폴리오 홈페이지 만들기", desc: "나를 알리는 멋진 웹사이트 직접 제작" },
];

const liveSchedule = [
  { date: "3월 28일 (토)", time: "저녁 8시", type: "ZOOM 라이브" },
  { date: "4월 1일 (수)", time: "저녁 8시", type: "ZOOM 라이브" },
  { date: "4월 10일 (금)", time: "저녁 8시", type: "ZOOM 라이브" },
];

const vodSchedule = [
  "3월 30일",
  "4월 2일",
  "4월 3일",
  "4월 4일",
  "4월 7일",
  "4월 8일",
];

const targets = [
  "캔바 기초는 알지만 강사·전문가 수준으로 업그레이드하고 싶은 분",
  "AI 기능을 활용해 나만의 캐릭터와 이미지를 만들고 싶은 분",
  "교사 연수·기업 출강에서 캔바 강사로 활동하고 싶은 분",
  "블로그·SNS 홍보물을 직접 퀄리티 있게 제작하고 싶은 분",
  "전자책·포트폴리오 등 수익화 콘텐츠를 만들고 싶은 분",
  "바쁜 일정에도 단기 속성으로 자격증을 취득하고 싶은 분",
];

const beforeList = [
  "남들이 만든 템플릿에 글자만 겨우 수정하는 수준",
  "AI 기능이 있다는데 어떻게 쓰는지 몰라 방치 중",
  "포토샵 같은 고급 효과를 내고 싶지만 툴이 어려워 포기",
  "나만의 포트폴리오나 전자책을 만들 엄두가 안 남",
  "캔바 강의를 해보고 싶지만 커리큘럼 짤 자신이 없음",
];

const afterList = [
  "백지상태에서도 원하는 디자인을 뚝딱 만들어내는 금손!",
  "캔바 AI를 자유자재로 활용해 캐릭터와 이미지를 창작",
  "포토샵 부럽지 않은 고급 스킬 장착",
  "나만의 전자책과 포트폴리오 웹사이트 완벽 구축",
  "캔바 강사로 활동할 수 있는 탄탄한 실력 및 노하우 확보!",
];

export default function Home() {
  const handleApply = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white font-[Noto_Sans_KR]">
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black gradient-text">캔바AI연구소</span>
            <span className="hidden sm:inline text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-semibold">민경쌤</span>
          </div>
          <button
            onClick={handleApply}
            className="btn-gradient text-sm font-bold px-4 py-2 rounded-full"
          >
            지금 신청하기 →
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white" />
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />

        <div className="container relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-6"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                  <Sparkles size={14} />
                  속성 단기과정 · 자격증 발급
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                캔바 기초부터<br />
                <span className="gradient-text">AI 강사</span>까지<br />
                단기 속성으로!
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed max-w-lg">
                캔바지국장 <strong className="text-purple-700">민경쌤</strong>과 함께하는<br />
                <strong>캔바AI강사심화과정(2급)</strong><br />
                2주 만에 실전 스킬 10가지 완성 + 자격증 취득!
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-purple-100">
                  <Clock size={16} className="text-purple-500" />
                  <span className="text-sm font-semibold text-gray-700">하루 1시간 이내</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-purple-100">
                  <Video size={16} className="text-pink-500" />
                  <span className="text-sm font-semibold text-gray-700">ZOOM 라이브 + VOD</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-purple-100">
                  <GraduationCap size={16} className="text-purple-500" />
                  <span className="text-sm font-semibold text-gray-700">국제 자격증 발급</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleApply}
                  className="btn-gradient btn-pulse text-lg font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  지금 바로 신청하기
                </button>
                <a
                  href="#curriculum"
                  className="flex items-center justify-center gap-2 text-purple-700 font-bold px-6 py-4 rounded-2xl border-2 border-purple-200 hover:bg-purple-50 transition-colors"
                >
                  커리큘럼 보기
                  <ChevronDown size={18} />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMG}
                  alt="캔바AI강사심화과정 민경쌤"
                  className="w-full object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                  <img src={CERT_BADGE} alt="자격증" className="w-12 h-12 object-contain float-anim" />
                  <div>
                    <p className="font-black text-gray-900 text-sm">국제디지털콘텐츠협회</p>
                    <p className="text-purple-600 font-bold text-xs">캔바심화과정 2급 자격증 발급</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CANVA NOW ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block bg-pink-100 text-pink-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                왜 지금 캔바인가요?
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">
              TV 광고에도 나오는 캔바,<br />
              <span className="gradient-text">이제 강사로 도약할 때입니다</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed">
              어린이집·유치원 교사 연수, 초중학교 수업, 기업 출강 어디서든<br />
              <strong>"캔바 어떻게 쓰나요?"</strong> 라는 질문이 가장 많이 나옵니다.<br />
              AI 시대에 캔바는 이제 <strong className="text-purple-700">기본 중의 기본 툴</strong>이 되었습니다.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-3 gap-6"
          >
            {[
              { icon: <Users size={28} className="text-purple-500" />, title: "교사 연수 폭발적 수요", desc: "어린이집·유치원·초중학교 교사 연수에서 캔바 강의 요청이 급증하고 있습니다." },
              { icon: <Monitor size={28} className="text-pink-500" />, title: "기업 필수 툴로 자리매김", desc: "마케팅·교육·인사팀 할 것 없이 기업에서 캔바 교육을 적극 도입 중입니다." },
              { icon: <Zap size={28} className="text-purple-500" />, title: "캔바 광고까지 등장", desc: "TV·유튜브 광고로 대중화된 지금, 캔바 강사의 가치가 가장 높은 시점입니다." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="py-20 section-purple">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block bg-purple-100 text-purple-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                수강 전후 변화
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-gray-900">
              수강 전과 후,<br />
              <span className="gradient-text">당신의 모습이 달라집니다!</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* Before */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border-2 border-red-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">😥</span>
                </div>
                <h3 className="text-xl font-black text-gray-900">수강 전 (Before)</h3>
              </div>
              <ul className="space-y-3">
                {beforeList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle size={18} className="text-red-400 mt-0.5 shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl p-8 shadow-lg text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">😍</span>
                </div>
                <h3 className="text-xl font-black">수강 후 (After)</h3>
              </div>
              <ul className="space-y-3">
                {afterList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-yellow-300 mt-0.5 shrink-0" />
                    <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section id="curriculum" className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${CURRICULUM_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                <BookOpen size={14} />
                총 10개 과제
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              <span className="gradient-text">실전 커리큘럼</span> 안내
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600">
              현업 강사가 실제로 강의에서 쓰는 스킬만 담았습니다
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {curriculum.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-5 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-1">{item.icon}</span>
                    <span className="text-xs font-black text-purple-400">{item.no}</span>
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-sm mb-1 leading-snug">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section className="py-20 section-purple">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                <Calendar size={14} />
                수업 방식 및 일정
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              <span className="gradient-text">하이브리드 수업</span>으로<br />
              내 페이스에 맞게!
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600">
              실시간 ZOOM 라이브 + VOD 영상 병행 수강 가능
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Live */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-sm border border-purple-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-500 font-black text-xs">LIVE</span>
                </div>
                <div>
                  <h3 className="font-black text-gray-900">실시간 ZOOM 라이브</h3>
                  <p className="text-xs text-gray-500">저녁 8시 · 약 1시간</p>
                </div>
              </div>
              <div className="space-y-3">
                {liveSchedule.map((s, i) => (
                  <div key={i} className="flex items-center justify-between bg-purple-50 rounded-xl px-4 py-3">
                    <span className="font-bold text-gray-800 text-sm">{s.date}</span>
                    <span className="text-purple-600 font-semibold text-xs bg-purple-100 px-2 py-1 rounded-full">{s.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500 bg-gray-50 rounded-xl p-3">
                💡 실시간 참여가 어려우신 분도 <strong>녹화본으로 수강 가능</strong>합니다!
              </p>
            </motion.div>

            {/* VOD */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-sm border border-purple-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Video size={18} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900">VOD 영상 업로드</h3>
                  <p className="text-xs text-gray-500">자율 수강 · 과제 제출</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {vodSchedule.map((d, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full">{d}</span>
                ))}
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-purple-400" />
                  <span>영상당 <strong>10~15분</strong> 시청 후 따라하기</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-400" />
                  <span>하루 <strong>1시간 이내</strong> 완료 가능</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-pink-400" />
                  <span>과제 마감: <strong>다음 날 낮 12시</strong></span>
                </div>
              </div>
              <p className="mt-4 text-xs text-orange-600 bg-orange-50 rounded-xl p-3">
                ⚠️ 운영 공정성을 위해 개별 사정에 따른 선공개 요청은 불가합니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                <Star size={14} />
                이런 분께 추천합니다
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-gray-900">
              <span className="gradient-text">나도 해당될까요?</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-2xl mx-auto space-y-3"
          >
            {targets.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl px-5 py-4 border border-purple-100"
              >
                <CheckCircle2 size={20} className="text-purple-500 mt-0.5 shrink-0" />
                <span className="text-gray-800 font-medium text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INSTRUCTOR ── */}
      <section className="py-20 bg-gradient-to-br from-purple-700 to-pink-600 text-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                강사 소개
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-2">민경쌤은 누구인가요?</h2>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl shrink-0">
                  👩‍🏫
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black">쏭리즈 민경쌤</h3>
                    <p className="text-purple-200 font-semibold">캔바지국장 · 크리메타쏭 대표 · 위드AI솔루션 대표</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      "국제디지털콘텐츠협회 캔바지국장",
                      "생성형AI 전문교육 강사",
                      "AI융합비즈포럼 AI수석연구원",
                      "서초여성가족플라자 AISW강사",
                      "아바톡 크리퐁 앰버서더",
                      "수퍼톤 앰버서더",
                      "AI아트 작가 · 전시회 개최",
                      "어린이집·기업·교원 연수 다수",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full shrink-0" />
                        <span className="text-white/90 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    두 아이를 키우는 워킹맘으로, 초중학생부터 교사·기업 임직원까지 폭넓게 강의하며 현장에서 직접 검증된 노하우를 전달합니다. 리즈, 요코, 조코 캐릭터의 작가이기도 합니다!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CERTIFICATE ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                <GraduationCap size={14} />
                자격증 발급 과정
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              수료 후 <span className="gradient-text">국제 자격증</span> 취득!
            </motion.h2>
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <img src={CERT_BADGE} alt="자격증 배지" className="w-32 h-32 object-contain float-anim" />
            </motion.div>
            <motion.div variants={fadeUp} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 text-left space-y-3">
              {[
                "본 과정 이수 시 국제디지털콘텐츠협회 캔바심화과정 자격증 2급 발급 (비용 별도)",
                "수료하신 분에 한하여 AI올인원자격증과정 연계 가능",
                "캔바 기초(캔디짱)를 수료 못하신 분도 신청 가능한 속성반",
                "자격증은 강사 활동, 이력서, 포트폴리오에 활용 가능",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-purple-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                마감 전 서둘러 주세요!
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
              지금 바로 시작하세요!<br />
              <span className="text-yellow-300">캔바 강사의 꿈</span>이 현실이 됩니다
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              단기 속성 · 하루 1시간 · 자격증 취득<br />
              민경쌤과 함께라면 누구나 금손이 될 수 있습니다!
            </motion.p>
            <motion.div variants={fadeUp}>
              <button
                onClick={handleApply}
                className="inline-flex items-center gap-3 bg-white text-purple-700 font-black text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-white/30 hover:-translate-y-1 transition-all duration-300"
              >
                <ExternalLink size={22} />
                캔바AI강사심화과정(2급) 신청하기
              </button>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 text-white/60 text-sm">
              👉 신청서 작성 후 입금 계좌로 수강료 납부 시 등록 완료
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container text-center space-y-2">
          <p className="text-white font-black text-lg gradient-text">민경쌤의 캔바AI연구소</p>
          <p className="text-sm">크리메타쏭 대표 · 캔바지국장 · 생성형AI 전문강사 쏭리즈 민경쌤</p>
          <p className="text-sm">아바톡 크리퐁 앰버서더 · 수퍼톤 앰버서더</p>
          <div className="pt-4 border-t border-gray-800 text-xs text-gray-600">
            © 2025 민경쌤의 캔바AI연구소. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ── FLOATING CTA BUTTON (mobile) ── */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 md:hidden">
        <button
          onClick={handleApply}
          className="btn-gradient btn-pulse w-full max-w-sm font-black text-base py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl"
        >
          <ExternalLink size={18} />
          지금 신청하기
        </button>
      </div>
    </div>
  );
}
