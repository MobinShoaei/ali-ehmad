import { invitationConfig } from './config/invitation';
import { BackgroundEffects } from './components/BackgroundEffects/BackgroundEffects';
import { PhotoReveal } from './components/Hero/PhotoReveal';
import { Countdown } from './components/Countdown/Countdown';
import { EventDetails } from './components/EventDetails/EventDetails';
import { Gallery } from './components/Gallery/Gallery';
import { LocationSection } from './components/Location/LocationSection';
import { FooterMessage } from './components/FooterMessage/FooterMessage';
import { AudioPlayer } from './components/Audio/AudioPlayer';

export function App() {
  return (
    <div className="relative min-h-screen font-sans bg-slate-50 text-slate-800 selection:bg-sky-200 selection:text-sky-900 overflow-x-hidden">
      {/* Dreamy Animated Background */}
      <BackgroundEffects />

      {/* Floating Ambient Music Controller */}
      <AudioPlayer />

      {/* Main Single Page Content */}
      <main className="relative z-10 space-y-4">
        {/* SECTION 1 — Hero & Interactive Canvas Reveal Frame */}
        <PhotoReveal config={invitationConfig} />

        {/* Divider Glow */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto rounded-full opacity-60 my-4" />

        {/* SECTION 2 — Countdown Timer */}
        <Countdown config={invitationConfig} />

        {/* Divider Glow */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto rounded-full opacity-60 my-4" />

        {/* SECTION 3 — Event Invitation Information */}
        <EventDetails config={invitationConfig} />

        {/* Divider Glow */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto rounded-full opacity-60 my-4" />

        {/* SECTION 4 — Baby Photo Gallery Slider */}
        <Gallery config={invitationConfig} />

        {/* Divider Glow */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto rounded-full opacity-60 my-4" />

        {/* SECTION 5 — Address & Navigation Buttons */}
        <LocationSection config={invitationConfig} />

        {/* Divider Glow */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent mx-auto rounded-full opacity-60 my-4" />

        {/* SECTION 6 — Closing Footer Message */}
        <FooterMessage config={invitationConfig} />
      </main>
    </div>
  );
}

export default App;
