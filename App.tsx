
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Calendar, 
  ArrowRight, 
  HelpCircle,
  Menu,
  X,
  CreditCard,
  UserCheck,
  ChevronDown,
  Info,
  ExternalLink,
  CrownIcon
} from 'lucide-react';

// --- Types & Constants ---
const CALENDLY_URL = "https://calendly.com/impots-comafisconseils/rdv-declaration-d-impots";

// --- Components ---

const ComafisLogo = ({ className = "h-8 md:h-10" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-10 h-10 flex-shrink-0">
      {/* Radiant Star Icon */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Blue Star Rays */}
        <g stroke="#3b82f6" strokeWidth="8" strokeLinecap="round">
          <line x1="50" y1="10" x2="50" y2="35" />
          <line x1="50" y1="10" x2="50" y2="35" transform="rotate(45 50 50)" />
          <line x1="50" y1="10" x2="50" y2="35" transform="rotate(90 50 50)" />
          <line x1="50" y1="10" x2="50" y2="35" transform="rotate(135 50 50)" />
          <line x1="50" y1="10" x2="50" y2="35" transform="rotate(-45 50 50)" />
          <line x1="50" y1="10" x2="50" y2="35" transform="rotate(-90 50 50)" />
          <line x1="50" y1="10" x2="50" y2="35" transform="rotate(-135 50 50)" />
        </g>
        {/* Dark Chevron/Arrow */}
        <path 
          d="M25 75 L50 50 L75 75 M50 50 L50 85" 
          stroke="#1a2b4b" 
          strokeWidth="10" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
    <span className="text-2xl md:text-3xl font-extrabold text-comafis-navy tracking-tight">
      Comafis
    </span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else {
      window.open(CALENDLY_URL, '_blank');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="https://www.comafis.ch" aria-label="Comafis Conseils – Accueil" className="hover:opacity-90 transition-opacity">
              <ComafisLogo />
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#avantages" onClick={(e) => handleScroll(e, 'avantages')} className="text-slate-600 hover:text-comafis-blue transition-colors font-semibold">Avantages</a>
            <a href="#comment" onClick={(e) => handleScroll(e, 'comment')} className="text-slate-600 hover:text-comafis-blue transition-colors font-semibold">Processus</a>
            <a href="#tarifs" onClick={(e) => handleScroll(e, 'tarifs')} className="text-slate-600 hover:text-comafis-blue transition-colors font-semibold">Tarifs</a>
            <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="text-slate-600 hover:text-comafis-blue transition-colors font-semibold">FAQ</a>
            <a href={CALENDLY_URL} onClick={(e) => handleScroll(e, 'reserver')} className="bg-comafis-navy text-white px-6 py-3 rounded-full font-bold hover:bg-comafis-blue transition-all shadow-md hover:shadow-lg">
              Prendre rendez-vous
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-comafis-navy p-2 bg-slate-50 rounded-lg">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-6 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="grid gap-4">
            <a href="#avantages" onClick={(e) => handleScroll(e, 'avantages')} className="text-lg font-bold text-comafis-navy">Avantages</a>
            <a href="#comment" onClick={(e) => handleScroll(e, 'comment')} className="text-lg font-bold text-comafis-navy">Comment ça marche</a>
            <a href="#tarifs" onClick={(e) => handleScroll(e, 'tarifs')} className="text-lg font-bold text-comafis-navy">Tarifs</a>
            <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="text-lg font-bold text-comafis-navy">FAQ</a>
          </div>
          <a href={CALENDLY_URL} onClick={(e) => handleScroll(e, 'reserver')} className="block bg-comafis-blue text-white px-5 py-4 rounded-2xl font-black text-center text-lg shadow-xl shadow-comafis-blue/20">
            Réserver mon créneau (50 CHF)
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('reserver');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(CALENDLY_URL, '_blank');
    }
  };

  const handlePriceLink = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden relative">
      {/* Decorative SVG Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-comafis-blue/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-comafis-navy/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col gap-4">
              {/* <div className="inline-flex items-center justify-start gap-2 px-4 py-1.5 rounded-full bg-green-50 text-comafis-blue font-bold text-sm border border-green-100">
                <CheckCircle size={18} className="text-green-500" />
                <span className="text-green-500">Agrée FINMA </span>
              </div> */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-comafis-blue font-bold text-sm mb-8 border border-blue-100">
                <ShieldCheck size={18} />
                <span>Expertise fiscale suisse • Conformité LPD</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-comafis-navy leading-[1.1] mb-8">
              Déclarez vos impôts simplement pour <span className="text-comafis-blue underline decoration-comafis-blue/20">50.– CHF</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Déléguez votre fiscalité à nos experts Comafis Conseils. Une procédure sans stress : réservation immédiate, paiement par facture après validation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12">
              <a 
                href={CALENDLY_URL} 
                onClick={handleCtaClick}
                className="w-full sm:w-auto bg-comafis-navy text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-comafis-blue transition-all shadow-2xl hover:shadow-comafis-blue/30 flex items-center justify-center gap-3 group"
              >
                Planifier ma déclaration
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <div className="flex flex-col items-center sm:items-start text-sm text-slate-500 font-bold space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Tarif avantageux</span>
                
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Traitement en moins d'une semaine</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-100 inline-flex">
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=${i + 42}`} alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-black text-comafis-navy">5/5 de satisfaction client</p>
                <p className="text-xs text-slate-500">+500 contribuables accompagnés cette année</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(26,43,75,0.15)] border border-slate-100 relative z-10">
              <div className="flex justify-between items-center mb-10">
                <span className="font-black text-slate-400 uppercase text-xs tracking-widest bg-slate-50 px-3 py-1 rounded-full">Dossier Fédéral 2025</span>
                <span className="flex items-center gap-1 text-comafis-blue font-bold text-sm">
                  <Clock size={16} /> Prêt en 5 min
                </span>
              </div>
              
              <div className="space-y-5 mb-10">
                <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-default border border-transparent hover:border-slate-200">
                  <span className="text-slate-700 font-bold text-lg">Déclaration Complète</span>
                  <CheckCircle className="text-green-500" size={24} />
                </div>
                <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-default border border-transparent hover:border-slate-200">
                  <span className="text-slate-700 font-bold text-lg">Optimisation Fiscale</span>
                  <CheckCircle className="text-green-500" size={24} />
                </div>
                <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-default border border-transparent hover:border-slate-200">
                  <span className="text-slate-700 font-bold text-lg">Suivi Personnalisé</span>
                  <CheckCircle className="text-green-500" size={24} />
                </div>
                
                <div className="pt-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-comafis-navy font-black text-xl">Total Fixe</span>
                    <div className="text-right">
                      <span className="text-comafis-navy font-black text-4xl">50.–</span>
                      <span className="text-comafis-navy font-bold text-lg ml-1">CHF</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">* Basé sur un volume de 15 documents. <button onClick={handlePriceLink} className="text-comafis-blue underline hover:text-comafis-navy">Voir détails</button></p>
                </div>
              </div>
              
              <button 
                onClick={handleCtaClick}
                className="w-full bg-comafis-blue text-white py-5 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-comafis-blue/20"
              >
                Je réserve mon créneau
              </button>
            </div>
            
            {/* Visual background accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-comafis-blue rounded-3xl -z-0 opacity-10 rotate-12"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-comafis-navy rounded-full -z-0 opacity-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="text-comafis-blue" size={36} />,
      title: "Gain de temps massif",
      desc: "Oubliez les heures passées sur les logiciels complexes. Nous gérons tout de A à Z."
    },
    {
      icon: <ShieldCheck className="text-comafis-blue" size={36} />,
      title: "Expertise certifiée",
      desc: "Votre déclaration est revue par des experts pour maximiser vos déductions légales autorisées."
    },
    {
      icon: <CreditCard className="text-comafis-blue" size={36} />,
      title: "Facturation transparente",
      desc: " Déclaration complète dès 50.– CHF.  Vous payez l'accompte en ligne et puis vous payez ensuite après le service le surplus de documents éventuels "
    },
    {
      icon: <UserCheck className="text-comafis-blue" size={36} />,
      title: "Confidentialité Totale",
      desc: "Nous respectons strictement la LPD suisse. Vos données sont cryptées et 100% protégées."
    }
  ];

  return (
    <section id="avantages" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-comafis-blue font-black uppercase tracking-widest text-sm mb-4 block">Vos avantages</span>
          <h2 className="text-4xl md:text-5xl font-black text-comafis-navy mb-6">Pourquoi déléguer à Comafis ?</h2>
          <div className="w-24 h-2 bg-comafis-blue mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((b, i) => (
            <div key={i} className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-comafis-navy/5 transition-all duration-500 group">
              <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 group-hover:bg-comafis-blue group-hover:text-white transition-all duration-500">
                {b.icon}
              </div>
              <h3 className="text-2xl font-black text-comafis-navy mb-4 leading-tight">{b.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingTable = () => {
  const prices = [
    { range: "0 - 15 documents", price: "50.- CHF", desc: "Forfait idéal pour les situations simples." },
    { range: "16 - 25 documents", price: "99.- CHF", desc: "Parfait pour les propriétaires ou situations moyennes." },
    { range: "26 - 30 documents", price: "149.- CHF", desc: "Gestion approfondie de vos justificatifs." },
    { range: "31 - 35 documents", price: "199.- CHF", desc: "Expertise complète pour dossiers volumineux." },
    { range: "36 - 40 documents", price: "249.- CHF", desc: "Service premium pour fiscalité complexe." },
    { range: "Plus de 41 documents", price: "Sur demande", desc: "Accompagnement sur mesure." },
  ];

  return (
    <section id="tarifs" className="py-24 bg-comafis-navy scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-comafis-blue opacity-10 blur-[100px] -z-0"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-comafis-blue font-black uppercase tracking-widest text-sm mb-4 block">Transparence</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Nos Tarifs Fixes</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Le prix s'ajuste uniquement selon la complexité de votre dossier pour une équité totale.</p>
        </div>
        
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-8 py-6 font-black uppercase tracking-wider text-xs text-comafis-navy">Nombre de documents</th>
                  <th className="px-8 py-6 font-black uppercase tracking-wider text-xs text-comafis-navy">Détails</th>
                  <th className="px-8 py-6 font-black uppercase tracking-wider text-xs text-comafis-navy text-right">Tarif HT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {prices.map((p, i) => (
                  <tr key={i} className={`group hover:bg-slate-50 transition-all ${i === 0 ? 'bg-blue-50/50' : ''}`}>
                    <td className="px-8 py-8 font-black text-comafis-navy text-xl">{p.range}</td>
                    <td className="px-8 py-8 text-slate-500 font-medium">{p.desc}</td>
                    <td className="px-8 py-8 text-right">
                      <span className={`inline-block px-6 py-3 rounded-2xl font-black text-lg ${i === 0 ? 'bg-comafis-blue text-white shadow-lg shadow-comafis-blue/30' : 'text-comafis-navy bg-slate-100'}`}>
                        {p.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-10 bg-slate-50 border-t border-slate-100">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-comafis-blue/10 rounded-lg">
                <Info className="text-comafis-blue" size={24} />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-semibold italic">
                * Le décompte des documents inclut tous les justificatifs nécessaires (certificats, relevés, attestations). Le volume final est confirmé avec vous avant toute facturation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Choix du créneau",
      desc: "Réservez en 1 minute la date de début de traitement via Calendly."
    },
    {
      num: "02",
      title: "Transmission",
      desc: "Envoyez vos justificatifs via notre plateforme sécurisée."
    },
    {
      num: "03",
      title: "Traitement Expert",
      desc: "Nos spécialistes remplissent et optimisent votre déclaration."
    },
    {
      num: "04",
      title: "Validation & Paiement",
      desc: "Vous recevez votre dossier complet et votre facture (15 jours de délai)."
    }
  ];

  return (
    <section id="comment" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-comafis-blue font-black uppercase tracking-widest text-sm mb-4 block">Méthodologie</span>
          <h2 className="text-4xl md:text-5xl font-black text-comafis-navy mb-6">4 étapes vers la sérénité</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg">Un processus fluide conçu pour vous faire gagner du temps.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="text-8xl font-black text-comafis-navy opacity-[0.03] absolute -top-10 -left-4 group-hover:text-comafis-blue group-hover:opacity-10 transition-all duration-500">{s.num}</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-comafis-navy mb-4">{s.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-6 w-12 h-0.5 bg-slate-100 group-hover:bg-comafis-blue/30 transition-colors"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Target = () => {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('reserver');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(CALENDLY_URL, '_blank');
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-comafis-navy rounded-[3rem] p-12 md:p-20 text-white text-center shadow-3xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-white">Prêt à simplifier votre fiscalité ?</h2>
            <p className="text-xl opacity-80 mb-12 font-medium leading-relaxed">
              Que vous soyez salarié, retraité ou étudiant, profitez d'un service professionnel au juste prix. Nous nous occupons de tout.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                <CheckCircle className="text-comafis-blue flex-shrink-0" />
                <span className="font-bold">Particuliers & Familles</span>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                <CheckCircle className="text-comafis-blue flex-shrink-0" />
                <span className="font-bold">Salariés & Retraités</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href={CALENDLY_URL} onClick={handleCtaClick} className="w-full md:w-auto bg-comafis-blue hover:bg-white hover:text-comafis-navy text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-comafis-blue/30 transform hover:scale-105 active:scale-95">
                Prendre rendez-vous
              </a>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-comafis-blue/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

const Checklist = () => {
  const items = [
    "Certificat(s) de salaire 2025",
    "Relevés bancaires au 31.12.2025",
    "Attestations 3ème pilier / LPP",
    "Frais médicaux et dons caritatifs",
    "Police d'assurance maladie 2025",
    "Dernière décision de taxation"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-comafis-navy mb-4">Pièces justificatives à préparer :</h3>
          <p className="text-slate-500 font-medium">Pour un traitement optimal de votre dossier.</p>
        </div>
        <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm grid gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-50">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={16} className="text-green-600" />
              </div>
              <span className="font-bold text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CalendlySection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="reserver" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-comafis-blue font-black tracking-widest uppercase text-sm mb-4 block">Finalisation</span>
          <h2 className="text-4xl md:text-5xl font-black text-comafis-navy mb-6">Bloquez votre place</h2>
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto leading-relaxed">Choisissez le créneau qui vous convient.</p>
        </div>
        
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-[0_48px_96px_-12px_rgba(26,43,75,0.12)] border border-slate-100 min-h-[750px]">
          <div 
            className="calendly-inline-widget" 
            data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=3b82f6`}
            style={{ minWidth: '320px', height: '750px' }}
          ></div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-10">
          <div className="flex items-center gap-3 text-comafis-navy font-bold">
            <ShieldCheck size={24} className="text-comafis-blue" />
            <span>Sécurité LPD garantie</span>
          </div>
          <div className="flex items-center gap-3 text-comafis-navy font-bold">
            <FileText size={24} className="text-comafis-blue" />
            <span>Zéro paiement immédiat</span>
          </div>
          <div className="flex items-center gap-3 text-comafis-navy font-bold">
            <Clock size={24} className="text-comafis-blue" />
            <span>Annulation gratuite</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Pourquoi le tarif est-il de 50.– CHF ?",
      a: "Comafis Conseils a automatisé ses processus pour offrir un service accessible sans sacrifier la qualité. Ce prix agressif nous permet de fidéliser de nouveaux clients en Suisse romande."
    },
    {
      q: "Comment fonctionne le paiement par facture ?",
      a: "C'est simple : nous traitons votre dossier d'abord. Une fois la déclaration terminée et envoyée à l'administration fiscale, nous vous adressons une facture avec QR-code payable sous 15 jours."
    },
    {
      q: "Quelles données dois-je fournir ?",
      a: "Toutes les pièces classiques : certificats de salaire, attestations bancaires, assurances, etc. Nous vous fournirons une liste précise et un accès sécurisé pour le dépôt des fichiers."
    },
    {
      q: "Mes données sont-elles protégées ?",
      a: "Absolument. En tant qu'experts en fiscalité et conseil, nous sommes soumis au secret professionnel et respectons la nouvelle Loi sur la Protection des Données (nLPD)."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-comafis-blue font-black uppercase tracking-widest text-sm mb-4 block">Aide & Support</span>
          <h2 className="text-4xl font-black text-comafis-navy mb-6">FAQ : Vos Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white rounded-3xl border transition-all duration-300 ${openIndex === i ? 'border-comafis-blue ring-1 ring-comafis-blue/20 shadow-xl' : 'border-slate-100 shadow-sm'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <span className={`font-black text-xl transition-colors ${openIndex === i ? 'text-comafis-blue' : 'text-comafis-navy group-hover:text-comafis-blue'}`}>{faq.q}</span>
                <ChevronDown size={28} className={`text-slate-300 transition-all duration-300 ${openIndex === i ? 'rotate-180 text-comafis-blue' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed animate-in fade-in slide-in-from-top-2 duration-500">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('reserver');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(CALENDLY_URL, '_blank');
    }
  };

  return (
    <footer className="bg-comafis-navy text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-10 brightness-0 invert opacity-100">
              <ComafisLogo className="h-10" />
            </div>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              Expertise fiscale et conseils financiers en Suisse. Nous simplifions votre vie administrative avec rigueur et transparence.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-xl mb-8">Service</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li><a href="#avantages" className="hover:text-comafis-blue transition-colors">Pourquoi nous ?</a></li>
              <li><a href="#tarifs" className="hover:text-comafis-blue transition-colors">Nos tarifs fixes</a></li>
              <li><a href="#comment" className="hover:text-comafis-blue transition-colors">Fonctionnement</a></li>
              <li><a href="#reserver" onClick={handleCtaClick} className="text-comafis-blue hover:underline">Prendre RDV</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl mb-8">Informations</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              <li>Loi Protection Données</li>
              <li>Conditions Générales</li>
              <li>Politique Cookies</li>
              <li>Mentions Légales</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl mb-8">Contact</h4>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
              <p className="text-sm font-bold flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-comafis-blue/20 flex items-center justify-center">@</span>
                contact@comafis.ch
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-2">Paiement</p>
                <p className="text-xs text-slate-400">Facture QR-code envoyée par email à la fin du traitement.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center md:flex justify-between items-center text-slate-500 font-bold text-sm">
          <p>© {new Date().getFullYear()} Comafis Conseils. Tous droits réservés.</p>
          <p className="mt-4 md:mt-0 flex items-center justify-center gap-2">
            <ShieldCheck size={16} className="text-comafis-blue" />
            Intermédiaire fiscal enregistré
          </p>
        </div>
      </div>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-6 right-6 lg:hidden z-40">
        <a href={CALENDLY_URL} onClick={handleCtaClick} className="flex items-center justify-center w-full bg-comafis-blue text-white py-5 rounded-2xl font-black text-lg shadow-[0_20px_40px_-10px_rgba(59,130,246,0.5)] animate-bounce-subtle">
          Réserver (50.– CHF)
        </a>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Process />
      <Target />
      <Checklist />
      <CalendlySection />
      <PricingTable />
      <FAQ />
      <Footer />
      
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s infinite ease-in-out;
        }
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background-color: #3b82f6;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default App;