import React from 'react';

export interface TestItem {
  name: string;
  subtitle?: string;
  evaluates: string;
  author: string;
  levels: string;
  time: string;
}

export interface TestCategory {
  id: string;
  title: string;
  description: string;
  tests: TestItem[];
}

export interface Feature {
  title: string;
  icon: React.ReactNode;
}