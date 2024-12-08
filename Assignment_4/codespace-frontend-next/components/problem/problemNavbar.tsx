'use client';
// app/problems/[problemId]/ProblemNavbar.tsx
import { useState } from 'react';
import classes from './problemNavbar.module.css';

export default function ProblemNavbar() {
  const [activeTab, setActiveTab] = useState('Description');
  const tabs = ['Description', 'Discussion', 'Submission', 'Hint'];

  return (
    <div className={`col ${classes.problemNavbar} mx-2`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`btn ${activeTab === tab ? classes.problemNavbarActive : ''}`}
          onClick={() => setActiveTab(tab)}>
          {tab}
        </button>
      ))}
    </div>
  );
}