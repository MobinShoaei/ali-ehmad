import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import type { InvitationConfig } from '../../types/invitation';

interface LocationSectionProps {
  config: InvitationConfig;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ config }) => {
  const navServices = [
    {
      name: 'گوگل مپ',
      url: config.googleMapsUrl,
      icon: MapPin,
      bgGradient: 'from-emerald-500 to-teal-600',
      shadowColor: 'shadow-emerald-500/25',
    },
    {
      name: 'بلد',
      url: config.baladUrl,
      icon: Navigation,
      bgGradient: 'from-sky-500 to-blue-600',
      shadowColor: 'shadow-sky-500/25',
    },
    {
      name: 'مسیریاب نشان',
      url: config.neshanUrl,
      icon: Compass,
      bgGradient: 'from-indigo-500 to-purple-600',
      shadowColor: 'shadow-indigo-500/25',
    },
  ];

  return (
    <section className="relative py-12 px-4 max-w-3xl mx-auto text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-xl"
      >
        {/* Header */}
        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold px-3 py-1 bg-amber-100 rounded-full">
            {config.addressTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-900 mt-2">
            {config.addressSubTitle}
          </h2>
        </div>

        {/* Address Box */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white/90 border border-sky-100 shadow-sm mb-8 flex items-start gap-3 text-right">
          <div className="p-3 rounded-xl bg-sky-100 text-sky-600 shrink-0 mt-0.5">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-base sm:text-lg">
              باغ تالار علوم‌پزشکی
            </h3>
            <p className="text-slate-600 text-sm sm:text-base font-light mt-1 leading-relaxed">
              {config.address}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {navServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.name}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl text-white font-semibold text-sm bg-gradient-to-r ${service.bgGradient} shadow-lg ${service.shadowColor} transition-all`}
              >
                <Icon className="w-4 h-4" />
                <span>مسیریابی با {service.name}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
