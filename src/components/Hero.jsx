import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero({ openScanner }) {
    return (
        <section className="section" id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>

            {/* Top radial glow */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                    width: '600px', height: '400px', pointerEvents: 'none',
                    background: 'radial-gradient(ellipse at top, rgba(139,92,246,0.2) 0%, transparent 70%)',
                    filter: 'blur(1px)',
                }}
            />

            <motion.div
                className="container"
                style={{ textAlign: 'center', paddingTop: '4rem' }}
                variants={stagger}
                initial="hidden"
                animate="show"
            >

                {/* Label */}
                <motion.p variants={fadeUp} className="label label-cyan" style={{ marginBottom: '1.5rem' }}>
                    Automatización con IA · Empresas
                </motion.p>

                {/* H1 */}
                <motion.h1
                    data-aos="fade-up"
                    variants={fadeUp}
                    style={{
                        fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.04em',
                        lineHeight: 1.05,
                        color: '#fff',
                        marginBottom: '1rem',
                    }}
                >
                    Delega la rutina a la Inteligencia Artificial.
                </motion.h1>

                <motion.h2
                    variants={fadeUp}
                    className="grad-text"
                    style={{
                        fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.04em',
                        lineHeight: 1.05,
                        marginBottom: '1.75rem',
                    }}
                >
                    Recupera tu Libertad Operativa.
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    variants={fadeUp}
                    style={{
                        maxWidth: '560px',
                        margin: '0 auto 2.5rem',
                        fontSize: '1.0625rem',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.45)',
                        fontWeight: 400,
                    }}
                >
                    Automatizamos tu empresa con{' '}
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>Inteligencia Artificial</span>{' '}
                    y{' '}
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>Desarrollo Web</span>{' '}
                    para que escales sin contratar más personal.
                </motion.p>

                {/* CTA row */}
                <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <motion.button
                        id="hero-cta"
                        className="btn btn-hero"
                        onClick={openScanner}
                        style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Iniciar Escáner de Eficiencia Gratuito
                        <ArrowRight size={18} />
                    </motion.button>
                    <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.2)' }}>
                        2 min · Sin compromisos · 100% gratuito
                    </p>
                </motion.div>

            </motion.div>

        </section>
    )
}
