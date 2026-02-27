import { Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactCTA() {
    return (
        <section id="contact-cta" className="section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        background: 'linear-gradient(145deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.95) 100%)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '1.25rem',
                        padding: 'clamp(3rem, 6vw, 4rem) clamp(2rem, 5vw, 3rem)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        margin: '0 auto',
                        maxWidth: '900px'
                    }}
                >
                    {/* Glow effect superior */}
                    <div style={{
                        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                        width: '60%', height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(0,224,255,0.4), transparent)',
                    }} />

                    {/* Resplandor de fondo */}
                    <div style={{
                        position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
                        width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(0,224,255,0.08) 0%, transparent 60%)',
                        pointerEvents: 'none', filter: 'blur(40px)'
                    }} />

                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.15,
                        color: '#ffffff',
                        marginBottom: '1rem',
                        fontFamily: 'Space Grotesk, sans-serif'
                    }}>
                        ¿Listo para automatizar <br className="hidden sm:block" />y escalar tu negocio?
                    </h2>

                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                        color: 'rgba(255,255,255,0.65)',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        lineHeight: 1.6,
                    }}>
                        Hablemos de tu proyecto. Agenda una asesoría gratuita hoy mismo.
                    </p>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <a
                            href="mailto:contacto@milian-app.online"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1rem 2rem',
                                fontSize: '0.9375rem',
                                background: '#ffffff',
                                color: '#000000',
                                textDecoration: 'none',
                                fontWeight: 600,
                                borderRadius: '9999px',
                                transition: 'transform 0.25s ease, opacity 0.25s ease',
                                fontFamily: 'inherit'
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                            <Mail size={18} />
                            Enviar Correo
                        </a>

                        <a
                            href="https://wa.me/584167717376"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1rem 2rem',
                                fontSize: '0.9375rem',
                                background: 'transparent',
                                color: '#25D366', // Color WhatsApp
                                textDecoration: 'none',
                                fontWeight: 600,
                                borderRadius: '9999px',
                                border: '1px solid rgba(37, 211, 102, 0.4)',
                                transition: 'all 0.25s ease',
                                fontFamily: 'inherit'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(37, 211, 102, 0.1)';
                                e.currentTarget.style.borderColor = '#25D366';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.4)';
                            }}
                        >
                            {/* SVG de WhatsApp minimalista */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.472-1.761-1.645-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Escribir al WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
