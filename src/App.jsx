import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, SearchX, BellRing, Briefcase, ChevronRight, Lock, 
  Mail, FileText, CheckCircle2, BrainCircuit, Scale, EyeOff, 
  AlertTriangle, Fingerprint, Banknote, XCircle
} from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Waitlist logic goes here
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)]">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-widest text-white">UNOSTATE</span>
          </div>
          <a href="#waitlist" className="hidden md:inline-block text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors">
            Secure Your Spot
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-600/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              The End of Blind Signatures
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              An Entire Legal Department. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Operating in Milliseconds.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-neutral-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              UNOSTATE acts as your aggressive, automated defense shield. It intercepts bad contracts, hunts down hidden liabilities, and rewrites unfair terms before you ever sign your name.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} id="waitlist" className="max-w-md mx-auto">
            {submitted ? (
              <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>You are on the priority list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                  className="flex-1 bg-neutral-900 border border-neutral-700 text-white px-5 py-4 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-neutral-500 shadow-inner"
                />
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] hover:-translate-y-1"
                >
                  Protect My Business <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* 3. WAKE-UP CALL (THE PROBLEM) */}
      <section className="py-20 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            You are one signature away from a disaster.
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Every day, agencies and small businesses sign Service Level Agreements and Master Contracts they don't fully understand. One hidden indemnity clause or sneaky auto-renewal can cost you your company. <strong className="text-orange-400">Hope is not a legal strategy.</strong>
          </p>
        </div>
      </section>

      {/* 4. THE AUTOMATED LEGAL BRAIN (EXAGGERATED CAPABILITY) */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet the brain that memorized every bad deal.</h2>
            <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
              We didn't just build a scanner. We built an autonomous machine that understands the exact DNA of a toxic contract. 
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Imagine a senior partner who never sleeps, doesn't charge $400 an hour, and cross-references your incoming contract against thousands of known business traps in the blink of an eye.
            </p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex-1 relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent rounded-full animate-pulse blur-3xl"></div>
            <div className="relative w-full h-full border border-neutral-800 rounded-full flex items-center justify-center bg-neutral-900/50 backdrop-blur-sm">
              <BrainCircuit className="w-32 h-32 text-orange-500 drop-shadow-[0_0_30px_rgba(234,88,12,0.8)]" />
              {/* Floating orbital elements */}
              <div className="absolute w-full h-full border border-dashed border-orange-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-3/4 h-3/4 border border-orange-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. GOD-MODE FEATURES (EXPANDED GRID) */}
      <section className="py-24 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Overpowered Contract Protection</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">It doesn't just read. It hunts down risk, writes counter-offers, and watches your back.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <SearchX />, title: "The X-Ray Radar", desc: "Scans deep beneath legal jargon to instantly highlight traps and hidden liabilities in plain English." },
              { icon: <ShieldAlert />, title: "Missing Clause Detector", desc: "It knows exactly what the other side 'conveniently forgot' to include, and tells you what to add." },
              { icon: <Banknote />, title: "Hidden Fee Extractor", desc: "Finds weird payment terms, hidden software fees, and sneaky penalty clauses before you are billed." },
              { icon: <Briefcase />, title: "Aggressive Counter-Drafter", desc: "Instantly generates the exact professional email you need to push back against a bad client term." },
              { icon: <BellRing />, title: "Silent Renewal Alarms", desc: "Never get trapped in an auto-renewing software or agency contract again. We track the dates." },
              { icon: <Scale />, title: "Liability Shield", desc: "Determines exactly who pays if things go wrong, ensuring you aren't left holding the bag." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl hover:border-orange-500/50 transition-all hover:shadow-[0_0_30px_rgba(234,88,12,0.1)]">
                <div className="mb-6 p-4 bg-neutral-900 rounded-xl inline-block border border-neutral-800 text-orange-500">
                  {React.cloneElement(feature.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER CONTRAST */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">The Old Way vs. The UNOSTATE Way</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6 text-red-400">
                <XCircle className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Without Us</h3>
              </div>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span> Pay a lawyer $400/hour to read 30 pages.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span> Wait 4 days to get an answer back.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span> Lose the client because you took too long.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span> Just guess, sign it, and panic later.</li>
              </ul>
            </motion.div>

            {/* After */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-gradient-to-br from-orange-900/20 to-neutral-950 border border-orange-500/30 p-8 rounded-2xl shadow-[0_0_30px_rgba(234,88,12,0.1)]">
              <div className="flex items-center gap-3 mb-6 text-orange-500">
                <CheckCircle2 className="w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">With UNOSTATE</h3>
              </div>
              <ul className="space-y-4 text-neutral-300">
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> Upload the contract and get answers in 2 seconds.</li>
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> Zero legal jargon. Plain English business advice.</li>
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> Auto-generate your negotiation emails instantly.</li>
                <li className="flex items-start gap-3"><span className="text-orange-500 mt-1">✓</span> Close the deal the same day with absolute confidence.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. DYNAMIC INTEGRATION WORKFLOW */}
      <section className="py-24 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Invisible Integration</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">No clunky dashboards to learn. UNOSTATE lives inside the tools you already use, acting as a silent bodyguard for your inbox.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-neutral-800 via-orange-500/50 to-neutral-800 -z-10 -translate-y-1/2"></div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center bg-neutral-950 p-8 rounded-2xl border border-neutral-800 w-full md:w-1/3 text-center">
              <Mail className="w-12 h-12 text-neutral-500 mb-6" />
              <h4 className="text-xl font-bold mb-3">1. You Get the Contract</h4>
              <p className="text-neutral-400">A massive enterprise client emails you a 45-page Master Service Agreement.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center bg-orange-600/10 p-8 rounded-2xl border border-orange-500 w-full md:w-1/3 text-center shadow-[0_0_40px_rgba(234,88,12,0.2)] relative transform md:-translate-y-4">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500 rounded-full animate-ping opacity-75"></div>
              <ShieldAlert className="w-12 h-12 text-orange-500 mb-6" />
              <h4 className="text-xl font-bold text-orange-500 mb-3">2. UNOSTATE Intercepts</h4>
              <p className="text-neutral-300">Our engine scans the document before you even open it, flagging 3 highly toxic liability clauses.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col items-center bg-neutral-950 p-8 rounded-2xl border border-neutral-800 w-full md:w-1/3 text-center">
              <FileText className="w-12 h-12 text-neutral-500 mb-6" />
              <h4 className="text-xl font-bold mb-3">3. Safe to Sign</h4>
              <p className="text-neutral-400">You click one button to reply with our AI-generated counter-offer. Deal protected.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. MILITARY-GRADE PRIVACY VAULT & FOOTER */}
      <footer className="pt-24 pb-12 px-6 bg-neutral-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl mb-20 inline-flex flex-col md:flex-row items-center gap-6 text-left">
            <div className="p-5 bg-neutral-950 rounded-full border border-neutral-800">
              <Fingerprint className="w-10 h-10 text-neutral-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-orange-500" /> The Zero-Trust Privacy Vault
              </h4>
              <p className="text-neutral-400">
                Your business deals are nobody's business. Contracts uploaded to UNOSTATE are processed in an isolated vault and immediately shredded. We never read your data, and we never use your contracts to train public AI models.
              </p>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">Stop leaving your business exposed.</h2>
          <p className="text-xl text-neutral-400 mb-10">Join the top agencies and SMBs upgrading to automated legal defense.</p>
          
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_50px_rgba(234,88,12,0.6)] mb-20">
            Secure Your Early Access Now
          </button>
          
          <div className="border-t border-neutral-800 pt-8 text-neutral-600 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 UNOSTATE LTD. Empowering small businesses globally.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;