import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

export interface BenefitCardItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  positionClass: string;
  delayClass?: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: React.ReactNode;
}
