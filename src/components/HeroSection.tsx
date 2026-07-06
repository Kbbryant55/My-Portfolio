import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="w-full max-w-3xl text-center"
      aria-labelledby="hero-heading"
    >
      <p className="text-meta uppercase tracking-[0.2em] mb-4 animate-enter">
        Portfolio
      </p>
      <h1 id="hero-heading" className="hero-title animate-enter animate-enter-delay-1">
        Kenneth Willoughby
      </h1>
      <p className="hero-role animate-enter animate-enter-delay-2">
        Senior Software Developer
      </p>
      <p className="hero-statement animate-enter animate-enter-delay-3">
        I ship React and React Native products—and lead teams from concept to
        launch.
      </p>
      <p className="text-meta mt-3 animate-enter animate-enter-delay-4">
        Full-stack · Team leadership · Mentorship
      </p>
      <div className="flex gap-4 justify-center mt-10 flex-wrap animate-enter animate-enter-delay-5">
        <Link href="/contact" className="btn-primary">
          Get in touch
        </Link>
        <Link href="/projects" className="btn-secondary">
          View projects
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
