import { motion } from 'framer-motion';
import { Calendar, Clock, Utensils, MapPin } from 'lucide-react';
import type { InvitationConfig } from '../../types/invitation';

interface EventDetailsProps {
  config: InvitationConfig;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ config }) => {
  const details = [
    {
      id: 'persianDate',
      title: 'تاریخ',
      value: config.persianDate,
      icon: Calendar,
      bgColor: 'bg-sky-50',
      iconColor: 'text-sky-600',
    },

    {
      id: 'eventTime',
      title: 'زمان ',
      value: config.eventTime,
      icon: Clock,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'reception',
      title: 'پذیرایی',
      value: config.receptionText,
      icon: Utensils,
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
  ];

  return (
    <section className="relative py-12 px-4 max-w-3xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="glass-card rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-xl"
      >
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-sky-600 font-semibold px-3 py-1 bg-sky-100 rounded-full">
            جزئیات مراسم
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-900 mt-2">
            مشخصات کارت دعوت
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            خوشحال خواهیم شد در این روز زیبا کنار ما باشید
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 border border-sky-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0 shadow-inner`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    {item.title}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-800">
                    {item.value}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Venue Badge */}
        <div className="mt-6 pt-6 border-t border-sky-100/80 flex items-center justify-center gap-2 text-slate-600 text-sm font-medium">
          <MapPin className="w-4 h-4 text-sky-600" />
          <span>مکان: {config.venueName}</span>
        </div>
      </motion.div>
    </section>
  );
};
