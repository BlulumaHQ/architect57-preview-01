import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

// ─── English ───────────────────────────────────────────────
const en: Record<string, string> = {
  // Nav
  "nav.projects": "Projects",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.inquire": "Inquire",
  "nav.home": "Home",

  // Company
  "company.name": "Architect 57 無極建築",
  "company.legal": "Architect 57 Inc.",

  // Homepage Hero
  "home.hero.title": "Architecture shaped by light, material, and intention",
  "home.hero.subtitle": "Integrated project delivery, code consultation, BIM, and sustainable design — serving Richmond, BC and beyond.",
  "home.hero.cta": "View Projects",

  // Homepage Intro
  "home.intro.label": "Est. Richmond, BC",
  "home.intro.text": "Architect 57 Inc. specializes in integrated building design, complex building code consultation, sustainable architecture, and project planning — creating spaces that serve people and place.",

  // Homepage Services
  "home.services.label": "Services",
  "home.services.title": "What We Do",
  "home.services.integrated.title": "Integrated Design",
  "home.services.integrated.desc": "Full-spectrum building design spanning commercial, residential, and institutional typologies.",
  "home.services.code.title": "Code Consultation",
  "home.services.code.desc": "Complex building code consultation with CP-certified professionals ensuring full compliance.",
  "home.services.bim.title": "BIM Services",
  "home.services.bim.desc": "Advanced building information modelling for precise visualization and project coordination.",
  "home.services.pm.title": "Project Management",
  "home.services.pm.desc": "End-to-end integrated project delivery from planning through construction completion.",

  // Homepage Portfolio
  "home.portfolio.label": "Selected Work",
  "home.portfolio.title": "Projects",
  "home.portfolio.cta": "All Projects",

  // Homepage Philosophy
  "home.philosophy.label": "Philosophy",
  "home.philosophy.title": "Design for a better world",
  "home.philosophy.p1": "We believe that it is our responsibility making this world a better and healthier place for living. Every project begins with a commitment to the community and environment it will inhabit.",
  "home.philosophy.p2": "Proud finalist of the Canadian Home Builder's Association Sam Awards (now CHBA National Awards for Housing Excellence), our work reflects an unwavering standard of design quality.",
  "home.philosophy.ipd": "Integrated Delivery",
  "home.philosophy.bim": "Info Modelling",
  "home.philosophy.cp": "Certified Pro",

  // Homepage CTA
  "home.cta.title": "Let's discuss your next project",
  "home.cta.subtitle": "From concept to completion, Architect 57 delivers integrated design solutions tailored to your vision.",
  "home.cta.button": "Start a Conversation",

  // About
  "about.label": "About",
  "about.title": "Architect 57 無極建築",
  "about.subtitle": "Specializing in integrated building design since our founding, we bring expertise, sustainability, and community-focused values to every project.",
  "about.story.label": "Our Story",
  "about.story.title": "Integrated design, intentional craft",
  "about.story.p1": "Architect 57 Inc. specializes in integrated building design, complex building code consultation, specialized industrial, research and technology, mix-use, commercial, residential, industrial, institutional, sustainable architecture, project planning, and many more.",
  "about.story.p2": "We believe that it is our responsibility making this world a better and healthier place for living. This commitment drives every decision we make, from material selection to energy systems design.",
  "about.values.label": "Values",
  "about.values.title": "What Drives Us",
  "about.values.excellence.title": "Excellence",
  "about.values.excellence.desc": "Proud finalist of the Canadian Home Builder's Association Sam Awards (now CHBA National Awards for Housing Excellence), reflecting our commitment to quality.",
  "about.values.sustainability.title": "Sustainability",
  "about.values.sustainability.desc": "Principal Ching-yeh (Cary) Tsai devoted energy towards the formation of the U.S. Green Building Council — Las Vegas Regional Chapter as part of giving back to the community.",
  "about.values.community.title": "Community",
  "about.values.community.desc": "We help build a better, healthier, and sustainable living environment through thoughtful design and integrated delivery.",
  "about.cta.title": "Ready to start your project?",
  "about.cta.subtitle": "Let's discuss how our integrated design approach can bring your vision to life.",
  "about.cta.button": "Get in Touch",

  // Projects
  "projects.label": "Portfolio",
  "projects.title": "Selected Projects",
  "projects.subtitle": "A curated selection of our integrated building design work across commercial, residential, industrial, institutional, and mixed-use typologies.",
  "projects.featured.label": "Featured Work",
  "projects.seeDetails": "See Details",
  "projects.all.label": "All Projects",
  "projects.allTags": "All Tags",
  "projects.noMatch": "No projects match this filter.",
  "projects.viewAll": "View All Projects",

  // Project Detail
  "projectDetail.backAll": "All Projects",
  "projectDetail.projectIndex": "Project Index",
  "projectDetail.category": "Category",
  "projectDetail.tags": "Tags",
  "projectDetail.location": "Location",
  "projectDetail.area": "Area",
  "projectDetail.budget": "Budget",
  "projectDetail.detail": "Detail",
  "projectDetail.previous": "Previous",
  "projectDetail.next": "Next",

  // Collection Gallery
  "collection.back": "All Projects",
  "collection.label": "Collection",

  // Contact
  "contact.label": "Contact",
  "contact.title": "Get in Touch",
  "contact.subtitle": "Ready to discuss your project? Reach out and let's explore how we can bring your vision to life.",
  "contact.form.name": "Full Name",
  "contact.form.name.placeholder": "Your name",
  "contact.form.email": "Email",
  "contact.form.email.placeholder": "you@email.com",
  "contact.form.phone": "Phone",
  "contact.form.phone.placeholder": "(optional)",
  "contact.form.message": "Message",
  "contact.form.message.placeholder": "Tell us about your project...",
  "contact.form.submit": "Send Message",
  "contact.thankyou.title": "Thank You",
  "contact.thankyou.message": "We've received your message and will get back to you shortly.",
  "contact.info.label": "Contact Information",
  "contact.info.address.label": "Address",
  "contact.info.address.value": "203-2680 Shell Road, Richmond, BC V6X 4C9",
  "contact.info.phone.label": "Phone",
  "contact.info.email.label": "Email",

  // Footer
  "footer.description": "Integrated building design, code consultation, and sustainable architecture serving Richmond, BC.",
  "footer.navigate": "Navigate",
  "footer.services": "Services",
  "footer.services.building": "Building Design",
  "footer.services.code": "Code Consultation",
  "footer.services.pm": "Project Management",
  "footer.services.bim": "BIM Services",
  "footer.contact": "Contact",

  // Categories
  "cat.All": "All",
  "cat.Residential": "Residential",
  "cat.Commercial": "Commercial",
  "cat.Industrial": "Industrial",
  "cat.Institutional": "Institutional",
  "cat.Community & Cultural": "Community & Cultural",
  "cat.Interior Projects": "Interior Projects",
  "cat.Master Planning": "Master Planning",

  // 404
  "notfound.title": "404",
  "notfound.message": "Oops! Page not found",
  "notfound.back": "Return to Home",
};

