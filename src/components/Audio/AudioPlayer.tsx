import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  const toggleMusic = () => {
    if (isPlaying) {
      stopLullaby();
    } else {
      startLullaby();
    }
  };

  const startLullaby = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Simple dreamy lullaby notes (Twinkle twinkle little star / Brahms Lullaby tone)
      const notes = [
        261.63, 261.63, 392.0, 392.0, 440.0, 440.0, 392.0,
        349.23, 349.23, 329.63, 329.63, 293.66, 293.66, 261.63,
      ];
      let index = 0;

      const playNextNote = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.value = notes[index % notes.length];

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.95);

        index++;
        timerRef.current = window.setTimeout(playNextNote, 600);
      };

      playNextNote();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopLullaby = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => {
      stopLullaby();
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      className={`fixed top-4 left-4 z-40 p-3 rounded-full shadow-lg border backdrop-blur-md transition-all ${
        isPlaying
          ? 'bg-sky-500 text-white border-sky-300 animate-pulse'
          : 'bg-white/80 text-sky-700 border-sky-200 hover:bg-sky-50'
      }`}
      aria-label={isPlaying ? 'قطع موسیقی' : 'پخش موسیقی ملایم'}
      title={isPlaying ? 'قطع موسیقی' : 'پخش موسیقی ملایم'}
    >
      <div className="flex items-center gap-1.5 text-xs font-semibold px-1">
        {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        <Music className="w-3.5 h-3.5" />
      </div>
    </button>
  );
};
