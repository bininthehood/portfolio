/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Workflow, 
  Database, 
  Monitor, 
  ArrowRight, 
  Github, 
  Mail, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Settings
} from "lucide-react";

const PROJECTS = [
  {
    id: "voicelog",
    title: "Voice Operations Platform",
    subtitle: "운영 웹 시스템",
    role: "웹 애플리케이션 개발",
    tech: ["Java", "Spring MVC", "JSP", "MyBatis", "MariaDB"],
    description: "음성 녹취 및 관리 업무를 지원하는 Java 기반 운영 웹 시스템입니다. 사용자, 세션, 정책, 파일, 서버, 로그 등 여러 운영 모듈이 연결된 실무형 구조를 다뤘습니다.",
    details: [
      "사용자·세션·권한 정책이 포함된 운영용 웹 흐름을 다뤘습니다.",
      "파일 처리, 서버 관리, 로그 및 공통 운영 기능이 연결된 구조를 이해하고 작업했습니다.",
      "단순 화면 구현이 아니라 실무 운영에 필요한 데이터와 정책 흐름을 함께 다뤘습니다."
    ],
    framing: "여러 운영 모듈이 연결된 실무형 웹 시스템"
  },
  {
    id: "recordclient",
    title: "Recording Desktop Client",
    subtitle: "Windows 녹취 클라이언트",
    role: "데스크톱 클라이언트 개발",
    tech: ["C#", "WPF", "NAudio", "Windows Audio", "System Tray"],
    description: "오디오 장치 제어와 녹음 흐름 관리를 위한 Windows 데스크톱 클라이언트입니다. 로컬 환경의 입력·출력 장치 상태와 서버 연동 흐름을 함께 다루는 애플리케이션입니다.",
    details: [
      "입력·출력 장치 탐색, 볼륨·뮤트 제어, 오디오 레벨 모니터링 기능을 구현했습니다.",
      "시스템 트레이, 자동 시작, 상태 전환 등 데스크톱 환경에 맞는 UX를 다뤘습니다.",
      "녹음 시작·종료와 서버 연동 흐름을 연결하는 클라이언트 로직을 구성했습니다."
    ],
    framing: "실시간 장치 제어와 녹음 흐름을 다루는 데스크톱 애플리케이션"
  },
  {
    id: "arcflow",
    title: "Legacy Operations Platform",
    subtitle: "레거시 운영 시스템",
    role: "레거시 시스템 분석 및 개선",
    tech: ["Java", "Spring MVC", "JSP", "MyBatis", "Monitoring"],
    description: "운영·모니터링·스토리지 관리 기능을 포함한 레거시 웹 시스템입니다. 복잡한 구조를 분석하고, 운영성 기능과 개선 포인트를 중심으로 이해해온 프로젝트입니다.",
    details: [
      "모니터링, 스토리지, 백업 등 운영성 기능이 포함된 구조를 다뤘습니다.",
      "공통 처리 계층과 정책성 로직이 섞인 레거시 구조를 분석하며 개선 포인트를 정리했습니다.",
      "현대화가 필요한 기존 시스템을 기능 단위로 이해하고 다루는 경험을 쌓았습니다."
    ],
    framing: "운영 기능과 개선 과제가 함께 있는 레거시 시스템"
  }
];

