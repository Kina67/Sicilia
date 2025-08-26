"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Clock, Utensils, Star, Car, Camera, Heart, Share2 } from "lucide-react";

export default function SiciliaViaggio() {
  const [selectedDay, setSelectedDay] = useState("1");
  const [likedItems, setLikedItems] = useState<string[]>([]);

  const toggleLike = (itemId: string) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const giorni = [
    {
      id: "1",
      titolo: "Giorno 1 - Siracusa e Ortigia",
      sottotitolo: "Alla scoperta del cuore storico",
      descrizione: "Immergiti nella magia millenaria di Siracusa, esplorando l'isola di Ortigia e i suoi tesori archeologici. Un viaggio attraverso 2700 anni di storia tra arte, cultura e tradizioni.",
      colore: "from-amber-500 to-orange-600",
      immagini: ["ortigia.jpg", "siracusa-duomo.jpg", "/teatro-greco.jpg"],
      mattina: {
        titolo: "Mattina: Ortigia",
        attivita: [
          "Visita al Duomo di Siracusa (Piazza del Duomo)",
          "Esplorazione del mercato di Ortigia",
          "Passeggiata lungo la lungomare di Ortigia"
        ],
        luoghiArte: [
          "Tempio di Apollo (VII secolo a.C.)",
          "Fonte Aretusa",
          "Palazzo Bellomo"
        ],
        ristoranti: "Ristorante La Tavernetta da Piero - Specialità di pesce fresco",
        costo: "€25-35 a persona"
      },
      pomeriggio: {
        titolo: "Pomeriggio: Neapolis",
        attivita: [
          "Visita al Parco Archeologico della Neapolis",
          "Anfiteatro Romano",
          "Teatro Greco"
        ],
        luoghiArte: [
          "Orecchio di Dionisio",
          "Grotta dei Cordari",
          "Tomba di Archimede"
        ],
        ristoranti: "Trattoria La Foglia - Cucina tradizionale siracusana",
        costo: "€20-30 a persona"
      },
      sera: {
        titolo: "Sera: Relax e cena",
        attivita: [
          "Passeggiata serale a Ortigia",
          "Aperitivo in Piazza del Duomo",
          "Cena in ristorante tipico"
        ],
        luoghiArte: [
          "Illuminazione monumenti serale",
          "Vista sul porto Grande"
        ],
        ristoranti: "Ristorante Il Blu - Pesce fresco con vista mare",
        costo: "€35-45 a persona"
      }
    },
    {
      id: "2",
      titolo: "Giorno 2 - Noto e Spiaggia Fontane Bianche",
      sottotitolo: "Barocco e relax mediterraneo",
      descrizione: "Scopri Noto, la capitale del barocco siciliano, e rilassati sulle acque cristalline di Fontane Bianche. Una giornata tra arte, storia e mare incontaminato.",
      colore: "from-emerald-500 to-teal-600",
      immagini: ["/noto.jpg", "/noto-cattedrale.jpg", "/fontane-bianche.jpg"],
      mattina: {
        titolo: "Mattina: Noto",
        attivita: [
          "Visita al centro storico di Noto",
          "Cattedrale di Noto",
          "Palazzo Ducezio"
        ],
        luoghiArte: [
          "Chiesa di San Carlo",
          "Palazzo Nicolaci",
          "Villa Romana del Tellaro"
        ],
        ristoranti: "Caffè Sicilia - Dolci tipici e granita",
        costo: "€15-25 a persona"
      },
      pomeriggio: {
        titolo: "Pomeriggio: Spiaggia Fontane Bianche",
        attivita: [
          "Relax in spiaggia",
          "Bagno nel mare cristallino",
          "Snorkeling"
        ],
        luoghiArte: [
          "Vista sulla costa ionica",
          "Riserva naturale del fiume Ciane"
        ],
        ristoranti: "Lido Azzurro - Ristorante di spiaggia",
        costo: "€20-30 a persona"
      },
      sera: {
        titolo: "Sera: Ritorno a Siracusa",
        attivita: [
          "Cena in trattoria locale",
          "Passeggiata serale",
          "Gelato artigianale"
        ],
        luoghiArte: [
          "Illuminazione di Ortigia",
          "Vista sul castello Maniace"
        ],
        ristoranti: "Trattoria da Salvatore - Specialità siciliane",
        costo: "€25-35 a persona"
      }
    },
    {
      id: "3",
      titolo: "Giorno 3 - Taormina e Isola Bella",
      sottotitolo: "Perla ionica e panorami mozzafiato",
      descrizione: "Esplora Taormina, la perla dello Ionio, con il suo celebre teatro greco e la splendida Isola Bella. Una giornata tra eleganza, bellezza naturale e viste spettacolari sull'Etna.",
      colore: "from-blue-500 to-indigo-600",
      immagini: ["/isola-bella.jpg", "/taormina.jpg", "/taormina.jpg"],
      mattina: {
        titolo: "Mattina: Taormina",
        attivita: [
          "Visita al Teatro Greco",
          "Passeggiata per Corso Umberto",
          "Giardini Pubblici"
        ],
        luoghiArte: [
          "Teatro Antico",
          "Palazzo Corvaja",
          "Chiesa di San Giuseppe"
        ],
        ristoranti: "Bar Timeo - Colazione con vista sull'Etna",
        costo: "€15-25 a persona"
      },
      pomeriggio: {
        titolo: "Pomeriggio: Isola Bella",
        attivita: [
          "Visita a Isola Bella",
          "Relax in spiaggia",
          "Snorkeling nella riserva marina"
        ],
        luoghiArte: [
          "Villa Comunale",
          "Belvedere di Taormina",
          "Chiesa di San Pancrazio"
        ],
        ristoranti: "Ristorante La Grotta Azzurra - Pesce fresco",
        costo: "€25-35 a persona"
      },
      sera: {
        titolo: "Sera: Taormina by night",
        attivita: [
          "Aperitivo con vista",
          "Cena in ristorante tipico",
          "Passeggiata serale"
        ],
        luoghiArte: [
          "Illuminazione del teatro greco",
          "Vista notturna sulla costa"
        ],
        ristoranti: "Ristorante Rosmarino - Cucina mediterranea",
        costo: "€40-50 a persona"
      }
    },
    {
      id: "4",
      titolo: "Giorno 4 - Marzamemi e coste sud",
      sottotitolo: "Borghi marinari e tradizioni",
      descrizione: "Scopri l'autentica Sicilia nei borghi di pescatori di Marzamemi e Portopalo. Una giornata tra tradizioni marinare, spiagge incontaminate e sapori genuini del sud.",
      colore: "from-purple-500 to-pink-600",
      immagini: ["/marzamemi.jpg", "/marzamemi-borgo.jpg", "/fontane-bianche.jpg"],
      mattina: {
        titolo: "Mattina: Marzamemi",
        attivita: [
          "Visita al borgo di pescatori",
          "Piazza delle Regine",
          "Tonnara di Marzamemi"
        ],
        luoghiArte: [
          "Chiesa di San Francesco",
          "Palazzo Principe di Villadorata",
          "Porto turistico"
        ],
        ristoranti: "La Cialoma - Ristorante di pesce nella tonnara",
        costo: "€25-35 a persona"
      },
      pomeriggio: {
        titolo: "Pomeriggio: Coste sud",
        attivita: [
          "Visita a Portopalo di Capo Passero",
          "Isola delle Correnti",
          "Spiaggia di Carratois"
        ],
        luoghiArte: [
          "Faro di Capo Passero",
          "Castello Tafuri",
          "Ville romane"
        ],
        ristoranti: "Lido delle Sirene - Ristorante di spiaggia",
        costo: "€20-30 a persona"
      },
      sera: {
        titolo: "Sera: Ritorno a Siracusa",
        attivita: [
          "Cena di arrivederci",
          "Comprare souvenirs",
          "Ultima passeggiata a Ortigia"
        ],
        luoghiArte: [
          "Fonte Aretusa di notte",
          "Piazza Archimede"
        ],
        ristoranti: "Ristorante Oinos - Cucina creativa con prodotti locali",
        costo: "€35-45 a persona"
      }
    }
  ];

  const alloggi = [
    {
      nome: "Hotel Borgo Pantano",
      descrizione: "Hotel 4 stelle con piscina e giardino, a 10 minuti da Ortigia. Parcheggio gratuito.",
      punteggio: "8.5/10",
      prezzo: "€120-150/notte",
      servizi: ["Parcheggio", "Piscina", "WiFi", "Colazione"]
    },
    {
      nome: "Agriturismo La Masseria",
      descrizione: "Agriturismo familiare con prodotti tipici, a 15 minuti dal centro. Ambiente tranquillo.",
      punteggio: "8.8/10",
      prezzo: "€100-130/notte",
      servizi: ["Parcheggio", "Ristorante", "Giardino", "Animali ammessi"]
    },
    {
      nome: "B&B Villa Sofia",
      descrizione: "Bed & breakfast moderno con vista mare, a 8 minuti da Siracusa. Ottimo rapporto qualità-prezzo.",
      punteggio: "8.3/10",
      prezzo: "€80-110/notte",
      servizi: ["Parcheggio", "Vista mare", "WiFi", "Colazione"]
    }
  ];

  const costi = {
    pernottamento: {
      totale: "€480-600",
      dettaglio: "4 notti per 2 camere (€120-150/notte per camera)",
      persona: "€120-150 a persona"
    },
    pasti: {
      totale: "€800-1000",
      dettaglio: "4 giorni x 4 persone (€50-60 a persona al giorno)",
      persona: "€200-250 a persona"
    },
    spostamenti: {
      totale: "€200-250",
      dettaglio: "Noleggio auto + carburante per 4 giorni",
      persona: "€50-62 a persona"
    },
    attivita: {
      totale: "€320-400",
      dettaglio: "Ingressi musei, parchi archeologici e attività",
      persona: "€80-100 a persona"
    },
    totale: {
      complessivo: "€1800-2250",
      aPersona: "€450-562 a persona"
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Sfondo Sicilia */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{ backgroundImage: "url('/sicilia-sfondo.jpg')" }}
      />
      
      {/* Overlay gradiente */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 opacity-90 z-10" />
      
      {/* Contenuto */}
      <div className="relative z-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 bg-[url('/sicilia-sfondo.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="relative container mx-auto px-4 py-20 text-center">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
                Viaggio in Sicilia
              </h1>
              <p className="text-2xl md:text-3xl mb-8 font-light">
                4 Giorni tra le Meraviglie di Siracusa e Costa Ionica
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-white/20 backdrop-blur-sm border-white/30">
                🎭 2 Coppie
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-white/20 backdrop-blur-sm border-white/30">
                👥 4 Persone
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-white/20 backdrop-blur-sm border-white/30">
                🏠 Base: Siracusa
              </Badge>
            </div>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed bg-black/20 backdrop-blur-sm p-6 rounded-lg">
              Un itinerario indimenticabile attraverso i tesori della Sicilia sud-orientale: 
              dal barocco di Noto alle spiagge cristalline, dai siti archeologici ai borghi marinari.
              Scopri la bellezza autentica di una terra che incanta i sensi.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => document.getElementById('itinerario')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Camera className="mr-2 h-5 w-5" />
                Esplora l'Itinerario
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('costi')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Budget e Dettagli
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Itinerario */}
          <section id="itinerario" className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Itinerario di 4 Giorni
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un viaggio emozionante attraverso i luoghi più affascinanti della Sicilia sud-orientale
              </p>
            </div>
            
            {/* Navigazione giorni */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {giorni.map((giorno) => (
                <Button
                  key={giorno.id}
                  variant={selectedDay === giorno.id ? "default" : "outline"}
                  size="lg"
                  className={`transform hover:scale-105 transition-all duration-300 ${
                    selectedDay === giorno.id 
                      ? `bg-gradient-to-r ${giorno.colore} text-white shadow-lg` 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedDay(giorno.id)}
                >
                  <Clock className="mr-2 h-5 w-5" />
                  {giorno.titolo}
                </Button>
              ))}
            </div>
            
            {/* Sezioni per ogni giorno */}
            {giorni.map((giorno) => (
              <div 
                key={giorno.id} 
                className={`mb-16 ${selectedDay === giorno.id ? 'block' : 'hidden'}`}
              >
                <Card className="overflow-hidden shadow-2xl border-0">
                  {/* Header del giorno */}
                  <div className={`bg-gradient-to-r ${giorno.colore} text-white p-8`}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2">{giorno.titolo}</h3>
                        <p className="text-xl opacity-90">{giorno.sottotitolo}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="secondary" 
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                          onClick={() => toggleLike(giorno.id)}
                        >
                          <Heart className={`mr-2 h-4 w-4 ${likedItems.includes(giorno.id) ? 'fill-red-500 text-red-500' : ''}`} />
                          {likedItems.includes(giorno.id) ? 'Preferito' : 'Aggiungi ai preferiti'}
                        </Button>
                        <Button 
                          variant="secondary" 
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                        >
                          <Share2 className="mr-2 h-4 w-4" />
                          Condividi
                        </Button>
                      </div>
                    </div>
                    <p className="mt-4 text-lg leading-relaxed opacity-95">{giorno.descrizione}</p>
                  </div>
                  
                  {/* Galleria immagini */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      {giorno.immagini.map((immagine, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                          <img 
                            src={immagine} 
                            alt={`Luogo del ${giorno.titolo} ${index + 1}`}
                            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Camera className="text-white h-8 w-8" />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Dettagli giornalieri */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Mattina */}
                      <Card className="border-l-4 border-l-yellow-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="bg-yellow-50">
                          <CardTitle className="text-lg text-yellow-800 flex items-center">
                            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                            {giorno.mattina.titolo}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-yellow-700">🎯 Attività:</h4>
                            <ul className="space-y-1">
                              {giorno.mattina.attivita.map((attivita, index) => (
                                <li key={index} className="flex items-start text-sm">
                                  <span className="text-yellow-500 mr-2">•</span>
                                  <span>{attivita}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-yellow-700">🎨 Luoghi d'Arte:</h4>
                            <ul className="space-y-1">
                              {giorno.mattina.luoghiArte.map((luogo, index) => (
                                <li key={index} className="flex items-start text-sm">
                                  <span className="text-yellow-500 mr-2">•</span>
                                  <span>{luogo}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-yellow-700">🍽️ Dove Mangiare:</h4>
                            <p className="text-sm italic">{giorno.mattina.ristoranti}</p>
                          </div>
                          <div className="bg-yellow-100 p-3 rounded-lg">
                            <p className="text-sm font-semibold text-yellow-800">💰 Costo: {giorno.mattina.costo}</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Pomeriggio */}
                      <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="bg-blue-50">
                          <CardTitle className="text-lg text-blue-800 flex items-center">
                            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                            {giorno.pomeriggio.titolo}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-blue-700">🎯 Attività:</h4>
                            <ul className="space-y-1">
                              {giorno.pomeriggio.attivita.map((attivita, index) => (
                                <li key={index} className="flex items-start text-sm">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>{attivita}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-blue-700">🎨 Luoghi d'Arte:</h4>
                            <ul className="space-y-1">
                              {giorno.pomeriggio.luoghiArte.map((luogo, index) => (
                                <li key={index} className="flex items-start text-sm">
                                  <span className="text-blue-500 mr-2">•</span>
                                  <span>{luogo}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-blue-700">🍽️ Dove Mangiare:</h4>
                            <p className="text-sm italic">{giorno.pomeriggio.ristoranti}</p>
                          </div>
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <p className="text-sm font-semibold text-blue-800">💰 Costo: {giorno.pomeriggio.costo}</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Sera */}
                      <Card className="border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="bg-purple-50">
                          <CardTitle className="text-lg text-purple-800 flex items-center">
                            <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                            {giorno.sera.titolo}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-purple-700">🎯 Attività:</h4>
                            <ul className="space-y-1">
                              {giorno.sera.attivita.map((attivita, index) => (
                                <li key={index} className="flex items-start text-sm">
                                  <span className="text-purple-500 mr-2">•</span>
                                  <span>{attivita}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-purple-700">🎨 Luoghi d'Arte:</h4>
                            <ul className="space-y-1">
                              {giorno.sera.luoghiArte.map((luogo, index) => (
                                <li key={index} className="flex items-start text-sm">
                                  <span className="text-purple-500 mr-2">•</span>
                                  <span>{luogo}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-purple-700">🍽️ Dove Mangiare:</h4>
                            <p className="text-sm italic">{giorno.sera.ristoranti}</p>
                          </div>
                          <div className="bg-purple-100 p-3 rounded-lg">
                            <p className="text-sm font-semibold text-purple-800">💰 Costo: {giorno.sera.costo}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </section>

          {/* Alloggi Consigliati */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Alloggi Consigliati
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Le migliori strutture nella zona periferica di Siracusa con parcheggio facile
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {alloggi.map((alloggio, index) => (
                <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl">{alloggio.nome}</CardTitle>
                    <CardDescription className="text-base">{alloggio.descrizione}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">⭐ Punteggio:</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {alloggio.punteggio}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">💰 Prezzo:</span>
                      <span className="text-green-600 font-bold text-lg">{alloggio.prezzo}</span>
                    </div>
                    <div>
                      <span className="font-semibold">🎁 Servizi:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {alloggio.servizi.map((servizio, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {servizio}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                      Prenota Ora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Costi */}
          <section id="costi" className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Budget del Viaggio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Costi dettagliati per un'esperienza indimenticabile in Sicilia
              </p>
            </div>
            <Card className="overflow-hidden shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
                <CardTitle className="text-3xl">Budget Totale per 4 Persone</CardTitle>
                <CardDescription className="text-lg opacity-90">
                  Costi stimati per l'intero viaggio di 4 giorni
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                      <h4 className="font-semibold text-blue-800 mb-2 text-lg">🏨 Pernottamento</h4>
                      <p className="text-sm text-gray-600 mb-1">{costi.pernottamento.dettaglio}</p>
                      <p className="text-2xl font-bold text-blue-600">{costi.pernottamento.totale}</p>
                      <p className="text-sm text-gray-500">{costi.pernottamento.persona}</p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                      <h4 className="font-semibold text-green-800 mb-2 text-lg">🍽️ Pasti</h4>
                      <p className="text-sm text-gray-600 mb-1">{costi.pasti.dettaglio}</p>
                      <p className="text-2xl font-bold text-green-600">{costi.pasti.totale}</p>
                      <p className="text-sm text-gray-500">{costi.pasti.persona}</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
                      <h4 className="font-semibold text-yellow-800 mb-2 text-lg">🚗 Spostamenti</h4>
                      <p className="text-sm text-gray-600 mb-1">{costi.spostamenti.dettaglio}</p>
                      <p className="text-2xl font-bold text-yellow-600">{costi.spostamenti.totale}</p>
                      <p className="text-sm text-gray-500">{costi.spostamenti.persona}</p>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                      <h4 className="font-semibold text-purple-800 mb-2 text-lg">🎭 Attività</h4>
                      <p className="text-sm text-gray-600 mb-1">{costi.attivita.dettaglio}</p>
                      <p className="text-2xl font-bold text-purple-600">{costi.attivita.totale}</p>
                      <p className="text-sm text-gray-500">{costi.attivita.persona}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-xl">
                    <h3 className="text-3xl font-bold mb-6">Riepilogo Budget</h3>
                    <div className="space-y-6">
                      <div className="border-b border-gray-600 pb-4">
                        <p className="text-sm text-gray-300">Totale Complessivo</p>
                        <p className="text-4xl font-bold text-green-400">{costi.totale.complessivo}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Costo a Persona</p>
                        <p className="text-3xl font-bold text-blue-400">{costi.totale.aPersona}</p>
                      </div>
                      <div className="mt-8">
                        <h4 className="font-semibold mb-4 text-lg">✨ Include:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            <span>4 notti in hotel/agriturismo</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            <span>Tutti i pasti (colazione, pranzo, cena)</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            <span>Noleggio auto e carburante</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            <span>Ingressi musei e siti archeologici</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-400 mr-2">✓</span>
                            <span>Attività ed esperienze uniche</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Consigli Utili */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Consigli Utili
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Informazioni pratiche per il tuo viaggio perfetto
              </p>
            </div>
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-emerald-50">
                <CardTitle className="text-2xl">📋 Informazioni Pratiche</CardTitle>
                <CardDescription className="text-lg">
                  Tutto ciò che devi sapere per il tuo viaggio in Sicilia
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      🌅 Miglior Periodo per Visitare
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      La primavera (aprile-maggio) e l'autunno (settembre-ottobre) sono i periodi ideali. 
                      Clima mite, meno affollamento e prezzi più convenienti rispetto all'alta stagione estiva.
                      Temperature perfette per esplorare i siti archeologici e godersi le spiagge.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      🚗 Come Spostarsi
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      Noleggiare un'auto è la soluzione migliore per esplorare la zona. 
                      Tutte le località sono raggiungibili in 1-1,5 ore da Siracusa. 
                      Parcheggio facile negli alloggi consigliati. Strade in buone condizioni e panorami mozzafiato lungo il percorso.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      🎒 Cosa Portare
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      Abbigliamento leggero, costume da bagno, protezione solare, scarpe comode per le visite archeologiche,
                      macchina fotografica e borraccia per l'acqua. Non dimenticare un cappello e occhiali da sole per proteggerti dal sole mediterraneo.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-semibold">
                      🍝 Specialità Gastronomiche
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      Non perdere: arancini, cannoli, granita, pasta alla Norma, pesce fresco, 
                      vini locali (Nero d'Avola, Moscato di Noto) e dolci tipici siciliani. 
                      Ogni località offre specialità uniche da assaggiare assolutamente!
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
