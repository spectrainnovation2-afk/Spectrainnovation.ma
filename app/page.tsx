"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, Mail, Phone, MapPin, Ear, TrendingUp, Handshake, Monitor, Volume2, Zap, Sparkles, Star, Award, MessageCircle, Menu, X, Linkedin, Youtube } from "lucide-react"

export default function SpectraLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState(false)
  // Modal state for service images
  const [modal, setModal] = useState<{ src: string; title: string } | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleReadMore = () => setIsReadMoreExpanded(!isReadMoreExpanded)
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  // Open modal for service image
  const openImageModal = (src: string, title: string) => setModal({ src, title })
  // Close modal
  const closeImageModal = () => setModal(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        closeImageModal()
      }
    }
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

 

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Cursor Effect - Adaptive */}
      <div 
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 transition-all duration-150"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
          transform: `scale(${isScrolled ? 1.5 : 1})`,
          background: '#000000',
          border: '2px solid #ffffff',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)'
        }}
      />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#ddbea9] rounded-full animate-float opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Bouton WhatsApp Fixe */}
      <a
        href="https://wa.me/212662604587"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300 group"
      >
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.888 3.488"/>
        </svg>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Contactez-nous sur WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
        </div>
        
        {/* Animation de pulsation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
      </a>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? "bg-black/95 backdrop-blur-md shadow-2xl border-b border-[#ddbea9]/20" 
            : "bg-black/70 backdrop-blur-sm shadow-lg"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="flex flex-col">
              <img src="/logo.png" alt="SPECTRA INNOVATION" className="w-40 h-auto" />
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {["ACCUEIL", "QUI SOMMES-NOUS", "NOS SERVICES", "SECTEURS D'ACTIVITÉ", "CONTACT"].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('é', 'e')}`} 
                className="relative text-white hover:text-[#ddbea9] transition-all duration-300 group py-2 px-3 font-medium"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  textShadow: '0 1px 3px rgba(0,0,0,0.5)'
                }}
                onClick={(e) => {
                  e.preventDefault()
                  const sectionMap: { [key: string]: string } = {
                    "ACCUEIL": "home",
                    "QUI SOMMES-NOUS": "about", 
                    "NOS SERVICES": "services",
                    "SECTEURS D'ACTIVITÉ": "sectors",
                    "CONTACT": "contact"
                  }
                  scrollToSection(sectionMap[item])
                }}
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ddbea9] to-[#c9a96e] group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-[#ddbea9] transition-colors duration-300 z-[110] relative p-2 rounded-lg bg-black/30 backdrop-blur-sm"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Menu Mobile - Utilisation des classes CSS personnalisées */}
        <div className={`mobile-menu-centered transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {/* Bouton fermer en haut à droite */}
          <button 
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-white hover:text-[#ddbea9] transition-colors duration-300 z-[110]"
          >
            
          </button>

          {/* Container principal avec classes personnalisées */}
          <div className="mobile-menu-content">
            {/* Logo */}
            <div className="mb-8">
              <img src="/logo.png" alt="SPECTRA INNOVATION" className="w-40 h-auto mx-auto" />
            </div>

            {/* Items du menu centrés */}
            <div className="space-y-6">
              {["ACCUEIL", "QUI SOMMES-NOUS", "NOS SERVICES", "SECTEURS D'ACTIVITÉ", "CONTACT"].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('é', 'e')}`} 
                  className="block text-2xl font-bold text-white hover:text-[#ddbea9] transition-all duration-300 transform hover:scale-110 text-center py-3"
                  onClick={(e) => {
                    e.preventDefault()
                    const sectionMap: { [key: string]: string } = {
                      "ACCUEIL": "home",
                      "QUI SOMMES-NOUS": "about", 
                      "NOS SERVICES": "services",
                      "SECTEURS D'ACTIVITÉ": "sectors",
                      "CONTACT": "contact"
                    }
                    scrollToSection(sectionMap[item])
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
            
            {/* Ligne décorative centrée */}
            <div className="w-32 h-1 bg-gradient-to-r from-[#ddbea9] to-[#c9a96e] rounded-full mt-8 mx-auto"></div>
            
            {/* Informations de contact centrées */}
            <div className="text-center mt-8">
              <p className="text-white/80 text-sm mb-2">Contactez-nous</p>
              <p className="text-[#ddbea9] font-semibold">+212 7 08 81 99 99</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Design moderne inspiré We brand */}
      <section id="home" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Animation de fond dynamique */}
        <div className="absolute inset-0">
          {/* Formes géométriques animées */}
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-[#ffe8d6]/20 to-transparent rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#ddbea9]/30 to-transparent rounded-full animate-bounce-slow blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-spin-slow"></div>
          
          {/* Lignes diagonales dynamiques */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffe8d6] to-transparent animate-shimmer"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[#ddbea9] to-transparent animate-shimmer" style={{ animationDelay: '2s' }}></div>
          
          {/* Particules flottantes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#ffe8d6] rounded-full animate-twinkle"
              style={{
                left: `${10 + i * 7}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`
              }}
            />
          ))}
        </div>

        {/* Contenu principal */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
          {/* Logo/Icône principale avec effet moderne */}
         
          
          {/* Titre principal avec effet typewriter moderne */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 leading-none tracking-tight">
              <span className="inline-block relative">
                SPECTRA
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-[#ffe8d6] to-[#ddbea9] transform origin-left scale-x-0 animate-expand-width" style={{ animationDelay: '1s' }}></div>
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#ffe8d6] tracking-wider italic">
              INNOVATION
            </h2>
          </div>

          {/* Sous-titre avec animation */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
                L'événementiel au service de vos ambitions
              </p>
              {/* Ligne décorative sous le sous-titre */}
              <div className="mt-6 flex justify-center">
                <svg width="200" height="4" viewBox="0 0 200 4" className="overflow-visible">
                  <path 
                    d="M10,2 Q50,0 100,2 T190,2" 
                    stroke="#baa99bff" 
                    strokeWidth="2" 
                    fill="none" 
                    className="animate-draw-line"
                    strokeLinecap="round"
                    style={{ animationDelay: '1.5s' }}
                  />
                </svg>
              </div>
            </div>
          </div>

         

          {/* Boutons d'action modernes */}
          

          
        </div>

        {/* Barre diagonale visible sur toute la page */}
        <div className="absolute bottom-30 left-0 w-screen overflow-visible pointer-events-none z-10">
          <div className="w-[300%] h-13 bg-white shadow-2xl transform -rotate-6 -translate-x-[33%] translate-y-6">
            <div className="flex items-center h-full px-8">
              <div className="whitespace-nowrap text-black font-black text-2xl tracking-wider animate-marquee-ultra-fast">
                INNOVATION & CRÉATIVITÉ   •   EXCELLENCE & EXPERTISE   •   ÉVÉNEMENTS SUR MESURE   •   SOLUTIONS TECHNIQUES COMPLÈTES   •   PASSION ÉVÉNEMENTIELLE   •   SPECTRA INNOVATION   •   CONNECTING BRANDS TO HUMANS • INNOVATION & CRÉATIVITÉ • EXCELLENCE & EXPERTISE • ÉVÉNEMENTS SUR MESURE • SOLUTIONS TECHNIQUES COMPLÈTES • PASSION ÉVÉNEMENTIELLE • SPECTRA INNOVATION • 
              </div>
            </div>
          </div>
        </div>

        {/* Overlay gradient moderne */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none"></div>
      </section>

      {/* Section Qui est SPECTRA - Style moderne #ffe8d6 */}
      <section className="py-24 bg-gradient-to-br from-[#ffe8d6] via-[#f5dcc7] to-[#ffe8d6] relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Éléments décoratifs */}
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-black/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-black/5 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-1/2 left-20 w-4 h-4 bg-black rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-black rounded-full animate-float opacity-20"></div>
          
          {/* Lignes décoratives ponctuées */}
          <div className="absolute bottom-20 left-10 w-32 h-1 border-t-4 border-dotted border-black/20"></div>
          <div className="absolute top-20 right-20 w-24 h-1 border-t-4 border-dotted border-black/20"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image avec style moderne */}
            <div className="lg:w-1/2 animate-slide-in-left">
              <div className="relative group">
                {/* Smartphone frame moderne */}
                <div className="relative bg-black rounded-[3rem] p-4 shadow-2xl transform group-hover:rotate-3 transition-transform duration-500">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <img
                      src="/service1.jpeg"
                      alt="Bureau SPECTRA INNOVATION moderne"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Reflet sur l'écran */}
                  <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-[2.5rem] pointer-events-none"></div>
                </div>
                
                {/* Éléments décoratifs autour de l'image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-black rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-black/80 rounded-full animate-bounce-slow"></div>
                <div className="absolute top-1/2 -left-8 w-16 h-1 border-t-4 border-dotted border-black/30"></div>
              </div>
            </div>

            {/* Contenu textuel */}
            <div className="lg:w-1/2 animate-slide-in-right">
              <div className="mb-8">
                <h2 className="text-5xl md:text-6xl font-black text-black mb-4 leading-tight">
                  QUI EST 
                  <span className="italic block">SPECTRA ?</span>
                </h2>
                <div className="w-20 h-1 bg-black"></div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-black font-medium leading-relaxed">
                  <span className="font-black text-2xl">SPECTRA INNOVATION</span> est une agence de conseil en communication stratégique et créative pilotée par des experts de la marque.
                </p>
                
                

                {/* Statistiques en style moderne */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-black text-black mb-2">500+</div>
                    <div className="text-sm text-black/70 font-medium">ÉVÉNEMENTS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-black mb-2">10+</div>
                    <div className="text-sm text-black/70 font-medium">ANNÉES</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-black mb-2">100%</div>
                    <div className="text-sm text-black/70 font-medium">SATISFACTION</div>
                  </div>
                </div>

                <Button 
                  onClick={toggleReadMore}
                  className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-xl mt-8 group cursor-pointer"
                >
                  <span className="flex items-center">
                    {isReadMoreExpanded ? 'Voir Moins' : 'Lire Plus'}
                    <div className="ml-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className={`text-black text-sm transition-transform duration-300 ${isReadMoreExpanded ? 'rotate-180' : ''}`}>
                        {isReadMoreExpanded ? '↑' : '→'}
                      </span>
                    </div>
                  </span>
                </Button>

                {/* Contenu extensible avec animation */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isReadMoreExpanded ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-black/10">
                    <h4 className="text-2xl font-black text-black mb-4">Notre Histoire</h4>
                    <p className="text-black/80 leading-relaxed mb-4">
                      Depuis plus de 10 ans, <strong>SPECTRA INNOVATION</strong> accompagne les entreprises dans la réalisation de leurs événements les plus ambitieux. Notre expertise technique et notre passion pour l'innovation nous permettent de transformer chaque projet en une expérience mémorable.
                    </p>
                    <p className="text-black/80 leading-relaxed mb-4">
                      Nous combinons <strong>créativité</strong>, <strong>technologie de pointe</strong> et <strong>service personnalisé</strong> pour offrir des solutions sur mesure qui dépassent les attentes de nos clients.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-black/5 rounded-xl p-4">
                        <h5 className="font-bold text-black mb-2">🎯 Notre Mission</h5>
                        <p className="text-sm text-black/70">Connecter les marques aux humains à travers des expériences événementielles exceptionnelles.</p>
                      </div>
                      <div className="bg-black/5 rounded-xl p-4">
                        <h5 className="font-bold text-black mb-2">🚀 Notre Vision</h5>
                        <p className="text-sm text-black/70">Être le partenaire de référence pour l'innovation événementielle au Maroc et en Afrique.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Approche Section - Design horizontal exact de l'image */}
      <section id="notre-approche" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image à gauche - Bureau moderne avec logo We brand */}
            <div className="lg:w-1/2 animate-slide-in-left">
              <div className="relative group">
                <img
                  src="/service11.jpeg"
                  alt="Bureau moderne We brand - SPECTRA INNOVATION"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Logo We brand overlay - exactement comme dans l'image */}
               
              </div>
            </div>

            {/* Contenu à droite - Notre Approche avec design exact */}
            <div className="lg:w-1/2 animate-slide-in-right">
              {/* Titre principal avec ligne jaune stylée */}
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-black text-black mb-4 leading-tight italic">
                  NOTRE APPROCHE
                </h2>
                {/* Ligne jaune stylée avec effet pinceau comme dans l'image */}
                <div className="relative">
                  <img src="/service1.jpegg" alt="Ligne jaune stylée" className="absolute inset-0 w-full h-full" />
                </div>
              </div>

              {/* Les 3 cartes jaunes HORIZONTALES comme dans l'image */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Carte #3 TRIBE BRAND PERSONALITY */}
                <div className="bg-gradient-to-br from-[#ffe8d6] to-[#f5dcc7] rounded-3xl p-6 relative overflow-hidden transform hover:scale-105 hover:-rotate-2 transition-all duration-500 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {/* Cercles décoratifs comme dans l'image */}
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#f5dcc7]/50 rounded-full animate-pulse"></div>
                  <div className="absolute -left-2 -bottom-2 w-12 h-12 bg-[#ead5bd]/40 rounded-full animate-bounce-slow"></div>
                  <div className="absolute right-2 bottom-2 w-8 h-8 bg-[#ead5bd]/50 rounded-full animate-float"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-lg font-black text-black mb-4 relative">
                      #3 TRIBE BRAND
                      <span className="block relative">
                        PERSONALITY
                        {/* Ligne stylée sous PERSONALITY */}
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-black/30 transform -skew-x-12"></div>
                      </span>
                    </h3>
                    <p className="text-sm leading-relaxed font-medium text-black">
                      Définir pour la marque une personnalité cohérente avec les membres de la tribu pour initier le contact et la connexion
                    </p>
                  </div>
                </div>

                {/* Carte #4 PURPOSE ADVOCACY */}
                <div className="bg-gradient-to-br from-[#ffe8d6] to-[#f5dcc7] rounded-3xl p-6 relative overflow-hidden transform hover:scale-105 hover:rotate-2 transition-all duration-500 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  {/* Cercles décoratifs comme dans l'image */}
                  <div className="absolute -left-3 -top-3 w-18 h-18 bg-[#f5dcc7]/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-[#ead5bd]/40 rounded-full animate-bounce-slow"></div>
                  <div className="absolute left-3 bottom-3 w-10 h-10 bg-[#ead5bd]/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-lg font-black text-black mb-4 relative">
                      #4 PURPOSE
                      <span className="block relative">
                        ADVOCACY
                        {/* Cercle stylé autour d'ADVOCACY */}
                        <div className="absolute -top-1 -left-1 w-full h-6 border-2 border-black/20 rounded-full transform rotate-3"></div>
                      </span>
                    </h3>
                    <p className="text-sm leading-relaxed font-medium text-black">
                      Initier la discussion autour du combat et en devenir leader
                    </p>
                  </div>
                </div>

                {/* Carte #1 TRIBE BEHAVIOR */}
                <div className="bg-gradient-to-br from-[#ffe8d6] to-[#f5dcc7] rounded-3xl p-6 relative overflow-hidden transform hover:scale-105 hover:-rotate-1 transition-all duration-500 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  {/* Cercles décoratifs comme dans l'image */}
                  <div className="absolute -right-5 -top-5 w-24 h-24 bg-[#f5dcc7]/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute -left-4 -bottom-4 w-18 h-18 bg-[#ead5bd]/40 rounded-full animate-bounce-slow"></div>
                  <div className="absolute right-4 bottom-6 w-6 h-6 bg-[#ead5bd]/60 rounded-full animate-float"></div>
                  <div className="absolute left-6 top-8 w-8 h-8 bg-[#ead5bd]/50 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-lg font-black text-black mb-4 relative">
                      #1 TRIBE
                      <span className="block relative">
                        BEHAVIOR
                        {/* Ligne ondulée stylée sous BEHAVIOR */}
                        <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8">
                          <path d="M0,4 Q25,0 50,4 T100,4" stroke="rgba(0,0,0,0.3)" strokeWidth="2" fill="none"/>
                        </svg>
                      </span>
                    </h3>
                    <p className="text-sm leading-relaxed font-medium text-black">
                      Comprendre le comportement des membres de la tribu, leurs passions, leurs revendications, leur personnalité...
                    </p>
                  </div>
                </div>
              </div>

              {/* Indicateurs de pagination exactement comme dans l'image */}
              <div className="flex justify-center mt-8 space-x-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full opacity-50 animate-pulse"></div>
                <div className="w-8 h-3 bg-[#ffe8d6] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs Section - Style moderne avec lignes et cercles */}
      <section className="py-24 bg-gradient-to-br from-[#ffe8d6] via-[#f5dcc7] to-[#ffe8d6] relative overflow-hidden">
        {/* Éléments décoratifs de fond modernes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-black/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-black/5 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 border-2 border-black/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-black/10 rounded-full animate-float"></div>
          
          {/* Lignes décoratives ponctuées */}
          <div className="absolute bottom-20 left-16 w-40 h-1 border-t-4 border-dotted border-black/20"></div>
          <div className="absolute top-20 right-20 w-32 h-1 border-t-4 border-dotted border-black/30"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Titre principal avec ligne stylée */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-6 leading-tight italic animate-fade-in-up">
              NOS VALEURS
            </h2>
            {/* Ligne stylée ondulée sous le titre */}
            <div className="flex justify-center">
              <svg width="350" height="20" viewBox="0 0 350 20" className="overflow-visible">
                <path 
                  d="M20,12 Q80,4 160,14 T280,8 T330,12" 
                  stroke="#000000" 
                  strokeWidth="6" 
                  fill="none" 
                  className="animate-draw-line"
                  strokeLinecap="round"
                  style={{ filter: 'url(#roughPaper)' }}
                />
                <defs>
                  <filter id="roughPaper">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* Grille des 3 valeurs avec style moderne */}
          <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {/* CRÉATIVITÉ */}
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-10">
                {/* Cercle principal avec icône */}
                <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl relative">
                  <Ear className="h-16 w-16 text-[#ffe8d6]" />
                  {/* Cercles décoratifs autour */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 border-4 border-black/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-black/20 rounded-full animate-bounce-slow"></div>
                </div>
                {/* Effet ping modernisé */}
                <div className="absolute inset-0 w-32 h-32 bg-black/10 rounded-full mx-auto animate-ping opacity-50"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-black text-black mb-6 group-hover:text-gray-800 transition-colors relative">
                  CRÉATIVITÉ
                  {/* Ligne soulignée stylée */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-black transform -skew-x-12"></div>
                </h3>
              </div>
              
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden">
                {/* Cercles décoratifs sur la card */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-black/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-black/10 rounded-full animate-float"></div>
                
                <p className="text-black text-lg leading-relaxed relative z-10">
                  Nous façonnons des 
                  <span className="font-black bg-black/20 px-2 py-1 rounded-lg mx-1 relative">
                    expériences mémorables
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-black rounded-full"></div>
                  </span>
                  en imaginant, orchestrant et sublimant chaque détail de vos événements.
                </p>
              </div>
            </div>

            {/* EXCELLENCE */}
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative mb-10">
                {/* Cercle principal avec icône */}
                <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl relative">
                  <TrendingUp className="h-16 w-16 text-[#ffe8d6]" />
                  {/* Cercles décoratifs autour */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 border-3 border-black/30 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-black/10 rounded-full animate-bounce-slow"></div>
                </div>
                {/* Effet ping modernisé */}
                <div className="absolute inset-0 w-32 h-32 bg-black/10 rounded-full mx-auto animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-black text-black mb-6 group-hover:text-gray-800 transition-colors relative">
                  EXCELLENCE
                  {/* Cercle autour du mot */}
                  <div className="absolute -top-2 -left-2 w-full h-12 border-2 border-black/20 rounded-full transform rotate-6 animate-pulse"></div>
                </h3>
              </div>
              
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden">
                {/* Cercles décoratifs sur la card */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-black/15 rounded-full animate-spin-slow"></div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-black/20 rounded-full animate-pulse"></div>
                
                <p className="text-black text-lg leading-relaxed relative z-10">
                  Notre engagement ne se limite pas à la planification, nous vous garantissons une 
                  <span className="font-black bg-black/20 px-2 py-1 rounded-lg mx-1 relative">
                    diversité de prestations
                    <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8">
                      <path d="M0,4 Q25,0 50,4 T100,4" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none"/>
                    </svg>
                  </span>
                  pour un événement exceptionnel.
                </p>
              </div>
            </div>

            {/* PROXIMITÉ */}
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="relative mb-10">
                {/* Cercle principal avec icône */}
                <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl relative">
                  <Handshake className="h-16 w-16 text-[#ffe8d6]" />
                  {/* Cercles décoratifs autour */}
                  <div className="absolute -top-5 -right-2 w-16 h-16 border-2 border-black/20 rounded-full animate-float"></div>
                  <div className="absolute -bottom-1 -left-3 w-6 h-6 bg-black/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-2 -right-5 w-8 h-8 bg-black/15 rounded-full animate-bounce-slow"></div>
                </div>
                {/* Effet ping modernisé */}
                <div className="absolute inset-0 w-32 h-32 bg-black/10 rounded-full mx-auto animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-black text-black mb-6 group-hover:text-gray-800 transition-colors relative">
                  PROXIMITÉ
                  {/* Ligne ondulée sous le mot */}
                  <svg className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-4" viewBox="0 0 100 12">
                    <path d="M0,6 Q25,2 50,6 T100,6" stroke="rgba(0,0,0,0.4)" strokeWidth="3" fill="none"/>
                  </svg>
                </h3>
              </div>
              
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden">
                {/* Cercles décoratifs sur la card */}
                <div className="absolute -top-4 -right-2 w-14 h-14 bg-black/10 rounded-full animate-bounce-slow"></div>
                <div className="absolute -bottom-1 -left-3 w-6 h-6 bg-black/20 rounded-full animate-float"></div>
                
                <p className="text-black text-lg leading-relaxed relative z-10">
                  Chaque projet pour nous est une 
                  <span className="font-black bg-black/20 px-2 py-1 rounded-lg mx-1 relative">
                    opportunité unique
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-black rounded-full"></div>
                  </span>
                  de créer des souvenirs inoubliables, entièrement adapté à vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services Unifiée - Design moderne avec lignes et cercles */}
{/* Section Services Unifiée - Design moderne avec lignes et cercles */}
<section id="services" className="py-32 bg-gradient-to-br from-[#ffe8d6] via-[#f5dcc7] to-[#ffe8d6] relative overflow-hidden">
  {/* Éléments décoratifs de fond - Beaucoup de lignes et cercles */}
  <div className="absolute inset-0">
    {/* Cercles décoratifs multiples */}
    <div className="absolute top-10 left-10 w-40 h-40 border-4 border-black/10 rounded-full animate-spin-slow"></div>
    <div className="absolute top-20 right-20 w-32 h-32 border-2 border-black/15 rounded-full animate-pulse"></div>
    <div className="absolute bottom-20 left-20 w-24 h-24 bg-black/5 rounded-full animate-bounce-slow"></div>
    <div className="absolute bottom-32 right-32 w-16 h-16 border-3 border-black/20 rounded-full animate-float"></div>
    <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-black/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    <div className="absolute top-2/3 right-1/3 w-20 h-20 border border-black/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-black/5 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
    
    {/* Lignes décoratives multiples */}
    <div className="absolute top-16 left-32 w-48 h-1 border-t-4 border-dotted border-black/20 animate-pulse"></div>
    <div className="absolute top-40 right-24 w-36 h-1 border-t-3 border-dashed border-black/15 animate-float"></div>
    <div className="absolute bottom-40 left-16 w-32 h-1 border-t-2 border-dotted border-black/25"></div>
    <div className="absolute bottom-16 right-40 w-44 h-1 border-t-4 border-dashed border-black/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-1/2 left-16 w-28 h-1 border-t-3 border-dotted border-black/15 transform rotate-45 animate-float"></div>
    <div className="absolute top-3/4 right-16 w-40 h-1 border-t-2 border-dashed border-black/20 transform -rotate-12"></div>
    
    {/* Formes géométriques supplémentaires */}
    <div className="absolute top-24 right-1/3 w-6 h-6 bg-black/10 transform rotate-45 animate-bounce"></div>
    <div className="absolute bottom-24 left-1/3 w-10 h-10 border-2 border-black/15 transform rotate-12 animate-spin-slow"></div>
  </div>
  
  <div className="container mx-auto px-6 relative z-10">
    {/* En-tête de section avec lignes décoratives */}
    <div className="text-center mb-14">
      <div className="relative inline-block">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-black mb-2 leading-tight relative text-center">
          <span className="block w-full text-center">NOS</span>
          <span className="block italic mb-2 w-full text-center">SERVICES</span>
          {/* Cercles décoratifs autour du titre */}
          <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-black/20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-black/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 -left-12 w-8 h-8 border border-black/15 rounded-full animate-float"></div>
          <div className="absolute top-1/4 -right-8 w-6 h-6 bg-black/5 rounded-full animate-pulse"></div>
        </h2>
        
        {/* Ligne stylée avec effet pinceau */}
        <div className="flex justify-center mt-6">
          <svg width="300" height="25" viewBox="0 0 500 25" className="overflow-visible md:w-[500px]">
            <path 
              d="M30,15 Q100,8 200,12 T400,10 T470,15" 
              stroke="#000000" 
              strokeWidth="5" 
              fill="none" 
              className="animate-draw-line"
              strokeLinecap="round"
              style={{ filter: 'url(#roughPaper)' }}
            />
            <defs>
              <filter id="roughPaper">
                <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      
      <p className="text-xl md:text-2xl text-black/80 max-w-4xl mx-auto leading-relaxed mt-8">
        Des solutions techniques complètes pour transformer vos événements en expériences exceptionnelles
      </p>
    </div>

    {/* Grille de services regroupés par catégorie */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mb-20">
      {/* LED ÉCRANS */}
      <div className="group relative animate-fade-in-up hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.3s' }}>
        <div className="absolute -top-4 -left-4 w-8 h-8 border border-black/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 -left-6 w-16 h-1 border-t-2 border-dotted border-black/15 animate-float"></div>
        <div className="bg-black rounded-3xl p-4 md:p-8 shadow-2xl group-hover:rotate-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="flex gap-2 mb-4 md:mb-6 justify-center">
            <img 
              src="/service1.jpeg" 
              alt="Écrans LED" 
              className="w-full h-32 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 max-w-[220px] md:max-w-[260px]" 
              onClick={() => openImageModal('/service1.jpeg', 'LED Écrans')}
            />
          </div>
          <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#ffe8d6] transition-colors text-center">ÉCRANS LED</h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors mb-2 text-center">Écrans LED géants pour événements, salons, concerts et conférences. Haute luminosité et résolution.</p>
        </div>
      </div>
      {/* ÉCRANS TACTILES, TOTEMS & BORNES INTERACTIFS */}
      <div className="group relative animate-fade-in-up hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.8s' }}>
        <div className="absolute -top-4 -left-4 w-8 h-8 border border-black/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 -left-6 w-16 h-1 border-t-2 border-dotted border-black/15 animate-float"></div>
        <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl group-hover:rotate-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="flex gap-2 mb-6 justify-center">
            <img 
              src="/service2.jpeg" 
              alt="Écrans tactiles" 
              className="w-1/2 h-32 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 max-w-[130px] md:max-w-[160px]" 
              onClick={() => openImageModal('/service2.jpeg', 'Écrans tactiles')}
            />
            <img 
              src="/service3.jpeg" 
              alt="Totems interactifs" 
              className="w-1/2 h-32 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 max-w-[130px] md:max-w-[160px]" 
              onClick={() => openImageModal('/service3.jpeg', 'Totems interactifs')}
            />
          </div>
          <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#ffe8d6] transition-colors text-center">ÉCRANS TACTILES, TOTEMS & BORNES INTERACTIFS</h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors mb-2 text-center">Écrans tactiles interactifs, totems et bornes pour stands, salons et animations digitales.</p>
        </div>
      </div>
      {/* STANDS PERSONNALISÉS */}
      <div className="group relative animate-fade-in-up hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.3s' }}>
        <div className="absolute -top-4 -left-4 w-8 h-8 border border-black/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 -left-6 w-16 h-1 border-t-2 border-dotted border-black/15 animate-float"></div>
        <div className="bg-black rounded-3xl p-8 shadow-2xl group-hover:rotate-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="flex gap-2 mb-6 justify-center">
            <img 
              src="/service4.jpeg" 
              alt="Stands personnalisés" 
              className="w-full h-32 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 max-w-[220px] md:max-w-[260px]" 
              onClick={() => openImageModal('/service4.jpeg', 'Stands personnalisés')}
            />
          </div>
          <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#ffe8d6] transition-colors text-center">STANDS PERSONNALISÉS</h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors mb-2 text-center">Location et conception de stands personnalisés adaptés à votre image de marque.</p>
        </div>
      </div>

      {/* MATÉRIEL ÉVÉNEMENTIEL & CONFÉRENCE */}
      <div className="group relative animate-fade-in-up hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.8s' }}>
        <div className="absolute -top-4 -left-4 w-8 h-8 border border-black/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 -left-6 w-16 h-1 border-t-2 border-dotted border-black/15 animate-float"></div>
        <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl group-hover:rotate-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
           <div className="flex gap-2 mb-6">
            <img 
              src="/service7.jpeg" 
              alt="Objets publicitaires" 
              className="w-full h-32 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => openImageModal('/service7.jpeg', 'Matériel conférence')}
            />
          </div>

          <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#ffe8d6] transition-colors text-center">MATÉRIEL ÉVÉNEMENTIEL & CONFÉRENCE</h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors mb-2 text-center">Location de matériel événementiel, de conférence et de traduction : mobilier, cabines, micros, casques…</p>
        </div>
      </div>
      
      {/* OBJETS PUBLICITAIRES & IMPRESSION */}
      <div className="group relative animate-fade-in-up hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.5s' }}>
        <div className="absolute -top-4 -left-4 w-8 h-8 border border-black/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 -left-6 w-16 h-1 border-t-2 border-dotted border-black/15 animate-float"></div>
        <div className="bg-black rounded-3xl p-8 shadow-2xl group-hover:rotate-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
           <div className="flex gap-2 mb-6">
            <img 
              src="/service8.jpeg" 
              alt="Planification d'évènement" 
              className="w-1/2 h-32 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => openImageModal('/service8.jpeg', '')}
            />
             <img 
              src="/service9.jpeg" 
              alt="Gestion de la billetterie" 
              className="w-1/2 h-32 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => openImageModal('/service9.jpeg', '')}
            />
          </div>
         
          <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#ffe8d6] transition-colors text-center">OBJETS PUBLICITAIRES & IMPRESSION</h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors mb-2 text-center">Objets publicitaires, supports personnalisés, impression numérique et offset.</p>
        </div>
      </div>

      {/* PLANIFICATION D'ÉVÉNEMENTS */}
      <div className="group relative animate-fade-in-up hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.6s' }}>
        <div className="absolute -top-4 -left-4 w-8 h-8 border border-black/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 -left-6 w-16 h-1 border-t-2 border-dotted border-black/15 animate-float"></div>
        <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl group-hover:rotate-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
         
         <div className="flex gap-2 mb-6">
          <img 
              src="/service10.jpeg" 
              alt="Sonorisation" 
              className="w-1/3 h-28 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => openImageModal('/service10.jpeg', 'Sonorisation')}
            />
            <img 
              src="/service5.jpeg" 
              alt="Matériel événementiel" 
              className="w-1/3 h-28 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => openImageModal('/service5.jpeg', 'Matériel événementiel')}
            />
            <img 
              src="/service6.jpeg" 
              alt="Matériel conférence" 
              className="w-1/3 h-28 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => openImageModal('/service6.jpeg', 'Matériel conférence')}
            />
          </div>

          <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#ffe8d6] transition-colors text-center">PLANIFICATION D'ÉVÉNEMENTS</h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors mb-2 text-center">Planification d'événements corporatifs et grand public, gestion de projet de A à Z.</p>
        </div>
      </div>

      {/* GESTION DE LA BILLETTERIE */}
      <div className="group relative animate-fade-in-up hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.7s' }}>
        <div className="absolute -top-4 -left-4 w-8 h-8 border border-black/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 -left-6 w-16 h-1 border-t-2 border-dotted border-black/15 animate-float"></div>
        <div className="bg-black rounded-3xl p-8 shadow-2xl group-hover:rotate-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="flex gap-2 mb-6">
             <img 
              src="/service11.jpeg" 
              alt="Éclairage" 
              className="w-full h-28 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => openImageModal('/service11.jpeg', 'Éclairage')}
            />
           
          </div>
          <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#ffe8d6] transition-colors text-center">GESTION DE LA BILLETTERIE</h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors mb-2 text-center">Gestion de la billetterie pour vos événements, solutions digitales et contrôle d'accès.</p>
        </div>
      </div>

      {/* SONORISATION & ÉCLAIRAGE */}
      <div className="group relative animate-fade-in-up hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.8s' }}>
        <div className="absolute -top-4 -left-4 w-8 h-8 border border-black/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 -left-6 w-16 h-1 border-t-2 border-dotted border-black/15 animate-float"></div>
        <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl group-hover:rotate-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="flex gap-2 mb-6">
            
           
            <img 
              src="/service13.jpeg" 
              alt="Éclairage" 
              className="w-1/2 h-28 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => openImageModal('/service13.jpeg', 'Éclairage')}
            />
            <img 
              src="/service12.jpeg" 
              alt="Éclairage" 
              className="w-1/2 h-28 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => openImageModal('/service13.jpeg', 'Éclairage')}
            />
          </div>
          <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#ffe8d6] transition-colors text-center">SONORISATION & ÉCLAIRAGE</h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors mb-2 text-center">Location de matériel de sonorisation, éclairage professionnel et effets spéciaux pour tous vos événements.</p>
        </div>
      </div>

      {/* CHAPITEAUX & DALOTS */}
      <div className="group relative animate-fade-in-up hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.9s' }}>
        <div className="absolute -top-4 -left-4 w-8 h-8 border border-black/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 -left-6 w-16 h-1 border-t-2 border-dotted border-black/15 animate-float"></div>
        <div className="bg-black rounded-3xl p-8 shadow-2xl group-hover:rotate-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          <div className="flex gap-2 mb-6 overflow-hidden">
            <div className="flex gap-2 animate-scroll-horizontal">
              {[14,15,16,17,14,15,16,17].map((num, index) => (
                <img 
                  key={`${num}-${index}`} 
                  src={`/service${num}.jpeg`} 
                  alt={`Chapiteau ${num}`} 
                  className="flex-shrink-0 w-16 h-24 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300" 
                  onClick={() => openImageModal(`/service${num}.jpeg`, `Chapiteau `)}
                />
              ))}
            </div>
          </div>
          <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#ffe8d6] transition-colors text-center">CHAPITEAUX & DALOTS</h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors mb-2 text-center">Location de chapiteaux, tentes, dalots et structures pour événements extérieurs.</p>
        </div>
      </div>
    </div>

    {/* Call to Action moderne avec décorations */}
    <div className="text-center relative">
      {/* Cercles décoratifs autour du CTA */}
      <div className="absolute -top-12 -left-12 w-20 h-20 border border-black/10 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-black/5 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 -left-24 w-32 h-1 border-t-4 border-dotted border-black/20 animate-float"></div>
      <div className="absolute top-1/2 -right-24 w-28 h-1 border-t-3 border-dashed border-black/15 animate-pulse"></div>
    </div>
  </div>

  {/* Modal Pop-up pour les images (React) */}
  {modal && (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
      <div className="relative max-w-2xl max-h-full" onClick={e => e.stopPropagation()}>
        <button 
          onClick={closeImageModal}
          className="absolute -top-10 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors duration-300"
          aria-label="Fermer le modal"
        >
          ×
        </button>
        <img 
          src={modal.src} 
          alt={modal.title} 
          className="max-w-xs sm:max-w-lg max-h-[70vh] object-contain rounded-lg shadow-2xl mx-auto"
        />
        <div className="text-center mt-4">
          <h3 className="text-white text-xl font-bold">{modal.title}</h3>
        </div>
      </div>
    </div>
  )}

  {/* CSS intégré pour scroll horizontal (conserve l'animation) */}
  <style dangerouslySetInnerHTML={{
    __html: `
      @keyframes scroll-horizontal {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll-horizontal {
        animation: scroll-horizontal 20s linear infinite;
      }
      .animate-scroll-horizontal:hover {
        animation-play-state: paused;
      }
      .overflow-x-auto::-webkit-scrollbar {
        display: none;
      }
      .overflow-x-auto {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `
  }} />
</section>

      {/* Philosophy Section - Style moderne avec lignes et cercles */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#ffe8d6]/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#ffe8d6]/10 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-black/10 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-black/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Contenu textuel à gauche avec style moderne */}
            <div className="lg:w-1/2 animate-slide-in-left">
              {/* Titre principal avec ligne stylée */}
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight relative">
                  NOTRE
                  <span className="block italic">PHILOSOPHIE</span>
                  {/* Ligne stylée ondulée sous le titre */}
                  <div className="absolute -bottom-2 left-0">
                    <svg width="300" height="15" viewBox="0 0 300 15" className="overflow-visible">
                      <path 
                        d="M10,8 Q50,4 100,10 T200,6 T290,10" 
                        stroke="#ffe8d6" 
                        strokeWidth="6" 
                        fill="none" 
                        className="animate-draw-line"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </h2>
              </div>

              {/* Sous-titre avec cercle décoratif */}
              <div className="relative mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-3xl md:text-4xl font-black text-black mb-6 italic relative">
                  CRÉATEUR D'ÉMOTIONS
                  {/* Cercle décoratif autour du mot ÉMOTIONS */}
                  <div className="absolute -top-2 right-0 w-32 h-10 border-2 border-[#ffe8d6]/30 rounded-full transform rotate-12 animate-pulse"></div>
                </h3>
              </div>

              {/* Contenu principal avec éléments stylés */}
              <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="relative">
                  <h4 className="text-xl md:text-2xl font-black text-black mb-4 relative">
                    L'ÉVÉNEMENTIEL AU SERVICE DE VOS AMBITIONS
                    {/* Ligne soulignée stylée */}
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-black via-[#ffe8d6] to-black transform -skew-x-12"></div>
                  </h4>
                </div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#ffe8d6]/20">
                  {/* Cercles décoratifs sur la card */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#ffe8d6]/20 rounded-full animate-bounce-slow"></div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-black/10 rounded-full animate-pulse"></div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                    L'événementiel est bien plus qu'une simple organisation de manifestations : c'est l'art de
                    <span className="font-black text-black bg-[#ffe8d6]/30 px-2 py-1 rounded-lg mx-1 relative">
                      créer des expériences uniques
                      {/* Petit cercle décoratif */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ffe8d6] rounded-full"></div>
                    </span>
                    qui marquent les esprits et valorisent l'image d'une marque, d'une institution ou d'un produit.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mt-6 relative z-10">
                    Notre rôle est d'imaginer, concevoir et mettre en œuvre des solutions techniques et logistiques sur mesure pour transformer
                    chaque projet en un 
                    <span className="font-black text-[#f5dcc7] relative">
                      moment inoubliable
                      {/* Ligne ondulée sous "moment inoubliable" */}
                      <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8">
                        <path d="M0,4 Q25,0 50,4 T100,4" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                      </svg>
                    </span>.
                  </p>
                </div>

                {/* Citations ou statistiques avec style moderne */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="text-center relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ffe8d6] to-[#f5dcc7] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <span className="text-2xl font-black text-black">10+</span>
                      {/* Cercles décoratifs autour */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-black/20 rounded-full animate-spin-slow"></div>
                    </div>
                    <p className="text-sm font-bold text-black">ANNÉES D'EXPERTISE</p>
                  </div>
                  
                  <div className="text-center relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <span className="text-xl font-black text-yellow-400">500+</span>
                      {/* Ligne décorative */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-yellow-400"></div>
                    </div>
                    <p className="text-sm font-bold text-black">ÉVÉNEMENTS CRÉÉS</p>
                  </div>
                  
                  <div className="text-center relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ffe8d6] to-[#f5dcc7] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <span className="text-xl font-black text-black">100%</span>
                      {/* Petit cercle pulsant */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 bg-black/20 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-sm font-bold text-black">SATISFACTION</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image à droite avec effets modernes */}
            <div className="lg:w-1/2 animate-slide-in-right">
              <div className="relative group">
                <img
                  src="/service5.jpeg"
                  alt="Illustration philosophie événementielle"
                  className="w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay moderne */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ffe8d6]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Éléments décoratifs autour de l'image */}
                <div className="absolute -top-6 -left-6 w-16 h-16 border-4 border-[#ffe8d6]/30 rounded-full animate-spin-slow"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-black/20 rounded-full animate-bounce-slow"></div>
                <div className="absolute top-1/4 -right-8 w-8 h-8 bg-[#ffe8d6]/40 rounded-full animate-float"></div>
                
                {/* Lignes décoratives */}
                <div className="absolute -bottom-6 left-1/4 w-24 h-1 border-t-4 border-dotted border-[#ffe8d6]/50"></div>
                <div className="absolute -top-4 right-1/3 w-16 h-1 border-t-4 border-dotted border-black/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qui est SPECTRA Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-[#ddbea9] via-[#c9a96e] to-[#ddbea9] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-64 h-64 border-4 border-black/20 rounded-full animate-spin-slow"></div>
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-black/10 rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 animate-slide-in-left">
              <div className="relative group">
                <img
                  src="/service4.jpeg" alt="Bureau SPECTRA INNOVATION"
                  className="w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-black rounded-full animate-bounce-slow"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-black/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="lg:w-1/2 animate-slide-in-right">
              <h2 className="text-5xl font-bold text-black mb-8">QUI EST SPECTRA INNOVATION ?</h2>
              <div className="w-20 h-1 bg-black mb-8 animate-expand-width"></div>

              <p className="text-black text-xl mb-8 leading-relaxed">
                <span className="font-bold text-2xl">SPECTRA INNOVATION</span> est une agence marocaine spécialisée dans
                l'événementiel. Forte d'une expérience dans toutes les étapes d'organisation de vos événements partout
                au Maroc. Notre engagement est de vous offrir des solutions personnalisées et des activités sur mesure
                pour votre événement.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-black/10 rounded-2xl backdrop-blur-sm hover-lift">
                  <h4 className="text-3xl font-bold text-black mb-2">10+</h4>
                  <p className="text-black font-medium">Années d'expérience</p>
                </div>
                <div className="text-center p-6 bg-black/10 rounded-2xl backdrop-blur-sm hover-lift">
                  <h4 className="text-3xl font-bold text-black mb-2">500+</h4>
                  <p className="text-black font-medium">Événements réalisés</p>
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-black text-white hover:bg-gray-800 rounded-full px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl glow-on-hover cursor-pointer"
              >
                En savoir plus
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      

      {/* Secteurs d'Activité Section */}
      <section id="sectors" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#ddbea9] to-[#c9a96e] transform skew-x-12 origin-top-right opacity-80 animate-slide-in-right"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-[#ddbea9]/20 to-transparent transform -skew-x-12 animate-slide-in-left"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold text-[#ddbea9] mb-16 text-center italic animate-fade-in-up tracking-wider">
            NOS SECTEURS D'ACTIVITÉ
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "CONGRÈS", "SALONS PROFESSIONNELS", "LANCEMENTS PRODUITS", "CÉRÉMONIES",
              "ÉVÉNEMENTS GRAND PUBLIC", "SÉMINAIRES", "CONFÉRENCES DE PRESSE", "PROMOTIONS",
              "EXPOSITIONS", "ÉVÉNEMENTS SPORTIFS", "ÉVÉNEMENTS CULTURELS", "ÉVÉNEMENTS CORPORATIFS"
            ].map((sector, index) => (
              <span
                key={sector}
                className="bg-gradient-to-r from-[#ddbea9] to-[#c9a96e] text-black px-8 py-4 rounded-full font-bold hover:from-[#c9a96e] hover:to-[#ddbea9] transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-xl animate-fade-in-up glow-on-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {sector}
              </span>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#ddbea9] to-[#c9a96e] text-black hover:from-[#c9a96e] hover:to-[#ddbea9] rounded-full px-12 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl animate-fade-in-up cursor-pointer" 
              style={{ animationDelay: '1.2s' }}
            >
              Voir tous nos projets
              <Star className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

     {/* Partners Section */}
<section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
  {/* Éléments décoratifs en arrière-plan */}
  <div className="absolute top-0 left-0 w-full h-full opacity-5">
    <div className="absolute top-20 left-10 w-32 h-32 bg-amber-600 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-40 h-40 bg-slate-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-400 rounded-full blur-2xl animate-pulse delay-500"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Titre avec animation */}
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-black from-slate-800 via-amber-800 to-slate-800 mb-6 relative">
        NOS PARTENAIRES
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent animate-pulse"></div>
          <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent animate-pulse"></div>
        </div>
      </h2>
      
      <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-8">
        Découvrez nos partenaires de confiance qui nous accompagnent dans notre mission d'excellence
      </p>
    </div>

    
    {/* Bande de défilement des logos */}
    <div className="overflow-hidden bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-inner border border-slate-200/50">
      {/* Carrousel infini fluide pour tous les logos */}
      <div className="flex animate-scroll-infinite space-x-8 w-max">
        {[...Array(2)].flatMap(() => [1,2,3,4,5,6,7,8,9,10,11]).map((logo, index) => (
          <div
            key={`scroll-all-${index}`}
            className="flex-shrink-0 w-26 h-26 flex items-center justify-center"
          >
            <img
              src={`/partenaires/${logo}.png`}
              alt={`Partenaire ${logo}`}
              className="max-h-100 w-auto"
              style={{ filter: 'none' }}
            />
          </div>
        ))}
      </div>
    </div>

  
  </div>

  {/* CSS intégré pour les animations */}
  <style dangerouslySetInnerHTML={{
    __html: `
      @keyframes scroll-infinite {
        0% { transform: translateX(0); }
        100% { transform: translateX(-80%); }
      }
      
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-scroll-infinite {
        animation: scroll-infinite 40s linear infinite;
      }
      
      .animate-fade-in {
        animation: fade-in 0.4s ease-out forwards;
      }
      
      @media (max-width: 768px) {
        .animate-scroll-infinite {
          animation: scroll-infinite 50s linear infinite;
        }
      }
      
      .group:hover .group-hover\\:animate-pulse {
        animation: pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    `
  }} />
</section>

      {/* Contact Section */}
  <section id="contact" className="py-14 sm:py-20 bg-gradient-to-br from-[#ddbea9] via-[#c9a96e] to-[#ddbea9] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 rounded-full transform translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full transform -translate-x-40 translate-y-40 animate-bounce-slow"></div>
        </div>
        
        <div className="container mx-auto px-3 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8">CONTACTEZ-NOUS</h2>
              <div className="w-16 sm:w-20 h-1 bg-black mb-8 sm:mb-12 animate-expand-width"></div>

              <div className="space-y-5 sm:space-y-8">
                <div className="flex items-center space-x-4 sm:space-x-6 group hover-lift">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                    <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-[#ddbea9]" />
                  </div>
                  <span className="text-black text-base sm:text-xl font-medium group-hover:text-gray-800 transition-colors">spectrainnovationcontact@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 sm:space-x-6 group hover-lift">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                    <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-[#ddbea9]" />
                  </div>
                  <span className="text-black text-base sm:text-xl font-medium group-hover:text-gray-800 transition-colors">+212 7 08 81 99 99</span>
                </div>
                <div className="flex items-center space-x-4 sm:space-x-6 group hover-lift">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#ddbea9]" />
                  </div>
                  <span className="text-black text-base sm:text-xl font-medium group-hover:text-gray-800 transition-colors">Imm 30 Appt 8 Rue Moulay Ahmed Loukili Hassan - Rabat</span>
                </div>
              </div>

              <div className="mt-8 sm:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Suivez-nous</h3>
                <div className="flex space-x-3 sm:space-x-4">
                  <a 
                    href="mailto:spectrainnovationcontact@gmail.com"
                    className="w-9 h-9 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg animate-fade-in-up group"
                    style={{ animationDelay: '0s' }}
                    title="Lindin"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#ddbea9] group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="mailto:spectrainnovationcontact@gmail.com"
                    className="w-9 h-9 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg animate-fade-in-up group"
                    style={{ animationDelay: '0s' }}
                    title="youtube"
                  >
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-[#ddbea9] group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="mailto:spectrainnovationcontact@gmail.com"
                    className="w-9 h-9 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg animate-fade-in-up group"
                    style={{ animationDelay: '0s' }}
                    title="Email"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#ddbea9] group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="https://wa.me/212708819999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg animate-fade-in-up group"
                    style={{ animationDelay: '0.1s' }}
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ddbea9] group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="https://www.instagram.com/spectra.innovation?igsh=MWh2Z2xndDU5bXZiNw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg animate-fade-in-up group"
                    style={{ animationDelay: '0.2s' }}
                    title="Instagram"
                  >
                    <span className="text-[#ddbea9] text-xs sm:text-sm font-bold group-hover:text-white transition-colors">I</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <form className="space-y-5 sm:space-y-8 bg-white/20 backdrop-blur-sm p-5 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <Input 
                    placeholder="Nom" 
                    className="bg-white/80 border-2 border-transparent focus:border-black focus:bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-base sm:text-lg transition-all duration-300 hover-lift" 
                  />
                  <Input 
                    placeholder="Prénom" 
                    className="bg-white/80 border-2 border-transparent focus:border-black focus:bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-base sm:text-lg transition-all duration-300 hover-lift" 
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white/80 border-2 border-transparent focus:border-black focus:bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-base sm:text-lg transition-all duration-300 hover-lift" 
                />
                <Input 
                  placeholder="Sujet" 
                  className="bg-white/80 border-2 border-transparent focus:border-black focus:bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-base sm:text-lg transition-all duration-300 hover-lift" 
                />
                <Textarea 
                  placeholder="Message" 
                  rows={4} 
                  className="bg-white/80 border-2 border-transparent focus:border-black focus:bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-base sm:text-lg transition-all duration-300 hover-lift resize-none" 
                />
                <Button className="bg-black text-white hover:bg-gray-800 w-full rounded-lg sm:rounded-xl py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl glow-on-hover">
                  Envoyer le message
                  <Sparkles className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-black via-gray-900 to-black py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ddbea9] to-transparent animate-gradient-shift"></div>
          <div className="absolute top-10 right-10 w-20 h-20 border border-[#ddbea9]/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#ddbea9]/10 rounded-full animate-bounce-slow"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-4 mb-8 md:mb-0 group">
              
              <div className="flex flex-col">
                <img src="/logo.png" alt="SPECTRA INNOVATION" className="w-40 h-auto" />
              </div>
            </div>

            <div className="flex space-x-4">
              
              <a 
                href="mailto:spectrainnovationcontact@gmail.com"
                className="w-12 h-12 bg-gradient-to-br from-[#ddbea9] to-[#c9a96e] rounded-full flex items-center justify-center hover:from-[#c9a96e] hover:to-[#ddbea9] transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg animate-fade-in-up glow-on-hover group"
                style={{ animationDelay: '0s' }}
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-black group-hover:text-gray-800 transition-colors" />
              </a>
              <a 
                href="mailto:spectrainnovationcontact@gmail.com"
                className="w-12 h-12 bg-gradient-to-br from-[#ddbea9] to-[#c9a96e] rounded-full flex items-center justify-center hover:from-[#c9a96e] hover:to-[#ddbea9] transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg animate-fade-in-up glow-on-hover group"
                style={{ animationDelay: '0s' }}
                title="Youtube"
              >
                <Youtube className="w-5 h-5 text-black group-hover:text-gray-800 transition-colors" />
              </a>
              <a 
                href="mailto:spectrainnovationcontact@gmail.com"
                className="w-12 h-12 bg-gradient-to-br from-[#ddbea9] to-[#c9a96e] rounded-full flex items-center justify-center hover:from-[#c9a96e] hover:to-[#ddbea9] transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg animate-fade-in-up glow-on-hover group"
                style={{ animationDelay: '0s' }}
                title="Email"
              >
                <Mail className="w-5 h-5 text-black group-hover:text-gray-800 transition-colors" />
              </a>
              <a 
                href="https://wa.me/212708819999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#ddbea9] to-[#c9a96e] rounded-full flex items-center justify-center hover:from-[#c9a96e] hover:to-[#ddbea9] transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg animate-fade-in-up glow-on-hover group"
                style={{ animationDelay: '0.1s' }}
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-black group-hover:text-gray-800 transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/spectra.innovation?igsh=MWh2Z2xndDU5bXZiNw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#ddbea9] to-[#c9a96e] rounded-full flex items-center justify-center hover:from-[#c9a96e] hover:to-[#ddbea9] transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg animate-fade-in-up glow-on-hover group"
                style={{ animationDelay: '0.2s' }}
                title="Instagram"
              >
                <span className="text-black text-sm font-bold group-hover:text-gray-800 transition-colors">I</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 mb-2">
                  © 2025 SPECTRA INNOVATION S.A.R.L. Tous droits réservés.
                </p>
                <p className="text-gray-500 text-sm">Adresse   commercial : jawharat madina  imm B  appartement 10. E ème  étage  av maghreb al arabi rabat
                </p>
                <p className="text-gray-500 text-sm">
                  EMAIL: spectrainnovationcontact@gmail.com - TÉLÉPHONE: +212 7 08 81 99 99
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Attijariwafa Bank: 007810001595000000382656 - ICE: 003088410000047 - IF: 52614142 - RC: 162183
                </p>
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-[#ddbea9] transition-colors">Politique de confidentialité</a>
                <a href="#" className="text-gray-400 hover:text-[#ddbea9] transition-colors">Mentions légales</a>
                <a href="#" className="text-gray-400 hover:text-[#ddbea9] transition-colors">CGV</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
function closeModal() {
  throw new Error("Function not implemented.")
}

