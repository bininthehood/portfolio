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
    title: "VoiceLogWeb",
    subtitle: "운영 웹 플랫폼",
    role: "풀스택 개발자",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
    description: "음성 녹취 및 관리 워크플로우를 위한 미션 크리티컬 플랫폼입니다. 실제 비즈니스 환경에서의 높은 동시성 세션 관리와 복잡한 정책 적용을 처리하도록 설계되었습니다.",
    details: [
      "사용자/세션/정책 처리를 위한 모듈형 아키텍처 설계.",
      "견고한 파일 관리 및 서버 모니터링 모듈 구현.",
      "감사 준수 및 시스템 투명성을 위한 운영 로깅 최적화."
    ],
    framing: "현대적 운영의 핵심: 규모 확장성, 정책 강제성 및 비즈니스 로직의 복잡성에 집중."
  },
  {
    id: "recordclient",
    title: "RecordClient v1.1",
    subtitle: "Windows 데스크톱 클라이언트",
    role: "데스크톱 소프트웨어 엔지니어",
    tech: ["WPF", "C#", "Win32 API", "Audio Stack"],
    description: "오디오 장치 제어 및 녹음 흐름 관리를 위한 특화된 Windows 데스크톱 애플리케이션입니다. 하드웨어 상호작용과 서버 측 저장소 사이의 가교 역할을 합니다.",
    details: [
      "직접적인 오디오 장치 제어 및 저지연 녹음 흐름 관리.",
      "백그라운드 모니터링 및 상태 보고를 위한 시스템 트레이 통합.",
      "네트워크 불안정 시에도 데이터 손실을 방지하는 신뢰할 수 있는 서버 연결 워크플로우."
    ],
    framing: "엣지 상호작용: 하드웨어 통합, 사용자 흐름의 신뢰성 및 데스크톱 특유의 복잡성에 집중."
  },
  {
    id: "arcflow",
    title: "ArcFlow Web v1.2",
    subtitle: "레거시 시스템 현대화",
    role: "시스템 아키텍트",
    tech: ["Spring MVC", "Legacy Integration", "Monitoring", "Backup Systems"],
    description: "레거시 운영 시스템의 현대화 및 유지보수 프로젝트입니다. 장기적인 비즈니스 연속성을 위해 모니터링, 저장소 및 백업 모듈을 안정화하는 데 집중했습니다.",
    details: [
      "고가용성 모니터링을 위한 레거시 Spring MVC 모듈 안정화.",
      "증가하는 데이터 볼륨 처리를 위한 저장소 및 백업 워크플로우 개선.",
      "운영 요구사항을 레거시 코드베이스의 기술적 개선으로 변환."
    ],
    framing: "레거시 브릿지: 안정성, 현대화 및 기존 시스템의 복잡성 해결에 집중."
  }
];

