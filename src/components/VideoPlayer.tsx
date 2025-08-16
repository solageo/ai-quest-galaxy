import { useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  onVideoEnd?: () => void;
}

export const VideoPlayer = ({ videoId, title, onVideoEnd }: VideoPlayerProps) => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0"
        onLoad={() => setHasStarted(true)}
      />
      {!hasStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-muted-foreground">Loading video...</div>
        </div>
      )}
    </div>
  );
};