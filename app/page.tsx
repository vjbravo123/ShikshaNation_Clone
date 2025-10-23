import JeetSarthiBenefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import ExperienceSection from "@/components/ExperienceSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JeetSarthiMentorship from "@/components/MentorshipSection";
import SuccessStories from "@/components/SucessStories";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <ExperienceSection />
      <JeetSarthiMentorship />
      <JeetSarthiBenefits />
      <SuccessStories />
      <ContactForm />
    </>
  );
}
