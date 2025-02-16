import { fetchCommitteeInfo } from "../../components/api/fetchCommitteeInfo";
import AboutCommitteeCard from "./AboutCommitteeCard";

const displayedRoles = [
  "President",
  "Vice President",
  "Secretary",
  "Treasurer",
  "Head of Technical",
  "Head of Publicity",
  "Head of Events"
];

const AboutCommittee = async () => {
  const members = await fetchCommitteeInfo();
  const filteredMembers = members.filter(member => displayedRoles.includes(member.role));

  return <AboutCommitteeCard members={filteredMembers} />;
};

export default AboutCommittee;