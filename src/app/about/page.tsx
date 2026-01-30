import Link from "next/link";
import { FaCode } from "react-icons/fa6";


export default function About() {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-background-dark overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-magenta/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 grid-overlay opacity-60"></div>
      </div>

      <div className="fixed top-6 left-6 z-50 pointer-events-none">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-[10px] font-mono tracking-tighter text-primary">
              SYS_ACTIVE // AD-001
            </span>
          </div>
          <div className="text-[8px] font-mono text-white/40">
            LOC: 35.6895° N, 139.6917° E
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 pointer-events-none text-right">
        <div className="text-[10px] font-mono text-primary/60 mb-1">
          DATA_STREAM_09
        </div>
        <div className="flex gap-1 justify-end">
          <div className="w-1 h-3 bg-primary/20"></div>
          <div className="w-1 h-5 bg-primary/40"></div>
          <div className="w-1 h-8 bg-primary"></div>
          <div className="w-1 h-4 bg-primary/60"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="w-full flex justify-center p-6">
          <nav className="glass-dock px-6 py-3 rounded-full flex items-center justify-between w-full max-w-4xl">
            <div className="flex items-center gap-3">
              <div className="size-6 text-primary">
                <FaCode className="text-2xl"/>
              </div>
              <span className="text-white font-bold tracking-widest text-xs">
                DEV
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors"
                href="#"
              >
                Work
              </Link>
              <Link
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary"
                href="#"
              >
                About
              </Link>
              <Link
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors"
                href="#"
              >
                Contact
              </Link>
            </div>
            <Link href="/">
                <button className="bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded hover:bg-primary hover:text-white transition-all">
                Back_Home
                </button>
            </Link>
          </nav>
        </header>
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative">
                <div className="corner-bracket -top-4 -left-4 border-t-2 border-l-2"></div>
                <div className="corner-bracket -top-4 -right-4 border-t-2 border-r-2"></div>
                <div className="corner-bracket -bottom-4 -left-4 border-b-2 border-l-2"></div>
                <div className="corner-bracket -bottom-4 -right-4 border-b-2 border-r-2"></div>
                <div className="profile-frame w-72 h-96 overflow-hidden rounded-lg relative">
                  <img
                    alt="Identity Avatar"
                    className="w-full h-full object-cover grayscale opacity-80 mix-blend-screen"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCocW9JfeusNUzLM7nnIlxJbzcsOvbT3R11iq66GUBXvBTVsQJmjmu_ke3D_T08fThXxTkJh1Vn0JOcsDNW9Zg2o3hMsP7qQgvFRblRi95jGFCL9tDwP4_ygS0rVNrwcGCvXRqVMn-OB5ZmyibPgc0leBHepOUlKcKoOCH2bi7Mf84yEcCg023eZ90pcijIMyc_keopeWLBTNHQDgwvqCEBaR4dmuARipO86DwulvimdqA90q1t9qBqvMw1Bx8KR6dhTk6ZaiHeFhSJ"
                  />
                  <div className="scanline"></div>
                  <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 border border-primary/30">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] font-mono text-primary font-bold">
                        DNA_SEQ_001
                      </span>
                      <span className="text-[9px] font-mono text-white/60">
                        MATCH: 99.8%
                      </span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-8 top-1/2 -rotate-90 origin-right text-[10px] font-mono tracking-[0.5em] text-primary/40">
                  IDENTITY_VERIFIED
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="about-glass-card p-1 rounded-xl">
                <div className="p-8 md:p-12 space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4 text-primary mb-2">
                      <span className="h-[1px] w-8 bg-primary/40"></span>
                      <span className="text-[10px] font-bold tracking-[0.4em] uppercase">
                        Subject Identification
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">
                      Alex{" "}
                      <span
                        className="text-transparent font-light"
                        style={{
                          WebkitTextStroke: "1px rgba(255,255,255,0.7)",
                        }}
                      >
                        Drake
                      </span>
                    </h1>
                    <p className="font-mono text-primary/80 text-sm">
                      System Architect & Interactive Designer
                    </p>
                  </div>
                  <div className="inner-glass p-6 space-y-6">
                    <div className="font-mono text-sm leading-relaxed text-white/80">
                      <span className="text-primary mr-2">&gt;</span>{" "}
                      Establishing neural link... Done.
                      <br />
                      <span className="text-primary mr-2">&gt;</span> I bridge
                      the gap between human perception and digital logic. With a
                      foundation in low-level graphics programming and high-end
                      visual design, I create immersive environments that exist
                      at the edge of the possible.
                    </div>
                    <div className="font-mono text-sm leading-relaxed text-white/80">
                      <span className="text-primary mr-2">&gt;</span>{" "}
                      Specialized in{" "}
                      <span className="text-white font-bold">
                        WebGL, GLSL shaders, and React infrastructure
                      </span>
                      . I don't just build websites; I construct digital
                      artifacts meant to be explored.
                    </div>
                    <div className="flex flex-wrap gap-3 pt-4">
                      <div className="bg-primary/5 border border-primary/20 px-3 py-1 rounded">
                        <span className="text-[10px] font-mono text-primary">
                          CORE: TYPESCRIPT
                        </span>
                      </div>
                      <div className="bg-primary/5 border border-primary/20 px-3 py-1 rounded">
                        <span className="text-[10px] font-mono text-primary">
                          RENDER: THREE.JS
                        </span>
                      </div>
                      <div className="bg-primary/5 border border-primary/20 px-3 py-1 rounded">
                        <span className="text-[10px] font-mono text-primary">
                          LOGIC: NEXT.JS
                        </span>
                      </div>
                      <div className="bg-primary/5 border border-primary/20 px-3 py-1 rounded">
                        <span className="text-[10px] font-mono text-primary">
                          STYLE: TAILWIND
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex gap-4">
                      <Link
                        className="material-symbols-outlined text-white/40 hover:text-primary transition-colors text-xl"
                        href="#"
                      >
                        terminal
                      </Link>
                      <Link
                        className="material-symbols-outlined text-white/40 hover:text-primary transition-colors text-xl"
                        href="#"
                      >
                        share
                      </Link>
                      <Link
                        className="material-symbols-outlined text-white/40 hover:text-primary transition-colors text-xl"
                        href="#"
                      >
                        fingerprint
                      </Link>
                    </div>
                    <div className="text-[10px] font-mono text-white/30 italic">
                      *Last updated: STARDATE 2024.08
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full max-w-7xl mx-auto px-6 pb-6 flex justify-between items-end border-t border-white/5 pt-4">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-widest text-primary/60 font-bold mb-1">
                Processing Power
              </span>
              <div className="flex gap-1 h-1 w-24 bg-white/5">
                <div className="h-full w-2/3 bg-primary"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-widest text-primary/60 font-bold mb-1">
                System Integrity
              </span>
              <span className="text-xs font-mono text-white">
                NOMINAL // 100%
              </span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-white/20 tracking-widest">
            ENCRYPTED_CONNECTION_SECURED
          </div>
        </footer>
      </div>
    </>
  );
}
