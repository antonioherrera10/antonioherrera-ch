/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Wand2, Layers, Heart, Menu, X, Globe, User, MessageSquareOff, Briefcase, Maximize, Compass, Clock, Star, MapPin, MousePointerClick, FileText, Bell, Download, Instagram, Music, Youtube, Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import DesignView from "./components/DesignView";
import MuxPlayer from "@mux/mux-player-react";

type Language = "EN" | "DE" | "ES";

const CONTENT = {
  EN: {
    cta: "Request a conversation",
    heroTitle: "Design your life architecture.",
    heroSub: "Transform your life and relationships into a profound experience by building genuine connections.",
    musicHeroTitle: "Connect through music",
    musicHeroSub: "Transform your events into joyful experiences that build genuine connections.",
    showreelTitle: "Showreel",
    showreelSub: "Experience the rhythm, the light, and the pure energy of live connection.",
    partnersTitle: "Trusted by",
    heroCta: "Begin a new journey",
    banner1: "Visionary transformation that opens doors without pushing.",
    banner2: "Intentional expression woven into every object and act.",
    banner3: "Emotional resonance that lingers long after the moment ends.",
    promoTitle: "Life is too short to be stuck and miss the fun.",
    promoSub: "Problems are not fun. Don't let anything keep you back. You were designed for more.",
    promoCta: "Begin a new journey",
    featuresTitle: "Take control of your life journey.",
    featuresSub: "Have you ever experienced the following in your personal life...",
    feature1Title: "Identity.",
    feature1Desc: "Not knowing what you actually want — so you shape yourself around other people’s expectations and wonder why nothing feels right.",
    feature2Title: "Relationships.",
    feature2Desc: "Avoiding difficult conversations until resentment builds. The relationship doesn’t break from conflict — it breaks from silence.",
    feature3Title: "Work.",
    feature3Desc: "Confusing professional performance with personal worth. When the role defines the person, losing the role means losing yourself.",
    feature4Title: "Spaces.",
    feature4Desc: "Living or working in environments that were designed for a previous version of your life. The space keeps reinforcing who you were, not who you’re becoming.",
    feature5Title: "Leadership.",
    feature5Desc: "Leading through control rather than trust. It delivers short-term results but slowly empties the room of the people worth keeping.",
    expTitle: "I know how frustrating is to not move forward in life. I was there.",
    exp1: "More than 10 years of experience",
    exp2: "More than 50 engagements",
    exp3: "More than 20 countries visited",
    howTitle: "How to begin the new life journey",
    howStep1: "Click on Register",
    howStep2: "Fill out the form and hit Send",
    howStep3: "We will notify you if you are in",
    stopTitle: "Stop stressing about life. Connect, sing and dance with me.",
    stopText1: "You already know how to perform under pressure. You’ve mastered the serious side of life — the decisions, the discipline, the weight of getting it right. But when was the last time you let yourself be light?",
    stopText2: "Not distracted. Not numbing. Actually light — the kind where your body moves before your mind can object, where your voice joins in before you’ve decided whether you’re any good, where a room full of strangers becomes a room full of people you’d happily see again.\n\nJoy isn’t a reward for finishing your to-do list. It’s a practice. And like any practice, it gets easier the moment you stop performing and start participating. This is what I do. I create spaces where ambitious, intelligent people remember that connection, music, and movement aren’t extras. They’re the point. You don’t need to be good at it. You just need to show up willing.",
    continueReading: "Continue reading... >",
    registerNow: "Register now",
    pdfTitle: "5 ways to transform your life: Roadmap",
    pdfSub: "Download my free PDF and discover how your can enjoy your life more.",
    pdfCta: "Download PDF",
    unlockTitle: "Enjoy your life to the fullest.",
    footerShop: "Boutique",
    footerAbout: "About",
    footerBooking: "MANAGEMENT",
    footerCollections: "Collections",
    footerNewRoyal: "The New Royal",
    footerChangingEmotions: "Changing Emotions",
    footerSoftRoyal: "Soft Royal",
    footerStory: "Story",
    footerMediaKit: "Media Kit",
    footerContact: "Contact Management",
    footerBookConversation: "Propose collaboration",
    footerLanguages: "Languages",
    footerFollow: "Follow, Watch, Listen",
    tickerText: "Website under construction • Happy to serve you",
    testimonialsTitle: "Testimonials",
    test1Name: "Isabel A.",
    test1Role: "Brand Strategy Consultant",
    test1Quote: "You all are architects of unforgettable happy moments. Thank you for letting us celebrate with you. Great people in this group. I laughed and shouted and danced so much. My heart is so happy.",
    test2Name: "Toni-Ann O.",
    test2Role: "Photographer and Filmmaker",
    test2Quote: "Best event ever in life. Really an amazing night, dear. Thanks for being unapologetically authentic and for taking us on that journey with you.",
    test3Name: "Donika P.",
    test3Role: "Experience Designer",
    test3Quote: "Best. Party. Ever. I still can't believe it. It was like a magical dream. Thank you so much.",
    test4Name: "Clifford L.",
    test4Role: "Stylist and Image Consultant",
    test4Quote: "An unforgettable evening celebrating food, fashion, friendship and pure fabulousness. Surrounded by inspiring guests and the incredible creative team, we experienced a truly exclusive fusion of art and design. We had a ball.",
    test5Name: "Paulina Z.",
    test5Role: "Creative Technologist",
    test5Quote: "We absolutely adore you. The experience was so extraordinary that even my grandchildren won't believe I once attended a party like this. It was unforgettable in every sense.",
    test6Name: "Sarah O.",
    test6Role: "Lecturer",
    test6Quote: "I was so amazed by your performance. I was speechless afterwards. It was great. You are sooo talented. Thank you.",
    test7Name: "Stefan K.",
    test7Role: "Finance Executive",
    test7Quote: "I felt alive and people loved it.",
    test8Name: "Thiago Z.",
    test8Role: "Professional Services",
    test8Quote: "It was very professional, I will come again",
    test9Name: "Andreas S.",
    test9Role: "Entrepreneur, CIO & Family Office",
    test9Quote: "You are multi-skilled. I liked the combination of the talk, the design exhibition and the music performance. Thanks again for your event invitation. It was definitely a highlight of the year-end.",
    test10Name: "Isabel G.",
    test10Role: "Entrepreneur",
    test10Quote: "I know you organise innovative, creative events that step outside the ordinary. I love your work.",
    designTitle: "Under construction",
    designSubtitle: "I am designing a new life architecture space. Something extraordinary is being crafted.",
    designCta: "Join the VIP Waitlist",
    designEmailPlaceholder: "Enter your email address...",
    designNamePlaceholder: "Your elite name...",
    designSuccessText: "Thank you! You are on the registry for the next design evolution.",
    designBackCta: "Back to Home",
  },
  DE: {
    cta: "Gespräch anfragen",
    heroTitle: "Gestalte deine Lebensarchitektur.",
    heroSub: "Verwandle dein Leben und deine Beziehungen in eine tiefgreifende Erfahrung. Baue echte Verbindungen auf.",
    musicHeroTitle: "Verbinde dich durch Musik",
    musicHeroSub: "Verwandle deine Events in freudvolle Erlebnisse, die echte Verbindungen schaffen.",
    showreelTitle: "Showreel",
    showreelSub: "Erlebe den Rhythmus, das Licht und die pure Energie lebendiger Verbindung.",
    partnersTitle: "Vertraut von",
    heroCta: "Beginne eine neue Reise",
    banner1: "Visionäre Transformation, die Türen öffnet, ohne zu drängen.",
    banner2: "Intentionaler Ausdruck, der in jedes Objekt und jede Handlung eingewebt ist.",
    banner3: "Emotionale Resonanz, die noch lange nach dem Moment nachklingt.",
    promoTitle: "Das Leben ist zu kurz, um festzustecken und den Spaß zu verpassen.",
    promoSub: "Probleme machen keinen Spaß. Lass dich von nichts zurückhalten. Du wurdest für mehr geschaffen.",
    promoCta: "Beginne eine neue Reise",
    featuresTitle: "Übernimm die Kontrolle über deine Lebensreise.",
    featuresSub: "Hast du jemals das Folgende in deinem persönlichen Leben erlebt...",
    feature1Title: "Identität.",
    feature1Desc: "Nicht zu wissen, was du eigentlich willst – also formst du dich nach den Erwartungen anderer und wunderst dich, warum sich nichts richtig anfühlt.",
    feature2Title: "Beziehungen.",
    feature2Desc: "Schwierige Gespräche vermeiden, bis sich Groll aufbaut. Die Beziehung bricht nicht am Konflikt – sie bricht am Schweigen.",
    feature3Title: "Arbeit.",
    feature3Desc: "Berufliche Leistung mit persönlichem Wert verwechseln. Wenn die Rolle die Person definiert, bedeutet der Verlust der Rolle den Verlust deiner selbst.",
    feature4Title: "Räume.",
    feature4Desc: "In Umgebungen leben oder arbeiten, die für eine frühere Version deines Lebens entworfen wurden. Der Raum verstärkt ständig, wer du warst, nicht wer du wirst.",
    feature5Title: "Führung.",
    feature5Desc: "Führen durch Kontrolle statt durch Vertrauen. Es liefert kurzfristige Ergebnisse, leert aber langsam den Raum von den Menschen, die es wert sind, behalten zu werden.",
    expTitle: "Ich weiß, wie frustrierend es ist, im Leben nicht voranzukommen. Ich war dort.",
    exp1: "Mehr als 10 Jahre Erfahrung",
    exp2: "Mehr als 50 Engagements",
    exp3: "Mehr als 20 besuchte Länder",
    howTitle: "Wie man die neue Lebensreise beginnt",
    howStep1: "Klicke auf Registrieren",
    howStep2: "Fülle das Formular aus und klicke auf Senden",
    howStep3: "Wir benachrichtigen dich, wenn du dabei bist",
    stopTitle: "Hör auf, dich über das Leben zu stressen. Verbinde dich, singe und tanze mit mir.",
    stopText1: "Du weißt bereits, wie man unter Druck performt. Du hast die ernste Seite des Lebens gemeistert – die Entscheidungen, die Disziplin, das Gewicht, alles richtig zu machen. Aber wann hast du dir das letzte Mal erlaubt, leicht zu sein?",
    stopText2: "Nicht abgelenkt. Nicht betäubt. Tatsächlich leicht – die Art, bei der sich dein Körper bewegt, bevor dein Verstand Einspruch erheben kann, bei der deine Stimme einsetzt, bevor du entschieden hast, ob du gut genug bist, bei der ein Raum voller Fremder zu einem Raum voller Menschen wird, die du gerne wiedersehen würdest.\n\nFreude ist keine Belohnung für das Erledigen deiner To-Do-Liste. Sie ist eine Praxis. Und wie jede Praxis wird sie einfacher in dem Moment, in dem du aufhörst zu performen und anfängst teilzunehmen. Das ist es, was ich tue. Ich schaffe Räume, in denen ehrgeizige, intelligente Menschen sich daran erinnern, dass Verbindung, Musik und Bewegung keine Extras sind. Sie sind der Punkt. Du musst nicht gut darin sein. Du musst nur bereit sein, zu erscheinen.",
    continueReading: "Weiterlesen... >",
    registerNow: "Jetzt registrieren",
    pdfTitle: "5 Wege, dein Leben zu transformieren: Roadmap",
    pdfSub: "Lade mein kostenloses PDF herunter und entdecke, wie du dein Leben mehr genießen kannst.",
    pdfCta: "PDF Herunterladen",
    unlockTitle: "Genieße dein Leben in vollen Zügen.",
    footerShop: "Boutique",
    footerAbout: "Über uns",
    footerBooking: "MANAGEMENT",
    footerCollections: "Kollektionen",
    footerNewRoyal: "The New Royal",
    footerChangingEmotions: "Changing Emotions",
    footerSoftRoyal: "Soft Royal",
    footerStory: "Geschichte",
    footerMediaKit: "Media Kit",
    footerContact: "Kontakt Management",
    footerBookConversation: "Zusammenarbeit vorschlagen",
    footerLanguages: "Sprachen",
    footerFollow: "Folgen, Sehen, Hören",
    tickerText: "Website im Aufbau • Gerne für dich da",
    testimonialsTitle: "Testimonials",
    test1Name: "Isabel A.",
    test1Role: "Beraterin für Markenstrategie",
    test1Quote: "Ihr alle seid Architekten unvergesslicher Glücksmomente. Danke, dass wir mit euch feiern durften. Tolle Menschen in dieser Gruppe. Ich habe so viel gelacht, geschrien und getanzt. Mein Herz ist so glücklich.",
    test2Name: "Toni-Ann O.",
    test2Role: "Fotografin und Filmemacherin",
    test2Quote: "Bestes Event jemals im Leben. Wirklich eine unglaubliche Nacht, meine Liebe. Danke, dass du so kompromisslos authentisch bist und uns auf diese Reise mitgenommen hast.",
    test3Name: "Donika P.",
    test3Role: "Erlebnis-Designerin",
    test3Quote: "Beste. Party. Jemals. Ich kann es immer noch nicht glauben. Es war wie ein magischer Traum. Vielen Dank.",
    test4Name: "Clifford L.",
    test4Role: "Stylist und Image-Berater",
    test4Quote: "Ein unvergesslicher Abend, an dem Essen, Mode, Freundschaft und pure Fabelhaftigkeit gefeiert wurden. Umgeben von inspirierenden Gästen und dem unglaublichen Kreativteam erlebten wir eine wahrhaft exklusive Verschmelzung von Kunst und Design. Wir hatten einen Riesenspaß.",
    test5Name: "Paulina Z.",
    test5Role: "Kreativ-Technologin",
    test5Quote: "Wir beten dich absolut an. Die Erfahrung war so außergewöhnlich, dass selbst meine Enkelkinder nicht glauben werden, dass ich einmal eine Party wie diese besucht habe. Es war in jeder Hinsicht unvergesslich.",
    test6Name: "Sarah O.",
    test6Role: "Dozentin",
    test6Quote: "Ich war so beeindruckt von deinem Auftritt. Danach war ich sprachlos. Es war großartig. Du bist so talentiert. Danke.",
    test7Name: "Stefan K.",
    test7Role: "Finanzvorstand",
    test7Quote: "Ich fühlte mich lebendig und die Leute liebten es.",
    test8Name: "Thiago Z.",
    test8Role: "Professionelle Dienstleistungen",
    test8Quote: "Es war sehr professionell, ich werde wiederkommen",
    test9Name: "Andreas S.",
    test9Role: "Unternehmer, CIO & Family Office",
    test9Quote: "Du bist vielseitig begabt. Mir hat die Kombination aus Vortrag, Designausstellung und Musikperformance sehr gut gefallen. Nochmals vielen Dank für die Einladung zum Event. Es war definitiv ein Highlight zum Jahresende.",
    test10Name: "Isabel G.",
    test10Role: "Unternehmerin",
    test10Quote: "Ich weiß, dass du innovative, kreative Events organisierst, die aus dem Rahmen fallen. Ich liebe deine Arbeit.",
    designTitle: "Im Aufbau",
    designSubtitle: "Ich entwerfe einen neuen Raum für Lebensarchitektur. Etwas Außergewöhnliches entsteht.",
    designCta: "Tritt der VIP-Warteliste bei",
    designEmailPlaceholder: "Deine E-Mail-Adresse...",
    designNamePlaceholder: "Dein Name...",
    designSuccessText: "Danke! Du stehst auf der Liste für die nächste Design-Evolution.",
    designBackCta: "Zurück zur Startseite",
  },
  ES: {
    cta: "Solicitar una conversación",
    heroTitle: "Diseña la arquitectura de tu vida.",
    heroSub: "Transforma tu vida y tus relaciones en una experiencia profunda. Construye conexiones genuinas.",
    musicHeroTitle: "Conéctate a través de la música",
    musicHeroSub: "Transforma tus eventos en experiencias alegres que construyan conexiones genuinas.",
    showreelTitle: "Showreel",
    showreelSub: "Experimenta el ritmo, la luz y la energía pura de una conexión en vivo.",
    partnersTitle: "Con la confianza de",
    heroCta: "Comienza un nuevo viaje",
    banner1: "Transformación visionaria que abre puertas sin empujar.",
    banner2: "Expresión intencional tejida en cada objeto y acto.",
    banner3: "Resonancia emocional que perdura mucho después de que el momento termina.",
    promoTitle: "La vida es demasiado corta para estar estancado y perderse la diversión.",
    promoSub: "Los problemas no son divertidos. No dejes que nada te detenga. Fuiste diseñado para más.",
    promoCta: "Comienza un nuevo viaje",
    featuresTitle: "Toma el control de tu viaje de vida.",
    featuresSub: "¿Alguna vez has experimentado lo siguiente en tu vida personal...?",
    feature1Title: "Identidad.",
    feature1Desc: "No saber lo que realmente quieres, por lo que te moldeas según las expectativas de los demás y te preguntas por qué nada se siente bien.",
    feature2Title: "Relaciones.",
    feature2Desc: "Evitar conversaciones difíciles hasta que se acumula el resentimiento. La relación no se rompe por el conflicto, se rompe por el silencio.",
    feature3Title: "Trabajo.",
    feature3Desc: "Confundir el desempeño profesional con el valor personal. Cuando el rol define a la persona, perder el rol significa perderse a uno mismo.",
    feature4Title: "Espacios.",
    feature4Desc: "Vivir o trabajar en entornos diseñados para una versión anterior de tu vida. El espacio sigue reforzando quién eras, no en quién te estás convirtiendo.",
    feature5Title: "Liderazgo.",
    feature5Desc: "Liderar a través del control en lugar de la confianza. Ofrece resultados a corto plazo pero vacía lentamente la sala de las personas que vale la pena conservar.",
    expTitle: "Sé lo frustrante que es no avanzar en la vida. Yo estuve allí.",
    exp1: "Más de 10 años de experiencia",
    exp2: "Más de 50 compromisos",
    exp3: "Más de 20 países visitados",
    howTitle: "Cómo comenzar el nuevo viaje de vida",
    howStep1: "Haz clic en Registrarse",
    howStep2: "Completa el formulario y presiona Enviar",
    howStep3: "Te notificaremos si estás dentro",
    stopTitle: "Deja de estresarte por la vida. Conéctate, canta y baila conmigo.",
    stopText1: "Ya sabes cómo rendir bajo presión. Has dominado el lado serio de la vida: las decisiones, la disciplina, el peso de hacerlo bien. Pero, ¿cuándo fue la última vez que te permitiste ser ligero?",
    stopText2: "No distraído. No adormecido. Realmente ligero: de ese tipo en el que tu cuerpo se mueve antes de que tu mente pueda objetar, donde tu voz se une antes de que hayas decidido si eres bueno, donde una habitación llena de extraños se convierte en una habitación llena de gente que felizmente volverías a ver.\n\nLa alegría no es una recompensa por terminar tu lista de tareas pendientes. Es una práctica. Y como cualquier práctica, se vuelve más fácil en el momento en que dejas de actuar y comienzas a participar. Esto es lo que hago. Creo espacios donde personas ambiciosas e inteligentes recuerdan que la conexión, la música y el movimiento no son extras. Son el punto. No necesitas ser bueno en eso. Solo necesitas presentarte dispuesto.",
    continueReading: "Continuar leyendo... >",
    registerNow: "Registrarse ahora",
    pdfTitle: "5 formas de transformar tu vida: Hoja de ruta",
    pdfSub: "Descarga mi PDF gratuito y descubre cómo puedes disfrutar más de tu vida.",
    pdfCta: "Descargar PDF",
    unlockTitle: "Disfruta de tu vida al máximo.",
    footerShop: "Boutique",
    footerAbout: "Sobre mí",
    footerBooking: "MANAGEMENT",
    footerCollections: "Colecciones",
    footerNewRoyal: "The New Royal",
    footerChangingEmotions: "Changing Emotions",
    footerSoftRoyal: "Soft Royal",
    footerStory: "Historia",
    footerMediaKit: "Media Kit",
    footerContact: "Gestión de Contacto",
    footerBookConversation: "Proponer colaboración",
    footerLanguages: "Idiomas",
    footerFollow: "Seguir, Ver, Escuchar",
    tickerText: "Sitio web en construcción • Feliz de servirte",
    testimonialsTitle: "Testimonios",
    test1Name: "Isabel A.",
    test1Role: "Consultora de Estrategia de Marca",
    test1Quote: "Todos sois arquitectos de momentos felices inolvidables. Gracias por dejarnos celebrar con vosotros. Gente estupenda en este grupo. Reí, grité y bailé muchísimo. Mi corazón está muy feliz.",
    test2Name: "Toni-Ann O.",
    test2Role: "Fotógrafa y Cineasta",
    test2Quote: "El mejor evento de mi vida. Realmente una noche increíble, querida. Gracias por ser auténtica sin disculpas y por llevarnos en ese viaje contigo.",
    test3Name: "Donika P.",
    test3Role: "Diseñadora de Experiencias",
    test3Quote: "La mejor. Fiesta. De todas. Todavía no puedo creerlo. Fue como un sueño mágico. Muchas gracias.",
    test4Name: "Clifford L.",
    test4Role: "Estilista y Consultor de Imagen",
    test4Quote: "Una velada inolvidable celebrando la comida, la moda, la amistad y la pura fabulosidad. Rodeados de invitados inspiradores y del increíble equipo creativo, experimentamos una fusión verdaderamente exclusiva de arte y diseño. Nos lo pasamos de maravilla.",
    test5Name: "Paulina Z.",
    test5Role: "Tecnóloga Creativa",
    test5Quote: "Absolutamente te adoramos. La experiencia fue tan extraordinaria que ni siquiera mis nietos creerán que una vez asistí a una fiesta como esta. Fue inolvidable en todos los sentidos.",
    test6Name: "Sarah O.",
    test6Role: "Profesora",
    test6Quote: "Me quedé tan asombrado por tu actuación. Me quedé sin palabras después. Fue genial. Tienes tanto talento. Gracias.",
    test7Name: "Stefan K.",
    test7Role: "Ejecutivo de Finanzas",
    test7Quote: "Me sentí vivo y a la gente le encantó.",
    test8Name: "Thiago Z.",
    test8Role: "Servicios Profesionales",
    test8Quote: "Fue muy profesional, volveré",
    test9Name: "Andreas S.",
    test9Role: "Empresario, CIO y Family Office",
    test9Quote: "Eres polifacético. Me gustó la combinación de la charla, la exposición de diseño y la actuación musical. Gracias de nuevo por la invitación al evento. Sin duda fue lo más destacado de fin de año.",
    test10Name: "Isabel G.",
    test10Role: "Empresaria",
    test10Quote: "Se que tu organisas eventos innovativos, creativos y que salen de lo comun. Amo tu trabajo.",
    designTitle: "En construcción",
    designSubtitle: "Estoy diseñando un nuevo espacio de arquitectura de vida. Algo extraordinario se está gestando.",
    designCta: "Únete a la lista de espera VIP",
    designEmailPlaceholder: "Tu dirección de correo...",
    designNamePlaceholder: "Tu nombre...",
    designSuccessText: "¡Gracias! Ya estás registrado para la próxima evolución de diseño.",
    designBackCta: "Volver a Inicio",
  },
};

