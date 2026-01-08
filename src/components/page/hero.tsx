export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <g fill="currentColor" fillRule="evenodd">
            <path d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Name and Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient mb-4">
            Fathur Rohman
          </h1>
          <p className="text-xl lg:text-2xl font-semibold text-muted-foreground">
            Your Partner for Software Engineering
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-start">
          <div className="text-center">
            <div className="mb-4">
              <div className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground/60">
                &lt; frontend &gt;
              </div>
              <p className="text-base lg:text-lg max-w-sm mx-auto leading-relaxed font-medium text-muted-foreground/50">
                Clean, beautiful and elegant code for modern web experiences
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <div className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary/80">
                {'{'} backend {'}'}
              </div>
              <p className="text-base lg:text-lg max-w-sm mx-auto leading-relaxed font-medium text-muted-foreground/70 mb-4">
                API Engineering & Microservices architecture for scalable systems
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium">
                  API Engineering
                </span>
                <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium">
                  Microservices
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
