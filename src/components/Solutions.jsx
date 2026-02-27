import { BrainCircuit, Globe, Workflow, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

/* Shared card style object */
const S = {
    card: {
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '1rem',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxSizing: 'border-box',
        wordBreak: 'break-word',
    },
    label: {
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
    },
    title: {
        fontSize: '1.375rem',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        color: 'rgba(255,255,255,0.9)',
        lineHeight: 1.25,
    },
    body: {
        fontSize: '0.875rem',
        lineHeight: 1.75,
        color: 'rgba(255,255,255,0.42)',
        fontWeight: 400,
    },
}

const reveal = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
})

const vp = { once: true, margin: '-100px' }

export default function Solutions() {
    return (
        <section className="section" id="servicios">
            <div className="container">

                {/* Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="label" style={{ marginBottom: '0.75rem' }}>Nuestros Servicios</p>
                    <h2>Construimos tu <span className="grad-text">Fábrica Digital</span></h2>
                </motion.div>

                {/* ── Bento Grid ───────────────────────────────────────── */}
                <div className="bento-grid">

                    {/* ── Card 1: Marketing con IA (2 cols) ── */}
                    <motion.div
                        className="bento-col-2"
                        style={{ ...S.card, transition: 'border-color .3s, transform .3s, box-shadow .3s' }}
                        data-aos="fade-up"
                        data-aos-delay="100"
                        variants={reveal(0)}
                        initial="hidden"
                        whileInView="show"
                        viewport={vp}
                    >
                        {/* Top: badge + icon */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <div>
                                <p className="label" style={{ ...S.label, color: '#00E0FF', marginBottom: '0.5rem' }}>Presencia Multiplicada</p>
                                <h3 style={S.title}>Máquina de Contenido Inagotable</h3>
                            </div>
                            <div className="icon-box" style={{ background: 'rgba(0,224,255,0.08)', borderColor: 'rgba(0,224,255,0.2)' }}>
                                <BrainCircuit size={20} color="#00E0FF" strokeWidth={1.75} />
                            </div>
                        </div>

                        {/* Body */}
                        <p style={{ ...S.body, maxWidth: '420px' }}>
                            Olvídate de pensar qué publicar. Creamos un sistema inteligente que genera, diseña y
                            distribuye contenido de alto impacto para tu marca. Tu empresa activa y atrayendo
                            clientes 24/7{' '}
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>sin pagar una agencia entera.</span>
                        </p>

                        {/* Stats */}
                        <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                            {[['24/7', 'Operación'], ['10×', 'Velocidad'], ['$0', 'Costo extra']].map(([v, l]) => (
                                <div key={l}>
                                    <div className="grad-text" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.04em' }}>{v}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>{l}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Card 2: Ingeniería Web (1 col) ── */}
                    <motion.div
                        style={S.card}
                        data-aos="fade-up"
                        data-aos-delay="200"
                        variants={reveal(0.12)}
                        initial="hidden"
                        whileInView="show"
                        viewport={vp}
                    >
                        <div className="icon-box" style={{ background: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.2)', marginBottom: '1.25rem' }}>
                            <Globe size={20} color="#8B5CF6" strokeWidth={1.75} />
                        </div>
                        <p className="label" style={{ ...S.label, color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }}>Conversión Acelerada</p>
                        <h3 style={{ ...S.title, marginBottom: '0.875rem' }}>Tu Mejor Vendedor Digital</h3>
                        <p style={S.body}>
                            No hacemos «páginas web» genéricas. Construimos plataformas de ultra-alta velocidad
                            diseñadas psicológicamente para convertir a tus visitantes en reuniones agendadas y ventas.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>Carga en milisegundos · Optimizado para SEO</span>
                            <ArrowUpRight size={15} color="rgba(255,255,255,0.2)" />
                        </div>
                    </motion.div>

                    {/* ── Card 3: Automatización (full width) ── */}
                    <motion.div
                        className="bento-col-3 bento-row-flex"
                        style={{ ...S.card, display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}
                        data-aos="fade-up"
                        data-aos-delay="300"
                        variants={reveal(0.24)}
                        initial="hidden"
                        whileInView="show"
                        viewport={vp}
                    >
                        <div className="icon-box" style={{ background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.2)', flexShrink: 0 }}>
                            <Workflow size={20} color="#818CF8" strokeWidth={1.75} />
                        </div>
                        <div style={{ flex: 1, minWidth: '240px' }}>
                            <p className="label" style={{ ...S.label, color: 'rgba(255,255,255,0.3)', marginBottom: '0.4rem' }}>Cero Tareas Manuales</p>
                            <h3 style={{ ...S.title, marginBottom: '0.6rem' }}>El Cerebro de tu Operación</h3>
                            <p style={S.body}>
                                Conectamos tus herramientas para que hablen entre sí. Imagina que un cliente paga y automáticamente
                                recibe su factura, un mensaje de bienvenida por WhatsApp y se registra en tu CRM. Cero fricción, cero errores humanos.
                            </p>
                        </div>
                        {/* Tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', flexShrink: 0 }}>
                            {['CRM', 'Email', 'WhatsApp', 'Facturación', 'Bases de Datos', 'Calendarios'].map(t => (
                                <span
                                    key={t}
                                    style={{
                                        fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em',
                                        padding: '4px 12px', borderRadius: '9999px',
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: 'rgba(255,255,255,0.35)',
                                        whiteSpace: 'nowrap',
                                    }}
                                >{t}</span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
