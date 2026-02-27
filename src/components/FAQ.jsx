import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        q: '¿Esto es solo para empresas tecnológicas?',
        a: 'En absoluto. Nuestros sistemas están diseñados para negocios tradicionales (distribuidoras, clínicas, servicios) que quieren modernizar y automatizar sus procesos manuales.',
    },
    {
        q: '¿Mi equipo o yo tenemos que saber programar?',
        a: 'Cero. En milIAn construimos sistemas \'llave en mano\'. Nosotros nos encargamos de la ingeniería compleja; tú solo disfrutas de los resultados en paneles sencillos.',
    },
    {
        q: '¿Qué pasa después de la Reunión de Diagnóstico?',
        a: 'Te entregamos un mapa de ruta detallado. Si decides que somos el equipo correcto para implementarlo, comenzamos a construir tu Fábrica Digital. Si no, te llevas el diagnóstico gratis.',
    },
]

const vp = { once: true, margin: '-80px' }

function AccordionItem({ faq, index, openIndex, toggle }) {
    const isOpen = openIndex === index

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '0.875rem',
                overflow: 'hidden',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                transition: 'border-color 0.3s ease',
                borderColor: isOpen ? 'rgba(0,224,255,0.2)' : 'rgba(255,255,255,0.08)',
            }}
        >
            {/* Question button */}
            <button
                onClick={() => toggle(index)}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem',
                }}
            >
                <span style={{
                    fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
                    fontWeight: 600,
                    color: isOpen ? '#fff' : 'rgba(255,255,255,0.75)',
                    lineHeight: 1.5,
                    transition: 'color 0.3s ease',
                    fontFamily: 'Space Grotesk, sans-serif',
                }}>
                    {faq.q}
                </span>

                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: isOpen
                            ? 'linear-gradient(135deg, rgba(0,224,255,0.15), rgba(139,92,246,0.15))'
                            : 'rgba(255,255,255,0.06)',
                        transition: 'background 0.3s ease',
                    }}
                >
                    <ChevronDown
                        size={16}
                        color={isOpen ? '#00E0FF' : 'rgba(255,255,255,0.4)'}
                        strokeWidth={2.5}
                    />
                </motion.span>
            </button>

            {/* Answer with AnimatePresence */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{
                            padding: '0 1.5rem 1.25rem',
                            fontSize: '0.9375rem',
                            lineHeight: 1.75,
                            color: 'rgba(255,255,255,0.45)',
                        }}>
                            {faq.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (i) => setOpenIndex(prev => (prev === i ? null : i))

    return (
        <section className="section" id="faq" style={{ paddingBottom: '2rem' }}>
            <div className="container" style={{ maxWidth: '720px' }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <p className="label" style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.35)',
                        marginBottom: '1rem',
                    }}>
                        FAQ
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.04em',
                        lineHeight: 1.15,
                        color: '#fff',
                    }}>
                        Preguntas <span className="grad-text">Frecuentes</span>
                    </h2>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            faq={faq}
                            index={i}
                            openIndex={openIndex}
                            toggle={toggle}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}
