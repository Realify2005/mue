import Image from "next/image";
import { CommitteeMember } from "../interfaces/CommitteeMember";
  
interface AboutCommitteeCardProps {
  members: CommitteeMember[];
}

const revalidate = 0;

const AboutCommitteeCard: React.FC<AboutCommitteeCardProps> = ({ members }) => {
  return (
    <div className="flex flex-col items-center bg-MUE-dark-blue py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12">
        Meet Your 2025 Committee
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20 max-w-5xl">
            {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                />
                </div>
                <p className="mt-4 text-MUE-white font-bold">{member.name}</p>
                <p className="text-MUE-sky-blue italic">{member.role}</p>
            </div>
            ))}
        </div>
    </div>
  );
};

export default AboutCommitteeCard;
