import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="ai-matrix-loader">
        {[0, 1, 0, 1, 1, 0, 0, 1].map((digit, index) => (
          <div 
            key={index}
            className="digit text-green-500"
            style={{
              animationDelay: `${index * 0.2}s`
            }}
          >
            {digit}
          </div>
        ))}
        <div className="glow bg-green-500/10" />
      </div>

      <style jsx>{`
        .ai-matrix-loader {
          width: 120px;
          height: 160px;
          margin: 30px auto;
          position: relative;
          perspective: 800px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
        }

        .digit {
          font-family: 'JetBrains Mono', monospace;
          font-size: 18px;
          text-align: center;
          text-shadow: 0 0 5px #00ff88;
          animation: matrix-fall 2s infinite, matrix-flicker 0.5s infinite;
          opacity: 0;
        }

        .glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
          animation: matrix-pulse 2s infinite;
        }

        @media (max-width: 768px) {
          .ai-matrix-loader {
            width: 90px;
            height: 120px;
          }
          
          .digit {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;