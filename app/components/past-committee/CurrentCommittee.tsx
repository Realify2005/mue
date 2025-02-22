import React from 'react';
import { fetchCommitteeInfo } from "../api/fetchCommitteeInfo";
import CurrentCommitteeMembers from './CurrentCommitteeMembers';

const CurrentCommittee: React.FC = async () => {
  const members = await fetchCommitteeInfo();
  return <CurrentCommitteeMembers members={members} />;
};

export default CurrentCommittee;