import React from 'react';
import { Outlet } from 'react-router-dom';
import CommonLayout from './CommonLayout';

const RouterLayout = () => {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
};

export default RouterLayout;
