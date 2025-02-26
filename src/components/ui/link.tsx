'use client'
import Link3, { LinkProps } from 'next/link';
import { notifyNoInterNet } from '@/lib/utils';
import React from 'react';

interface Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">, LinkProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function Link({ disabled, children, onClick, ...props } : Props) {

  const handleOnclick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled || notifyNoInterNet()) {
      e.preventDefault();
    }
    onClick?.(e);
  }

  return (
    <Link3 onClick={handleOnclick} {...props}>
      {children}
    </Link3>
  );
}
