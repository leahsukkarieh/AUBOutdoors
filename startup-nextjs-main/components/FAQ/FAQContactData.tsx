import { FAQ } from "@/types/faq";

const FAQContactData: FAQ[] = [
  {
    id: 1,
    question: 'How can I contact the AUB Outdoors team for inquiries or assistance?',
    answer: 'The AUB Outdoors team can be contacted through outdoors@aub.edu.lb. Inquiries, assistance requests, or feedback can be submitted through this channel.',
  },
  {
    id: 2,
    question: 'How can I provide feedback or suggestions for improving future AUB Outdoors events?',
    answer: 'AUB Outdoors values feedback from attendees to continually improve the event experience. Feedback forms will be available on-site and online, or attendees can directly contact the organizers through outdoors@aub.edu.lb.',
  },
  {
    id: 3,
    question: 'How can I stay updated on the latest news and announcements about AUB Outdoors?',
    answer: "Stay updated on the latest news, announcements, and information about AUB Outdoors by following the event's official social media channels and visiting the website regularly.",
    socials: true,
  },
];
export default FAQContactData;