import { useState } from 'react';
import type { NextPage } from 'next';

import ReferralForm from '../components/ReferralForm';
import { Patient, emptyPatient } from '../lib/types';


const Main: NextPage = () => {
  const [patients, setPatients] = useState<Patient[]>([emptyPatient(1)]);
  const [submitted, setSubmitted] = useState(false);

  return <ReferralForm patients={patients} submitted={submitted} setSubmitted={setSubmitted} />
}

export default Main;