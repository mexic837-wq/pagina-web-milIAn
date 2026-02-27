import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

/* ─── Content ─────────────────────────────────── */

const privacyContent = {
    title: 'Política de Privacidad de milIAn',
    updated: 'Última actualización: Febrero de 2026',
    intro: 'En milIAn, valoramos y respetamos tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal cuando visitas nuestro sitio web y utilizas nuestro Escáner de Eficiencia.',
    sections: [
        {
            heading: '1. Información que recopilamos',
            body: 'Recopilamos información que tú nos proporcionas directamente, como tu nombre, correo electrónico, número de teléfono (WhatsApp) y datos sobre los procesos operativos de tu negocio a través de nuestros formularios de diagnóstico.',
        },
        {
            heading: '2. Uso de la información',
            body: 'Utilizamos tus datos exclusivamente para:',
            list: [
                'Analizar el estado de tu negocio y entregarte el diagnóstico solicitado.',
                'Contactarte vía WhatsApp o correo electrónico para agendar tu Reunión de Diagnóstico.',
                'Mejorar nuestros servicios de automatización e Inteligencia Artificial.',
            ],
        },
        {
            heading: '3. Protección y uso compartido de datos',
            body: 'Tu información está segura. No vendemos, alquilamos ni comercializamos tus datos personales a terceros. Utilizamos herramientas de software de nivel empresarial (como n8n y Google Workspace) para procesar y almacenar tu información bajo estrictos estándares de seguridad.',
        },
        {
            heading: '4. Tus derechos',
            body: 'Tienes el derecho de solicitar el acceso, la corrección o la eliminación de tus datos personales de nuestra base de datos en cualquier momento. Para hacerlo, puedes responder a cualquiera de nuestros correos electrónicos.',
        },
    ],
}

const termsContent = {
    title: 'Términos y Condiciones de Uso',
    updated: 'Última actualización: Febrero de 2026',
    intro: 'Al acceder y utilizar el sitio web de milIAn y nuestro Escáner de Eficiencia, aceptas cumplir con los siguientes términos:',
    sections: [
        {
            heading: '1. Nuestros Servicios',
            body: 'milIAn es una agencia especializada en automatización de procesos, desarrollo web e Inteligencia Artificial para empresas. La información proporcionada en este sitio web y en las reuniones de diagnóstico gratuitas es de carácter consultivo y no constituye una obligación de contratación.',
        },
        {
            heading: '2. Uso Aceptable',
            body: 'Te comprometes a proporcionar información real y precisa en nuestros formularios. Queda estrictamente prohibido el uso de nuestro sitio para enviar spam, saturar nuestros sistemas automatizados o ingresar datos falsos. Nos reservamos el derecho de ignorar o bloquear solicitudes que consideremos fraudulentas.',
        },
        {
            heading: '3. Propiedad Intelectual',
            body: 'Todo el contenido de este sitio web, incluyendo textos, diseño, logotipos (milIAn) y la estructura de nuestro Escáner de Eficiencia, son propiedad exclusiva de milIAn. No se permite su reproducción sin autorización previa.',
        },
        {
            heading: '4. Limitación de Responsabilidad',
            body: 'milIAn no se hace responsable de las decisiones comerciales que tomes basándote en los resultados preliminares del Escáner de Eficiencia. Cualquier implementación tecnológica se regirá por un contrato de servicios formal e independiente.',
        },
    ],
}

/* ─── Component ───────────────────────────────── */

export default function LegalPage({ page, onClose }) {
    const content = page === 'privacy' ? privacyContent : termsContent

    // Lock body scroll while open
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [])

    return (
        <AnimatePresence>
            {page && (
                <motion.div
                    key="legal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 100,
                        background: '#0a0a0a',
                        overflowY: 'auto',
                    }}
                >
                    {/* Subtle background glow */}
                    <div style={{
                        position: 'fixed', top: '-10%', right: '-10%',
                        width: '40vw', height: '40vw', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0,224,255,0.04) 0%, transparent 70%)',
                        filter: 'blur(60px)', pointerEvents: 'none',
                    }} />
                    <div style={{
                        position: 'fixed', bottom: '-10%', left: '-5%',
                        width: '35vw', height: '35vw', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)',
                        filter: 'blur(60px)', pointerEvents: 'none',
                    }} />

                    {/* Back button */}
                    <div style={{
                        position: 'sticky', top: 0, zIndex: 10,
                        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        background: 'rgba(10,10,10,0.75)',
                    }}>
                        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '1rem 1.5rem' }}>
                            <button
                                onClick={onClose}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    background: 'transparent', border: 'none', cursor: 'pointer',
                                    fontSize: '0.9375rem', fontWeight: 500,
                                    color: 'rgba(255,255,255,0.5)',
                                    transition: 'color 0.25s ease',
                                    fontFamily: 'Space Grotesk, sans-serif',
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                            >
                                <ArrowLeft size={16} />
                                Volver al inicio
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            maxWidth: '48rem',
                            margin: '0 auto',
                            padding: '3rem 1.5rem 5rem',
                        }}
                        className="legal-content"
                    >
                        {/* Title */}
                        <h1 style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                            fontWeight: 700,
                            color: '#fff',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.2,
                            marginBottom: '0.75rem',
                        }}>
                            {content.title}
                        </h1>

                        {/* Date */}
                        <p style={{
                            fontSize: '0.875rem',
                            color: 'rgba(255,255,255,0.30)',
                            marginBottom: '2.5rem',
                            paddingBottom: '2rem',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                        }}>
                            {content.updated}
                        </p>

                        {/* Intro */}
                        <p style={{
                            fontSize: '1.0625rem',
                            lineHeight: 1.8,
                            color: 'rgba(255,255,255,0.65)',
                            marginBottom: '2.5rem',
                        }}>
                            {content.intro}
                        </p>

                        {/* Sections */}
                        {content.sections.map((sec, i) => (
                            <div key={i} style={{ marginBottom: '2.25rem' }}>
                                <h2 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: '#fff',
                                    marginBottom: '0.75rem',
                                    letterSpacing: '-0.02em',
                                }}>
                                    {sec.heading}
                                </h2>
                                <p style={{
                                    fontSize: '1rem',
                                    lineHeight: 1.8,
                                    color: 'rgba(255,255,255,0.55)',
                                }}>
                                    {sec.body}
                                </p>
                                {sec.list && (
                                    <ul style={{
                                        marginTop: '0.75rem',
                                        paddingLeft: '1.5rem',
                                        display: 'flex', flexDirection: 'column', gap: '0.5rem',
                                    }}>
                                        {sec.list.map((item, j) => (
                                            <li key={j} style={{
                                                fontSize: '1rem',
                                                lineHeight: 1.75,
                                                color: 'rgba(255,255,255,0.55)',
                                            }}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
