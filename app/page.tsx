import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Teaching from "@/components/teaching";
import Education from "@/components/education";
import Script from "next/script";

export default function Home() {
  return (
      <>
          <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TAG}`}
          />
          <Script id='google-analytics'>{
              `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.GOOGLE_ANALYTICS_TAG});`
          }
          </Script>
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
        <Education/>
      <Experience />
      <Projects />
      <Skills />
        <Teaching />
      <Contact />
    </main>
      </>
  );
}