// ─── Traditional Chinese ───────────────────────────────────
const zh: Record<string, string> = {
  // Nav
  "nav.projects": "作品集",
  "nav.about": "關於我們",
  "nav.contact": "聯絡",
  "nav.inquire": "諮詢",
  "nav.home": "首頁",

  // Company
  "company.name": "Architect 57 無極建築",
  "company.legal": "Architect 57 Inc.",

  // Homepage Hero
  "home.hero.title": "以光線、材料與意念塑造建築",
  "home.hero.subtitle": "整合式專案交付、建築法規諮詢、BIM 及永續設計 — 服務列治文及大溫地區。",
  "home.hero.cta": "瀏覽作品",

  // Homepage Intro
  "home.intro.label": "創立於列治文, BC",
  "home.intro.text": "Architect 57 無極建築 專精於整合式建築設計、複雜建築法規諮詢、永續建築及專案規劃 — 創造服務人與場所的空間。",

  // Homepage Services
  "home.services.label": "服務項目",
  "home.services.title": "我們的服務",
  "home.services.integrated.title": "整合設計",
  "home.services.integrated.desc": "涵蓋商業、住宅及公共建築類型的全方位建築設計。",
  "home.services.code.title": "法規諮詢",
  "home.services.code.desc": "由 CP 認證專業人員提供複雜建築法規諮詢，確保完全合規。",
  "home.services.bim.title": "BIM 服務",
  "home.services.bim.desc": "先進的建築資訊模型技術，精準可視化與專案協調。",
  "home.services.pm.title": "專案管理",
  "home.services.pm.desc": "從規劃到施工完成的端到端整合式專案交付。",

  // Homepage Portfolio
  "home.portfolio.label": "精選作品",
  "home.portfolio.title": "作品集",
  "home.portfolio.cta": "所有作品",

  // Homepage Philosophy
  "home.philosophy.label": "設計理念",
  "home.philosophy.title": "為更美好的世界而設計",
  "home.philosophy.p1": "我們相信，讓這個世界成為更美好、更健康的居住場所是我們的責任。每個專案都始於對社區和環境的承諾。",
  "home.philosophy.p2": "作為加拿大房屋建築商協會 Sam Awards（現為 CHBA 國家住宅卓越獎）的入圍者，我們的作品反映了堅定不移的設計品質標準。",
  "home.philosophy.ipd": "整合交付",
  "home.philosophy.bim": "資訊模型",
  "home.philosophy.cp": "認證專業",

  // Homepage CTA
  "home.cta.title": "讓我們討論您的下一個專案",
  "home.cta.subtitle": "從概念到完工，Architect 57 無極建築 提供量身打造的整合設計方案。",
  "home.cta.button": "開始對話",

  // About
  "about.label": "關於",
  "about.title": "Architect 57 無極建築",
  "about.subtitle": "自創立以來專注於整合式建築設計，我們將專業知識、永續理念和以社區為中心的價值觀融入每個專案。",
  "about.story.label": "我們的故事",
  "about.story.title": "整合設計，匠心獨運",
  "about.story.p1": "Architect 57 無極建築 專精於整合式建築設計、複雜建築法規諮詢、特殊工業、研究與科技、混合用途、商業、住宅、工業、公共機構、永續建築、專案規劃等眾多領域。",
  "about.story.p2": "我們相信，讓這個世界成為更美好、更健康的居住場所是我們的責任。這份承諾驅動著我們的每一個決策，從材料選擇到能源系統設計。",
  "about.values.label": "核心價值",
  "about.values.title": "驅動我們的力量",
  "about.values.excellence.title": "卓越",
  "about.values.excellence.desc": "作為加拿大房屋建築商協會 Sam Awards（現為 CHBA 國家住宅卓越獎）的入圍者，反映了我們對品質的承諾。",
  "about.values.sustainability.title": "永續",
  "about.values.sustainability.desc": "主持建築師蔡慶業 (Cary) 致力於推動美國綠色建築委員會 — 拉斯維加斯地區分會的成立，作為回饋社區的一部分。",
  "about.values.community.title": "社區",
  "about.values.community.desc": "我們透過深思熟慮的設計和整合交付，幫助建設更美好、更健康、更永續的生活環境。",
  "about.cta.title": "準備好開始您的專案了嗎？",
  "about.cta.subtitle": "讓我們討論如何以整合設計方法實現您的願景。",
  "about.cta.button": "與我們聯繫",

  // Projects
  "projects.label": "作品集",
  "projects.title": "精選作品",
  "projects.subtitle": "我們在商業、住宅、工業、公共機構及混合用途建築類型中的整合式建築設計精選作品。",
  "projects.featured.label": "精選作品",
  "projects.seeDetails": "查看詳情",
  "projects.all.label": "所有作品",
  "projects.allTags": "所有標籤",
  "projects.noMatch": "沒有符合此篩選條件的作品。",
  "projects.viewAll": "查看所有作品",

  // Project Detail
  "projectDetail.backAll": "所有作品",
  "projectDetail.projectIndex": "作品編號",
  "projectDetail.category": "類別",
  "projectDetail.tags": "標籤",
  "projectDetail.location": "地點",
  "projectDetail.area": "面積",
  "projectDetail.budget": "預算",
  "projectDetail.detail": "詳情",
  "projectDetail.previous": "上一個",
  "projectDetail.next": "下一個",

  // Collection Gallery
  "collection.back": "所有作品",
  "collection.label": "作品類別",

  // Contact
  "contact.label": "聯絡",
  "contact.title": "與我們聯繫",
  "contact.subtitle": "準備好討論您的專案了嗎？聯繫我們，讓我們一起探索如何實現您的願景。",
  "contact.form.name": "姓名",
  "contact.form.name.placeholder": "您的姓名",
  "contact.form.email": "電子郵件",
  "contact.form.email.placeholder": "you@email.com",
  "contact.form.phone": "電話",
  "contact.form.phone.placeholder": "（選填）",
  "contact.form.message": "訊息",
  "contact.form.message.placeholder": "請告訴我們關於您的專案...",
  "contact.form.submit": "傳送訊息",
  "contact.thankyou.title": "感謝您",
  "contact.thankyou.message": "我們已收到您的訊息，將盡快回覆。",
  "contact.info.label": "聯絡資訊",
  "contact.info.address.label": "地址",
  "contact.info.address.value": "203-2680 Shell Road, Richmond, BC V6X 4C9",
  "contact.info.phone.label": "電話",
  "contact.info.email.label": "電子郵件",

  // Footer
  "footer.description": "整合式建築設計、法規諮詢及永續建築，服務列治文及大溫地區。",
  "footer.navigate": "導覽",
  "footer.services": "服務項目",
  "footer.services.building": "建築設計",
  "footer.services.code": "法規諮詢",
  "footer.services.pm": "專案管理",
  "footer.services.bim": "BIM 服務",
  "footer.contact": "聯絡",

  // Categories
  "cat.All": "全部",
  "cat.Residential": "住宅",
  "cat.Commercial": "商業",
  "cat.Industrial": "工業",
  "cat.Institutional": "公共機構",
  "cat.Community & Cultural": "社區與文化",
  "cat.Interior Projects": "室內設計",
  "cat.Master Planning": "總體規劃",

  // 404
  "notfound.title": "404",
  "notfound.message": "抱歉！找不到此頁面",
  "notfound.back": "返回首頁",
};

const dictionaries: Record<Language, Record<string, string>> = { en, zh };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return dictionaries[language][key] || dictionaries.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