const CAPABILITIES = [
  { icon: <Workflow className="w-5 h-5" />, title: "워크플로우 이해", desc: "실제 사용 흐름을 기준으로 불편한 지점을 찾고, 운영 가능한 기능으로 정리합니다." },
  { icon: <Layers className="w-5 h-5" />, title: "시스템 연결", desc: "웹, 클라이언트, 장치, 서버처럼 성격이 다른 요소들이 함께 동작하는 구조를 다룹니다." },
  { icon: <Database className="w-5 h-5" />, title: "운영 기능", desc: "로그, 모니터링, 설정, 파일 처리처럼 실제 운영에 필요한 기능을 함께 고려합니다." },
  { icon: <Cpu className="w-5 h-5" />, title: "레거시 개선", desc: "기존 시스템의 제약을 이해하고, 기능 단위로 개선 가능한 방향을 정리합니다." }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-sm font-bold tracking-tighter">
            <Terminal className="w-5 h-5" />
            <span>IM HYUNBIN PORTFOLIO</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest">
            <a href="#projects" className="hover:opacity-50 transition-opacity">프로젝트</a>
            <a href="#capabilities" className="hover:opacity-50 transition-opacity">역량</a>
            <a href="#about" className="hover:opacity-50 transition-opacity">소개</a>
            <a href="#contact" className="px-4 py-2 bg-[#1A1A1A] text-white rounded-full hover:bg-black transition-colors">연락처</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              소프트웨어 개발자 / 운영 시스템
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.08] mb-8 max-w-4xl break-keep">
              복잡한 운영 문제를 해결하는 시스템을 만듭니다.
            </h1>
            <p className="text-lg md:text-2xl text-black/60 leading-[1.75] max-w-3xl mb-10 break-keep">
              운영 환경에서 실제로 사용되는 웹·클라이언트 시스템을 개발하며, 레거시 구조 개선과 실무 워크플로우 문제 해결 경험을 쌓아왔습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-full font-medium transition-all hover:pr-8">
                프로젝트 보기 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="mailto:dusgod30@gmail.com" className="flex items-center gap-2 px-6 py-3 border border-black/10 rounded-full font-medium hover:bg-black/5 transition-colors">
                이메일 보내기
              </a>
            </div>
          </motion.div>
        </section>

        {/* The Thesis Section */}
        <section className="bg-white border-y border-black/5 py-24 mb-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-black/40 mb-4">철학</h2>
              <p className="text-3xl font-medium leading-tight tracking-tight">
                "트렌드에 휘둘리는 개발자가 아닙니다. 새로움보다 실질적인 역량을 중시하는 실전형 시스템 빌더입니다."
              </p>
            </div>
            <div className="space-y-6 text-black/60 leading-relaxed">
              <p>
                오늘날 대부분의 소프트웨어는 '해피 패스(Happy Path)'를 위해 구축됩니다. 저는 실제 비즈니스를 정의하는 예외 상황, 레거시 제약 조건, 그리고 운영상의 현실을 고려하여 시스템을 구축합니다.
              </p>
              <p>
                저의 강점은 복잡하고 무질서한 기존 시스템을 이해하고 이를 사용 가능한 워크플로우로 변환하는 데 있습니다. 저는 사람들이 실제로 일하는 방식을 개선하는 실질적인 문제를 해결하며, 실질적인 역량으로 축적되는 업무를 선호합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-black/40 mb-4">핵심 프로젝트</h2>
              <p className="text-4xl font-bold tracking-tight">운영 시스템 사례 연구</p>
            </div>
            <div className="hidden md:block text-right text-xs font-mono text-black/40">
              [03_SELECTED_WORKS]
            </div>
          </div>

          <div className="space-y-32">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="grid lg:grid-cols-12 gap-12 items-start"
              >
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-black/40">0{idx + 1}</span>
                      <div className="h-[1px] w-8 bg-black/10"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-black/60">{project.subtitle}</span>
                    </div>
                    <h3 className="text-5xl font-bold tracking-tighter mb-3">{project.title}</h3>
                    <p className="text-sm text-black/45 mb-2">{project.role}</p>
                    <p className="text-sm font-medium text-black/40 italic mb-6">{project.framing}</p>
                    <p className="text-lg text-black/70 leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40">주요 기여 사항</h4>
                    <ul className="space-y-3">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-black/60">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-black/20 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white border border-black/5 rounded-md text-[10px] font-mono uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="aspect-[16/10] bg-white border border-black/5 rounded-2xl overflow-hidden shadow-2xl shadow-black/5 relative group">
                    {/* Mock UI Representation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-12">
                      <div className="w-full h-full border border-black/8 rounded-lg bg-white shadow-sm overflow-hidden flex flex-col">
                        <div className="h-10 border-b border-black/5 bg-gray-50 flex items-center justify-between px-4">
                          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-black/35">Project Overview</span>
                          <span className="text-[10px] font-mono text-black/25">Internal System</span>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div className="space-y-4">
                            <div className="h-3 w-1/3 bg-black/6 rounded"></div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-24 bg-black/[0.03] rounded-lg border border-black/8 flex items-center justify-center">
                                <Monitor className="w-7 h-7 text-black/15" />
                              </div>
                              <div className="h-24 bg-black/[0.03] rounded-lg border border-black/8 flex items-center justify-center">
                                <Database className="w-7 h-7 text-black/15" />
                              </div>
                              <div className="h-24 bg-black/[0.03] rounded-lg border border-black/8 flex items-center justify-center">
                                <Settings className="w-7 h-7 text-black/15" />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2 pt-6">
                            <div className="h-2 w-full bg-black/[0.05] rounded"></div>
                            <div className="h-2 w-5/6 bg-black/[0.05] rounded"></div>
                            <div className="h-2 w-2/3 bg-black/[0.05] rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="px-5 py-2 bg-white rounded-full text-[11px] font-semibold tracking-[0.08em] shadow-lg text-black/75">
                        internal system preview
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="capabilities" className="bg-[#1A1A1A] text-white py-32 mb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-4">기술적 역량</h2>
              <p className="text-4xl font-bold tracking-tight">코드 그 이상의 가치</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CAPABILITIES.map((cap, i) => (
                <div key={i} className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{cap.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Direction Section */}
        <section id="about" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-black/40 mb-4">소개</h2>
              <p className="text-4xl font-bold tracking-tight leading-tight break-keep">실무에서 배운 개발</p>
            </div>
            <div className="lg:col-span-8 space-y-8 text-xl text-black/70 leading-relaxed">
              <p>
                저는 화려한 데모보다 실제로 사용되는 시스템에 더 관심이 많습니다. 반복적이고 축적되지 않는 일보다, 운영 과정에서 발생하는 불편과 복잡성을 줄이는 개발에 더 큰 동기를 느낍니다.
              </p>
              <p>
                웹 시스템, 데스크톱 클라이언트, 장치 제어, 운영 기능처럼 여러 층이 연결된 환경에서 일해왔고, 그 과정에서 단순 구현보다 구조를 이해하고 흐름을 정리하는 힘을 키워왔습니다.
              </p>
              <p>
                앞으로도 실무 시스템 개선, 레거시 구조 이해와 현대화, 내부 도구 및 운영 효율화에 기여할 수 있는 개발자로 성장하고 싶습니다. 장기적으로는 실제 문제를 도구와 제품으로 바꾸는 방향을 더 깊게 가져가려 합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-black/5 rounded-3xl p-12 md:p-20 text-center">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-black/40 mb-8">연락처</h2>
            <p className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.2] mb-12 break-keep">
              실무 시스템 개선과 운영 문제 해결에 대해 이야기 나누고 싶습니다.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="mailto:dusgod30@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-bold hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" /> dusgod30@gmail.com
              </a>
              <div className="flex items-center gap-4">
                <a href="#" className="p-4 border border-black/10 rounded-full hover:bg-black/5 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="p-4 border border-black/10 rounded-full hover:bg-black/5 transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-mono text-xs font-bold opacity-30">
            <Terminal className="w-4 h-4" />
            <span>© 2026 임현빈 포트폴리오</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-30">
            <span>React + Tailwind</span>
            <span>Typescript</span>
            <span>Practical Systems</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