const BRAND_COLORS = ["#ff3333", "#ff6600", "#ff99cc", "#75cafa", "#0000ff"];

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverColor, setHoverColor] = useState(BRAND_COLORS[0]);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isInteractive && !isHovering) {
        setIsHovering(true);
        setHoverColor(BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)]);
      } else if (!isInteractive && isHovering) {
        setIsHovering(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setClicks(prev => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setClicks(prev => prev.filter(c => c.id !== id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [isHovering]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] border border-white/60 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        animate={{
          x: mousePos.x - (isHovering ? 20 : 8),
          y: mousePos.y - (isHovering ? 20 : 8),
          width: isHovering ? 40 : 16,
          height: isHovering ? 40 : 16,
          backgroundColor: isHovering ? hoverColor : "#ff3333",
          opacity: isHovering ? 0.3 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.5,
          backgroundColor: { duration: 0.2 }
        }}
      />

      {/* Explosion Particles */}
      <AnimatePresence>
        {clicks.map(click => (
          <div key={click.id} className="fixed top-0 left-0 pointer-events-none z-[9998]">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: click.x, 
                  y: click.y, 
                  scale: 1, 
                  opacity: 1 
                }}
                animate={{ 
                  x: click.x + (Math.cos(i * 30 * (Math.PI / 180)) * 80),
                  y: click.y + (Math.sin(i * 30 * (Math.PI / 180)) * 80),
                  scale: 0,
                  opacity: 0,
                  rotate: 360
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-2 h-2 rounded-full"
                style={{ backgroundColor: BRAND_COLORS[i % BRAND_COLORS.length] }}
              />
            ))}
            {/* Added a center "celebration" pop */}
            <motion.div
              initial={{ x: click.x, y: click.y, scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute w-6 h-6 border-2 border-brand-white rounded-full -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </AnimatePresence>
    </>
  );
};

const ShapeAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Circle - Red */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.8, 1],
          rotate: [0, 90, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-red/20 blur-3xl"
      />
      
      {/* Square - Orange */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.9, 1.3, 1],
          rotate: [0, -45, 45, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-brand-orange/15 blur-3xl"
      />

      {/* Triangle - Rosa */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, 80, -120, 0],
          scale: [1, 1.1, 0.9, 1],
          rotate: [0, 180, -180, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-rosa/20 blur-3xl"
      />
    </div>
  );
};

const Ticker = ({ text }: { text: string }) => {
  const words = text.split(" ");
  const tickerColors = [
    "var(--color-brand-red)",
    "var(--color-brand-orange)",
    "var(--color-brand-rosa)",
    "var(--color-brand-lightblue)",
    "var(--color-brand-blue)"
  ];
  
  return (
    <div className="w-full bg-brand-white py-1.5 overflow-hidden whitespace-nowrap border-y border-brand-black">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block"
      >
        <div className="flex items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center">
              {words.map((word, j) => (
                <motion.span
                  key={`${i}-${j}`}
                  className={`text-brand-black text-xs md:text-sm font-bold uppercase cursor-default inline-block ${word === '•' ? 'px-2' : 'tracking-widest px-0.5'}`}
                  whileHover={{ 
                    color: tickerColors[j % tickerColors.length],
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <span className="text-brand-black text-xs md:text-sm font-bold px-2 tracking-tighter cursor-default">•</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<"home" | "design" | "music">("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>("EN");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleViewChange = (newView: "home" | "design" | "music") => {
    setView(newView);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = CONTENT[lang];

  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-brand-red selection:text-white">
      <CustomCursor />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleViewChange("home")}
              className="text-xl font-bold tracking-tighter uppercase cursor-pointer focus:outline-none focus:ring-0 text-left hover:text-brand-grey transition-colors"
            >
              ANTONIO HERRERA
            </button>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <button
              onClick={() => handleViewChange("design")}
              className={`text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer focus:outline-none focus:ring-0 ${
                view === "design" ? "text-brand-white font-semibold" : "text-brand-grey hover:text-brand-white"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => handleViewChange("music")}
              className={`text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer focus:outline-none focus:ring-0 ${
                view === "music" ? "text-brand-white font-semibold" : "text-brand-grey hover:text-brand-white"
              }`}
            >
              Music
            </button>
            <a href="https://antonioherrera.shop/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-widest uppercase text-brand-grey hover:text-brand-white transition-colors">Boutique</a>
          </nav>
          
          <div className="hidden md:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="relative flex items-center">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-2 text-brand-grey hover:text-brand-white transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold tracking-wider">{lang}</span>
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40 bg-transparent" 
                      onClick={() => setIsLangMenuOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-12 z-50 bg-brand-black/95 border border-brand-white/20 rounded-lg p-2 flex flex-col gap-1 min-w-[90px] shadow-2xl backdrop-blur-md"
                    >
                      {(["EN", "DE", "ES"] as Language[]).map((l) => (
                        <button
                          key={l}
                          onClick={() => {
                            setLang(l);
                            setIsLangMenuOpen(false);
                          }}
                          className={`px-3 py-1.5 text-left text-xs font-mono font-bold tracking-widest transition-colors rounded hover:bg-brand-white/10 cursor-pointer ${
                            lang === l ? "text-brand-white bg-brand-white/5" : "text-brand-grey"
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <a 
              href="mailto:antonio.herrera@herrdesigncollective.com?subject=Conversation%20Request"
              className="px-5 py-2 bg-brand-white text-brand-black font-semibold text-xs hover:bg-brand-grey transition-colors rounded-lg uppercase tracking-wider font-mono text-center"
            >
              {t.cta}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden relative">
            {/* Mobile Language Switcher Symbol */}
            <div className="relative flex items-center">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-2 text-brand-grey hover:text-brand-white transition-colors cursor-pointer flex items-center gap-1 focus:outline-none"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold">{lang}</span>
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40 bg-transparent" 
                      onClick={() => setIsLangMenuOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-12 z-50 bg-brand-black/95 border border-brand-white/20 rounded-lg p-2 flex flex-col gap-1 min-w-[90px] shadow-2xl backdrop-blur-md"
                    >
                      {(["EN", "DE", "ES"] as Language[]).map((l) => (
                        <button
                          key={l}
                          onClick={() => {
                            setLang(l);
                            setIsLangMenuOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className={`px-3 py-1.5 text-left text-xs font-mono font-bold tracking-widest transition-colors rounded hover:bg-brand-white/10 cursor-pointer ${
                            lang === l ? "text-brand-white bg-brand-white/5" : "text-brand-grey"
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-brand-black px-6 py-8 flex flex-col gap-6"
          >
            {/* Middle Nav items for Mobile */}
            <div className="flex flex-col items-center gap-4 py-4 border-b border-brand-white/10">
              <button
                onClick={() => handleViewChange("design")}
                className={`text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer focus:outline-none focus:ring-0 ${
                  view === "design" ? "text-brand-white font-semibold" : "text-brand-grey"
                }`}
              >
                Design
              </button>
              <button
                onClick={() => handleViewChange("music")}
                className={`text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer focus:outline-none focus:ring-0 ${
                  view === "music" ? "text-brand-white font-semibold" : "text-brand-grey"
                }`}
              >
                Music
              </button>
              <a href="https://antonioherrera.shop/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold tracking-widest uppercase text-brand-grey hover:text-brand-white transition-colors">Boutique</a>
            </div>

            <div className="text-center text-[10px] tracking-[0.3em] uppercase text-brand-grey font-medium py-2">
              Designer | Performing Artist
            </div>
            
            <a 
              href="mailto:antonio.herrera@herrdesigncollective.com?subject=Conversation%20Request"
              className="w-full py-4 bg-brand-white text-brand-black font-semibold text-center rounded-lg uppercase tracking-wider text-sm font-mono"
            >
              {t.cta}
            </a>
          </motion.div>
        )}

        {/* 5 Horizontal Stripes (25px total, hiding when scrolled) */}
        <div className={`flex flex-col w-full transition-all duration-300 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-[25px] opacity-100"}`}>
          <div className="h-[5px] w-full bg-brand-red" />
          <div className="h-[5px] w-full bg-brand-orange" />
          <div className="h-[5px] w-full bg-brand-rosa" />
          <div className="h-[5px] w-full bg-brand-lightblue" />
          <div className="h-[5px] w-full bg-brand-blue" />
        </div>
      </header>

      <main>
        <AnimatePresence mode="wait">
          {view === "home" ? (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Hero Section */}
              <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
                {/* Background Image: with modern, elegant animation */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]">
                  <motion.div
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ 
                      scale: [1.12, 1.05, 1.10, 1.05],
                      x: [0, 15, -15, 0],
                      y: [0, -10, 10, 0],
                      opacity: 1
                    }}
                    transition={{
                      scale: {
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                      },
                      x: {
                        duration: 30,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                      },
                      y: {
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                      },
                      opacity: {
                        duration: 1.8,
                        ease: "easeOut"
                      }
                    }}
                    className="w-full h-full transform-gpu"
                  >
                    <img 
                      src="/src/assets/images/antonio_hero_bg_1779317466947.png" 
                      alt="Antonio Herrera Stage Performance" 
                      className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.1] saturate-[0.85]"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-brand-black/60 z-10" />
                  
                  {/* Subtle architectural light overlay */}
                  <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-brand-red/10 to-transparent pointer-events-none mix-blend-plus-lighter z-10 animate-pulse duration-5000" />
                  <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-brand-orange/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-10" />
                </div>
                
                <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
                  <motion.h1 
                    key={`${lang}-home-title`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
                  >
                    {t.heroTitle.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.2em] last:mr-0 cursor-default"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -2, 2, 0],
                          skew: [0, 5, -5, 0],
                          color: "var(--color-brand-red)"
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10,
                          rotate: { type: "tween", duration: 0.4 },
                          skew: { type: "tween", duration: 0.4 }
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>
                  
                  <motion.p 
                    key={`${lang}-home-sub`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-brand-grey mb-12 max-w-3xl mx-auto leading-relaxed"
                  >
                    {t.heroSub}
                  </motion.p>
       
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <a 
                      href="mailto:antonio.herrera@herrdesigncollective.com?subject=Conversation%20Request"
                      className="inline-block w-full md:w-auto px-6 md:px-10 py-4 border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black transition-all duration-500 text-sm font-bold tracking-widest uppercase text-center rounded-xl font-mono tracking-wider animate-pulse duration-3000"
                    >
                      {t.cta}
                    </a>
                  </motion.div>
                </div>
       
                {/* Ticker Bar */}
                <div className="absolute bottom-0 left-0 right-0 z-30">
                  <Ticker text={t.tickerText} />
                </div>
              </section>
       
              {/* Bold Divider */}
              <div className="h-2 bg-brand-white w-full" />
       
              {/* Final CTA Section: Red Box */}
              <section className="bg-brand-red py-32 border-b-4 border-brand-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-brand-black leading-tight"
                  >
                    {t.unlockTitle}
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <a 
                      href="mailto:antonio.herrera@herrdesigncollective.com?subject=Conversation%20Request"
                      className="inline-block w-full md:w-auto px-12 py-5 bg-brand-black text-brand-white hover:bg-brand-white hover:text-brand-black transition-all duration-500 text-sm font-bold tracking-widest uppercase text-center rounded-xl font-mono tracking-wider"
                    >
                      {t.cta}
                    </a>
                  </motion.div>
                </div>
              </section>
            </motion.div>
          ) : view === "music" ? (
            <motion.div
              key="music-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Music Hero Section */}
              <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="/src/assets/images/antonio_hero_bg_1779317466947.png" 
                    alt="Antonio Herrera Music Performance" 
                    className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/95 z-10" />
                </div>
                
                <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
                  <motion.h1 
                    key={`${lang}-music-title`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
                  >
                    {t.musicHeroTitle.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.2em] last:mr-0 cursor-default"
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -2, 2, 0],
                          skew: [0, 5, -5, 0],
                          color: "var(--color-brand-red)"
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10,
                          rotate: { type: "tween", duration: 0.4 },
                          skew: { type: "tween", duration: 0.4 }
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>
                  
                  <motion.p 
                    key={`${lang}-music-sub`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-brand-grey mb-12 max-w-3xl mx-auto leading-relaxed"
                  >
                    {t.musicHeroSub}
                  </motion.p>
       
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <a 
                      href="mailto:antonio.herrera@herrdesigncollective.com?subject=Conversation%20Request"
                      className="inline-block w-full md:w-auto px-6 md:px-10 py-4 border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black transition-all duration-500 text-sm font-bold tracking-widest uppercase text-center rounded-xl font-mono tracking-wider"
                    >
                      {t.cta}
                    </a>
                  </motion.div>
                </div>
       
                {/* Ticker Bar */}
                <div className="absolute bottom-0 left-0 right-0 z-30">
                  <Ticker text={t.tickerText} />
                </div>
              </section>
       
              {/* Bold Divider */}
              <div className="h-2 bg-brand-white w-full" />

              {/* Showreel Section */}
              <section className="bg-brand-black border-b-4 border-brand-white text-brand-white w-full overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-full aspect-video bg-brand-black"
                >
                  <MuxPlayer
                    playbackId="zC4Dxc015iYBWPPtB92XqYXm5yrYKFYElE01HM6sPuKeA"
                    metadataVideoTitle="Showreel"
                    style={{ aspectRatio: "16/9", width: "100%", height: "100%" }}
                    accentColor="#ff3333"
                  />
                </motion.div>
              </section>

              {/* Bold Divider */}
              <div className="h-2 bg-brand-white w-full" />

              {/* Partners Logos Section */}
              <section className="py-24 bg-brand-black border-b-4 border-brand-white text-brand-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.2em] mb-12 text-brand-grey font-mono"
                  >
                    {t.partnersTitle}
                  </motion.h3>

                  <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {/* FIFA Logo */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-brand-white hover:text-[#326295] transition-colors duration-300 pointer-events-auto"
                    >
                      <svg viewBox="0 0 110 45" className="h-10 text-current fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5h22v6H18v8h12v6H18v15H10V5z" />
                        <path d="M37 5h8v35h-8V5z" />
                        <path d="M50 5h22v6H58v8h12v6H58v15H50V5z" />
                        <path d="M88 5h6l12 35h-8.5l-2.5-8.5h-11l-2.5 8.5H73L88 5zm6 11.5L91 26h6l-3-9.5z" />
                        <path d="M8 43c30 4 75 4 110-3-20 2-60 3-110 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </motion.div>

                    {/* RBC (Royal Bank) Logo */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="shrink-0"
                    >
                      <svg viewBox="0 0 280 55" className="h-10 text-brand-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="48" height="51" rx="8" fill="#005DAA" />
                        <path d="M12 28c0-6 4-10 10-10l3 2-2 2h3l1 3-2 1h3v3s-3 1-5 1c-5 0-10-4-10-12z" fill="#FFD200" />
                        <path d="M30 18l3 3-1 2-2-1-2 2-1-3 3-3zM25 22c1 0 2 .5 2 1.5s-.5 1.5-2 1.5-2-.5-2-1.5.5-1.5 2-1.5z" fill="#FFD200" />
                        <circle cx="38" cy="30" r="6" fill="#FFD200" opacity="0.8" />
                        <path d="M10 40c4-4 12-4 16-2s12 1 16-3c-1 4-6 6-12 5s-12-1-16 0z" fill="#FFD200" />
                        <line x1="62" y1="8" x2="62" y2="47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-30 text-brand-white" />
                        <text x="76" y="36" className="fill-current text-brand-white font-bold" style={{ fontFamily: "Inter, sans-serif", fontSize: "20px" }}>Royal Bank</text>
                      </svg>
                    </motion.div>

                    {/* SRF Logo */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="shrink-0"
                    >
                      <svg viewBox="0 0 260 55" className="h-10 text-brand-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="85" height="51" rx="8" fill="#C0001F" />
                        <path d="M22 23.5c0-3.5 3-4.5 5.5-4.5 3 0 5 1.5 5 4H27.8c0-1-.8-1.5-2.2-1.5-1.5 0-2 .6-2 1.5s.5 1.2 2 1.8l3.2 1.2c4 1.5 5.2 3.2 5.2 5.8 0 4-3.2 5.2-6.2 5.2-3.5 0-6-1.8-6-4.5h4.8c0 1 1 1.8 2.3 1.8 1.4 0 2.2-.6 2.2-1.8 0-.8-.5-1.2-2.3-1.8l-2.5-1c-4-1.5-5.3-3-5.3-5.8z" fill="#FFFFFF" />
                        <path d="M43 19.5h8.5c4 0 6 1.8 6 4.5s-2 3.8-4.5 4.2l5 8.3h-5.2l-4.5-8h-2V36.5H43v-17zm3.3 2.8v3.2h5c1.8 0 2.8-.8 2.8-1.6s-1-1.6-2.8-1.6h-5z" fill="#FFFFFF" />
                        <path d="M64 19.5h11v2.8H67.3v5h6v2.8h-6v6.4H64v-17z" fill="#FFFFFF" />
                        <text x="98" y="27" className="fill-current text-brand-white font-medium" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>Schweizer Radio</text>
                        <text x="98" y="44" className="fill-current text-brand-white font-medium" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>und Fernsehen</text>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Bold Divider */}
              <div className="h-2 bg-brand-white w-full" />
       
              {/* Testimonials Section */}
              <section className="py-32 bg-brand-black border-b-4 border-brand-white">
                <div className="max-w-7xl mx-auto px-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-20 text-center uppercase"
                  >
                    {t.testimonialsTitle}
                  </motion.h2>

                  <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {[
                      { name: t.test1Name, role: t.test1Role, quote: t.test1Quote, color: "bg-brand-red text-brand-black" },
                      { name: t.test2Name, role: t.test2Role, quote: t.test2Quote, color: "bg-brand-orange text-brand-black" },
                      { name: t.test3Name, role: t.test3Role, quote: t.test3Quote, color: "bg-brand-rosa text-brand-black" },
                      { name: t.test4Name, role: t.test4Role, quote: t.test4Quote, color: "bg-brand-lightblue text-brand-black" },
                      { name: t.test5Name, role: t.test5Role, quote: t.test5Quote, color: "bg-brand-blue text-brand-white" },
                      { name: t.test6Name, role: t.test6Role, quote: t.test6Quote, color: "bg-brand-red text-brand-black" },
                      { name: t.test7Name, role: t.test7Role, quote: t.test7Quote, color: "bg-brand-orange text-brand-black" },
                      { name: t.test8Name, role: t.test8Role, quote: t.test8Quote, color: "bg-brand-rosa text-brand-black" },
                      { name: t.test9Name, role: t.test9Role, quote: t.test9Quote, color: "bg-brand-lightblue text-brand-black" },
                      { name: t.test10Name, role: t.test10Role, quote: t.test10Quote, color: "bg-brand-blue text-brand-white" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`break-inside-avoid p-8 rounded-3xl flex flex-col gap-6 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] hover:translate-y-[-4px] transition-transform duration-300 ${item.color}`}
                      >
                        <Quote className="w-10 h-10 opacity-30 shrink-0" />
                        <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
                          "{item.quote}"
                        </p>
                        <div className="flex flex-col gap-1 border-t border-current/20 pt-6">
                          <div className="font-bold text-lg leading-tight">{item.name}</div>
                          <div className="text-xs uppercase tracking-widest opacity-70 font-semibold">{item.role}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Bold Divider */}
              <div className="h-2 bg-brand-white w-full" />
       
              {/* Final CTA Section: Red Box */}
              <section className="bg-brand-red py-32 border-b-4 border-brand-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-brand-black leading-tight"
                  >
                    {t.unlockTitle}
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <a 
                      href="mailto:antonio.herrera@herrdesigncollective.com?subject=Conversation%20Request"
                      className="inline-block w-full md:w-auto px-12 py-5 bg-brand-black text-brand-white hover:bg-brand-white hover:text-brand-black transition-all duration-500 text-sm font-bold tracking-widest uppercase text-center rounded-xl"
                    >
                      {t.cta}
                    </a>
                  </motion.div>
                </div>
              </section>
            </motion.div>
          ) : (
            <DesignView
              key="design-view"
              lang={lang}
              t={t}
              onBackToHome={() => handleViewChange("home")}
            />
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-brand-black text-brand-white pt-24 pb-12 border-t-4 border-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Brand Info */}
            <div className="flex flex-col gap-6">
              <div className="text-2xl font-bold tracking-tighter uppercase">
                ANTONIO HERRERA
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-brand-grey font-medium leading-relaxed">
                Designer | Performing Artist
              </p>

              <div className="flex flex-col gap-4 mt-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-grey">{t.footerFollow}</span>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/antonioherrera.mundus?igsh=cjVuaGV0emVwYnp4&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-brand-white/5 border border-brand-white/10 rounded-full hover:bg-brand-red hover:border-brand-red transition-all duration-300 text-brand-white"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://youtube.com/@antonioherrera.mundus?si=12-Fng0GHvItSX2-" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-brand-white/5 border border-brand-white/10 rounded-full hover:bg-brand-rosa hover:border-brand-rosa transition-all duration-300 text-brand-white"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://open.spotify.com/artist/0oKlB9ESgXx9XMeqolUre6?si=brftvhePSoiH_-zHBn5YSA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-brand-white/5 border border-brand-white/10 rounded-full hover:bg-brand-lightblue hover:border-brand-lightblue transition-all duration-300 text-brand-white"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.13-10.561-1.17-.411.09-.827-.16-.917-.57-.091-.41.16-.827.57-.917 4.62-1.05 8.52-.6 11.67 1.35.36.24.48.66.24 1.021zm1.44-3.3c-.3.48-.9.63-1.38.33-3.21-1.98-8.13-2.58-11.94-1.41-.54.15-1.11-.15-1.26-.69-.15-.54.15-1.11.69-1.26 4.35-1.32 9.78-.63 13.5 1.65.48.3.63.9.33 1.38zm.12-3.42c-3.87-2.31-10.32-2.52-14.07-1.38-.63.18-1.29-.15-1.47-.78-.18-.63.15-1.29.78-1.47 4.26-1.29 11.4-1.02 15.87 1.62.57.33.75 1.08.42 1.65-.33.57-1.08.75-1.65.42z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-3 gap-12 lg:gap-24">
              {/* Shop */}
              <div className="flex flex-col gap-8">
                <a href="https://antonioherrera.shop/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-widest uppercase hover:text-brand-red transition-colors">
                  {t.footerShop}
                </a>
                <ul className="flex flex-col gap-4 text-xs text-brand-grey tracking-widest uppercase">
                  <li><a href="https://antonioherrera.shop/collections" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">{t.footerCollections}</a></li>
                  <li><a href="https://antonioherrera.shop/collections/the-new-royal" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">{t.footerNewRoyal}</a></li>
                  <li><a href="https://antonioherrera.shop/collections/frontpage" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">{t.footerChangingEmotions}</a></li>
                  <li><a href="https://zigzagzurich.com/products/artist-bedding-soft-royal-by-antonio-herrera/?srsltid=AfmBOopGXi-WRvKEhWIiJdKsopCa0oKQPhGfJo_klOeazaj757uaaCzR" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">{t.footerSoftRoyal}</a></li>
                </ul>
              </div>

              {/* About */}
              <div className="flex flex-col gap-8">
                <a href="https://antonioherrera.ch/about" target="_blank" rel="noopener noreferrer" className="text-sm font-bold tracking-widest uppercase hover:text-brand-red transition-colors">
                  {t.footerAbout}
                </a>
                <ul className="flex flex-col gap-4 text-xs text-brand-grey tracking-widest uppercase">
                  <li><a href="https://antonioherrera.ch/work" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">{t.footerStory}</a></li>
                  <li><a href="https://drive.google.com/drive/folders/17zF5Ly85M9FZqljwzYJHKgjZK63YD2zZ?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">{t.footerMediaKit}</a></li>
                </ul>
              </div>

              {/* Booking */}
              <div className="flex flex-col gap-8">
                <span className="text-sm font-bold tracking-widest uppercase text-brand-white">
                  {t.footerBooking}
                </span>
                <ul className="flex flex-col gap-4 text-xs text-brand-grey tracking-widest uppercase">
                  <li>
                    <a href="mailto:contact@herrdesigncollective.com" className="hover:text-brand-white transition-colors block leading-relaxed">
                      {t.footerContact}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:antonio.herrera@herrdesigncollective.com?subject=Collaboration%20Proposal" className="hover:text-brand-white transition-colors block leading-relaxed">
                      {t.footerBookConversation}
                    </a>
                  </li>
                  <li>
                    <span className="block leading-relaxed normal-case text-brand-lightblue font-medium">
                      Management by HERR Design Collective GmbH
                    </span>
                  </li>
                </ul>

                {/* Footer Languages */}
                <div className="mt-8 pt-8 border-t border-brand-white/10">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-grey block mb-4">{t.footerLanguages}</span>
                  <div className="flex gap-4">
                    {(["EN", "DE", "ES"] as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`text-[10px] font-bold tracking-widest transition-colors ${
                          lang === l ? "text-brand-white" : "text-brand-grey hover:text-brand-white"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-brand-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.2em] uppercase text-brand-grey">
            <p>&copy; 2026 Antonio Herrera | HERR Design Collective GmbH. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
