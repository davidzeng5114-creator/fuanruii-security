'use client';

import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Baby,
  Building2,
  CarFront,
  Check,
  ChevronRight,
  Eye,
  Factory,
  Globe2,
  Home as HomeIcon,
  Languages,
  MoonStar,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Sun,
  Wifi,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

type Language = 'zh' | 'en';

const content = {
  zh: {
    nav: ['产品', '解决方案', '技术支持', '批发合作'],
    eyebrow: '新一代智能视觉安防',
    titleA: '看见风险之前，',
    titleB: '先一步守护。',
    intro:
      '从广州出发，为家庭、商业与移动场景打造可靠的智能摄像系统。零售可购买，项目可定制，支持 OEM / ODM。',
    explore: '探索产品',
    quote: '获取批发报价',
    heroNote: '概念产品画面 · 最终规格以实际型号为准',
    live: 'VISION CORE / 在线',
    detection: '人物与车辆识别',
    response: '< 0.3 秒事件响应',
    sectionEyebrow: 'Fuanruii Vision Platform',
    sectionTitle: '一套视觉系统，覆盖每一种重要场景。',
    sectionIntro:
      '参考专业安防产品的分类逻辑，把复杂参数变成容易比较、容易购买的产品体验。',
    featured: '精选产品系列',
    featuredIntro: '示例型号与价格将在收到实际产品资料后更新。',
    from: '示例价',
    details: '查看详情',
    wholesaleTitle: '从 1 台零售，到整套项目交付。',
    wholesaleBody:
      '为渠道商、安装商和海外买家提供灵活选型、品牌定制与批量报价。目前不设固定 MOQ。',
    wechat: '微信联系',
    dispatch: '广州发货',
    payments: '人民币 / 美元 · 微信支付 / 支付宝',
    footer: '智能视觉，值得信赖。',
    sample: '示例内容',
  },
  en: {
    nav: ['Products', 'Solutions', 'Support', 'Wholesale'],
    eyebrow: 'NEXT-GENERATION INTELLIGENT VISION',
    titleA: 'See risk sooner.',
    titleB: 'Protect what matters.',
    intro:
      'Built in Guangzhou for homes, businesses and life on the move. Shop retail, source projects, or create your own OEM / ODM line.',
    explore: 'Explore products',
    quote: 'Get wholesale quote',
    heroNote: 'Concept product visual · final specifications vary by model',
    live: 'VISION CORE / ONLINE',
    detection: 'Human & vehicle detection',
    response: '< 0.3 sec event response',
    sectionEyebrow: 'Fuanruii Vision Platform',
    sectionTitle: 'One vision system. Every critical environment.',
    sectionIntro:
      'A professional security product architecture, translated into a clearer way to compare, specify and buy.',
    featured: 'Featured product series',
    featuredIntro: 'Sample models and pricing will be updated with verified product data.',
    from: 'Sample from',
    details: 'View details',
    wholesaleTitle: 'From one camera to a complete project.',
    wholesaleBody:
      'Flexible selection, private-label programs and volume quotes for distributors, installers and global buyers. No fixed MOQ at this stage.',
    wechat: 'WeChat',
    dispatch: 'Dispatch from Guangzhou',
    payments: 'CNY / USD · WeChat Pay / Alipay',
    footer: 'Intelligent vision. Built on trust.',
    sample: 'Sample content',
  },
};

const categories = [
  { key: 'home', zh: '家用安防', en: 'Home Security', icon: HomeIcon, count: '02' },
  { key: 'business', zh: '商业监控', en: 'Business CCTV', icon: Building2, count: '02' },
  { key: 'outdoor', zh: '户外守护', en: 'Outdoor', icon: Sun, count: '02' },
  { key: 'vehicle', zh: '行车记录', en: 'Vehicle', icon: CarFront, count: '02' },
  { key: 'baby', zh: '婴儿监护', en: 'Baby Monitor', icon: Baby, count: '02' },
];

