import { Helmet } from "react-helmet-async";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Seo = ({
  title = "Javeria Masood | Full Stack Developer & Data Science Learner",
  description = "Portfolio website of Javeria Masood, a passionate full-stack developer and data science learner specializing in modern web technologies.",
  keywords = "Javeria Masood, full stack developer, data science, React, Node.js, portfolio, projects",
}: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Mobile viewport optimization */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />

      {/* Color theme */}
      <meta name="theme-color" content="#2662d9" />
    </Helmet>
  );
};

export default Seo;
