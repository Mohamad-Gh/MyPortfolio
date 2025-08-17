const AnimatedBackgroundPattern = () => {
  return (
    <div className="relative -z-10">
      <div className="fixed inset-0 overflow-hidden ">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="6"
                height="6"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 6 0 L 0 0 0 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                  className="text-gray-400 dark:text-gray-300"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Large Animated Squares */}
        <div className="absolute inset-0">
          <div
            className="absolute top-8 left-1/4 w-16 h-16 border border-blue-500/30 animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-8 right-1/4 w-16 h-16 border border-blue-500/25 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-8 left-1/2 w-16 h-16 border border-blue-500/35 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-8 w-16 h-16 border border-blue-500/40 animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />
          <div
            className="absolute top-1/2 right-8 w-16 h-16 border border-blue-500/30 animate-pulse"
            style={{ animationDelay: "0.8s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-16 h-16 border border-blue-500/25 animate-pulse"
            style={{ animationDelay: "1.3s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 border border-blue-500/35 animate-pulse"
            style={{ animationDelay: "1.8s" }}
          />
          <div
            className="absolute bottom-8 left-1/4 w-16 h-16 border border-blue-500/30 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="absolute bottom-8 right-1/4 w-16 h-16 border border-blue-500/25 animate-pulse"
            style={{ animationDelay: "0.7s" }}
          />
          <div
            className="absolute bottom-8 left-1/2 w-16 h-16 border border-blue-500/40 animate-pulse"
            style={{ animationDelay: "1.2s" }}
          />

          {/* Rotating Squares */}
          <div
            className="absolute top-1/4 left-1/6 w-12 h-12 border border-blue-500/20 animate-spin"
            style={{ animationDelay: "0s", animationDuration: "15s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/6 w-12 h-12 border border-blue-500/20 animate-spin"
            style={{ animationDelay: "2s", animationDuration: "18s" }}
          />
        </div>

        {/* Medium Rotating Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/8 w-8 h-8 border border-blue-500/25 animate-spin"
            style={{ animationDelay: "0s", animationDuration: "12s" }}
          />
          <div
            className="absolute top-1/3 right-1/8 w-6 h-6 border border-blue-500/30 animate-spin"
            style={{ animationDelay: "2s", animationDuration: "15s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/6 w-10 h-10 border border-blue-500/20 animate-spin"
            style={{ animationDelay: "4s", animationDuration: "18s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/6 w-7 h-7 border border-blue-500/35 animate-spin"
            style={{ animationDelay: "1s", animationDuration: "14s" }}
          />
          <div
            className="absolute top-2/3 left-1/4 w-5 h-5 border border-blue-500/25 animate-spin"
            style={{ animationDelay: "3s", animationDuration: "16s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-9 h-9 border border-blue-500/30 animate-spin"
            style={{ animationDelay: "5s", animationDuration: "20s" }}
          />

          {/* Small Pulsing Dots */}
          <div
            className="absolute top-1/6 left-1/3 w-3 h-3 bg-blue-500/20 rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute bottom-1/6 right-1/3 w-4 h-4 bg-blue-500/15 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-3/4 left-1/5 w-2 h-2 bg-blue-500/25 rounded-full animate-pulse"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-blue-500/20 rounded-full animate-pulse"
            style={{ animationDelay: "4.5s" }}
          />

          {/* Floating Diamonds */}
          <div
            className="absolute top-1/5 right-1/5 w-4 h-4 border border-blue-500/30 rotate-45 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "10s" }}
          />
          <div
            className="absolute bottom-1/5 left-1/4 w-3 h-3 border border-blue-500/25 rotate-45 animate-bounce"
            style={{ animationDelay: "5s", animationDuration: "12s" }}
          />

          {/* Star Elements */}
          <div
            className="absolute top-1/6 left-1/2 w-2 h-2 text-blue-500/40 animate-pulse"
            style={{ animationDelay: "0s" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div
            className="absolute top-1/3 right-1/4 w-1.5 h-1.5 text-blue-500/30 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div
            className="absolute top-1/2 left-1/3 w-2.5 h-2.5 text-blue-500/35 animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div
            className="absolute top-2/3 right-1/3 w-1.5 h-1.5 text-blue-500/25 animate-pulse"
            style={{ animationDelay: "3s" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div
            className="absolute top-5/6 left-1/4 w-2 h-2 text-blue-500/40 animate-pulse"
            style={{ animationDelay: "4s" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div
            className="absolute top-3/4 right-1/5 w-1.5 h-1.5 text-blue-500/30 animate-pulse"
            style={{ animationDelay: "5s" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Additional Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-32 right-24 w-1 h-1 bg-blue-500/40 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-32 left-24 w-1.5 h-1.5 bg-blue-500/25 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-blue-500/20 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-500/35 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-500/15 rounded-full animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />

        {/* Floating Up Particles */}
        <div
          className="absolute bottom-0 left-1/5 w-1 h-1 bg-blue-500/40 rounded-full animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-blue-500/30 rounded-full animate-bounce"
          style={{ animationDelay: "3s", animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-500/25 rounded-full animate-bounce"
          style={{ animationDelay: "6s", animationDuration: "12s" }}
        />
      </div>

      {/* Content goes here */}
      <div className="relative z-10">{/* Your page content */}</div>
    </div>
  );
};

export default AnimatedBackgroundPattern;
