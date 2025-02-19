import React from 'react';
import { fetchCommitteeInfo } from "../api/fetchCommitteeInfo";
import CommitteeMembers from './CommitteeMembers';

const AboutCommittee: React.FC = async () => {
  const members = await fetchCommitteeInfo();
  return <CommitteeMembers members={members} />;
};

export default AboutCommittee;