import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {FiMail} from "react-icons/fi"

const Footer: React.FC = () => {
  const socialLinks = [
    { href: '#', icon: FaFacebook, label: 'Facebook' },
    { href: '#', icon: FaInstagram, label: 'Instagram' },
    { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
    { href: '#', icon: FiMail, label: 'Email' },
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
        <p className="text-gray-600 text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[600px]">
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
        
        <div className="w-full max-w-full border-t border-gray-200"></div>
        
        <p className="text-gray-600 text-sm">
        Copyright © {new Date().getFullYear()}
      </p>
    </footer>

  );
};

export default Footer;