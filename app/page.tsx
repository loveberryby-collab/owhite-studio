import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientProblems from "@/components/ClientProblems";
import ClientResults from "@/components/ClientResults";
import Portfolio from "@/components/Portfolio";
import Stack from "@/components/Stack";
import Audience from "@/components/Audience";
import Process from "@/components/Process";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/get-site-content";

export const revalidate = 60;

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <Header site={content.site} />
      <main>
        <Hero data={content.hero} />
        <Services data={content.services} />
        <ClientProblems data={content.problems} />
        <ClientResults data={content.results} />
        <Portfolio data={content.portfolio} site={content.site} />
        <Stack data={content.stack} />
        <Audience data={content.audience} />
        <Process data={content.process} />
        <About data={content.about} />
        <ContactForm data={content.contact} />
      </main>
      <Footer site={content.site} />
    </>
  );
}
