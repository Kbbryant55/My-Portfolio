import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="w-full max-w-3xl text-center"
      aria-labelledby="hero-heading"
    >
      <p className="text-meta uppercase tracking-[0.2em] mb-4">Portfolio</p>
      <h1 id="hero-heading" className="hero-title">
        Kenneth Willoughby
      </h1>
      <p className="hero-role">Senior Software Developer</p>
      <p className="hero-statement">
        I ship React and React Native products—and lead teams from concept to
        launch.
      </p>
      <p className="text-meta mt-3">
        Full-stack · Team leadership · Mentorship
      </p>
      <div className="flex gap-4 justify-center mt-10 flex-wrap">
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
