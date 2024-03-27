import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AUB Outdoors Privacy Policy",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="AUB Outdoors is committed to protecting your privacy and ensuring the security of any personal information you provide. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you interact with our website and services."
      />
     <section id="privacy-policy" className="py-10 md:py-14 lg:py-22">
        <div className="container">
        <ul>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Data Collection and Usage</p>
              <p>
                We may collect personal information such as your name, 
                email address, phone number, and other relevant details when you register 
                for the event, subscribe to our newsletter, or participate in our activities. 
                This information is collected to facilitate your participation, provide updates, 
                and improve our services.
              </p>
              <p>
                We may also collect non-personal information, such as your IP address, 
                browser type, and usage data, for analytical and security purposes.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Data Sharing and Disclosure</p>
              <p>
                AUB Outdoors does not sell, trade, or rent personal information to third parties. 
                However, we may share your information with trusted service providers who assist 
                us in operating our website, delivering services, or conducting event-related activities 
                on our behalf. These third parties are obligated to maintain the confidentiality of your 
                information and may not use it for any other purpose.
              </p>
              <p>
                We may also disclose your information when required by law or to protect our rights, 
                property, or safety, as well as that of our employees, attendees, or others.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Data Security</p>
              <p>
                AUB Outdoors implements appropriate technical and organizational measures 
                to protect your personal information from unauthorized access, disclosure, 
                alteration, or destruction. However, no method of transmission over the internet or 
                electronic storage is entirely secure, and we cannot guarantee absolute security.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Data Retention</p>
              <p>
                We will retain your personal information only for as long as necessary to fulfill 
                the purposes for which it was collected, unless a longer retention period is required 
                or permitted by law.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Your Rights</p>
              <p> 
                You have the right to access, rectify, or delete your personal information held by AUB Outdoors. 
                You may also object to the processing of your personal data or request that we restrict the 
                processing of your information.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Changes to the Privacy Policy</p>
              <p>
                AUB Outdoors reserves the right to modify or update this Privacy Policy at any time. 
                Any changes will be effective upon posting the revised policy on our website.
              </p>
            </li>
          </ul>
        </div>
    </section>
    </>
  );
};

export default PrivacyPolicyPage;