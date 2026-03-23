"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import WaveTicker from "./WaveTicker";
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from "lucide-react";
import { div } from "framer-motion/client";

const Footer = () => {
  const quickLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Blogs", href: "/blogs" },
    { name: "Our Story", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const supportLinks = [
    { name: "Terms of Service", href: "/policies/terms" },
    { name: "Shipping Policy", href: "/policies/shipping" },
    { name: "Refund Policy", href: "/policies/refund" },
    { name: "Privacy Policy", href: "/policies/privacy" },
  ];

  const socialIcons = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="relative bg-[#6c3518] text-[#f5f1e6] font-sans pt-32 pb-16 overflow-hidden">
      {/* 🌪️ Premium Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[30%] -left-[10%] w-[70%] h-[100%] bg-[#6C3518] rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[90%] bg-[#6C3518] rounded-full blur-[130px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24"
        >
          {/* COLUMN 1: BRAND IDENTITY */}
          <motion.div variants={itemVariants} className="space-y-10">
            <Link href="/" className="inline-block relative w-44 h-11 group overflow-hidden">
              <div className="relative w-full h-full brightness-0 invert opacity-90 group-hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/images/logo.png" 
                  alt="INDEVIE" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </Link>
            
            <p className="text-[16px] font-light leading-relaxed text-[#f5f1e6]/70 max-w-[280px] tracking-wide">
              Pure botanical treasures handcrafted with ancient wisdom to nurture your modern radiance, naturally and mindfully.
            </p>

            {/* Micro-Brand Detail */}
            {/* <div className="flex items-center gap-3 opacity-30 pt-4">
               <div className="h-[1px] w-8 bg-[#f5f1e6]" />
               <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Est. 2024</span>
            </div> */}
          </motion.div>

          {/* COLUMN 2: QUICK LINKS */}
          <motion.div variants={itemVariants} className="space-y-10 lg:pl-8">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/30">
              Explore
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group relative inline-block text-[15px] font-light tracking-wide text-[#f5f1e6]/80 hover:text-white transition-colors py-1"
                  >
                    <span>{link.name}</span>
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: SUPPORTS */}
          <motion.div variants={itemVariants} className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/30">
              Services
            </h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group relative inline-block text-[15px] font-light tracking-wide text-[#f5f1e6]/80 hover:text-white transition-colors py-1"
                  >
                    <span>{link.name}</span>
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4: CONNECT (The Reveal) */}
          <motion.div variants={itemVariants} className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/30">
              Connect
            </h4>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="flex items-start gap-4 group cursor-default">
                  <MapPin size={16} className="mt-1 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[14px] font-light leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">12, Ritual House, Pink City, Jaipur, India</span>
                </p>
                <div className="space-y-1">
                  <a href="mailto:care@indevie.in" className="flex items-center gap-4 group w-fit">
                    <Mail size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[14px] font-light opacity-60 group-hover:opacity-100 transition-opacity border-b border-transparent group-hover:border-white/20 pb-0.5">care@indevie.in</span>
                  </a>
                </div>
                <div>
                   <a href="tel:+919876543210" className="flex items-center gap-4 group w-fit">
                    <Phone size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[14px] font-light opacity-60 group-hover:opacity-100 transition-opacity">+91 98765 43210</span>
                  </a>
                </div>
              </div>

              {/* Sophisticated Social Icons */}
              <div className="flex gap-4 pt-4">
                {socialIcons.map(({ Icon, href, label }) => (
                  <Link 
                    key={label} 
                    href={href}
                    className="w-11 h-11 rounded-lg border border-white/5 flex items-center justify-center hover:border-white/20 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden"
                    aria-label={label}
                  >
                    <Icon size={18} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ☕ BOTTOM BAR: THE SIGNATURE */}
        <div className="pt-5 border-t  border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            {/* <p className="text-[10px] uppercase tracking-[0.4em] font-light opacity-30 italic">
              Cultivating Serenity, One Ritual At A Time.
            </p> */}
            <p className="text-[10px] uppercase tracking-[0.4em] font-light opacity-30">
              © {new Date().getFullYear()} All rights are reserved for INDEVIE Beauty
            </p>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-bold"
          >
            <span className="opacity-40 group-hover:opacity-100 transition-opacity">Back to top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#f5f1e6] group-hover:text-black transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(245,241,230,0.2)]">
               <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:rotate-45" />
            </div>
          </button>
        </div>
      </div>
      
      {/* 🎭 GIANT DECORATIVE SIGNATURE */}
      {/* <div className="absolute -bottom-[5vw] left-0 w-full opacity-[0.03] select-none pointer-events-none text-center transform translate-y-1/4">
         <h2 className="text-[25vw] font-serif italic tracking-tighter leading-none whitespace-nowrap">
           Indevie
         </h2>
      </div> */}
      <WaveTicker/>
    </footer>
  );
};

export default Footer;
