import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleFAQ from "@/components/FAQ/SingleFAQ";
import FAQAboutData from "@/components/FAQ/FAQAboutData";
import { FAQ } from "@/types/faq";
import { Metadata } from "next";
import FAQTicketsData from "@/components/FAQ/FAQTicketsData";
import FAQSponsorshipData from "@/components/FAQ/FAQSponsorsData";
import FAQEntertainmentData from "@/components/FAQ/FAQEntertainmentData";
import FAQAdmissionData from "@/components/FAQ/FAQAdmissionData";
import FAQFoodData from "@/components/FAQ/FAQFoodData";
import FAQSafetyData from "@/components/FAQ/FAQSafetyData";
import FAQArtistsData from "@/components/FAQ/FAQArtistsData";
import FAQFacilitiesData from "@/components/FAQ/FAQFacilitiesData";
import FAQPolicyData from "@/components/FAQ/FAQPolicyData";
import FAQContactData from "@/components/FAQ/FAQContactData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: 'Frequently asked questions about AUB Outdoors answered.'
};

const FAQPage = () => {

    const proceedsFAQ : FAQ = {
        id: 1,
        question: 'How are the proceeds from AUB Outdoors used?',
        answer: 'A portion of the proceeds from AUB Outdoors is allocated towards providing financial aid to AUB students facing hardships, enabling them to pursue their academic dreams. Additionally, funds may contribute to campus renovation projects to enhance the learning environment.',
    }

    const inclusivityFAQ : FAQ =   {
        id: 1,
        question: 'How does AUB Outdoors ensure inclusivity and representation of diverse cultures and backgrounds?',
        answer: 'Inclusivity and representation of diverse cultures and backgrounds are core values of AUB Outdoors. The event features a diverse range of performances, cuisines, and activities that showcase the richness of different cultures, ensuring all attendees feel welcomed and represented.',
    }

    const cancelFAQ : FAQ = {
        id: 1,
        question: 'What is the cancellation or rescheduling policy in case of inclement weather or unforeseen circumstances?',
        answer: 'In the event of inclement weather or unforeseen circumstances that may impact AUB Outdoors, the organizers will communicate any cancellations, rescheduling, or contingency plans through the event website and social media channels.',
    }

    const merchFAQ : FAQ = {
        id: 1,
        question: 'Are there any merchandise or memorabilia available for purchase related to AUB Outdoors?',
        answer: 'Official AUB Outdoors merchandise will be available for purchase during the event and viewed through the event website, allowing attendees to take home mementos of their experience.'
    }

    const themeFAQ : FAQ = {
        id: 2,
        question: "What is the theme for this year's AUB Outdoors event?",
        answer: "The theme for this year's AUB Outdoors event is 'Disco Fever.'",
    }

  return (
    <>
      <Breadcrumb
        pageName="Frequently Asked Questions"
        description="Welcome to our FAQ page! Here, you'll find answers to commonly asked questions about AUB Outdoors. Browse through the categories below to find the answers you need quickly and easily."
      />
      <section className="py-8">
        <div className="container">

          <h1 className="text-xl font-bold text-blue mb-4">About Us</h1>
          {FAQAboutData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Proceeds</h1>
          <SingleFAQ faq={proceedsFAQ} />

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Admission</h1>
          {FAQAdmissionData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Tickets</h1>
          <p className="text-base my-4">
            Click{" "}
            <Link
              href="https://tickit.co/events/OcCmExDEjZr2FNm5HY7H"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue underline"
            >
              here
            </Link>
            {" "}to buy your tickets for AUB Outdoors 2024!
          </p>
          {FAQTicketsData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Sponsors & Partners</h1>
          {FAQSponsorshipData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Entertainment & Activities</h1>
          {FAQEntertainmentData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Food & Beverages</h1>
          {FAQFoodData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Safety, Security, & Sustainability</h1>
          {FAQSafetyData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Inclusivity</h1>
          <SingleFAQ faq={inclusivityFAQ} />

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Cancellation or Rescheduling</h1>
          <SingleFAQ faq={cancelFAQ} />

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Merchandise</h1>
          <p className="text-base my-4">
            Browse the AUB Outdoors 2024 merch{" "}
            <Link
              href="/merch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue underline"
            >
              here!
            </Link>
          </p>
          <SingleFAQ faq={merchFAQ} />

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Theme</h1>
          Discover the AUB Outdoors 2024 theme{" "}
            <Link
              href="/theme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue underline"
            >
              here.
            </Link>
          <SingleFAQ faq={themeFAQ} />

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Artists Lineup</h1>
          <p className="text-base my-4">
            Click{" "}
            <Link
              href="/lineup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue underline"
            >
              here
            </Link>
            {" "}to view the lineup for AUB Outdoors 2024!
          </p>
          {FAQArtistsData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">On-site Facilities</h1>
          {FAQFacilitiesData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Policy, Rules, & Regulations</h1>
          <p className="text-base my-4">
            Read more about the AUB Outdoors 2024 policy {" "}
            <Link
              href="/rules-regulations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue underline"
            >
              here.
            </Link>
          </p>
          {FAQPolicyData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}

          <h1 className="text-xl font-bold text-blue mb-4 mt-8">Contact</h1>
          {FAQContactData.map((faq) => (
            <SingleFAQ key={faq.id} faq={faq} />
          ))}

        </div>
      </section>
    </>
  );
};

export default FAQPage;