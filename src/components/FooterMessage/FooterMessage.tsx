import { motion } from 'framer-motion';
import { Heart, Moon, Star, Sparkles } from 'lucide-react';
import type { InvitationConfig } from '../../types/invitation';

interface FooterMessageProps {
  config: InvitationConfig;
}

export const FooterMessage: React.FC<FooterMessageProps> = ({ config }) => {
  return (
    <footer className="relative pt-12 pb-16 px-4 text-center z-10 safe-padding-bottom">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto py-10 px-6 rounded-3xl bg-white/70 backdrop-blur-md border border-amber-200/60 shadow-lg"
      >
        {/* Subtle Top Icon */}
        <div className="flex items-center justify-center gap-2 text-amber-500 mb-4">
          <Moon className="w-5 h-5 fill-amber-300" />
          <Star className="w-4 h-4 fill-amber-300 animate-pulse" />
          <Heart className="w-4 h-4 fill-rose-300 text-rose-400" />
        </div>

        {/* Message */}
        <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed ">
          {config.closingMessage}
        </p>

        <p className="text-slate-700 text-lg sm:text-xl font-medium mb-3">
          {config.closingSubtext}
        </p>
        <p className="text-sky-800 text-lg sm:text-xl font-bold">
          ۰۹۱۹۸۹۹۴۶۹۶ - شعاعی
        </p>
        {/* Delicate Bottom Badge */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-1.5 text-slate-400 text-xs font-light">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>کارت دعوت اختصاصی تولد {config.babyName}</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </div>
      </motion.div>
    </footer>
  );
};
