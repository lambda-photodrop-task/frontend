import React from 'react';
import { usePhotographerStore } from '../../../store/photographerStore';

const PhotographerDashboard = () => {
  const { photographer } = usePhotographerStore((state) => state);

  return <div>Photographer dashboard</div>;
};

export default PhotographerDashboard;
