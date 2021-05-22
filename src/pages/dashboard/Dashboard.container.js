import React from 'react';
import Dashboard from './Dashboard';

const DashboardContainer = () => {
  const data = '123';
  console.log(data);
  return <Dashboard data={data} />;
};

export default DashboardContainer;