const CAPABILITIES = [
  { icon: <Workflow className="w-5 h-5" />, title: "워크플로우 최적화", desc: "복잡한 수동 프로세스를 자동화되고 신뢰할 수 있는 소프트웨어 경로로 전환합니다." },
  { icon: <Layers className="w-5 h-5" />, title: "시스템 통합", desc: "하드웨어 드라이버부터 웹 API까지, 서로 다른 시스템들을 연결합니다." },
  { icon: <Database className="w-5 h-5" />, title: "운영 안정성", desc: "모니터링, 로깅, 오류 복구 등 장기적인 운영을 고려하여 구축합니다." },
  { icon: <Cpu className="w-5 h-5" />, title: "레거시 현대화", desc: "비즈니스 연속성을 해치지 않으면서 기존 시스템에 새로운 생명력을 불어넣습니다." }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-sm font-bold tracking-tighter">
            <Terminal className="w-5 h-5" />
            <span>SYSTEM_BUILDER_PORTFOLIO</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest">
            <a href="#projects" className="hover:opacity-50 transition-opacity">프로젝트</a>
            <a href="#capabilities" className="hover:opacity-50 transition-opacity">역량</a>
            <a href="#about" className="hover:opacity-50 transition-opacity">소개</a>
            <a href="#contact" className="px-4 py-2 bg-[#1A1A1A] text-white rounded-full hover:bg-black transition-colors">연락하기</a>
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
              소프트웨어 개발자 / 시스템 아키텍트
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              복잡한 운영 문제를 해결하는 <span className="text-black/30 italic font-serif">시스템을 만듭니다.</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/60 leading-relaxed max-w-2xl mb-10">
              레거시 현대화부터 실시간 클라이언트 소프트웨어까지, 복잡한 워크플로우를 신뢰할 수 있고 실제로 사용되는 제품으로 바꿉니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-full font-medium transition-all hover:pr-8">
                핵심 프로젝트 보기 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="mailto:dusgod30@gmail.com" className="flex items-center gap-2 px-6 py-3 border border-black/10 rounded-full font-medium hover:bg-black/5 transition-colors">
                문의하기
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
                    <h3 className="text-5xl font-bold tracking-tighter mb-4">{project.title}</h3>
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
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center p-12">
                      <div className="w-full h-full border border-black/10 rounded-lg bg-white shadow-sm overflow-hidden flex flex-col">
                        <div className="h-8 border-b border-black/5 bg-gray-50 flex items-center px-4 gap-2">
                          <div className="w-2 h-2 rounded-full bg-black/10"></div>
                          <div className="w-2 h-2 rounded-full bg-black/10"></div>
                          <div className="w-2 h-2 rounded-full bg-black/10"></div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col gap-4">
                          <div className="h-4 w-1/3 bg-black/5 rounded"></div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="h-24 bg-black/5 rounded-lg border border-dashed border-black/10 flex items-center justify-center">
                              <Monitor className="w-8 h-8 text-black/10" />
                            </div>
                            <div className="h-24 bg-black/5 rounded-lg border border-dashed border-black/10 flex items-center justify-center">
                              <Database className="w-8 h-8 text-black/10" />
                            </div>
                            <div className="h-24 bg-black/5 rounded-lg border border-dashed border-black/10 flex items-center justify-center">
                              <Settings className="w-8 h-8 text-black/10" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 w-full bg-black/5 rounded"></div>
                            <div className="h-2 w-full bg-black/5 rounded"></div>
                            <div className="h-2 w-2/3 bg-black/5 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <span className="px-6 py-2 bg-white rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                        기밀 시스템 아키텍처
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
              <p className="text-4xl font-bold tracking-tight leading-none">운영에 대한 공감.</p>
            </div>
            <div className="lg:col-span-8 space-y-8 text-xl text-black/70 leading-relaxed">
              <p>
                저는 단순히 코드를 작성하는 것이 아니라 시스템을 연구합니다. 저의 배경은 가동 시간, 데이터 무결성, 사용자 워크플로우가 선택 사항이 아닌 핵심 제품인 실무 비즈니스 소프트웨어에 뿌리를 두고 있습니다.
              </p>
              <p>
                저는 소프트웨어 개발의 '복잡한 중간 지대'에서 역량을 발휘합니다. 레거시 시스템이 현대적인 API와 통신해야 하는 곳, 하드웨어 제약 조건이 사용자 기대치와 만나는 곳, 그리고 운영 효율성이 성공적인 제품과 실패한 제품을 가르는 결정적인 차이가 되는 곳입니다.
              </p>
              <p>
                현재 저는 시스템 개선, 레거시 현대화, 내부 도구 구축에 기여할 수 있는 기회를 찾고 있습니다. 특히 성숙한 엔지니어링과 장기적인 역량 구축을 가치 있게 여기는 환경을 선호합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-black/5 rounded-3xl p-12 md:p-20 text-center">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-black/40 mb-8">연락처</h2>
            <p className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
              귀사의 시스템을 안정화하고 <br className="hidden md:block" /> 확장하는 방법을 함께 논의하고 싶습니다.
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
            <span>© 2026 SYSTEM_BUILDER_PORTFOLIO</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-30">
            <span>React + Tailwind로 구축</span>
            <span>Typescript 5.8</span>
            <span>운영 중심</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
