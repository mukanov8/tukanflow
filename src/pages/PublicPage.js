import React from 'react';
import { Redirect } from 'react-router-dom';

const PublicPage = () => <Redirect to={{ pathname: '/dashboard' }} />;

export default PublicPage;
