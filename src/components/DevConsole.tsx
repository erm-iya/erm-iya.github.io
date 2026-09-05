import React, { useState, useRef, useEffect } from 'react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DevConsoleProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const DevConsole: React.FC<DevConsoleProps> = ({ currentLang, isOpen, onClose }) => {
  const t = translations[currentLang];
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-teal-400 font-bold">Available Commands:</p>
            <p><span className="text-emerald-400 font-mono">bio</span> - View summary biography</p>
            <p><span className="text-emerald-400 font-mono">projects</span> - List flagship engineering projects</p>
            <p><span className="text-emerald-400 font-mono">skills</span> - Display key technical competencies</p>
            <p><span className="text-emerald-400 font-mono">contact</span> - Get direct channels of communication</p>
            <p><span className="text-emerald-400 font-mono">hire</span> - Initiate partnership sequence ✨</p>
            <p><span className="text-emerald-400 font-mono">clear</span> - Clean up terminal buffer</p>
          </div>
        );
        break;

      case 'bio':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="font-bold text-white">Ermiya Heidari (ارمیا حیدری)</p>
            <p className="text-teal-400">Co-Founder & Lead Back-End Engineer at LUXIMO</p>
            <p className="text-xs text-slate-400">Focus: Node.js, Real-Time Socket.io, MongoDB, PcPos Bank Bridges, Cloud Automation.</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-teal-400 font-bold">Top Engineered Systems:</p>
            <p>1. <span className="text-white font-bold">LUXIMO Core:</span> Multi-tenant Real-time SaaS platform (Node/Mongo/Socket.io)</p>
            <p>2. <span className="text-white font-bold">LUXIMO PcPos:</span> Direct banking terminal hardware bridge (C++/TCP Sockets)</p>
            <p>3. <span className="text-white font-bold">Medical Curve Organizer:</span> Desktop data pipeline & analytics for patient curves (Python/Tkinter/Pandas)</p>
            <p>4. <span className="text-white font-bold">IosDLmanager:</span> Mobile downloader app with liquid glass UI (React Native/Expo)</p>
            <p>5. <span className="text-white font-bold">TTM Task Bot:</span> Telegram enterprise task manager with Gantt charts & aiosqlite</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-teal-400 font-bold">Calibrated Core Stack (Production & Project-Tested):</p>
            <p>• Node.js & Express (90%) | Python & Data Analytics (90%) | PHP & Automation (90%)</p>
            <p>• Socket.io (88%) | Databases: MongoDB & SQLite (85%) | C++ & POS DLL Interop (60%)</p>
            <p>• JavaScript ES6+ (90%) | React & Vite (80%) | TypeScript (80%) | React Native (75%)</p>
            <p>• Telegram Bots (90%) | Linux & cPanel (85%) | Photoshop (100%) | Illustrator (100%)</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-slate-300">
            <p>• Telegram: <a href="https://t.me/erm_iya_h" target="_blank" className="text-teal-400 underline">@erm_iya_h</a></p>
            <p>• Email: <span className="text-teal-400 font-mono">heidariermiya@gmail.com</span></p>
            <p>• GitHub: <a href="https://github.com/erm-iya" target="_blank" className="text-teal-400 underline">github.com/erm-iya</a></p>
            <p>• Phone: <span className="text-teal-400 font-mono">09183820239</span></p>
          </div>
        );
        break;

      case 'hire':
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#14b8a6', '#10b981', '#06b6d4', '#ffffff'],
        });
        output = (
          <div className="p-3 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-200">
            <p className="font-bold text-sm">🎉 Ready to engineer something extraordinary!</p>
            <p className="text-xs text-slate-300 mt-1">Feel free to message me on Telegram (@erm_iya_h) or email me at heidariermiya@gmail.com</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
        output = <p className="text-emerald-400">Permission granted. Ermiya is fully available to collaborate!</p>;
        break;

      default:
        output = (
          <p className="text-red-400 text-xs">
            Command not recognized: <span className="font-mono">{cmd}</span>. Type <span className="text-teal-400 font-mono">help</span> for commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl bg-[#090e18]/95 font-mono text-xs sm:text-sm">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 me-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-teal-400" />
              ermiya@luximo:~$
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Content */}
        <div className="p-5 h-80 overflow-y-auto space-y-3.5">
          <div className="text-slate-400 text-xs">
            <p className="text-teal-300 font-bold">{t.terminal.welcome}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">{t.terminal.helpText}</p>
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-teal-400 font-bold">
                <span>❯</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="ps-4">{item.output}</div>
            </div>
          ))}

          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 px-5 py-3 border-t border-white/[0.08] bg-black/20">
          <span className="text-teal-400 font-bold">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.terminal.placeholder}
            className="flex-1 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none text-xs sm:text-sm font-mono"
          />
          <button type="submit" className="text-slate-500 hover:text-teal-300 transition-colors">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
