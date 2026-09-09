import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CalendarCheck } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';
import type { InvitationConfig } from '../../types/invitation';

interface CountdownProps {
  config: InvitationConfig;
}

export const Countdown: React.FC<CountdownProps> = ({ config }) => {
  const { days, hours, minutes, seconds, isFinished } = useCountdown(
    config.countdownTargetDate
  );

  const units = [
    { label: 'ثانیه', value: seconds },
    { label: 'دقیقه', value: minutes },
    { label: 'ساعت', value: hours },
    { label: 'روز', value: days },
  ];

  return (
    <section className="relative py-12 px-4 max-w-2xl mx-auto text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="glass-card-gold rounded-3xl p-6 sm:p-8"
      >
        {/* Title */}
        <div className="inline-flex items-center gap-2 mb-4 text-sky-800 font-semibold text-lg sm:text-xl">
          <Clock className="w-5 h-5 text-amber-500 animate-pulse" />
          <h2>{config.countdownTitle}</h2>
        </div>

        {/* Countdown Content */}
        {isFinished ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 bg-gradient-to-r from-amber-50 to-sky-50 rounded-2xl border border-amber-200 text-amber-800 font-bold text-lg sm:text-xl flex flex-col items-center justify-center gap-2"
          >
            <CalendarCheck className="w-8 h-8 text-amber-600 animate-bounce" />
            <span>{config.countdownFinishedMessage}</span>
          </motion.div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-4 my-2">
            {units.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/95 border border-sky-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden h-10 sm:h-12 flex items-center justify-center">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={unit.value}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl sm:text-4xl font-extrabold text-sky-900 tracking-wider"
                    >
                      {unit.value}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};
