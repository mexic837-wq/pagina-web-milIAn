import { motion } from 'framer-motion'

const vp = { once: true, margin: '-80px' }

export default function AuthoritySection() {
    return (
        <section className="section" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        textAlign: 'center',
                        maxWidth: '620px',
                        margin: '0 auto',
                    }}
                >
                    {/* Decorative line */}
                    <div style={{
                        width: '48px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #00E0FF, #8B5CF6)',
                        margin: '0 auto 2rem',
                        borderRadius: '2px',
                    }} />

                    <h3 style={{
                        fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.2,
                        color: '#fff',
                        marginBottom: '1.25rem',
                    }}>
                        Liderando la transición hacia la{' '}
                        <span className="grad-text">eficiencia</span>.
                    </h3>

                    <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.75,
                        color: 'rgba(255,255,255,0.45)',
                        maxWidth: '520px',
                        margin: '0 auto',
                    }}>
                        Fundado por Miguel. Nuestra misión en mil<span className="grad-text">IA</span>n es
                        devolverle a los dueños de negocios su recurso más valioso:{' '}
                        <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>el tiempo</span>,
                        construyendo sistemas que trabajan 24/7.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
