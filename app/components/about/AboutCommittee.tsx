import React from 'react';
import { fetchCommitteeInfo } from "../api/fetchCommitteeInfo";
import CommitteeMembers from './CommitteeMembers';

const displayedRoles = [
  "President",
  "Vice President",
  "Secretary",
  "Treasurer",
  "Head of Technical",
  "Head of Publicity",
  "Head of Events"
];

const AboutCommittee: React.FC = async () => {
  const members = await fetchCommitteeInfo();
  const filteredMembers = members.filter(member => displayedRoles.includes(member.role));

  // Sort the filteredMembers array based on the order of roles in displayedRoles
  const sortedMembers = filteredMembers.sort((a, b) => {
    return displayedRoles.indexOf(a.role) - displayedRoles.indexOf(b.role);
  });

  return <CommitteeMembers members={sortedMembers} />;
};

export default AboutCommittee;