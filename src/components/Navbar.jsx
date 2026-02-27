import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar({ openScanner, openAbout }) {
    return (
        <motion.nav
            className="navbar"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="navbar-inner">

                {/* Logo */}
                <a href="#hero" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    textDecoration: 'none',
                    flexShrink: 0,
                }}>
                    <img
                        src="/logo-millan-nuevo.png"
                        alt="milIAn"
                        style={{
                            height: 'clamp(30px, 7vw, 38px)',
                            width: 'auto',
                            objectFit: 'contain',
                            display: 'block',
                        }}
                    />
                    <span style={{
                        fontSize: 'clamp(1.05rem, 2.8vw, 1.25rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        fontFamily: 'Space Grotesk, sans-serif',
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                    }}>
                        mil<span style={{ color: '#00e5ff' }}>IA</span>n
                    </span>
                </a>

                {/* Right side: nav link + CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); openAbout() }}
                        style={{
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'rgba(255,255,255,0.5)',
                            textDecoration: 'none',
                            transition: 'color 0.25s ease',
                            fontFamily: 'Space Grotesk, sans-serif',
                            letterSpacing: '-0.01em',
                            whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                    >
                        Sobre Nosotros
                    </a>

                    <motion.button
                        id="nav-cta"
                        className="btn"
                        onClick={openScanner}
                        style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem', borderRadius: '0.625rem' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Escáner Gratuito
                        <ArrowRight size={14} />
                    </motion.button>
                </div>

            </div>
        </motion.nav>
    )
}

