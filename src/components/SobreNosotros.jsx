import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function SobreNosotros({ isOpen, onClose }) {
    // Lock body scroll while open
    useEffect(() => {
        if (!isOpen) return
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="about-overlay"
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
                            Sobre mil<span className="grad-text">IA</span>n
                        </h1>

                        {/* Subtitle */}
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'rgba(255,255,255,0.40)',
                            marginBottom: '2.5rem',
                            paddingBottom: '2rem',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            fontWeight: 500,
                            letterSpacing: '-0.01em',
                        }}>
                            Más que una agencia, tu brazo tecnológico.
                        </p>

                        {/* Body paragraphs */}
                        <p style={{
                            fontSize: '1.0625rem',
                            lineHeight: 1.8,
                            color: 'rgba(255,255,255,0.55)',
                            marginBottom: '1.75rem',
                        }}>
                            En el ecosistema actual, trabajar duro ya no es suficiente; hay que trabajar de forma inteligente. Fundé mil<span className="grad-text">IA</span>n con un único propósito: <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>rescatar a los dueños de negocios de la trampa operativa.</span>
                        </p>

                        <p style={{
                            fontSize: '1.0625rem',
                            lineHeight: 1.8,
                            color: 'rgba(255,255,255,0.55)',
                            marginBottom: '1.75rem',
                        }}>
                            La mayoría de las empresas llegan a un punto donde su propio éxito se convierte en su mayor cuello de botella. Las horas se esfuman en tareas manuales, la gestión de datos se vuelve un caos en hojas de cálculo y el crecimiento se estanca porque el equipo no da abasto.
                        </p>

                        <p style={{
                            fontSize: '1.0625rem',
                            lineHeight: 1.8,
                            color: 'rgba(255,255,255,0.55)',
                            marginBottom: '1.75rem',
                        }}>
                            No somos una agencia tradicional. No hacemos "páginas web" genéricas ni llevamos redes sociales. Somos <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>arquitectos de automatización</span>.
                        </p>

                        <p style={{
                            fontSize: '1.0625rem',
                            lineHeight: 1.8,
                            color: 'rgba(255,255,255,0.55)',
                            marginBottom: '2.5rem',
                        }}>
                            Construimos sistemas a medida con Inteligencia Artificial que trabajan 24/7, conectan todas tus herramientas (CRM, WhatsApp, correos) y eliminan el error humano. Nuestro objetivo es devolverte tu recurso más valioso: <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>el tiempo</span>, protegiendo tus márgenes de ganancia para que puedas enfocarte en dirigir y escalar.
                        </p>

                        {/* Signature */}
                        <div style={{
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                        }}>
                            <p style={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                color: 'rgba(255,255,255,0.65)',
                                letterSpacing: '-0.01em',
                            }}>
                                — Miguel, <span className="grad-text">Fundador & CEO de milIAn</span>.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
