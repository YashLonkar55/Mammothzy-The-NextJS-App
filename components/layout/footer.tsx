import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="w-full py-8 flex flex-col items-center gap-6">
      <div className="w-full border-t border-gray-100/60 mb-4"></div>
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/images/mammothzy-logo.png"
          alt="Mammothzy Logo"
          width={180}
          height={75}
        />
        <p className="text-gray-600 text-center max-w-md">
          Marketplace for searching, filtering and instantly booking team activities
        </p>
      </div>
      
      <div className="flex gap-6">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Icon className="h-6 w-6" />
            </Link>
          );
        })}
      </div>
      
      <p className="text-gray-600 text-sm">
        Copyright © {new Date().getFullYear()}
      </p>
    </footer>

  );
};

export default Footer;