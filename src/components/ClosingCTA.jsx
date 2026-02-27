import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const vp = { once: true, margin: '-100px' }

export default function ClosingCTA({ openScanner }) {
    return (
        <section className="section" id="cta-final">
            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '1.25rem',
                        padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        boxSizing: 'border-box',
                    }}
                >

                    {/* Top gradient rule */}
                    <div style={{
                        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                        width: '60%', height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(0,224,255,0.5), rgba(139,92,246,0.5), transparent)',
                    }} />

                    {/* Corner glow */}
                    <div style={{
                        position: 'absolute', bottom: '-4rem', right: '-4rem',
                        width: '20rem', height: '20rem', borderRadius: '50%', pointerEvents: 'none',
                        background: 'radial-gradient(circle, rgba(0,224,255,0.06) 0%, transparent 65%)',
                        filter: 'blur(20px)',
                    }} />

                    <p className="label" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.5rem' }}>
                        ¿Listo para escalar?
                    </p>

                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.04em',
                        lineHeight: 1.1,
                        color: '#fff',
                        marginBottom: '1.25rem',
                    }}>
                        Tu tiempo vale más que
                        <br />
                        tareas <span className="grad-text">repetitivas.</span>
                    </h2>

                    <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.42)',
                        maxWidth: '480px',
                        margin: '0 auto 2.5rem',
                    }}>
                        Descubre en 2 minutos qué procesos de tu empresa podemos automatizar hoy — sin compromiso de ningún tipo.
                    </p>

                    <motion.button
                        id="closing-cta"
                        className="btn"
                        onClick={openScanner}
                        style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ir al Escáner de Eficiencia
                        <ArrowRight size={18} />
                    </motion.button>

                    <p style={{ marginTop: '1.25rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.2)' }}>
                        100% gratuito · Sin compromisos · Resultados inmediatos
                    </p>

                </motion.div>
            </div>
        </section>
    )
}
