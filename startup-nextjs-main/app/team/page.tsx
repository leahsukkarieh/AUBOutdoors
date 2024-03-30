import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleMember from "@/components/Team/SingleMember";
import cadData from "@/components/Team/cadData";
import ceData from "@/components/Team/ceData";
import creData from "@/components/Team/creData";
import directorsData from "@/components/Team/directorsData";
import finData from "@/components/Team/finData";
import pmData from "@/components/Team/pmData";
import safData from "@/components/Team/safData";
import secData from "@/components/Team/secData";
import secretariesData from "@/components/Team/secretariesData";
import { Member } from "@/types/member";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "AUB Outdoors Cabinet: 2024",
};

const TeamPage = () => {

    const ceo : Member = {
        id: 1,
        name: 'Ahmad Konainah',
        position: 'Chief Executive Officer (CEO)',
        image: 'https://ik.imagekit.io/nh7xswppky/team/CEO.jpeg?updatedAt=1711668673029',
    }

    const ga : Member = {
        id: 1,
        name: 'Razan Tarabay',
        position: 'Games and Activities Manager',
        image: 'https://ik.imagekit.io/nh7xswppky/team/ga.jpeg?updatedAt=1711668675731', 
    }

    const fd : Member = {
        id: 1,
        name: 'Elsa Armache',
        position: 'Food Manager',
        image: 'https://ik.imagekit.io/nh7xswppky/team/fd.jpeg?updatedAt=1711668673222', 
    }
    
  return (
    <>
      <Breadcrumb
        pageName="AUB Outdoors Cabinet 2024"
        description="Discover the dedicated team behind AUB Outdoors 2024! Get to know the passionate individuals working tirelessly to bring the Outdoors 2024 vision to life and create unforgettable experiences for all attendees."
      />
      <section 
        className="h-auto py-8"
        style={{fontFamily: "Aptos, sans-serif"}}
      >
        <div className='container border-blue border-t-4 pt-4'>
            <div className="-mx-4 flex flex-wrap justify-center">
                <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5">
                    <SingleMember member={ceo} />
                </div>
            </div>
            <h2 className="text-blue text-center font-semibold text-3xl mt-14">Directors</h2>
            <div className="-mx-4 flex flex-wrap justify-center">
                {directorsData.map((member) => (
                    <div
                        key={member.id}
                        className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
                    >
                        <SingleMember member={member} />
                    </div>
                ))}
            </div>
            <h2 className="text-blue text-center font-semibold text-3xl mt-14">Secretaries</h2>
            <div className="-mx-4 flex flex-wrap justify-center">
                {secretariesData.map((member) => (
                    <div
                        key={member.id}
                        className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
                    >
                        <SingleMember member={member} />
                    </div>
                ))}
            </div>
            <h2 className="text-blue text-center font-semibold text-3xl mt-14">Partnerships & Marketing Team</h2>
            <div className="-mx-4 flex flex-wrap justify-center">
                {pmData.map((member) => (
                    <div
                        key={member.id}
                        className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
                    >
                        <SingleMember member={member} />
                    </div>
                ))}
            </div>
            <h2 className="text-blue text-center font-semibold text-3xl mt-14">Creative Team</h2>
            <div className="-mx-4 flex flex-wrap justify-center">
                {creData.map((member) => (
                    <div
                        key={member.id}
                        className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
                    >
                        <SingleMember member={member} />
                    </div>
                ))}
            </div>
            <h2 className="text-blue text-center font-semibold text-3xl mt-14">Concert & Entertainment Team</h2>
            <div className="-mx-4 flex flex-wrap justify-center">
                {ceData.map((member) => (
                    <div
                        key={member.id}
                        className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
                    >
                        <SingleMember member={member} />
                    </div>
                ))}
            </div>
            <h2 className="text-blue text-center font-semibold text-3xl mt-14">Construction & Architectural Design Team</h2>
            <div className="-mx-4 flex flex-wrap justify-center">
                {cadData.map((member) => (
                <div
                    key={member.id}
                    className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
                >
                    <SingleMember member={member} />
                </div>
                ))}
            </div>
            <h2 className="text-blue text-center font-semibold text-3xl mt-14">Finance Team</h2>
            <div className="-mx-4 flex flex-wrap justify-center">
                {finData.map((member) => (
                <div
                    key={member.id}
                    className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
                >
                    <SingleMember member={member} />
                </div>
                ))}
            </div>
            <h2 className="text-blue text-center font-semibold text-3xl mt-14">Games & Activities Team</h2>
            <div className="-mx-4 flex flex-wrap justify-center">
                <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5">
                    <SingleMember member={ga} />
                </div>
            </div>
            <h2 className="text-blue text-center font-semibold text-3xl mt-14">Food Team</h2>
            <div className="-mx-4 flex flex-wrap justify-center">
                <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5">
                    <SingleMember member={fd} />
                </div>
            </div>
            <h2 className="text-blue text-center font-semibold text-3xl mt-14">Safety Team</h2>
            <div className="-mx-4 flex flex-wrap justify-center">
                {safData.map((member) => (
                <div
                    key={member.id}
                    className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
                >
                    <SingleMember member={member} />
                </div>
                ))}
            </div>
            <h2 className="text-blue text-center font-semibold text-3xl mt-14">Security Team</h2>
            <div className="-mx-4 flex flex-wrap justify-center">
                {secData.map((member) => (
                <div
                    key={member.id}
                    className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-5"
                >
                    <SingleMember member={member} />
                </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
