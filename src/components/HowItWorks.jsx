import { ScanSearch, Pencil, Rocket, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
    {
        Icon: ScanSearch,
        num: '01',
        color: '#00E0FF',
        bg: 'rgba(0,224,255,0.08)',
        border: 'rgba(0,224,255,0.2)',
        title: 'Diagnóstico',
        body: 'Llenas el Escáner de Eficiencia en 2 minutos. Identificamos tus cuellos de botella operativos.',
    },
    {
        Icon: Pencil,
        num: '02',
        color: '#8B5CF6',
        bg: 'rgba(139,92,246,0.08)',
        border: 'rgba(139,92,246,0.2)',
        title: 'Propuesta',
        body: 'Diseñamos tu sistema llave en mano: qué automatizar, con qué herramientas y en qué orden.',
    },
    {
        Icon: Rocket,
        num: '03',
        color: '#6366F1',
        bg: 'rgba(99,102,241,0.08)',
        border: 'rgba(99,102,241,0.2)',
        title: 'Ejecución',
        body: 'Desplegamos tu automatización. Recuperas tiempo real desde el primer día de operación.',
    },
]

const cardStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '1rem',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxSizing: 'border-box',
}

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
    }),
}

const vp = { once: true, margin: '-100px' }

export default function HowItWorks({ openScanner }) {
    return (
        <section className="section" id="metodo">
            <div className="container">

                {/* Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="label" style={{ marginBottom: '0.75rem' }}>El Método milIAn</p>
                    <h2>Cómo <span className="grad-text">Funciona</span></h2>
                    <p style={{ marginTop: '1rem', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, maxWidth: '440px', margin: '1rem auto 0' }}>
                        Un proceso claro, sin burocracia. De tu problema a la solución en marcha.
                    </p>
                </motion.div>

                {/* 3-column equal grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
                    {steps.map(({ Icon, num, color, bg, border, title, body }, i) => (
                        <motion.div
                            key={num}
                            style={cardStyle}
                            custom={i}
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="show"
                            viewport={vp}
                        >

                            {/* Step label */}
                            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: color, marginBottom: '1.25rem' }}>
                                Paso {num}
                            </p>

                            {/* Icon */}
                            <div
                                className="icon-box"
                                style={{ background: bg, borderColor: border, marginBottom: '1.25rem' }}
                            >
                                <Icon size={19} color={color} strokeWidth={1.75} />
                            </div>

                            {/* Title */}
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.025em', color: 'rgba(255,255,255,0.9)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                                {title}
                            </h3>

                            {/* Body */}
                            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.42)', fontWeight: 400 }}>
                                {body}
                            </p>

                            {/* Bottom glow line */}
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
                                background: `linear-gradient(90deg, transparent, ${color}70, transparent)`,
                            }} />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.button
                        id="method-cta"
                        className="btn"
                        onClick={openScanner}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Comenzar con el Diagnóstico
                        <ArrowRight size={16} />
                    </motion.button>
                </motion.div>

            </div>
        </section>
    )
}
