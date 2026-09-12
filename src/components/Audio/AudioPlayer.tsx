import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles, Check } from 'lucide-react';
import happyBirthdayMusic from '../../assets/happy-birthday-instrumental1.mp3';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio instance
    const audio = new Audio(happyBirthdayMusic);
    audio.loop = true;
    audio.volume = 0.5; // Comfortable background volume
    audioRef.current = audio;

    // Clean up on unmount
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const handlePlayMusic = async () => {
    setShowPermissionModal(false);
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error('Audio playback was prevented:', err);
        setIsPlaying(false);
      }
    }
  };

  const handleDeclineMusic = () => {
    setShowPermissionModal(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error('Audio playback failed:', err);
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      {/* Floating Interactive Music Button */}
      <div className="fixed top-4 left-4 z-40 flex items-center gap-2 select-none">
        <button
          onClick={toggleMusic}
          className={`p-3 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 cursor-pointer ${isPlaying
            ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white border-sky-300 ring-4 ring-sky-200/50 shadow-sky-500/30'
            : 'bg-white/85 text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-sky-600 shadow-slate-200/60'
            }`}
          aria-label={isPlaying ? 'قطع موزیک زمینه' : 'پخش موزیک زمینه'}
          title={isPlaying ? 'قطع موزیک' : 'پخش موزیک'}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-white animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-slate-500" />
          )}
        </button>
      </div>

      {/* Entrance Permission Dialog / Modal */}
      {showPermissionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-md bg-white/95 rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-sky-200 text-center overflow-hidden transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Decorative Glow */}
            <div className="absolute -top-16 -left-16 w-36 h-36 bg-sky-300/40 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-amber-300/40 rounded-full blur-2xl pointer-events-none" />

            {/* Header Animated Icon */}
            <div className="relative z-10 mx-auto mb-5 w-20 h-20 rounded-3xl bg-gradient-to-tr from-sky-400 via-blue-500 to-amber-300 p-0.5 shadow-xl shadow-sky-500/20 animate-float-slow">
              <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center text-sky-500">
                <Music className="w-10 h-10 animate-pulse text-sky-500" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-900 rounded-full p-1 shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Title & Description */}
            <div className="relative z-10 space-y-2 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight flex items-center justify-center gap-2">
                به جشن علی‌ اِحماد خوش آمدید 🎈
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed px-2">
                آیا مایلید موزیک بی کلام پخش شود؟
              </p>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePlayMusic}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3.5 px-5 rounded-2xl shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                <Check className="w-5 h-5 text-white" />
                <span>بله، پخش موزیک 🎵</span>
              </button>

              <button
                onClick={handleDeclineMusic}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3.5 px-5 rounded-2xl transition-all duration-200 cursor-pointer text-sm hover:text-slate-900"
              >
                ورود بدون موزیک 🤫
              </button>
            </div>

            {/* Subtext info */}
            <p className="relative z-10 mt-4 text-[11px] text-slate-400">
              میتوانید در هر زمان از آیکون بالای صفحه، پخش موزیک را کنترل کنید.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

