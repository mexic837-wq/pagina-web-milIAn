import { Clock, TrendingDown, Link2 } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
    {
        Icon: Clock,
        num: '01',
        color: '#00E0FF',
        title: 'Tiempo secuestrado por tareas manuales',
        body: 'Cada día, horas valiosas en procesos que una máquina haría sin errores. Tu equipo merece trabajar en lo que importa.',
    },
    {
        Icon: TrendingDown,
        num: '02',
        color: '#8B5CF6',
        title: 'Ventas estancadas y poca presencia digital',
        body: 'Tu competencia avanza en digital mientras sigues dependiendo del boca a boca o de canales que no escalan.',
    },
    {
        Icon: Link2,
        num: '03',
        color: '#6366F1',
        title: 'La empresa funciona solo si tú estás',
        body: 'Los procesos críticos dependen 100% de ti. Eso no es un negocio, es una trampa. Y tiene solución.',
    },
]

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
    }),
}

export default function PainPoints() {
    return (
        <section className="section" id="problemas">
            <div className="container">

                {/* Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="label" style={{ marginBottom: '0.75rem' }}>El diagnóstico</p>
                    <h2>¿Te suena <span className="grad-text">familiar?</span></h2>
                </motion.div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
                    {items.map(({ Icon, num, color, title, body }, i) => (
                        <motion.div
                            key={num}
                            className="card"
                            custom={i}
                            variants={cardVariant}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            {/* Top row */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                <span className="label" style={{ color: 'rgba(255,255,255,0.2)' }}>{num}</span>
                                <div
                                    className="icon-box"
                                    style={{ background: `${color}12`, borderColor: `${color}25` }}
                                >
                                    <Icon size={18} color={color} strokeWidth={1.75} />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.88)', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                                {title}
                            </h3>

                            {/* Body */}
                            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>
                                {body}
                            </p>

                            {/* Hover accent line */}
                            <div
                                style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
                                    background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
                                    opacity: 0,
                                    transition: 'opacity .4s',
                                }}
                                className="card-accent-line"
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
