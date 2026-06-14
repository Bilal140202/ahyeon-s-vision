import { useEffect, useRef, useState, useCallback } from "react";

// Local image imports
import profile1 from "@/assets/ahyeon/profile1.png";
import profile2 from "@/assets/ahyeon/profile2.png";
import profile3 from "@/assets/ahyeon/profile3.png";
import concept1 from "@/assets/ahyeon/concept1.png";
import concept2 from "@/assets/ahyeon/concept2.png";
import forever from "@/assets/ahyeon/forever.png";
import dripTeaser from "@/assets/ahyeon/drip_teaser.png";
import dripConcept from "@/assets/ahyeon/drip_concept.png";
import dripGenie from "@/assets/ahyeon/drip_genie.png";
import airport1 from "@/assets/ahyeon/airport1.jpg";
import airport2 from "@/assets/ahyeon/airport2.jpg";
import airport3 from "@/assets/ahyeon/airport3.jpg";
import airport4 from "@/assets/ahyeon/airport4.jpg";
import airport5 from "@/assets/ahyeon/airport5.jpg";
import taipei1 from "@/assets/ahyeon/taipei1.jpg";
import taipei2 from "@/assets/ahyeon/taipei2.jpg";
import taipei3 from "@/assets/ahyeon/taipei3.jpg";
import tpeAirport from "@/assets/ahyeon/tpe_airport.jpg";
import tpeAirport2 from "@/assets/ahyeon/tpe_airport2.jpg";
import fansign1 from "@/assets/ahyeon/fansign1.jpg";
import fansign2 from "@/assets/ahyeon/fansign2.jpg";
import birthday from "@/assets/ahyeon/birthday.jpg";
import insta1 from "@/assets/ahyeon/insta1.jpg";
import insta2 from "@/assets/ahyeon/insta2.jpg";
// 2026 era
import choomMv from "@/assets/ahyeon/2026/choom_mv.jpg";
import choomMusicCore from "@/assets/ahyeon/2026/choom_music_core.jpg";
import shitMv from "@/assets/ahyeon/2026/shit_mv.jpg";
import shitPerf from "@/assets/ahyeon/2026/shit_perf.jpg";

const HERO_VIDEOS = [
  "https://owrqsjgqqnbhexycooak.supabase.co/storage/v1/object/public/videos/tiktok_chisacan_7446251322732481797__1774410246713_chisacan%207446251322732481797%20Download%20MP4%20HD.mp4",
  "https://owrqsjgqqnbhexycooak.supabase.co/storage/v1/object/public/videos/tiktok_navillera.aep_7567256733043723528__1774410029243_navillera%20aep%207567256733043723528%20Download%20M.mp4",
];

const IMAGES = {
  heroPortrait: profile1,
  who: profile2,
  viral: concept1,
  timeline: dripTeaser,
  personality: forever,
  closing: dripConcept,
  qualities: concept2,
  birthday: birthday,
};

