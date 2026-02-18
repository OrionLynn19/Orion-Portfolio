import react from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface BgvideoProps {
  onComplete?: () => void;
}

const Bgvideo = ({ onComplete }: BgvideoProps) => {
  const videoRef = react.useRef<HTMLVideoElement | null>(null);
  const containerRef = react.useRef<HTMLDivElement | null>(null);
  const [isMobile] = useMediaQuery(['(max-width: 768px)']);

  useGSAP(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        onLeave: () => {
          gsap.to(container, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              container.style.display = 'none';
              onComplete?.();
            },
          });
        },
      },
    });

    video.onloadedmetadata = () => {
      tl.to(video, {
        currentTime: video.duration,
      });
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen z-50 bg-black flex items-center justify-center"
    >
      <video
        ref={videoRef}
        src="/videos/candle.mp4"
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Bgvideo;