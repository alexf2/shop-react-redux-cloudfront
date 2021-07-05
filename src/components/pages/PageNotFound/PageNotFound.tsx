import React from 'react';
import {LargeError} from './components/LargeError';

export const PageNotFound = () => (
    <LargeError header='404' comment={LargeError.msg404} />
);
