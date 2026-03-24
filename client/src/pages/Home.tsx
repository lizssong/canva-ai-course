/*
 * Design: 다크 프리미엄 에듀테크 랜딩 페이지
 * - 배경: #0D0B1A 딥 다크 네이비
 * - 포인트: 보라(#A855F7) + 마젠타(#EC4899) + 골드(#F59E0B)
 * - 글래스모피즘 카드, 네온 글로우, 그라디언트 텍스트
 * - 위드AI솔루션 로고 좌상단 배치
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global { interface Window { Kakao: any; } }

import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Copy,
  ExternalLink,
  FileText,
  GraduationCap,
  Instagram,
  Monitor,
  Share2,
  Sparkles,
  Star,
  Users,
  Video,
  XCircle,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const GOOGLE_FORM_URL = "https://forms.gle/fPqsBHYP691gBzXX6";
const BLOG_URL = "https://blog.naver.com/lizssong/224227651218";
const SHARE_TITLE = "캔바AI강사 심화과정 2급 오픈! | 민경쌤의 캔바AI연구소";
const SHARE_DESC = "포토샵 효과부터 스탑모션, 포트폴리오 홈페이지까지! 단기 속성으로 캔바 강사 자격증 취득. ZOOM 라이브 + VOD 병행 수강 가능 🎨";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/114049990/YdgtC7PpC5Kr9cJZ6Lu7yX/hero-dark-premium-b9isKLFNHQRkEwx8TtVU9G.webp";
const CERT_BADGE = "https://d2xsxph8kpxj0f.cloudfront.net/114049990/YdgtC7PpC5Kr9cJZ6Lu7yX/certificate-badge-9pDc7uQ4KFzmrjGArUuESa.webp";
const LOGO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/114049990/YdgtC7PpC5Kr9cJZ6Lu7yX/withaisolution-logo-Jmgu8VHT7BQh4uSa5oeSgU.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const curriculum = [
  { no: "01", icon: "🖥️", title: "캔바 인터페이스 완전 정복", desc: "기본 캔바 인터페이스 이해, 템플릿 활용법, 그리드·텍스트·이미지·도형 넣기" },
  { no: "02", icon: "✨", title: "POP 효과로 홍보물 만들기", desc: "시선을 사로잡는 POP 효과 적용 & 퀄리티 있는 홍보물 제작" },
  { no: "03", icon: "🤖", title: "캔바AI로 캐릭터·이미지 생성", desc: "AI 프롬프트로 나만의 캐릭터와 이미지 창작" },
  { no: "04", icon: "🪄", title: "사진 편집 & Magic Studio", desc: "배경 제거, AI 확장, 마법 편집 기능 마스터" },
  { no: "05", icon: "🎨", title: "컬러링북 만들기", desc: "아이들이 좋아하는 나만의 컬러링북 제작" },
  { no: "06", icon: "🖌️", title: "수채화 라인아트 + 디지털아트", desc: "수채화 라인아트 + 디지털아트 만들어서 목업 넣기" },
  { no: "07", icon: "💫", title: "포토샵 효과 내기", desc: "돈 버는 미러링 효과 + 얼굴 반 그림자와 질감 넣기" },
  { no: "08", icon: "🎬", title: "스탑모션 만들기", desc: "생동감 넘치는 짧은 영상 콘텐츠 제작" },
  { no: "09", icon: "📖", title: "전자책 디자인하기", desc: "내 지식을 수익화하는 전자책 표지·내지 디자인" },
  { no: "10", icon: "🌐", title: "포트폴리오 홈페이지 만들기", desc: "나를 알리는 멋진 웹사이트 직접 제작" },
];

const liveSchedule = [
  { date: "3월 28일 (토)", time: "저녁 8시" },
  { date: "4월 1일 (수)", time: "저녁 8시" },
  { date: "4월 10일 (금)", time: "저녁 8시" },
];

const vodSchedule = ["3월 30일", "4월 2일", "4월 3일", "4월 4일", "4월 7일", "4월 8일"];

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
  "포토샵 같은 고급 효과를 내고 싶지만 어려워 포기",
  "나만의 포트폴리오나 전자책을 만들 엄두가 안 남",
  "캔바 강의를 해보고 싶지만 커리큘럼 짤 자신이 없음",
];

const afterList = [
  "백지상태에서도 원하는 디자인을 뚝딱 만들어내는 금손!",
  "캔바 AI를 자유자재로 활용해 캐릭터와 이미지를 창작",
  "포토샵 부럽지 않은 고급 스킬 완벽 장착",
  "나만의 전자책과 포트폴리오 웹사이트 완벽 구축",
  "캔바 강사로 활동할 수 있는 탄탄한 실력 및 노하우 확보!",
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  // 카카오 SDK 초기화
  useEffect(() => {
    const loadKakao = () => {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.async = true;
      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          // 데모용 앱키 — 실제 배포 시 카카오 개발자 콘솔에서 발급한 JavaScript 앱키로 교체
          window.Kakao.init("demo_key_replace_me");
        }
      };
      document.head.appendChild(script);
    };
    loadKakao();
  }, []);

  const handleApply = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  const handleKakaoShare = () => {
    const pageUrl = window.location.href;
    // 카카오 SDK가 로드되지 않았거나 앱키 미설정 시 카카오톡 링크 공유로 폴백
    if (window.Kakao && window.Kakao.isInitialized()) {
      try {
        window.Kakao.Share.sendDefault({
          objectType: "feed",
          content: {
            title: SHARE_TITLE,
            description: SHARE_DESC,
            imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/114049990/YdgtC7PpC5Kr9cJZ6Lu7yX/hero-dark-premium-b9isKLFNHQRkEwx8TtVU9G.webp",
            link: { mobileWebUrl: pageUrl, webUrl: pageUrl },
          },
          buttons: [
            { title: "신청하기", link: { mobileWebUrl: GOOGLE_FORM_URL, webUrl: GOOGLE_FORM_URL } },
            { title: "자세히 보기", link: { mobileWebUrl: pageUrl, webUrl: pageUrl } },
          ],
        });
        return;
      } catch (_) {}
    }
    // 폴백: 카카오톡 링크 공유 URL 방식
    const kakaoUrl = `https://sharer.kakao.com/talk/friends/picker/link?app_key=demo&validation_action=default&validation_params=%7B%7D`;
    const text = encodeURIComponent(`${SHARE_TITLE}\n${SHARE_DESC}\n\n👉 ${pageUrl}`);
    window.open(`https://story.kakao.com/share?url=${encodeURIComponent(pageUrl)}`, "_blank");
    void text; void kakaoUrl;
  };

  const handleInstagramShare = () => {
    // 인스타그램은 직접 URL 공유 API가 없으므로 URL 복사 후 안내
    const pageUrl = window.location.href;
    navigator.clipboard.writeText(`${SHARE_TITLE}\n${SHARE_DESC}\n\n👉 ${pageUrl}`)
      .then(() => {
        alert("링크와 텍스트가 복사되었습니다!\n인스타그램 앱을 열고 스토리 또는 게시물에 붙여넣기 해주세요 📸");
      })
      .catch(() => {
        alert(`아래 링크를 인스타그램에 공유해 주세요:\n${pageUrl}`);
      });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => alert("링크 복사에 실패했습니다. 주소창에서 직접 복사해 주세요."));
  };

  return (
    <div className="min-h-screen" style={{ background: "#0D0B1A", color: "#F0EEFF" }}>

      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(13, 11, 26, 0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(168, 85, 247, 0.18)",
        }}
      >
        <div className="container flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img src={LOGO_IMG} alt="위드AI솔루션" className="h-7 w-auto object-contain" />
          </div>
          <button
            onClick={handleApply}
            className="btn-premium text-sm font-bold px-5 py-2 rounded-full"
          >
            신청하기 →
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
        {/* BG image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.55,
          }}
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(13,11,26,0.3) 0%, rgba(13,11,26,0.7) 60%, #0D0B1A 100%)" }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)" }} />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)" }} />

        <div className="container relative z-10 py-20 lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-5">
              <span className="section-tag">
                <Sparkles size={12} />
                캔바AI연구소 · 민경쌤
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4">
              캔바 강사로<br />
              <span className="shimmer-text">레벨업하고 싶다면?</span>
            </motion.h1>

            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6"
              style={{ color: "#F0EEFF" }}>
              <span className="gradient-text">캔바AI강사 심화과정 2급</span> 오픈!
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: "rgba(240,238,255,0.72)" }}>
              포토샵 효과부터 스탑모션, 포트폴리오 홈페이지까지<br />
              <strong style={{ color: "#C084FC" }}>실전 8가지 핵심 스킬</strong>을 단기 속성으로 완성
            </motion.p>

            {/* Feature badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-8">
              {[
                { icon: <Clock size={13} />, label: "하루 1시간 이내" },
                { icon: <Video size={13} />, label: "ZOOM 라이브 + VOD" },
                { icon: <GraduationCap size={13} />, label: "자격증 발급" },
                { icon: <BookOpen size={13} />, label: "총 10개 과제" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(168,85,247,0.1)",
                    border: "1px solid rgba(168,85,247,0.3)",
                    color: "#C084FC",
                  }}>
                  {b.icon}{b.label}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleApply}
                className="btn-premium btn-pulse text-base font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                지금 바로 신청하기
              </button>
              <a
                href="#curriculum"
                className="btn-gold-outline flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-bold"
              >
                커리큘럼 보기
                <ChevronDown size={16} />
              </a>
            </motion.div>

            {/* 블로그 자세히 보기 링크 */}
            <motion.div variants={fadeUp} className="mt-5">
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all group"
                style={{ color: "rgba(240,238,255,0.5)" }}
              >
                <FileText size={14} style={{ color: "#A855F7" }} />
                <span className="group-hover:underline" style={{ color: "rgba(240,238,255,0.6)" }}>
                  자세한 내용 블로그에서 보기
                </span>
                <ExternalLink size={12} style={{ color: "rgba(168,85,247,0.6)" }} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="neon-divider" />

      {/* ── WHY CANVA NOW ── */}
      <section className="py-20" style={{ background: "#0D0B1A" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="text-center mb-14"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="section-tag"><Zap size={12} />왜 지금 캔바인가요?</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black mb-4">
              TV 광고에도 나오는 캔바,<br />
              <span className="gradient-text">강사로 도약할 최적의 타이밍</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: "rgba(240,238,255,0.6)" }} className="text-base leading-relaxed">
              어린이집·유치원 교사 연수, 초중학교 수업, 기업 출강 어디서든<br />
              <strong style={{ color: "#C084FC" }}>"캔바 어떻게 쓰나요?"</strong> 라는 질문이 가장 많이 나옵니다.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="grid sm:grid-cols-3 gap-5"
          >
            {[
              { icon: <Users size={26} style={{ color: "#A855F7" }} />, title: "교사 연수 폭발적 수요", desc: "어린이집·유치원·초중학교 교사 연수에서 캔바 강의 요청이 급증. 특히 어린이집 교사 연수가 가장 많습니다." },
              { icon: <Monitor size={26} style={{ color: "#EC4899" }} />, title: "기업 필수 툴로 자리매김", desc: "마케팅·교육·인사팀 할 것 없이 기업에서 캔바 교육을 적극 도입 중. AI를 다루면서 캔바는 기본 툴이 되었습니다." },
              { icon: <Sparkles size={26} style={{ color: "#F59E0B" }} />, title: "캔바 광고까지 등장", desc: "TV·유튜브 광고로 대중화된 지금, 모두가 궁금해하는 캔바. 강사의 가치가 가장 높은 시점입니다." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-6 transition-all">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.2)" }}>
                  {item.icon}
                </div>
                <h3 className="font-black text-base mb-2" style={{ color: "#F0EEFF" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,238,255,0.55)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="neon-divider" />

      {/* ── BEFORE / AFTER ── */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #0D0B1A 0%, #110E22 100%)" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="section-tag"><Star size={12} />수강 전후 변화</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black">
              수강 전과 후,<br />
              <span className="gradient-text">당신의 모습이 달라집니다!</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* Before */}
            <motion.div variants={fadeUp} className="rounded-3xl p-7"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(239,68,68,0.2)" }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">😥</span>
                <h3 className="text-lg font-black" style={{ color: "#F0EEFF" }}>수강 전 (Before)</h3>
              </div>
              <ul className="space-y-3">
                {beforeList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#F87171" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(240,238,255,0.6)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div variants={fadeUp} className="rounded-3xl p-7"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(168,85,247,0.12) 50%, rgba(236,72,153,0.15) 100%)",
                border: "1px solid rgba(168,85,247,0.4)",
                boxShadow: "0 0 30px rgba(168,85,247,0.12)",
              }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🌟</span>
                <h3 className="text-lg font-black" style={{ color: "#F0EEFF" }}>수강 후 (After)</h3>
              </div>
              <ul className="space-y-3">
                {afterList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "#A855F7" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(240,238,255,0.85)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="neon-divider" />

      {/* ── CURRICULUM ── */}
      <section id="curriculum" className="py-20" style={{ background: "#0D0B1A" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="section-tag"><BookOpen size={12} />CURRICULUM</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black mb-3">
              <span className="gradient-text">10가지 핵심 커리큘럼</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: "rgba(240,238,255,0.5)" }} className="text-sm">
              현업 강사가 실제 강의에서 쓰는 스킬만 담았습니다
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {curriculum.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, borderColor: "rgba(168,85,247,0.5)" }}
                className="glass-card rounded-2xl p-5 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center gap-1 pt-0.5">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs font-black" style={{ color: "rgba(168,85,247,0.6)" }}>{item.no}</span>
                  </div>
                  <div>
                    <h3 className="font-black text-sm mb-1 leading-snug" style={{ color: "#F0EEFF" }}>{item.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(240,238,255,0.45)" }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="neon-divider" />

      {/* ── SCHEDULE ── */}
      <section className="py-20" style={{ background: "#110E22" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="section-tag"><Calendar size={12} />SCHEDULE</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black mb-3">
              <span className="gradient-text">3주 완성 스케줄</span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: "rgba(240,238,255,0.5)" }} className="text-sm">
              실시간 ZOOM 라이브 + VOD 영상 병행 수강 가능
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* Live */}
            <motion.div variants={fadeUp} className="glass-card rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-2.5 py-1 rounded-full text-xs font-black"
                  style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", color: "#F87171" }}>
                  ● LIVE
                </span>
                <div>
                  <h3 className="font-black text-sm" style={{ color: "#F0EEFF" }}>실시간 ZOOM (1시간 × 3회)</h3>
                </div>
              </div>
              <div className="space-y-2.5">
                {liveSchedule.map((s, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl px-4 py-3"
                    style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.18)" }}>
                    <span className="font-bold text-sm" style={{ color: "#F0EEFF" }}>{s.date}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(168,85,247,0.2)", color: "#C084FC" }}>{s.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs rounded-xl p-3"
                style={{ background: "rgba(168,85,247,0.06)", color: "rgba(240,238,255,0.5)", border: "1px solid rgba(168,85,247,0.12)" }}>
                💡 실시간 참여가 어려우신 분도 <strong style={{ color: "#C084FC" }}>녹화본으로 수강 가능</strong>합니다!
              </p>
            </motion.div>

            {/* VOD */}
            <motion.div variants={fadeUp} className="glass-card rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.25)" }}>
                  <Video size={15} style={{ color: "#F59E0B" }} />
                </div>
                <h3 className="font-black text-sm" style={{ color: "#F0EEFF" }}>영상 업로드 (자율 수강)</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {vodSchedule.map((d, i) => (
                  <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", color: "#F59E0B" }}>
                    {d}
                  </span>
                ))}
              </div>
              <div className="space-y-2.5">
                {[
                  { icon: <Clock size={13} />, text: <>영상당 <strong style={{ color: "#C084FC" }}>10~15분</strong> 시청 후 따라하기</> },
                  { icon: <CheckCircle2 size={13} />, text: <>하루 <strong style={{ color: "#C084FC" }}>1시간 이내</strong> 완료 가능</> },
                  { icon: <Calendar size={13} />, text: <>과제 마감: <strong style={{ color: "#C084FC" }}>다음 날 낮 12시</strong></> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs" style={{ color: "rgba(240,238,255,0.55)" }}>
                    <span style={{ color: "#A855F7" }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs rounded-xl p-3"
                style={{ background: "rgba(245,158,11,0.06)", color: "rgba(245,158,11,0.7)", border: "1px solid rgba(245,158,11,0.15)" }}>
                ⚠️ 운영 공정성을 위해 개별 사정에 따른 선공개 요청은 불가합니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="neon-divider" />

      {/* ── TARGET AUDIENCE ── */}
      <section className="py-20" style={{ background: "#0D0B1A" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="text-center mb-12"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="section-tag"><Star size={12} />TARGET</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black">
              <span className="gradient-text">이런 분께 추천합니다!</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="max-w-2xl mx-auto space-y-3"
          >
            {targets.map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-start gap-4 rounded-2xl px-5 py-4 transition-all"
                style={{
                  background: "rgba(168,85,247,0.06)",
                  border: "1px solid rgba(168,85,247,0.18)",
                }}
                whileHover={{ borderColor: "rgba(168,85,247,0.4)", background: "rgba(168,85,247,0.1)" }}
              >
                <div className="glow-dot mt-1.5" />
                <span className="text-sm leading-relaxed" style={{ color: "rgba(240,238,255,0.8)" }}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="neon-divider" />

      {/* ── INSTRUCTOR ── */}
      <section className="py-20" style={{ background: "#110E22" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="section-tag mb-4 inline-flex">강사 소개</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-4">
                <span className="gradient-text">민경쌤</span>은 누구인가요?
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-card rounded-3xl p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0"
                  style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}>
                  👩‍🏫
                </div>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl font-black" style={{ color: "#F0EEFF" }}>쏭리즈 민경쌤</h3>
                    <p className="text-sm mt-1" style={{ color: "#A855F7" }}>
                      캔바지국장 · 크리메타쏭 대표 · 위드AI솔루션 대표
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      "국제디지털콘텐츠협회 캔바지국장",
                      "생성형AI 전문교육 강사",
                      "AI융합비즈포럼 AI수석연구원",
                      "서초여성가족플라자 AISW강사",
                      "수퍼톤 앰버서더",
                      "AI아트 작가 · 전시회 개최",
                      "어린이집·기업·교원 연수 다수",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#A855F7", boxShadow: "0 0 6px rgba(168,85,247,0.8)" }} />
                        <span className="text-xs" style={{ color: "rgba(240,238,255,0.7)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,238,255,0.55)" }}>
                    초중학생부터 교사·기업 임직원까지 폭넓게 강의하며 현장에서 직접 검증된 노하우를 전달합니다. 리즈, 요코, 조코 캐릭터의 작가이기도 합니다!
                  </p>
                  <a
                    href={BLOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                    style={{
                      background: "rgba(168,85,247,0.1)",
                      border: "1px solid rgba(168,85,247,0.3)",
                      color: "#C084FC",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(168,85,247,0.2)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(168,85,247,0.5)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(168,85,247,0.1)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(168,85,247,0.3)";
                    }}
                  >
                    <FileText size={13} />
                    강의 자세히 보러가기 (블로그)
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="neon-divider" />

      {/* ── CERTIFICATE ── */}
      <section className="py-20" style={{ background: "#0D0B1A" }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger} className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="section-tag"><GraduationCap size={12} />자격증 안내</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black mb-6 mt-4">
              수료 후 <span className="gradient-text">자격증</span> 취득!
            </motion.h2>
            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <img src={CERT_BADGE} alt="자격증" className="w-28 h-28 object-contain float-anim" />
            </motion.div>
            <motion.div variants={fadeUp} className="gold-card rounded-3xl p-7 text-left space-y-3.5">
              {[
                "본 과정 이수 시 국제디지털콘텐츠협회 캔바심화과정 자격증 2급 발급 (비용 별도)",
                "수료하신 분에 한하여 AI올인원자격증과정 연계 가능",
                "캔바 기초(캔디짱)를 수료 못하신 분도 신청 가능한 속성반",
                "자격증은 강사 활동, 이력서, 포트폴리오에 활용 가능",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "#F59E0B" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(240,238,255,0.75)" }}>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A0D2E 0%, #0D0B1A 50%, #1A0D2E 100%)" }}>
        {/* Glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)" }} />
        <div className="container relative z-10 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="section-tag">마감 전 서둘러 주세요!</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black mb-4 mt-4 leading-tight">
              지금 바로 시작하세요!<br />
              <span className="shimmer-text">캔바 강사의 꿈이 현실이 됩니다</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: "rgba(240,238,255,0.55)" }}>
              단기 속성 · 하루 1시간 · 자격증 취득<br />
              민경쌤과 함께라면 누구나 금손이 될 수 있습니다!
            </motion.p>
            <motion.div variants={fadeUp}>
              <button
                onClick={handleApply}
                className="btn-premium inline-flex items-center gap-3 text-lg font-black px-10 py-5 rounded-2xl"
              >
                <ExternalLink size={20} />
                캔바AI강사심화과정(2급) 신청하기
              </button>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-5 text-xs"
              style={{ color: "rgba(240,238,255,0.35)" }}>
              👉 신청서 작성 후 입금 계좌로 수강료 납부 시 등록 완료
            </motion.p>

            {/* SNS 공유 버튼 */}
            <motion.div variants={fadeUp} className="mt-10">
              <p className="text-sm font-semibold mb-4" style={{ color: "rgba(240,238,255,0.45)" }}>
                <Share2 size={14} className="inline mr-1.5 mb-0.5" />
                이 과정을 주변에 공유해 주세요!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {/* 카카오톡 */}
                <button
                  onClick={handleKakaoShare}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm transition-all"
                  style={{
                    background: "#FEE500",
                    color: "#191919",
                    boxShadow: "0 4px 16px rgba(254,229,0,0.3)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#191919">
                    <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.63 1.614 4.938 4.036 6.318L5 21l4.868-2.59A11.3 11.3 0 0 0 12 18c5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
                  </svg>
                  카카오톡 공유
                </button>

                {/* 인스타그램 */}
                <button
                  onClick={handleInstagramShare}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm transition-all"
                  style={{
                    background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                    color: "white",
                    boxShadow: "0 4px 16px rgba(220,39,67,0.35)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <Instagram size={17} />
                  인스타그램 공유
                </button>

                {/* URL 복사 */}
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm transition-all"
                  style={{
                    background: copied ? "rgba(168,85,247,0.25)" : "rgba(255,255,255,0.07)",
                    color: copied ? "#C084FC" : "rgba(240,238,255,0.7)",
                    border: `1px solid ${copied ? "rgba(168,85,247,0.5)" : "rgba(255,255,255,0.12)"}`,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <Copy size={15} />
                  {copied ? "복사됨 ✓" : "링크 복사"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10" style={{ background: "#080612", borderTop: "1px solid rgba(168,85,247,0.15)" }}>
        <div className="container text-center space-y-2">
          <div className="flex justify-center mb-3">
            <img src={LOGO_IMG} alt="위드AI솔루션" className="h-6 w-auto object-contain opacity-70" />
          </div>
          <p className="text-sm font-black gradient-text">민경쌤의 캔바AI연구소</p>
          <p className="text-xs" style={{ color: "rgba(240,238,255,0.4)" }}>
            크리메타쏭 대표 · 캔바지국장 · 생성형AI 전문강사 쏭리즈 민경쌤
          </p>
          <p className="text-xs" style={{ color: "rgba(240,238,255,0.3)" }}>
            수퍼톤 앰버서더
          </p>
          <div className="flex justify-center mt-4 mb-2">
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all"
              style={{ color: "rgba(168,85,247,0.55)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#A855F7")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(168,85,247,0.55)")}
            >
              <FileText size={12} />
              강의 상세 블로그 보러가기
              <ExternalLink size={11} />
            </a>
          </div>
          <p className="text-xs mt-2" style={{ color: "rgba(240,238,255,0.2)" }}>
            © 2025 위드AI솔루션 · 민경쌤의 캔바AI연구소. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── FLOATING CTA (mobile) ── */}
      <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center px-4 md:hidden">
        <button
          onClick={handleApply}
          className="btn-premium btn-pulse w-full max-w-sm font-black text-base py-4 rounded-2xl flex items-center justify-center gap-2 shadow-2xl"
        >
          <ExternalLink size={17} />
          지금 신청하기
        </button>
      </div>
    </div>
  );
}