const GALLERY_PHOTOS = [
  { src: profile1, caption: "Official Profile — BABYMONSTER" },
  { src: profile2, caption: "Official Profile — BABYMONSTER" },
  { src: profile3, caption: "Official Profile — BABYMONSTER" },
  { src: concept1, caption: "BABYMONS7ER — Concept Photo" },
  { src: concept2, caption: "BABYMONS7ER — Concept Photo" },
  { src: forever, caption: '"Forever" — Visual Photo' },
  { src: dripTeaser, caption: "DRIP — Visual Teaser" },
  { src: dripConcept, caption: "DRIP — Concept Photo" },
  { src: dripGenie, caption: "DRIP — Genie Magazine" },
  { src: airport1, caption: "GMP Airport — Feb 2026" },
  { src: airport2, caption: "GMP Airport — Feb 2026" },
  { src: airport3, caption: "GMP Airport — Feb 2026" },
  { src: airport4, caption: "GMP Airport — Feb 2026" },
  { src: airport5, caption: "GMP Airport — Feb 2026" },
  { src: taipei1, caption: "LOVE MONSTERS Tour — Taipei" },
  { src: taipei2, caption: "LOVE MONSTERS Tour — Taipei" },
  { src: taipei3, caption: "LOVE MONSTERS Tour — Taipei" },
  { src: tpeAirport, caption: "TPE Airport — Jan 2026" },
  { src: fansign1, caption: "KTOWN4U Fansign Event" },
  { src: fansign2, caption: "KTOWN4U Fansign Event" },
  { src: birthday, caption: "Happy Birthday Ahyeon 🎂" },
  { src: insta1, caption: "Instagram Update — Jun 2025" },
  { src: insta2, caption: "Instagram Update — Jun 2025" },
  { src: tpeAirport2, caption: "TPE Airport — Jan 2026" },
  // 2026 era
  { src: choomMv, caption: "CHOOM — Official MV (May 2026)" },
  { src: choomMusicCore, caption: "CHOOM — MBC Music Core, May 9 2026" },
  { src: shitMv, caption: "SUGAR HONEY ICE TEA — MV (Jun 2026)" },
  { src: shitPerf, caption: "SUGAR HONEY ICE TEA — Performance Video" },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const Lightbox = ({ photos, index, onClose, onPrev, onNext }: {
  photos: typeof GALLERY_PHOTOS;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
        <button className="lightbox-nav lightbox-prev" onClick={onPrev} aria-label="Previous">‹</button>
        <div className="lightbox-img-wrapper">
          <img src={photos[index].src} alt={photos[index].caption} />
        </div>
        <button className="lightbox-nav lightbox-next" onClick={onNext} aria-label="Next">›</button>
        <div className="lightbox-caption">
          <span>{photos[index].caption}</span>
          <span className="lightbox-counter">{index + 1} / {photos.length}</span>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const rootRef = useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  // activeIndex even → videoA is active; odd → videoB is active
  const aIsActive = activeIndex % 2 === 0;

  const handleEnded = useCallback(() => {
    const nextIdx = activeIndex + 1;
    const nextSrc = HERO_VIDEOS[nextIdx % HERO_VIDEOS.length];
    // Preload next video on the inactive element, then swap
    const nextRef = aIsActive ? videoBRef : videoARef;
    if (nextRef.current) {
      nextRef.current.src = nextSrc;
      nextRef.current.load();
      nextRef.current.play().catch(() => {});
    }
    setActiveIndex(nextIdx);
  }, [activeIndex, aIsActive]);

  // Initial play
  useEffect(() => {
    if (videoARef.current) {
      videoARef.current.src = HERO_VIDEOS[0];
      videoARef.current.load();
      videoARef.current.play().catch(() => {});
    }
  }, []);

  // Sync mute state to both videos
  useEffect(() => {
    if (videoARef.current) videoARef.current.muted = isMuted;
    if (videoBRef.current) videoBRef.current.muted = isMuted;
  }, [isMuted]);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => setLightboxIndex((i) => (i !== null ? (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : null));
  const nextPhoto = () => setLightboxIndex((i) => (i !== null ? (i + 1) % GALLERY_PHOTOS.length : null));

  return (
    <div ref={rootRef}>
      {lightboxIndex !== null && (
        <Lightbox photos={GALLERY_PHOTOS} index={lightboxIndex} onClose={closeLightbox} onPrev={prevPhoto} onNext={nextPhoto} />
      )}

      {/* ===== HERO ===== */}
      <section className="hero">
        {/* Crossfade video background */}
        <div className="hero-video-bg">
          <video
            ref={videoARef}
            className={`hero-video-layer ${aIsActive ? "active" : ""}`}
            muted={isMuted}
            playsInline
            onEnded={aIsActive ? handleEnded : undefined}
          />
          <video
            ref={videoBRef}
            className={`hero-video-layer ${!aIsActive ? "active" : ""}`}
            muted={isMuted}
            playsInline
            onEnded={!aIsActive ? handleEnded : undefined}
          />
          <div className="hero-video-overlay" />
        </div>

        {/* Sound toggle */}
        <button
          onClick={() => setIsMuted((m) => !m)}
          className="hero-sound-toggle"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? "🔇 Tap for sound" : "🔊 Sound on"}
        </button>

        <div className="hero-left">
          <div className="overline">YG Entertainment · BABYMONSTER · 5th Gen</div>
          <h1 className="hero-name">
            <span className="line1">JUNG</span>
            <span className="line2">AH<span className="accent">YEON</span></span>
          </h1>
          <div className="hero-hangul">정 아 현</div>
          <p className="hero-tagline">"The voice you hear once — and spend the rest of your life looking for in other music."</p>
          <p className="hero-desc">
            She went viral before she debuted. She came back from absence and made the whole world notice.
            Now 19, trilingual, the designated center of BABYMONSTER — and in 2026 she's headlining
            domes, topping global YouTube charts, and gracing Vogue covers. Barely getting started.
          </p>
          <div className="scroll-hint">
            <div className="scroll-line" />
            Her full story below
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={IMAGES.heroPortrait} alt="Jung Ahyeon portrait" loading="eager" />
              <div className="portrait-roles">
                <span className="role-tag">Main Vocalist</span>
                <span className="role-tag">Lead Rapper</span>
                <span className="role-tag">Center · Face of Group</span>
              </div>
              <div className="portrait-identity">
                <div className="name-kr">정아현</div>
                <div className="birth-detail">Apr 11, 2007 · Chuncheon, Gangwon-do</div>
              </div>
              <div className="corner tl" /><div className="corner tr" />
              <div className="corner bl" /><div className="corner br" />
            </div>
            <div className="stat-chip c1">
              <span className="label">Trained</span>
              <span className="value">5 YEARS</span>
            </div>
            <div className="stat-chip c2">
              <span className="label">Debut</span>
              <span className="value">APR 1 2024</span>
            </div>
            <div className="stat-chip c3">
              <span className="label">MBTI</span>
              <span className="value">ISTJ</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FACTS BAR ===== */}
      <div className="facts-bar">
        {[
          ["Full Name", "Jung Ahyeon\n정아현"],
          ["Birthday", "April 11, 2007"],
          ["Hometown", "Chuncheon,\nGangwon-do"],
          ["Height", "163 cm"],
          ["Languages", "KO · EN · ZH"],
          ["Training", "5 Years, YG"],
          ["MBTI", "ISTJ"],
          ["Audition Song", '"The Show"\nby Lenka'],
          ["Fav Artist", "G-DRAGON"],
          ["Fandom", "Hyeonies 🦋"],
        ].map(([label, value]) => (
          <div className="fact-pill" key={label}>
            <span className="fp-label">{label}</span>
            <span className="fp-value" style={{ whiteSpace: "pre-line" }}>{value}</span>
          </div>
        ))}
      </div>

      {/* ===== WHO ===== */}
      <section className="tribute-section">
        <div className="who-grid">
          <div className="who-text reveal">
            <div className="section-label">Who Is She</div>
            <h2 className="section-title">A name that arrived<br /><em>before the debut did</em></h2>
            <p>
              <strong>Jung Ahyeon (정아현)</strong> was born April 11, 2007, in Toegye-dong, Chuncheon, Gangwon-do, South Korea.
              She is the main vocalist, lead rapper, lead dancer, face of the group, and official center of BABYMONSTER — YG Entertainment's 5th generation girl group.
            </p>
            <p>
              She started learning English at age 5 and Mandarin at age 7, and now speaks both fluently alongside Korean.
              She trained at YG for five years. In January 2023, YG introduced her as BABYMONSTER's "definite center"
              through a live performance video — the second member revealed to the public.
            </p>
            <p>
              She auditioned with "The Show" by Lenka. Her favorite artist is G-DRAGON. She attends Hanlim Multi Art School
              alongside fellow member Rami, and in November 2025 announced she would skip the 2026 CSAT to focus on her career.
            </p>
          </div>
          <div className="reveal">
            <div className="section-image natural-image">
              <img src={IMAGES.who} alt="Ahyeon profile" loading="lazy" />
            </div>
            <div className="info-table" style={{ marginTop: 32 }}>
              {[
                ["Full Name", "Jung Ahyeon (정아현)", "Chinese: Zhèng Yaxián (郑雅贤)"],
                ["Birthday", "April 11, 2007", "Toegye-dong, Chuncheon, Gangwon-do"],
                ["Height", "163 cm", "Confirmed on Weverse, Sep 2024"],
                ["Group", "BABYMONSTER", "YG Entertainment · Debuted April 1, 2024"],
                ["Positions", "Main Vocalist · Lead Rapper · Lead Dancer", "Face of Group · Center"],
                ["Languages", "Korean · English (age 5) · Mandarin (age 7)", ""],
                ["Training", "5 years at YG Entertainment", ""],
                ["MBTI", "ISTJ", "Confirmed April 2024 via Weverse"],
                ["School", "Hanlim Multi Art School", "with member Rami"],
                ["Family", "Has a younger brother", ""],
                ["Nickname", 'Ah-ramji (아람지)', "squirrel, per members"],
                ["Hobbies", "Drawing · Video editing", ""],
                ["Audition Song", '"The Show" by Lenka', ""],
                ["Fav Artist", "G-DRAGON", ""],
                ["Fav Flowers", "Roses and daisies", ""],
                ["Fav Season", "Winter", ""],
              ].map(([key, val, sub]) => (
                <div className="info-row" key={key}>
                  <div className="info-key">{key}</div>
                  <div className="info-val">
                    {val}
                    {sub && <span className="sub">{sub}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== VIRAL ===== */}
      <section className="tribute-section viral-section">
        <div className="viral-grid">
          <div className="viral-text reveal">
            <div className="section-label">The Moment That Defined the Pre-Debut Era</div>
            <h2 className="section-title">One cover.<br />50 million views.<br /><em>A song gifted back.</em></h2>
            <p>
              During YG's pre-debut reality series <strong>Last Evaluation</strong> (2023), Ahyeon performed a cover of
              Charlie Puth's "Dangerously." Uploaded April 22, 2023, it surpassed 8.74 million views in under 10 days
              and has since crossed <strong>50 million views</strong> on YouTube. It broke out of the K-pop space entirely.
            </p>
            <p>
              <strong>Charlie Puth personally noticed.</strong> He commented "I loved it" on TikTok. The story has a remarkable end:
              when BABYMONSTER's debut mini album was assembled, YG's Yang Hyun-suk revealed that Puth gifted the group
              an original song — <strong>"Like That"</strong> — as a direct response to Ahyeon's cover.
            </p>
            <p>
              Ahyeon has since performed "Dangerously" live as her solo stage on BABYMONSTER's 2025 Hello Monsters World Tour —
              from KSPO Dome Seoul to Singapore, Osaka, Newark, Atlanta, and beyond.
            </p>
          </div>
          <div className="reveal">
            <div className="section-image natural-image" style={{ marginBottom: 28 }}>
              <img src={IMAGES.viral} alt='Ahyeon performing "Dangerously" cover' loading="lazy" />
            </div>
            <div className="milestone-stack">
              {[
                ["50M+", '"Dangerously" Cover Views', "YouTube · Pre-debut · Still growing"],
                ['"I loved it"', "Charlie Puth's TikTok Comment", "Original artist personally reacted"],
                ["1 Song", "Gifted by Charlie Puth", '"Like That" — written for BABYMONSTER in response'],
                ["460K+", "BABYMONS7ER Pre-orders", "Debut mini album · #3 Circle Album Chart"],
                ["1M+", "DRIP Album Sales in Korea", "Debut studio album · Nov 2024"],
                ["40 days", "Time to Arena-Class", "26,000-ticket arenas sold out after debut"],
              ].map(([num, title, desc]) => (
                <div className="milestone" key={title}>
                  <div className="milestone-num">{num}</div>
                  <div className="milestone-text">
                    <strong>{title}</strong>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== QUALITIES ===== */}
      <section className="tribute-section qualities-section">
        <div className="reveal">
          <div className="section-label">What Makes Her Special</div>
          <h2 className="section-title">Six reasons she is <em>impossible to ignore</em></h2>
          <div className="section-image natural-image" style={{ marginBottom: 40 }}>
            <img src={IMAGES.qualities} alt="Ahyeon on stage" loading="lazy" />
          </div>
        </div>
        <div className="qualities-grid">
          {[
            ["01", "The Voice", "Technically she has compressed vocal tone, excellent breath control, and explosive high notes delivered clean in live performance. Emotionally, she colours notes rather than hitting them."],
            ["02", "The Duality", "Holding both main vocalist and lead rapper positions simultaneously is rare. Doing them with equal conviction is rarer. In \"SHEESH\" she executes a technically demanding rap verse then moves seamlessly into sustained vocal lines."],
            ["03", "The Trilingualism", "She has spoken English since age 5 and Mandarin since age 7. She connects with global fans in their language naturally, not as a practiced phrase."],
            ["04", "The Center Energy", "YG labeled her the \"definite center\" before the group had a public name. Her fancams consistently rank among the highest-viewed per performance across every tour stop."],
            ["05", "The Resilience", "She missed debut due to health. When her return was announced, #WelcomeBackAhyeon drew millions of interactions in 24 hours. She came back and her vocals were re-recorded into existing singles."],
            ["06", "The Ceiling", "She is 18 years old. She chose to skip her college entrance exams to fully commit to music. What you are watching now is not a peak. It is a beginning."],
          ].map(([num, title, desc]) => (
            <div className="quality-card reveal" key={num}>
              <span className="quality-num">{num}</span>
              <h3 className="quality-title">{title}</h3>
              <p className="quality-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ===== PHOTO GALLERY ===== */}
      <section className="tribute-section">
        <div className="reveal">
          <div className="section-label">Gallery</div>
          <h2 className="section-title">Moments captured <em>in frame</em></h2>
        </div>
        <div className="gallery-grid reveal">
          {GALLERY_PHOTOS.map((photo, i) => (
            <div
              className="gallery-item"
              key={i}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
            >
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <div className="gallery-item-overlay">
                <span>{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ===== YOUTUBE VIDEOS ===== */}
      <section className="tribute-section">
        <div className="reveal">
          <div className="section-label">Watch</div>
          <h2 className="section-title">Hear it for <em>yourself</em></h2>
        </div>
        <div className="video-grid reveal">
          <div className="video-card">
            <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/xw7Y2gviWbA"
                title="Ahyeon — Dangerously (Charlie Puth Cover)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3 className="video-title">"Dangerously" — Charlie Puth Cover</h3>
              <p className="video-desc">
                The cover that broke the internet. 50M+ views. Charlie Puth himself reacted:
                <strong> "I loved it."</strong> This single performance put Ahyeon on the global radar
                before she ever officially debuted.
              </p>
              <span className="video-stat">50M+ views · April 2023</span>
            </div>
          </div>
          <div className="video-card">
            <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/2wA_b6YHjqQ"
                title="BABYMONSTER — SHEESH MV"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3 className="video-title">BABYMONSTER — "SHEESH" MV</h3>
              <p className="video-desc">
                The first comeback as a full seven-member group. Ahyeon's rap verse into vocal bridge
                is the moment that silenced every doubter. <strong>400M+ views.</strong>
              </p>
              <span className="video-stat">400M+ views · April 2024 · Apr 17 2026 record</span>
            </div>
          </div>
          <div className="video-card">
            <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/x3eqqoZPV_E"
                title='BABYMONSTER — "CHOOM" MV'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3 className="video-title">BABYMONSTER — "CHOOM" (춤) MV</h3>
              <p className="video-desc">
                The 3rd mini album title track, released May 4, 2026. Hip-hop, hand-mic live, immediate viral
                traction. Music-show stages widely praised for being performed entirely on hand mics with no
                ear monitors. <strong>149M+ views in six weeks.</strong>
              </p>
              <span className="video-stat">149M+ views · May 2026</span>
            </div>
          </div>
          <div className="video-card">
            <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/naoGk-Zjc1s"
                title='BABYMONSTER — "SUGAR HONEY ICE TEA" MV'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3 className="video-title">BABYMONSTER — "SUGAR HONEY ICE TEA" MV</h3>
              <p className="video-desc">
                The cheeky-acronym summer single dropped June 7, 2026. Crossed
                <strong> 10M YouTube views in under 12 hours</strong> and debuted at
                <strong> #1 on the global YouTube music chart</strong> — solidifying their
                "Summer Queen" status.
              </p>
              <span className="video-stat">58M+ views · Jun 2026 · #1 Global YT</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== IT GIRL IMPACT ===== */}
      <section className="tribute-section">
        <div className="reveal">
          <div className="section-label" style={{ color: "var(--rose)" }}>Impact</div>
          <h2 className="section-title">The 5th-Gen <em>It Girl</em></h2>
        </div>
        <div className="highlight-feature reveal" style={{ borderLeft: "3px solid var(--rose)" }}>
          <div className="highlight-feature-content">
            <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 20 }}>
              When YG unveiled Ahyeon's comeback teaser photos on March 15, 2024, the internet didn't just react — it 
              <strong style={{ color: "var(--rose)" }}> declared a coronation</strong>. Her concept photos racked up 
              <strong> 1.1 million views, 42K retweets, and 70K likes</strong> in under 24 hours — the highest engagement 
              of any BABYMONSTER member by a wide margin.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24, color: "var(--paper)", opacity: 0.8 }}>
              Fans and non-fans alike drew the lineage: <strong>Lee Hyori</strong> (1st-gen) → <strong>Krystal</strong> (2nd-gen) → 
              <strong> Jennie</strong> (3rd-gen) → <strong>Wonyoung</strong> (4th-gen) → <strong style={{ color: "var(--rose)" }}>Ahyeon</strong> (5th-gen). 
              Her "face card" became a meme of its own — an acknowledgment that her visual presence alone commands attention 
              before she even opens her mouth.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {[
                '"Her face alone screams 5th-gen it girl!"',
                '"Make way for the most impactful pre-debut idol ever."',
                '"Ahyeon face card never declines!"',
                '"A new queen is coming — her visuals are next level."',
              ].map((q) => (
                <span key={q} style={{
                  display: "inline-block", padding: "8px 16px", fontSize: 13,
                  background: "rgba(196,98,122,0.1)", border: "1px solid rgba(196,98,122,0.25)",
                  borderRadius: 4, fontStyle: "italic", color: "var(--rose-light)",
                }}>{q}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== CHINA POWER INFLUENCE ===== */}
      <section className="tribute-section">
        <div className="reveal">
          <div className="section-label" style={{ color: "#e84040" }}>China Power</div>
          <h2 className="section-title">The bridge across <em>languages</em></h2>
        </div>
        <div className="highlight-feature reveal" style={{ borderLeft: "3px solid #e84040" }}>
          <div className="highlight-feature-content">
            <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 20 }}>
              Ahyeon speaks <strong style={{ color: "#e84040" }}>fluent Mandarin Chinese</strong> — learned since age 7 — 
              and it isn't just a party trick. Her Chinese name is <strong>郑雅贤 (Zhèng Yǎxián)</strong>, and she uses 
              it naturally with Chinese-speaking fans, creating a direct emotional connection that most K-pop idols can only 
              approximate through translators.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20, color: "var(--paper)", opacity: 0.8 }}>
              During a trip to Singapore, when a fan tried to give her a handmade gift but was blocked by YG staff, 
              Ahyeon <strong>switched to Chinese</strong> to secretly tell the fan to pass it to her later — knowing her 
              Korean-speaking manager wouldn't understand. The moment went viral as proof of her devotion to her fans and 
              her resourcefulness.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20, color: "var(--paper)", opacity: 0.8 }}>
              On <strong style={{ color: "#e84040" }}>Jan 2–3, 2026</strong> BABYMONSTER closed their LOVE MONSTERS
              Asia fan-concert tour at Taipei Arena (24,000 fans across two nights) — the
              <strong> first K-pop act to play Taipei Arena in 2026</strong>. Ahyeon worked the crowd
              entirely in Mandarin, apologising mid-song in Chinese (<em>"對不起，再來一次"</em>) and asking
              the encore crowd "有沒有人要吃火鍋?" — moments that went mega-viral across Weibo and Bilibili.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24, color: "var(--paper)", opacity: 0.8 }}>
              Her Chinese fanbase (C-fans) is among the most dedicated in the 5th-gen K-pop landscape.
              They organize large-scale birthday projects, LED billboard displays across major Chinese cities,
              and coordinated streaming campaigns that consistently push BABYMONSTER content into trending topics
              on Weibo and Bilibili. YG even ran a China-exclusive <strong>JD.com (京东) video fan signing
              on June 20, 2026</strong> with Ahyeon among the seven members. In a group that already has
              multinational members from Thailand, Japan, and Korea,
              <strong style={{ color: "#e84040" }}> Ahyeon is the member China chose</strong>.
            </p>
            <div className="milestone-stack" style={{ maxWidth: 500 }}>
              {[
                ["🇨🇳", "Trilingual", "Korean · English · Mandarin Chinese — fluent in all three since childhood"],
                ["🎤", "Taipei Arena 2026", "First KPop act to play Taipei Arena in 2026 — worked the crowd in Mandarin"],
                ["📢", "C-Fan Power", "JD.com video fan-sign Jun 2026 · billboards across Chinese cities · top of Weibo trends"],
              ].map(([icon, title, desc]) => (
                <div className="milestone-card" key={title} style={{ borderColor: "rgba(232,64,64,0.2)" }}>
                  <span className="milestone-icon">{icon}</span>
                  <div>
                    <strong style={{ color: "#e84040" }}>{title}</strong>
                    <p style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== GOLDEN COVER ===== */}
      <section className="tribute-section">
        <div className="reveal">
          <div className="section-label" style={{ color: "var(--gold)" }}>Golden Moment</div>
          <h2 className="section-title">The cover that rewrote <em>the standard</em></h2>
        </div>
        <div className="highlight-feature reveal" style={{ borderLeft: "3px solid var(--gold)" }}>
          <div className="highlight-feature-content">
            <p style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 20 }}>
              At the <strong style={{ color: "var(--gold)" }}>2025 MAMA Awards</strong> in Hong Kong's Kai Tak Stadium, 
              BABYMONSTER performed a cover of <strong>"Golden"</strong> — the notoriously difficult OST from the Netflix anime 
              <em> KPop Demon Hunters</em>. The original creators had publicly stated it would be 
              <strong> "challenging to find a singer capable of performing the song live in its original key."</strong> 
              It had been dubbed a "live-impossible track."
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 20, color: "var(--paper)", opacity: 0.8 }}>
              BABYMONSTER refused to transpose it. They performed <strong style={{ color: "var(--gold)" }}>in the original key, fully live</strong>. 
              Starting with lyrical, delicate vocals, they built to explosive power — and then Ahyeon delivered the 
              <strong> final ultra-high note ad-lib</strong> that the Chosun Ilbo described as "testing the limits of human capability." 
              The performance was immediately hailed as the <strong>definitive version</strong> of "Golden."
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24, color: "var(--paper)", opacity: 0.8 }}>
              Social media and communities erupted: <em>"It's unbelievable they performed it live in the original key,"</em> 
              <em> "Astonishing vocal ability,"</em> <em>"Skill speaks for itself."</em> YouTube and TikTok flooded with 
              reaction videos. The original singer <strong>Rei Mei</strong> personally responded with support, saying 
              <strong style={{ color: "var(--gold)" }}> "Don't belittle or compare!"</strong> — a public endorsement of their rendition.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24, color: "var(--paper)", opacity: 0.8 }}>
              That vocal authority carried straight into 2026: on <strong style={{ color: "var(--gold)" }}>April 13, 2026</strong>,
              Ahyeon was crowned <strong>KGMA "Solo Female Artist of April" #1</strong> with
              <strong> 33,380 votes</strong> — her first major solo-named accolade, won while she was still
              promoting only as a BABYMONSTER member.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {[
                ["🏟️", "2025 MAMA Awards", "Kai Tak Stadium, Hong Kong"],
                ["🎵", "Original Key — Live", "The 'impossible' track, uncompromised"],
                ["🔥", "Ahyeon's High Note", "Ultra-high ad-lib that stunned the arena"],
                ["🏆", "KGMA Apr 2026 — #1", "Solo Female Artist of April · 33,380 votes"],
              ].map(([icon, title, desc]) => (
                <div key={title} style={{
                  flex: "1 1 200px", padding: "16px 20px",
                  background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: 4,
                }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
                  <strong style={{ color: "var(--gold)", fontSize: 14 }}>{title}</strong>
                  <p style={{ fontSize: 12, opacity: 0.6, marginTop: 4 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== 2026 TIMELINE ===== */}
      <section className="tribute-section">
        <div className="reveal">
          <div className="section-label" style={{ color: "var(--gold)" }}>2026 — The Year So Far</div>
          <h2 className="section-title">Six months. <em>One coronation.</em></h2>
          <p style={{ maxWidth: 760, fontSize: 16, lineHeight: 1.7, opacity: 0.8, marginBottom: 28 }}>
            From a sold-out Taipei Arena finale to Vogue HK covers, a KGMA Solo Female #1, two back-to-back
            BABYMONSTER comebacks, a YouTube #1, and the world's first BABYMONSTER dome tour — here is
            every verified Ahyeon milestone between Jan 1 and Jun 14, 2026.
          </p>
        </div>

        {/* Stat strip */}
        <div className="stat-strip reveal">
          {[
            ["149M+", "CHOOM MV views"],
            ["58M+", "SHIT MV views (1 week)"],
            ["#1", "Global YouTube Music Chart"],
            ["400M", "SHEESH (fastest girl-group debut song)"],
            ["33,380", "KGMA Solo Female #1 votes"],
            ["440K+", "LOVE MONSTERS tour attendees"],
          ].map(([num, label]) => (
            <div className="stat-cell" key={label}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="timeline reveal" style={{ marginTop: 40 }}>
          {[
            ["Jan 2–3, 2026", "LOVE MONSTERS Finale — Taipei Arena", "First K-pop act to play Taipei Arena in 2026. 24,000 fans across two nights, capping a tour that drew 440,000+ across Asia. Ahyeon worked the crowd in Mandarin and asked the encore: '有沒有人要吃火鍋?'"],
            ["Jan 8, 2026", "LeSportsac × BABYMONSTER — Spectator Collection", "Japan-exclusive campaign. Ahyeon's individual pictorial released as part of the first visual drop (second visual drop followed Mar 12)."],
            ["Feb 5, 2026", "M Countdown — 'Really Like You' (Reverse Chart Run)", "A 2024 DRIP b-side virally re-entered Korean charts after TikTok blew up. BABYMONSTER returned to M Countdown to perform it live as a full group."],
            ["Mar 4, 2026", "Vogue Hong Kong — March Cover", "BABYMONSTER on the cover under the headline 'The Only Way Is Up.' Ahyeon featured in the cover story and interviews."],
            ["Mar 16 → 31, 2026", "CHOOM World Tour Announced", "Japan leg confirmed Mar 16, Seoul opening dates Mar 31. First-ever solo dome concerts on the calendar (Kyocera Dome Osaka, Sep 22–23)."],
            ["Mar 26, 2026", "Vogue × GQ Event — Hong Kong", "Ahyeon attended the Vogue HK × GQ joint event in Hong Kong. Heavy C-fan press coverage at Incheon and HKG airports."],
            ["Apr 11, 2026", "Ahyeon's 19th Birthday 🎂", "Korean age 20. Fan birthday cafés held near YG Entertainment in Hapjeong; member Weverse messages and official BABYMONSTER socials joined in."],
            ["Apr 13, 2026", "🏆 KGMA — 'Artist of April' Solo Female #1", "Won the Korea Grand Music Awards' Solo Female Artist of April category with 33,380 votes — her real 2026 solo accolade ahead of the May CHOOM comeback."],
            ["Apr 17, 2026", "SHEESH — 400M YouTube Views", "747 days after release — the fastest K-pop girl-group debut song to ever hit 400M views. A halo moment ahead of the comeback."],
            ["May 4, 2026", "💿 3rd Mini Album — CHOOM (춤)", "BABYMONSTER's 3rd mini album. 4 tracks: MOON · CHOOM · I LIKE IT · LOCKED IN. Hip-hop title-track described as a song meant to 'turn the whole world into a giant dance floor.'"],
            ["May 9–10, 2026", "CHOOM Music-Show Debut — Hand-Mic Live", "First stages on Music Core and Inkigayo performed entirely on hand mics with no ear monitors. Allkpop article racked up 12,741 upvotes praising the live execution."],
            ["May 11, 2026", "Asia / Oceania CHOOM Tour Dates Announced", "Tour expanded to 14+ Asia-Pacific cities including a first dome run at Kyocera Dome Osaka in September."],
            ["May 19, 2026", "BANILA CO Brand Event — Seongsu-dong", "Ahyeon and the full BABYMONSTER lineup at the launch event for the Covericious Ultimate White Cushion in Seoul."],
            ["May 25–30, 2026", "SUGAR HONEY ICE TEA Teasers Drop", "Summer single announced with a lime-green poster; individual teaser photos for Ahyeon and Ruka released around May 30. YG called it a 'lightning-fast' one-month follow-up to CHOOM."],
            ["Jun 7, 2026", "🍯 SUGAR HONEY ICE TEA — MV Release", "Digital single drops at midnight KST. The cheeky-acronym summer flex anthem becomes the talk of the town for its sweet/saucy double-meaning concept."],
            ["Jun 8, 2026", "10M Views in Under 12 Hours", "S.H.I.T. MV passes 10 million YouTube views within half a day of release."],
            ["Jun 10, 2026", "🥇 #1 — Global YouTube Music Chart", "SUGAR HONEY ICE TEA debuts at #1 on YouTube's global music chart. The Performance Video drops the same day (already past 20M views)."],
            ["Jun 12, 2026", "'Summer Queen' — First SHIT Stages", "First SUGAR HONEY ICE TEA music-show stages air on MBC and SBS. Chosun/OSEN declares BABYMONSTER has 'solidified Summer Queen status.'"],
            ["Jun 20, 2026 (next)", "JD.com China Video Fan-Sign", "China-exclusive video fan signing organised on JD.com (京东自营) — 15 slots per member, including Ahyeon. Registration ran Jun 1–7."],
          ].map(([year, title, desc]) => (
            <div className="timeline-item" key={year as string}>
              <div className="timeline-dot" />
              <div className="timeline-year">{year}</div>
              <div className="timeline-content">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ===== CHOOM WORLD TOUR 2026–27 ===== */}
      <section className="tribute-section">
        <div className="reveal">
          <div className="section-label" style={{ color: "var(--rose)" }}>Upcoming · 28+ Shows · 5 Continents</div>
          <h2 className="section-title">BABYMONSTER World Tour<br /><em>[ 춤 · CHOOM ]</em></h2>
          <p style={{ maxWidth: 760, fontSize: 16, lineHeight: 1.7, opacity: 0.8, marginBottom: 28 }}>
            Their second world tour and biggest production yet — kicking off in Seoul on Jun 26.
            Headlined by their <strong style={{ color: "var(--rose)" }}>first-ever solo dome concerts</strong> at
            Kyocera Dome Osaka. North America, Europe and South America dates land in 2027.
          </p>
        </div>
        <div className="tours-grid reveal">
          {[
            ["Jun 26–28, 2026", "Seoul", "Jamsil Indoor Stadium", "🇰🇷", "Opening"],
            ["Jul 8–9, 2026", "Kobe", "Glion Arena Kobe", "🇯🇵", ""],
            ["Jul 28–29, 2026", "Fukuoka", "Marine Messe Fukuoka Hall A", "🇯🇵", ""],
            ["Aug 1–2, 2026", "Yokohama", "Pia Arena MM", "🇯🇵", ""],
            ["Aug 11–12, 2026", "Chiba", "LaLa Arena Tokyo-Bay", "🇯🇵", ""],
            ["Aug 16, 2026", "Nagoya", "IG Arena", "🇯🇵", ""],
            ["Sep 5, 2026", "Manila", "SM Mall of Asia Arena", "🇵🇭", ""],
            ["Sep 12, 2026", "Macao", "The Venetian Arena", "🇲🇴", ""],
            ["Sep 22–23, 2026", "Osaka", "Kyocera Dome", "🇯🇵", "⭐ 1st Dome"],
            ["Oct 17, 2026", "Jakarta", "Indonesia Arena", "🇮🇩", ""],
            ["Nov 7–8, 2026", "Bangkok", "Impact Arena", "🇹🇭", ""],
            ["Nov 14, 2026", "Kuala Lumpur", "Unifi Arena", "🇲🇾", ""],
            ["Nov 21–22, 2026", "Taipei", "Taipei Arena", "🇹🇼", ""],
            ["Nov 28–29, 2026", "Singapore", "Singapore Indoor Stadium", "🇸🇬", ""],
            ["Dec 8, 2026", "Auckland", "Spark Arena", "🇳🇿", ""],
            ["Dec 11, 2026", "Melbourne", "Rod Laver Arena", "🇦🇺", ""],
            ["Dec 13, 2026", "Sydney", "Qudos Bank Arena", "🇦🇺", ""],
            ["Jan 9, 2027", "Hong Kong", "AsiaWorld-Arena", "🇭🇰", ""],
            ["2027 — TBA", "Americas & Europe", "North America · South America · Europe legs to be announced", "🌎", "TBA"],
          ].map(([date, city, venue, flag, badge]) => (
            <div className="tour-card" key={`${date}-${city}`}>
              <div className="tour-flag">{flag}</div>
              <div className="tour-date">{date}</div>
              <div className="tour-city">{city}</div>
              <div className="tour-venue">{venue}</div>
              {badge && <div className="tour-badge">{badge}</div>}
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />



      {/* ===== TIMELINE ===== */}
      <section className="tribute-section">
        <div className="story-layout">
          <div className="story-aside reveal">
            <div className="section-label">Her Journey</div>
            <h2 className="section-title">The arc of someone<br /><em>the stage waited for</em></h2>
            <div className="section-image natural-image" style={{ marginBottom: 22 }}>
              <img src={IMAGES.timeline} alt="Ahyeon world tour" loading="lazy" />
            </div>
            <blockquote className="story-quote">
              "I auditioned casually, just tagging along with a friend."
              <br /><span style={{ fontSize: 13, fontStyle: "normal", color: "rgba(245,240,232,0.4)" }}>
                — Ahyeon, Hello Monsters World Tour Seoul, Jan 2025
              </span>
            </blockquote>
          </div>
          <div className="timeline reveal">
            {[
              ["2018–22", "5 Years of Training at YG", "Before any public appearance, Ahyeon spent five years as a YG trainee — developing her vocals, rap technique, dance, and multilingual fluency."],
              ["Jan 16, 2023", 'Revealed as BABYMONSTER\'s "Definite Center"', "YG introduced Ahyeon as the second BABYMONSTER member via a live performance video. The clip generated immediate buzz from non-fans and industry observers alike."],
              ["Apr 22, 2023", '"Dangerously" Goes Viral — Charlie Puth Reacts', "Her cover crossed 8.74M views in under 10 days and eventually exceeded 50M. Puth commented \"I loved it\" on TikTok."],
              ["Nov 15, 2023", "Health Hiatus — Group Debuts as Six Members", 'YG announced Ahyeon would not participate in debut activities due to health reasons, while confirming she remained officially part of BABYMONSTER.'],
              ["Jan 25, 2024", "Return Confirmed — Fan Campaign Goes Global", '"Batter Up" and "Stuck in the Middle" were re-recorded to include her vocals. #WelcomeBackAhyeon drew millions of interactions within 24 hours.'],
              ["Apr 1, 2024", "Official Debut — BABYMONS7ER", 'Ahyeon debuted with the full group. Over 460,000 pre-orders. Debuted #3 Circle Album Chart.'],
              ["Nov 2024", "DRIP Studio Album — 1M+ Sales, Billboard 200", "BABYMONSTER released debut studio album DRIP, selling over 1 million copies in South Korea and entering the Billboard 200."],
              ["Jan 2025", 'Hello Monsters World Tour — First Live "Dangerously"', "BABYMONSTER launched their first world tour at KSPO Dome Seoul (~26,000 seats). Ahyeon performed \"Dangerously\" live for the first time as her solo stage."],
              ["2025–Now", "We Go Up EP · Still Writing the Story", "Ahyeon chose to skip the 2026 CSAT — a declaration of total commitment to her career as a performer. She is 18. The story is very much still being written."],
            ].map(([year, title, desc]) => (
              <div className="timeline-item" key={year}>
                <div className="timeline-dot" />
                <div className="timeline-year">{year}</div>
                <div className="timeline-content">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ===== PERSONALITY ===== */}
      <section className="tribute-section">
        <div className="reveal">
          <div className="section-label">Off the Stage</div>
          <h2 className="section-title">The person behind <em>the performer</em></h2>
          <div className="section-image natural-image" style={{ marginBottom: 32 }}>
            <img src={IMAGES.personality} alt="Ahyeon behind the scenes" loading="lazy" />
          </div>
        </div>
        <div className="personality-grid">
          {[
            ["🦋", "Shy, But You Wouldn't Know It", "She describes herself as very shy but tries not to show it. She prefers calling over texting. Her most treasured possessions: a butterfly necklace and a handmade ring. Her favorite place is her own room."],
            ["🍵", "The Small Things Collector", "She loves mint chocolate (but won't eat it alone). Favorite fruits: apple grapes, melon, watermelon. She has a plush toy collection so large that members joke she could open a shop. Her Sanrio character is Cinnamoroll."],
            ["🎨", "The Visual Thinker", "Her hobbies are drawing and video editing — solitary, detail-oriented, visual pursuits that match her ISTJ profile. She came from a musical theater background before YG."],
            ["❄️", "Winter, Roses, and the Squirrel Nickname", "Her favorite season is winter. Her favorite flowers are roses and daisies. Members call her \"Ah-ramji\" (squirrel). Her fashion aesthetic is consistent streetwear — almost exclusively in black, white, and grey."],
          ].map(([icon, title, desc]) => (
            <div className="personality-card reveal" key={title}>
              <span className="pc-icon">{icon}</span>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ===== CLOSING ===== */}
      <section className="tribute-section closing-section">
        <div className="reveal">
          <div className="section-label">Why It Matters</div>
          <h2 className="section-title">Why you should<br /><em>pay attention</em></h2>
          <div className="section-image natural-image" style={{ marginBottom: 40 }}>
            <img src={IMAGES.closing} alt="Ahyeon concert performance" loading="lazy" />
          </div>
        </div>
        <div className="closing-content reveal">
          <p>
            You don't need to love K-pop to appreciate Jung Ahyeon. You just need to believe in the idea of
            <strong> talent that exceeds its context</strong> — a performer who doesn't merely occupy the stage
            she's been given, but quietly makes it feel too small.
          </p>
          <p>
            A teenage trainee from Chuncheon covered a Charlie Puth song on a YouTube reality series. Puth heard it,
            commented on it, and eventually composed an original song for her group as a response. That cover now has
            <strong> 50 million views</strong>. She came back from a health absence, debuted, and went on to perform
            solo stages to sold-out arenas across four continents — <strong>at 17 and 18 years old</strong>.
          </p>
          <p>
            There are artists you enjoy. And then there are artists where you think: <strong>I want to watch where this goes.</strong> Ahyeon is the second kind. And she is barely eighteen.
          </p>
          <div className="cta-row">
            <a href="https://www.youtube.com/watch?v=xw7Y2gviWbA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Watch "Dangerously" Cover
            </a>
            <a href="https://www.youtube.com/@BABYMONSTER" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              BABYMONSTER YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="tribute-footer">
        <div className="brand">JUNG AHYEON</div>
        <div className="note">정아현 · BABYMONSTER · YG Entertainment · Born April 11, 2007 · Chuncheon</div>
        <div className="tag">Hyeonies 🦋 · Pre-Debut Era</div>
      </footer>
    </div>
  );
};

export default Index;
