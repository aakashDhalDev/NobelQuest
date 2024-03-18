import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import { Results } from './Results';
import { Credits } from './Credits';

export const Routings = () => {
  return (
    <div className='p-4'>
        <Routes>
            <Route path="/" element={<Navigate to="/search" />} />
            <Route path="/search" element={<Results />} />
            <Route path="/credits" element={<Credits />} />
        </Routes>
    </div>
  )
}
