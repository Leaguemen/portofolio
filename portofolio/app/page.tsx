"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: ["Pemilu HMIF", "HMIF 選挙システム"],
    category: ["Full-stack development", "フルスタック開発"],
    year: "2025",
    href: "https://pemilu.hmif.dev/",
    tech: "Next.js / T3 Stack / Vercel",
    description: [
      "An election platform for the STEI-K ITB student community. Led a team of 10 developers and built the voting API.",
      "STEI-K ITB の学生選挙プラットフォーム。10人の開発チームを率い、投票 API を開発しました。",
    ],
    graphic: "vote",
    title: "Pemilu\nHMIF.",
  },
  {
    name: ["Pope’s Mass web application", "教皇ミサのウェブアプリ"],
    category: ["Full-stack development", "フルスタック開発"],
    year: "2024",
    href: "https://bit.ly/misapaus",
    tech: "React / Node.js / MySQL",
    description: [
      "An information hub for Saint Theodore Church members attending the Pope’s Mass. Independently built, deployed, and maintained.",
      "教皇ミサに参加する聖テオドール教会の信徒向け情報サイト。設計から開発、公開、保守まで一貫して担当しました。",
    ],
    graphic: "church",
    title: "Pope’s\nMass.",
  },
  {
    name: [
      "Network security with machine learning",
      "機械学習によるネットワークセキュリティ",
    ],
    category: ["Machine learning", "機械学習"],
    year: "2024",
    href: "https://github.com/CrystalNoob/Tubes2_AI/",
    tech: "Python / scikit-learn",
    description: [
      "K-Nearest Neighbor, Naive Bayes, and Decision Tree models built from scratch to detect network attacks, then compared with scikit-learn implementations.",
      "ネットワーク攻撃を検知するため、k近傍法、ナイーブベイズ、決定木をゼロから実装し、scikit-learn の実装と比較しました。",
    ],
    graphic: "network",
    title: "Network\nsecurity.",
  },
  {
    name: ["MarioDB", "MarioDB"],
    category: ["Database systems", "データベースシステム"],
    year: "2024",
    href: "https://github.com/zultopia/Tubes-SBD-MarioDB",
    tech: "Python",
    description: [
      "A database management system built from scratch in Python as a university group project. Exploring what happens underneath a query.",
      "大学のグループプロジェクトで、Python を使ってデータベース管理システムをゼロから構築。クエリの裏側にある仕組みを探究しました。",
    ],
    graphic: "database",
    title: "MarioDB.",
  },
  {
    name: ["Linux-based operating system", "Linux ベースの OS"],
    category: ["Systems programming", "システムプログラミング"],
    year: "2024",
    href: "https://github.com/labsister21/os-2024-michaelsoftbinbows",
    tech: "C / Assembly",
    description: [
      "A command-line operating system built from scratch with a university team, using C and Assembly.",
      "大学のチームで C とアセンブリを使い、コマンドライン OS をゼロから構築しました。",
    ],
    graphic: "os",
    title: "Inside\nthe OS.",
  },
];

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ja">("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const contactDock = useRef<HTMLElement>(null);
  const contactButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!contactOpen) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setContactOpen(false);
        contactButton.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!contactDock.current?.contains(event.target as Node))
        setContactOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 701px)");
    const resize = () => {
      if (desktop.matches) setContactOpen(false);
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [contactOpen]);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 701px)");
    const resize = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [menuOpen]);
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("sean-language");
      if (saved === "ja") {
        setLanguage("ja");
        document.documentElement.lang = "ja";
      }
    } catch {
      /* Default to English when storage is unavailable. */
    }
  }, []);
  const ja = language === "ja";
  const t = (en: string, jp: string) => (ja ? jp : en);
  const changeLanguage = (lang: "en" | "ja") => {
    setLanguage(lang);
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem("sean-language", lang);
    } catch {
      /* Language remains usable without storage. */
    }
  };
  return (
    <>
      <a className="skip-link" href="#main">
        {t("Skip to content", "本文へ移動")}
      </a>
      <header className="header" id="top" ref={header}>
        <a className="identity" href="#top">
          Sean Nugroho
          <span>
            {t(
              "Software engineer & researcher",
              "ソフトウェアエンジニア・研究者",
            )}
          </span>
        </a>
        <nav
          id="main-navigation"
          className={menuOpen ? "navigation is-open" : "navigation"}
          aria-label={t("Main navigation", "メインナビゲーション")}
        >
          {[
            ["work", t("Work", "制作実績")],
            ["about", t("About", "自己紹介")],
            ["contact", t("Contact", "お問い合わせ")],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                setMenuOpen(false);
                document.getElementById(id)?.focus({ preventScroll: true });
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <div
          className="languages"
          role="group"
          aria-label={t("Language", "言語")}
        >
          <button
            aria-pressed={!ja}
            onClick={() => changeLanguage("en")}
            lang="en"
          >
            EN
          </button>
          <span>/</span>
          <button
            aria-pressed={ja}
            onClick={() => changeLanguage("ja")}
            lang="ja"
          >
            日本語
          </button>
        </div>
        <button
          className="menu-toggle"
          ref={menuButton}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={t("Toggle navigation", "メニューを開閉")}
        >
          {menuOpen ? "−" : "+"}
        </button>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero" aria-label={t("Introduction", "はじめに")}>
          <h1 className="wordmark" aria-label="Sean Nugroho">
            sean.
          </h1>
          <div className="hero-bottom">
            <div className="intro">
              <h2>{t("Hello, I’m Sean.", "こんにちは、セアンです。")}</h2>
              <p className="intro-lead">
                {t(
                  "I build software, and explore what makes it work better.",
                  "ソフトウェアをつくり、より良く動く仕組みを探究しています。",
                )}
              </p>
              <p>
                {t(
                  "A full-stack engineer and informatics student working across web development, systems, and high-performance computing. From Bandung to Tokyo, curious at every layer.",
                  "フルスタックエンジニアとして、情報工学を学びながら、ウェブ開発、システム、高性能計算に取り組んでいます。バンドンから東京へ、あらゆる階層に好奇心を。",
                )}
              </p>
              <div className="intro-actions">
                <a
                  className="feature-button"
                  href="/documents/Venantius-Sean-Ardi-Nugroho-CV.pdf"
                  download="Venantius-Sean-Ardi-Nugroho-CV.pdf"
                >
                  {t("English CV (PDF)", "英文 CV（PDF）")}
                  <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="feature-button cv-japanese"
                  href="/documents/Venantius-Sean-Japanese-Resume.pdf"
                  download="Venantius-Sean-Japanese-Resume.pdf"
                >
                  {t("Japanese résumé (PDF)", "履歴書・職務経歴書（PDF）")}
                  <span aria-hidden="true">↓</span>
                </a>
                <a className="text-link" href="#work">
                  {t("Explore my work", "制作実績を見る")}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <figure className="hero-photo">
              <Image
                src="/images/sean-coast.jpg"
                alt={t("Sean by the ocean in Japan", "日本の海辺にいるセアン")}
                width={1838}
                height={1375}
                sizes="(max-width: 700px) 92vw, 38vw"
                priority
              />
              <figcaption>
                <span>{t("Indonesia ↔ Japan", "インドネシア ↔ 日本")}</span>
                <span>
                  {t("A little perspective.", "少し、視点を変えて。")}
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="work-section" id="work" tabIndex={-1}>
          <div className="section-index">
            <div>
              <h2>{t("Selected work", "主な制作実績")}</h2>
              <p>
                {t(
                  "From interface to infrastructure.",
                  "インターフェースからインフラまで。",
                )}
              </p>
            </div>
            <div className="project-index">
              <a href="#finos">
                <span>
                  {t("Finos — latest project", "Finos — 最新プロジェクト")}
                </span>
                <span className="index-category">
                  {t("Full-stack development", "フルスタック開発")}
                </span>
                <span>2026</span>
                <span aria-hidden="true">↙</span>
              </a>
              <a href="#research">
                <span>{t("Research in Japan", "日本での研究")}</span>
                <span className="index-category">
                  {t("High-performance computing", "高性能計算")}
                </span>
                <span>2026</span>
                <span aria-hidden="true">↙</span>
              </a>
              {projects.map((p, i) => (
                <a key={p.graphic} href={`#project-${i}`}>
                  <span>{p.name[ja ? 1 : 0]}</span>
                  <span className="index-category">
                    {p.category[ja ? 1 : 0]}
                  </span>
                  <span>{p.year}</span>
                  <span aria-hidden="true">↙</span>
                </a>
              ))}
            </div>
          </div>
          <article className="featured-project" id="finos">
            <div className="featured-copy">
              <span className="feature-context">
                {t("Latest project / 2026", "最新プロジェクト / 2026")}
              </span>
              <h2>Finos.</h2>
              <p className="feature-lead">
                {t(
                  "A workspace for work logs and reimbursements.",
                  "工数管理と経費精算のためのワークスペース。",
                )}
              </p>
              <p>
                {t(
                  "At P.T. Doval Sejahtera Investa, I build internal web applications for tracking employee man-hours and managing invoice reimbursement processes, working across the frontend and backend.",
                  "P.T. Doval Sejahtera Investa で、従業員の工数管理と請求書に基づく経費精算のための社内ウェブアプリケーションを開発。フロントエンドとバックエンドの両方を担当しています。",
                )}
              </p>
              <a
                className="feature-button"
                href="https://finos-kappa.vercel.app/login"
                target="_blank"
                rel="noreferrer"
              >
                {t("Visit Finos", "Finos を見る")}
                <span aria-hidden="true">↗</span>
              </a>
              <span className="feature-note">
                {t(
                  "Opens the login page. Sign-in required to use the workspace.",
                  "ログインページが開きます。利用にはサインインが必要です。",
                )}
              </span>
            </div>
            <figure className="featured-preview">
              <a
                href="https://finos-kappa.vercel.app/login"
                target="_blank"
                rel="noreferrer"
                aria-label={t(
                  "Open Finos login page",
                  "Finos のログインページを開く",
                )}
              >
                <Image
                  src="/images/finos-login.png"
                  alt={t(
                    "Finos login page with its work-log workspace introduction and sign-in form",
                    "工数管理ワークスペースの紹介とサインインフォームがある Finos のログイン画面",
                  )}
                  width={1280}
                  height={900}
                  sizes="(max-width: 900px) 92vw, 52vw"
                />
              </a>
              <figcaption>
                {t(
                  "Finos / P.T. Doval Sejahtera Investa",
                  "Finos / P.T. Doval Sejahtera Investa",
                )}
              </figcaption>
            </figure>
          </article>
          <article className="research" id="research">
            <div className="research-copy">
              <span>
                {t("Research in Japan / 2025–2026", "日本での研究 / 2025–2026")}
              </span>
              <h2>
                {t(
                  "Parallel computing.\nA Tokyo perspective.",
                  "東京で探究する、\n並列計算。",
                )}
              </h2>
              <p>
                {t(
                  "At the University of Electro-Communications in Tokyo, I researched how inference-time reasoning affects LLM-generated parallel code, with Shinobu Miwa. Our Kokkos study evaluated 4,800 GPT-5.1-generated programs across four reasoning levels.",
                  "東京の電気通信大学でShinobu Miwa 氏と、推論時のリーズニングが LLM による並列コード生成に与える影響を研究。Kokkos を対象に、4段階の推論レベルで GPT-5.1 が生成した4,800件のプログラムを評価しました。",
                )}
              </p>
              <a
                href="/research/nugroho-inference-time-kokkos.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                {t("Read the research paper (PDF)", "研究論文を読む（PDF）")}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="parallel-art" aria-hidden="true">
              {Array.from({ length: 9 }, (_, i) => (
                <div key={i}>
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              ))}
            </div>
            <div className="research-bottom">
              <span>
                {t(
                  "University of Electro-Communications, Tokyo",
                  "電気通信大学・東京",
                )}
              </span>
              <span>Kokkos / LLM / HPC</span>
            </div>
          </article>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article
                className={`project project-${p.graphic}`}
                id={`project-${i}`}
                key={p.graphic}
              >
                <a
                  className={`project-art art-${p.graphic}`}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.name[ja ? 1 : 0]} — ${t("open project", "プロジェクトを開く")}`}
                >
                  <span className="art-label">{p.tech}</span>
                  <div className="art-title" aria-hidden="true">
                    {ja
                      ? [
                          "HMIF\n選挙システム",
                          "教皇ミサ",
                          "ネットワーク\nセキュリティ",
                          "MarioDB.",
                          "OS の仕組み",
                        ][i]
                      : p.title}
                  </div>
                  <span className="art-caption">
                    {t("View project", "プロジェクトを見る")}
                  </span>
                  <span className="external-icon" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <div className="project-title">
                  <h3>
                    <a href={p.href} target="_blank" rel="noreferrer">
                      {p.name[ja ? 1 : 0]}
                    </a>
                  </h3>
                  <span>{p.year}</span>
                </div>
                <p className="project-tech">{p.category[ja ? 1 : 0]}</p>
                <p className="project-description">
                  {p.description[ja ? 1 : 0]}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section id="about" tabIndex={-1} className="about-section">
          <div className="about-heading">
            <h2>{t("A little about me", "私について")}</h2>
            <span>
              {t("Engineering, with curiosity.", "好奇心から、ものづくりへ。")}
            </span>
          </div>
          <div className="about-grid">
            <figure className="about-photo">
              <Image
                src="/images/sean-campus.jpg"
                alt={t(
                  "Sean holding his research laptop on campus",
                  "キャンパスで研究用のノートパソコンを持つセアン",
                )}
                width={1600}
                height={1600}
                sizes="(max-width: 700px) 92vw, 40vw"
              />
              <figcaption>Venantius Sean Ardi Nugroho</figcaption>
            </figure>
            <div className="about-copy">
              <h3>
                {t(
                  "Good software starts with understanding what’s underneath.",
                  "良いソフトウェアは、その仕組みを理解することから。",
                )}
              </h3>
              <p>
                {t(
                  "I study Informatics at Bandung Institute of Technology and research high-performance computing at the University of Electro-Communications in Tokyo, supported by a JASSO scholarship.",
                  "バンドン工科大学で情報工学を学び、日本学生支援機構（JASSO）の奨学金を受けて、東京の電気通信大学で高性能計算を研究しています。",
                )}
              </p>
              <p>
                {t(
                  "My work ranges from voting platforms and internal business tools to databases and operating systems built from scratch. I enjoy connecting the details of a system to the people who use it.",
                  "投票プラットフォームや社内業務ツールから、ゼロから構築するデータベースや OS まで。システムの細部と、それを使う人とのつながりを大切にしています。",
                )}
              </p>
              <div className="skills">
                <h4>{t("Tools I work with", "使用技術")}</h4>
                <p>Go, Python, Java, C/C++, TypeScript, SQL</p>
                <p>React, Next.js, Vue.js, Flutter, Node.js, Fiber</p>
                <p>PostgreSQL, MySQL, Git, Docker, Linux</p>
              </div>
              <div className="language-note">
                <span>{t("Indonesian · Native", "インドネシア語 · 母語")}</span>
                <a
                  href="https://drive.google.com/file/d/1WDIrRbLTyx0nKIVyo185zyAxPr9DwWfj/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("English · IELTS 8.0", "英語 · IELTS 8.0")}
                </a>
                <a
                  href="https://drive.google.com/file/d/1UvUr-HtC_kHgTHpfj055hOPcRCTkDKVO/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("Japanese · JLPT N3", "日本語 · JLPT N3")}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="experience section-index">
          <h2>{t("Along the way", "これまでの歩み")}</h2>
          <div>
            {[
              [
                t("Mar 2026 — Present", "2026年3月 — 現在"),
                "P.T. Doval Sejahtera Investa",
                t("Full-stack engineer", "フルスタックエンジニア"),
                t(
                  "Building internal applications for employee man-hours and invoice reimbursement.",
                  "従業員の工数管理や経費精算のための社内アプリケーションを開発。",
                ),
              ],
              [
                t("Jun — Aug 2025", "2025年6月 — 8月"),
                "P.T. Teleakses Solusindo",
                t("Software developer intern", "ソフトウェア開発インターン"),
                t(
                  "A Go audit-trail backend handling over 3,000 requests per second, a Flutter frontend, and a Vue.js migration.",
                  "毎秒3,000件以上のリクエストを処理する Go バックエンド、Flutter のフロントエンド、Vue.js への移行を担当。",
                ),
              ],
              [
                t("Jul — Aug 2024", "2024年7月 — 8月"),
                t("Saint Theodore Church", "聖テオドール教会"),
                t("Full-stack web developer", "フルスタックウェブ開発者"),
                t(
                  "End-to-end development and deployment of a church event application.",
                  "教会イベント向けアプリケーションの設計、開発、公開を一貫して担当。",
                ),
              ],
            ].map(([date, company, role, description]) => (
              <article className="experience-row" key={company}>
                <span>{date}</span>
                <div>
                  <h3>{company}</h3>
                  <p className="role">{role}</p>
                  <p>{description}</p>
                </div>
              </article>
            ))}
            <div className="education">
              <h3>{t("Education", "学歴")}</h3>
              <p>
                <strong>
                  {t("University of Electro-Communications", "電気通信大学")}
                </strong>
                <br />
                {t(
                  "Research student · JASSO scholarship · 2025–2026",
                  "研究生 · JASSO 奨学金 · 2025–2026",
                )}
              </p>
              <p>
                <strong>
                  {t("Bandung Institute of Technology", "バンドン工科大学")}
                </strong>
                <br />
                {t(
                  "B.Sc. in Informatics · 2022–present",
                  "情報工学学士課程 · 2022年–現在",
                )}
                <br />
                {t("Expected graduation: December 2026", "2026年12月卒業予定")}
              </p>
            </div>
          </div>
        </section>
        <section className="publication section-index" id="publication">
          <h2>{t("Publication", "論文")}</h2>
          <div>
            <span>ISC High Performance 2026</span>
            <h3>
              Impact of Inference-Time Reasoning on LLM-Based Parallel Code
              Generation: a Case-Study of Kokkos
            </h3>
            <p>Venantius Sean Ardi Nugroho, Shinobu Miwa</p>
            <p className="paper-summary">
              {t(
                "Using 60 ParEval problems, we compared correctness, token cost, and CPU speedup. Higher reasoning effort improved correctness, but did not consistently improve parallel performance. With automated validation, sampling multiple no-effort solutions was more token-efficient; the analysis does not include human review costs.",
                "ParEval の60問題を使い、正確性、トークンコスト、CPU の高速化を比較しました。推論の強化は正確性を改善しましたが、並列性能の向上は保証されませんでした。自動検証が可能な環境では、推論なしで複数の解を生成する方がトークン効率に優れていました。なお、人によるレビューのコストは評価に含まれていません。",
              )}
            </p>
            <div className="paper-actions">
              <a
                className="feature-button"
                href="/research/nugroho-inference-time-kokkos.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {t("Read paper (PDF)", "論文を読む（PDF）")}
                <span aria-hidden="true">↗</span>
              </a>
              <a
                className="text-link"
                href="/research/nugroho-inference-time-kokkos.pdf"
                download
              >
                {t("Download PDF · 756 KB", "PDF をダウンロード · 756 KB")}
              </a>
            </div>
            <p>
              {t(
                "March 2026 · University of Electro-Communications",
                "2026年3月 · 電気通信大学",
              )}
            </p>
          </div>
        </section>
        <section className="contact" id="contact" tabIndex={-1}>
          <span>
            {t(
              "Have a project or a research question?",
              "プロジェクトや研究について、話しませんか？",
            )}
          </span>
          <h2>{t("Let’s talk.", "話しましょう。")}</h2>
          <a className="email" href="mailto:seannugroho8@gmail.com">
            seannugroho8@gmail.com<span aria-hidden="true">↗</span>
          </a>
          <div className="contact-bottom">
            <p>
              {t(
                "Based in curiosity. Connected across borders.",
                "好奇心を原点に、国境を越えて。",
              )}
            </p>
            <div>
              <a
                href="https://github.com/Leaguemen"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/venantius-sean-ardi-nugroho/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <nav
        ref={contactDock}
        className={contactOpen ? "contact-dock is-open" : "contact-dock"}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setContactOpen(false);
        }}
        aria-label={t("Contact Sean", "セアンへの連絡先")}
      >
        <button
          ref={contactButton}
          className="contact-toggle"
          aria-expanded={contactOpen}
          aria-controls="quick-contact-links"
          onClick={() => setContactOpen(!contactOpen)}
        >
          {t("Contact", "連絡先")}
          <span aria-hidden="true">{contactOpen ? "−" : "+"}</span>
        </button>
        <div
          className="contact-dock-links"
          id="quick-contact-links"
          onClick={() => setContactOpen(false)}
        >
          <a href="mailto:seannugroho8@gmail.com">{t("Email", "メール")}</a>
          <a
            href="https://github.com/Leaguemen"
            target="_blank"
            rel="noreferrer"
          >
            GitHub<span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/venantius-sean-ardi-nugroho/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn<span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
      <footer>
        <span>© 2026 Sean Nugroho</span>
        <a href="#top">{t("Back to top", "ページ上部へ")} ↑</a>
        <div className="footer-wordmark" aria-hidden="true">
          sean.
        </div>
      </footer>
    </>
  );
}