const products = [
  {
    code: 'FR-NV8',
    zh: '全彩夜视枪机',
    en: 'Full-Color Night Camera',
    priceZh: '¥699',
    priceEn: '$99',
    icon: MoonStar,
    tags: ['4K', 'PoE', 'IP66'],
    tone: 'cyan',
  },
  {
    code: 'FR-P360',
    zh: '智能云台摄像机',
    en: 'Smart Pan & Tilt Camera',
    priceZh: '¥399',
    priceEn: '$59',
    icon: ScanFace,
    tags: ['AI', '360°', 'Wi-Fi'],
    tone: 'lime',
  },
  {
    code: 'FR-S4G',
    zh: '太阳能 4G 摄像机',
    en: 'Solar 4G Camera',
    priceZh: '¥899',
    priceEn: '$129',
    icon: Sun,
    tags: ['4G', 'Solar', 'Outdoor'],
    tone: 'silver',
  },
];

const capabilities = [
  { icon: Eye, zh: '清晰影像', en: 'Clarity', detail: '4K / HDR' },
  { icon: MoonStar, zh: '全彩夜视', en: 'Night vision', detail: '24 / 7' },
  { icon: ScanFace, zh: '智能识别', en: 'AI detection', detail: 'Edge AI' },
  { icon: Wifi, zh: '灵活连接', en: 'Connectivity', detail: 'Wi-Fi / PoE / 4G' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('zh');
  const t = content[language];

  return (
    <main
      className="site-shell"
      onMouseMove={(event) => {
        event.currentTarget.style.setProperty('--mouse-x', `${event.clientX}px`);
        event.currentTarget.style.setProperty('--mouse-y', `${event.clientY}px`);
      }}
    >
      <header className="site-header">
        <a href="#top" className="brand-lockup" aria-label="Fuanruii Security home">
          <img src="/logo-mark.svg" alt="" className="brand-mark" />
          <span>
            <strong>FUANRUII</strong>
            <small>SECURITY</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#products">{t.nav[0]}</a>
          <a href="#solutions">{t.nav[1]}</a>
          <a href="#support">{t.nav[2]}</a>
          <a href="#wholesale">{t.nav[3]}</a>
        </nav>

        <div className="header-actions">
          <Button
            variant="ghost"
            size="sm"
            className="language-button"
            aria-label={language === 'zh' ? 'Switch to English' : '切换到简体中文'}
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
          >
            <Languages /> {language === 'zh' ? 'EN' : '简中'}
          </Button>
          <Button size="sm" className="header-cta" onClick={() => scrollTo('wholesale')}>
            {t.quote} <ArrowRight className="-rotate-45" />
          </Button>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow"><span />{t.eyebrow}</p>
            <h1>
              <span>{t.titleA}</span>
              <strong>{t.titleB}</strong>
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <Button size="lg" className="primary-cta" onClick={() => scrollTo('products')}>
                {t.explore} <ArrowDownRight />
              </Button>
              <Button variant="outline" size="lg" className="ghost-cta" onClick={() => scrollTo('wholesale')}>
                {t.quote}
              </Button>
            </div>
          </div>

          <aside className="vision-console" aria-label="Product capability preview">
            <div className="console-topline">
              <span className="live-dot" />
              <span>{t.live}</span>
              <span>FR / 01</span>
            </div>
            <div className="scan-frame">
              <span className="corner corner-a" />
              <span className="corner corner-b" />
              <div className="scan-line" />
              <div className="focus-point"><span /></div>
            </div>
            <div className="console-metrics">
              <p><small>AI</small><strong>{t.detection}</strong></p>
              <p><small>RT</small><strong>{t.response}</strong></p>
            </div>
          </aside>
        </div>
        <p className="hero-note">{t.heroNote}</p>
        <div className="scroll-cue"><span />SCROLL TO DISCOVER</div>
      </section>

      <section id="solutions" className="platform-section reveal">
        <div className="section-heading">
          <p className="eyebrow dark"><span />{t.sectionEyebrow}</p>
          <h2>{t.sectionTitle}</h2>
          <p>{t.sectionIntro}</p>
        </div>

        <div className="category-orbit">
          <div className="orbit-core">
            <img src="/logo-mark.svg" alt="" />
            <span>Fuanruii Core</span>
            <small>10 PRODUCTS</small>
          </div>
          <svg className="orbit-lines" viewBox="0 0 1000 350" aria-hidden="true">
            <path d="M500 175 C390 50 215 65 95 105" />
            <path d="M500 175 C425 275 290 300 190 292" />
            <path d="M500 175 L500 320" />
            <path d="M500 175 C575 275 710 300 810 292" />
            <path d="M500 175 C610 50 785 65 905 105" />
          </svg>
          <div className="category-grid">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <article key={category.key} className="category-card">
                  <span className="category-number">{category.count}</span>
                  <Icon />
                  <strong>{language === 'zh' ? category.zh : category.en}</strong>
                  <ChevronRight />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="capability-strip reveal" aria-label="Core capabilities">
        {capabilities.map((capability) => {
          const Icon = capability.icon;
          return (
            <div key={capability.detail}>
              <Icon />
              <span>
                <small>{language === 'zh' ? capability.zh : capability.en}</small>
                <strong>{capability.detail}</strong>
              </span>
            </div>
          );
        })}
      </section>

      <section id="products" className="products-section reveal">
        <div className="products-heading">
          <div>
            <p className="eyebrow dark"><span />01 / PRODUCT SYSTEM</p>
            <h2>{t.featured}</h2>
          </div>
          <p>{t.featuredIntro}</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <article key={product.code} className={`product-card ${product.tone}`}>
                <div className="product-card-top">
                  <span>{product.code}</span>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="product-visual">
                  <span className="product-halo" />
                  <Icon aria-hidden="true" />
                  <span className="lens-dot" />
                </div>
                <div className="product-copy">
                  <div>
                    <small>{t.sample}</small>
                    <h3>{language === 'zh' ? product.zh : product.en}</h3>
                  </div>
                  <p>{t.from}<strong>{language === 'zh' ? product.priceZh : product.priceEn}</strong></p>
                </div>
                <div className="tag-row">
                  {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <button type="button" onClick={() => scrollTo('wholesale')}>
                  {t.details}<ArrowRight />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section id="wholesale" className="wholesale-section reveal">
        <div className="wholesale-glow" aria-hidden="true" />
        <div className="wholesale-copy">
          <p className="eyebrow"><span />OEM / ODM · GLOBAL WHOLESALE</p>
          <h2>{t.wholesaleTitle}</h2>
          <p>{t.wholesaleBody}</p>
          <div className="trust-row">
            <span><Factory /> OEM / ODM</span>
            <span><Globe2 /> Global supply</span>
            <span><ShieldCheck /> Quality control</span>
          </div>
        </div>
        <aside className="contact-card">
          <div className="contact-icon"><Sparkles /></div>
          <small>{t.wechat}</small>
          <strong>miki-zeng</strong>
          <div className="contact-details">
            <p><Check />{t.dispatch}</p>
            <p><Check />{t.payments}</p>
          </div>
          <Button className="contact-button" onClick={() => navigator.clipboard?.writeText('miki-zeng')}>
            {language === 'zh' ? '复制微信号' : 'Copy WeChat ID'} <ArrowRight />
          </Button>
        </aside>
      </section>

      <footer id="support">
        <a href="#top" className="brand-lockup footer-brand">
          <img src="/logo-mark.svg" alt="" className="brand-mark" />
          <span><strong>FUANRUII</strong><small>SECURITY</small></span>
        </a>
        <p>{t.footer}</p>
        <div>
          <span>Guangzhou · China</span>
          <span>© 2026 Fuanruii Security</span>
        </div>
      </footer>
    </main>
  );
}
