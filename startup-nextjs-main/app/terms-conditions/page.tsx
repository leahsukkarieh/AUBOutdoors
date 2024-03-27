import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "AUB Outdoors Terms and Conditions",
};

const TermsConditionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms and Conditions"
        description="By accessing and using the AUB Outdoors website, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding."
      />
     <section id="terms-conditions" className="py-10 md:py-14 lg:py-22">
        <div className="container">
          <ul>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Website Usage</p>
              <p>
                The AUB Outdoors website and its content are provided for informational purposes only. 
                While we strive to ensure the accuracy of the information presented, we cannot
                guarantee its completeness or suitability for your specific purposes.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Intellectual Property</p>
              <p>
                All content on the AUB Outdoors website, including text, graphics, logos, images,  
                and software, is the property of AUB Outdoors or its respective owners and is 
                protected by applicable intellectual property laws. 
                You may not modify, copy, distribute, transmit, display, reproduce, publish, license, 
                create derivative works from, transfer, or sell any content obtained from our website 
                without prior written consent.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Third-Party Links</p>
              <p>
                Our website may contain links to third-party websites or resources. 
                AUB Outdoors does not endorse or assume any responsibility for the content, privacy policies, 
                or practices of these third-party websites. You access and use them at your own risk.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">User Conduct</p>
              <p>
                By using our website, you agree to comply with all applicable laws and regulations. 
                You are prohibited from using our website for any unlawful or unauthorized purposes, 
                including but not limited to transmitting viruses, harmful code, or engaging in any 
                activities that may disrupt or interfere with the website{`'`}s operation.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Limitation of Liability</p>
              <p> 
                AUB Outdoors, its affiliates, officers, directors, employees, or agents shall not be 
                liable for any direct, indirect, incidental, consequential, or punitive damages arising 
                from your use of our website or any linked third-party websites.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Governing Law</p>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance 
                with the laws of Lebanon, without giving effect to any principles of conflicts of law.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Changes to Terms and Conditions</p>
              <p>
                AUB Outdoors reserves the right to modify or update these Terms and Conditions at any time 
                without prior notice. Your continued use of our website after any modifications constitutes 
                your acceptance of the revised Terms and Conditions.
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold text-blue text-md">Contact Us</p>
                If you have any questions or concerns regarding our Privacy Policy or Terms and Conditions, 
                please contact us at outdoors@aub.edu.lb
            </li>
          </ul>
        </div>
    </section>
    </>
  );
};

export default TermsConditionsPage;