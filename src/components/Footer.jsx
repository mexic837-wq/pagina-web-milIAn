import { Mail, Phone } from 'lucide-react'

export default function Footer({ openLegal }) {
    return (
        <footer className="footer" style={{
            position: 'relative',
            zIndex: 1,
            borderTop: '1px solid rgba(255,255,255,0.10)',
            marginTop: '5rem',
            padding: '4rem 1.5rem',
            background: 'rgba(5, 5, 5, 0.4)',
        }}>
            <div className="footer-inner" style={{
                maxWidth: '1100px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2.5rem',
                paddingBottom: '2.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                marginBottom: '2rem',
                textAlign: 'center',
            }}>

                {/* Column 1: Brand */}
                <div className="footer-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <img
                            src="/logo-millan-nuevo.png"
                            alt="milIAn"
                            style={{ height: '26px', width: 'auto', objectFit: 'contain' }}
                        />
                        <span style={{
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            fontFamily: 'Space Grotesk, sans-serif',
                            letterSpacing: '-0.02em',
                            lineHeight: 1,
                        }}>
                            mil<span style={{ color: '#00e5ff' }}>IA</span>n
                        </span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', maxWidth: '280px', lineHeight: 1.6 }}>
                        Agencia de tecnología especializada en automatización inteligente de empresas.
                    </p>
                </div>

                {/* Column 2: Contact */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
                        Contacto
                    </h4>
                    <a
                        href="mailto:contacto@milian-app.online"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    >
                        <Mail size={16} /> contacto@milian-app.online
                    </a>
                    <a
                        href="tel:+5804167717376"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    >
                        <Phone size={16} /> +58 04167717376
                    </a>
                </div>

                {/* Column 3: Legal links */}
                <nav className="footer-nav" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
                        Legal
                    </h4>
                    <button
                        onClick={() => openLegal('privacy')}
                        style={{
                            fontSize: '0.9rem',
                            color: 'rgba(255,255,255,0.6)',
                            textDecoration: 'none',
                            transition: 'color 0.25s ease',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    >
                        Política de Privacidad
                    </button>
                    <button
                        onClick={() => openLegal('terms')}
                        style={{
                            fontSize: '0.9rem',
                            color: 'rgba(255,255,255,0.6)',
                            textDecoration: 'none',
                            transition: 'color 0.25s ease',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    >
                        Términos y Condiciones
                    </button>
                </nav>

            </div>
            {/* Bottom — Copyright */}
            <div className="footer-copy" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{
                    fontSize: '0.8125rem',
                    color: 'rgba(255,255,255,0.40)',
                }}>
                    © 2026 milIAn App. Todos los derechos reservados.
                </span>
            </div>
        </footer>
    )
}
