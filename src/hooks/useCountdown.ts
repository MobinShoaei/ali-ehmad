import { useState, useEffect } from 'react';

interface CountdownResult {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isFinished: boolean;
}

export function toPersianDigits(num: number | string): string {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num
    .toString()
    .padStart(2, '0')
    .replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)]);
}

export function useCountdown(targetDateIso: string): CountdownResult {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isFinished: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetTime = new Date(targetDateIso).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isFinished: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isFinished: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDateIso]);

  return {
    days: toPersianDigits(timeLeft.days),
    hours: toPersianDigits(timeLeft.hours),
    minutes: toPersianDigits(timeLeft.minutes),
    seconds: toPersianDigits(timeLeft.seconds),
    isFinished: timeLeft.isFinished,
  };
}
