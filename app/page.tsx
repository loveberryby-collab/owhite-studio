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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ClientProblems />
        <ClientResults />
        <Portfolio />
        <Stack />
        <Audience />
        <Process />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
