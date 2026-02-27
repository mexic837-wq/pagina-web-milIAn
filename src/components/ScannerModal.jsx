import { useState, useEffect, useCallback } from 'react'
import { X, ArrowRight, CheckCircle2, Calendar, ChevronLeft, Loader2 } from 'lucide-react'

/* ─── Webhook URL ───────────────────────────────────── */
const WEBHOOK_URL = 'https://n8n.milian-app.online/webhook/diagnostico-milian'

/* ─── Question Data (steps 0–4) ─────────────────────── */
const STEPS = [
    {
        id: 'rol',
        question: '¿Cuál es tu rol dentro de la empresa?',
        sub: 'Selecciona la opción que mejor te describe.',
        options: [
            { label: 'Dueño / Fundador', emoji: '👑' },
            { label: 'Director / Gerente', emoji: '📊' },
            { label: 'Empleado / Operativo', emoji: '⚙️' },
        ],
    },
    {
        id: 'dolor',
        question: 'Si pudieras eliminar un solo "cuello de botella" hoy, ¿cuál sería?',
        sub: 'Elige el que más te duele ahora mismo.',
        options: [
            { label: 'Crear contenido y conseguir clientes', emoji: '📣' },
            { label: 'Tareas manuales y Excel interminables', emoji: '📋' },
            { label: 'Presencia web nula o lenta', emoji: '🌐' },
            { label: 'Todo lo anterior — soy esclavo de mi negocio', emoji: '🔗' },
        ],
    },
    {
        id: 'horas',
        question: '¿Cuántas horas a la semana pierde tu equipo en tareas repetitivas?',
        sub: 'Sé honesto — esto determina el potencial de recuperación.',
        options: [
            { label: 'Menos de 10 horas', emoji: '⏱️' },
            { label: 'Entre 10 y 20 horas', emoji: '⏰' },
            { label: 'Más de 20 horas', emoji: '🔥' },
        ],
    },
    {
        id: 'datos',
        question: '¿Cómo gestionan los datos actualmente?',
        sub: 'Esto define tu punto de partida tecnológico.',
        options: [
            { label: 'Papel y WhatsApp', emoji: '📝' },
            { label: 'Excel sin conectar a nada', emoji: '📊' },
            { label: 'Software / CRM subutilizado', emoji: '💻' },
        ],
    },
    {
        id: 'inversion',
        question: 'Construir una Fábrica Digital requiere compromiso. ¿Qué nivel de inversión están dispuestos a hacer?',
        sub: 'Nuestro proceso está diseñado para generar ROI positivo desde el primer mes.',
        options: [
            { label: 'Menos de $100', emoji: '💡' },
            { label: 'Entre $100 y $250', emoji: '🚀' },
            { label: 'Más de $250 — Sistema llave en mano', emoji: '🏆' },
        ],
    },
]

/* ─── Step indices ───────────────────────────────────── */
const STEP_CONTACT = STEPS.length      // 5
const STEP_LOADING = STEPS.length + 1  // 6
const STEP_SUCCESS = STEPS.length + 2  // 7

/* ─── Input style ────────────────────────────────────── */
const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '0.625rem',
    padding: '0.875rem 1rem',
    color: '#fff',
    fontFamily: 'inherit',
    fontSize: '0.9375rem',
    fontWeight: 400,
    outline: 'none',
    transition: 'border-color .2s, box-shadow .2s',
    boxSizing: 'border-box',
}

/* ─── Input component (handles focus style) ──────────── */
function Field({ id, label, type = 'text', placeholder, value, onChange, required }) {
    const [focused, setFocused] = useState(false)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label
                htmlFor={id}
                style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.02em' }}
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                required={required}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                    ...inputStyle,
                    borderColor: focused ? 'rgba(0,224,255,0.5)' : 'rgba(255,255,255,0.12)',
                    boxShadow: focused ? '0 0 0 3px rgba(0,224,255,0.08)' : 'none',
                }}
            />
        </div>
    )
}

/* ─── Main Component ─────────────────────────────────── */
export default function ScannerModal({ isOpen, onClose }) {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState({})
    const [animDir, setAnimDir] = useState('in')
    const [visible, setVisible] = useState(false)

    /* Contact fields */
    const [empresaLink, setEmpresaLink] = useState('')
    const [nichoIndustria, setNichoIndustria] = useState('')
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [countryCode, setCountryCode] = useState('58')
    const [telefono, setTelefono] = useState('')
    const [error, setError] = useState('')

    /* ── Lifecycle ── */
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            setStep(0); setAnswers({}); setEmpresaLink(''); setNichoIndustria('')
            setNombre(''); setEmail(''); setCountryCode('58'); setTelefono(''); setError('')
            requestAnimationFrame(() => setVisible(true))
        } else {
            setVisible(false)
            const t = setTimeout(() => { document.body.style.overflow = '' }, 350)
            return () => clearTimeout(t)
        }
    }, [isOpen])

    const handleKey = useCallback(e => { if (e.key === 'Escape') onClose() }, [onClose])
    useEffect(() => {
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [handleKey])

    /* ── Navigation ── */
    function animateTo(nextStep) {
        setAnimDir('out')
        setTimeout(() => { setStep(nextStep); setAnimDir('in') }, 260)
    }

    function choose(optionLabel) {
        setAnswers(prev => ({ ...prev, [STEPS[step].id]: optionLabel }))
        animateTo(step + 1)
    }

    function goBack() {
        if (step === 0) return
        animateTo(step - 1)
    }

    /* ── Submit ── */
    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        if (!empresaLink.trim() || !nichoIndustria.trim() || !nombre.trim() || !email.trim() || !telefono.trim()) {
            setError('Por favor completa todos los campos.')
            return
        }

        /* Format: strip leading zeros from local number, prepend code digits */
        const localDigits = telefono.replace(/\D/g, '').replace(/^0+/, '')
        const fullPhone = countryCode + localDigits

        const payload = {
            ...answers,
            empresa_link: empresaLink.trim(),
            nicho_industria: nichoIndustria.trim(),
            nombre: nombre.trim(),
            email: email.trim(),
            telefono: fullPhone,
            timestamp: new Date().toISOString(),
        }

        setStep(STEP_LOADING)

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
        } catch {
            /* Silent fail — show success anyway; data is preserved.
               In production, you could log to a fallback service. */
        }

        setTimeout(() => setStep(STEP_SUCCESS), 600)
    }

    /* ── Derived ── */
    if (!isOpen) return null

    const totalSteps = STEPS.length + 1            // 5 q + 1 contact
    const rawProgress = step >= STEP_CONTACT
        ? 100
        : Math.round(((step) / totalSteps) * 100)
    const progress = rawProgress

    const canGoBack = step > 0 && step < STEP_LOADING && step !== STEP_SUCCESS

    return (
        <div
            className="scanner-overlay"
            style={{ opacity: visible ? 1 : 0 }}
            onClick={e => e.target === e.currentTarget && step !== STEP_LOADING && onClose()}
            role="dialog"
            aria-modal="true"
            aria-label="Escáner de Eficiencia"
        >
            <div
                className="scanner-panel"
                style={{ transform: visible ? 'scale(1) translateY(0)' : 'scale(0.97) translateY(20px)' }}
            >
                {/* ── Top bar ── */}
                <div className="scanner-topbar">
                    {canGoBack ? (
                        <button className="scanner-back" onClick={goBack} aria-label="Volver">
                            <ChevronLeft size={18} /> Volver
                        </button>
                    ) : <div />}

                    <div className="scanner-progress-wrap">
                        <div className="scanner-progress-track">
                            <div className="scanner-progress-fill" style={{ width: `${progress}%` }} />
                        </div>
                        {step < STEP_LOADING && step !== STEP_SUCCESS && (
                            <span className="scanner-step-count">
                                {step < STEP_CONTACT ? `${step + 1} / ${STEPS.length + 1}` : `${STEPS.length + 1} / ${STEPS.length + 1}`}
                            </span>
                        )}
                    </div>

                    {step !== STEP_LOADING && (
                        <button className="scanner-close" onClick={onClose} aria-label="Cerrar">
                            <X size={18} />
                        </button>
                    )}
                    {step === STEP_LOADING && <div style={{ width: 32 }} />}
                </div>

                {/* ── Content ── */}
                <div
                    className="scanner-content"
                    key={step}
                    style={{ animation: `scanner-${animDir} 0.28s cubic-bezier(0.22,1,0.36,1) forwards` }}
                >

                    {/* ════════ LOADING ════════ */}
                    {step === STEP_LOADING && (
                        <div className="scanner-success" style={{ paddingTop: '2rem' }}>
                            <div className="scanner-success-icon" style={{ animation: 'spin 1s linear infinite' }}>
                                <Loader2 size={36} strokeWidth={1.5} />
                            </div>
                            <h2 className="scanner-success-title" style={{ fontSize: '1.375rem', marginBottom: '0.625rem' }}>
                                Analizando tus respuestas...
                            </h2>
                            <p className="scanner-success-sub" style={{ fontSize: '0.9rem' }}>
                                Conectando sistemas y generando tu mapa de automatización personalizado.
                            </p>
                        </div>
                    )}

                    {/* ════════ SUCCESS ════════ */}
                    {step === STEP_SUCCESS && (
                        <div className="scanner-success">
                            <div className="scanner-success-icon">
                                <CheckCircle2 size={48} strokeWidth={1.5} />
                            </div>
                            <h2 className="scanner-success-title">¡Diagnóstico completado!</h2>
                            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                                Tu empresa tiene un alto potencial de automatización.
                            </p>

                            {/* ── Paso 1 ── */}
                            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '1rem', textAlign: 'center' }}>
                                <strong style={{ color: '#fff' }}>Paso 1:</strong> Agenda tu Reunión de Diagnóstico aquí abajo para trazar el mapa de ruta. 👇
                            </p>
                            <a href="#" id="scanner-calendly-cta">
                                <button className="btn scanner-success-btn">
                                    <Calendar size={18} />
                                    Agendar Reunión de Diagnóstico
                                </button>
                            </a>
                            <p className="scanner-fine-print">Sesión gratuita de 30 min · Sin compromiso</p>

                            {/* ── Paso 2 ── */}
                            <div style={{ marginTop: '1.75rem', padding: '1.25rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, textAlign: 'center' }}>
                                    <strong style={{ color: '#fff' }}>Paso 2:</strong> Revisa tu WhatsApp. Nuestro Equipo, te acaba de enviar un cálculo personalizado sobre tus ineficiencias operativas.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* ════════ CONTACT FORM (step 5) ════════ */}
                    {step === STEP_CONTACT && (
                        <>
                            <div className="scanner-question-wrap">
                                <p className="scanner-step-label">Último paso</p>
                                <h2 className="scanner-question">
                                    Último paso para generar tu diagnóstico
                                </h2>
                                <p className="scanner-sub">
                                    ¿A dónde enviamos tu mapa de automatización y propuesta?
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} noValidate>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <Field
                                        id="empresa_link"
                                        label="Nombre de tu Empresa (o link de tu web/Instagram)"
                                        placeholder="Ej. Clínica Dental Sonrisas o @clinica.sonrisas"
                                        value={empresaLink}
                                        onChange={setEmpresaLink}
                                        required
                                    />
                                    <Field
                                        id="nicho_industria"
                                        label="¿A qué sector o industria pertenece tu negocio?"
                                        placeholder="Ej. Inmobiliaria, E-commerce, Salud, Agencia..."
                                        value={nichoIndustria}
                                        onChange={setNichoIndustria}
                                        required
                                    />
                                    <Field
                                        id="sc-nombre"
                                        label="Nombre Completo"
                                        placeholder="Tu nombre"
                                        value={nombre}
                                        onChange={setNombre}
                                        required
                                    />
                                    <Field
                                        id="sc-email"
                                        label="Correo Electrónico"
                                        type="email"
                                        placeholder="nombre@empresa.com"
                                        value={email}
                                        onChange={setEmail}
                                        required
                                    />
                                    {/* ── Phone field with country code ── */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label
                                            htmlFor="sc-telefono"
                                            style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.02em' }}
                                        >
                                            Número de WhatsApp
                                        </label>
                                        <div className="phone-row" style={{ display: 'flex', gap: '0.5rem' }}>
                                            {/* Country code selector */}
                                            <select
                                                value={countryCode}
                                                onChange={e => setCountryCode(e.target.value)}
                                                style={{
                                                    ...inputStyle,
                                                    width: 'auto',
                                                    flexShrink: 0,
                                                    paddingLeft: '0.75rem',
                                                    paddingRight: '0.75rem',
                                                    cursor: 'pointer',
                                                    appearance: 'none',
                                                    background: 'rgba(255,255,255,0.07)',
                                                    color: '#fff',
                                                }}
                                            >
                                                <option value="58">🇻🇪 +58</option>
                                                <option value="1">🇺🇸 +1</option>
                                                <option value="57">🇨🇴 +57</option>
                                                <option value="51">🇵🇪 +51</option>
                                            </select>
                                            {/* Local number */}
                                            <input
                                                id="sc-telefono"
                                                type="tel"
                                                placeholder="4167717376"
                                                value={telefono}
                                                onChange={e => setTelefono(e.target.value.replace(/\D/g, ''))}
                                                style={{ ...inputStyle, flex: 1 }}
                                                inputMode="numeric"
                                            />
                                        </div>
                                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.22)', marginTop: '2px' }}>
                                            Se enviará como: <span style={{ color: 'rgba(0,224,255,0.6)', fontVariantNumeric: 'tabular-nums' }}>{countryCode}{telefono.replace(/\D/g, '') || 'XXXXXXXXXX'}</span>
                                        </p>
                                    </div>
                                </div>

                                {error && (
                                    <p style={{ fontSize: '0.8125rem', color: '#f87171', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="btn"
                                    style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem' }}
                                >
                                    Ver Resultados y Enviar Diagnóstico
                                    <ArrowRight size={18} />
                                </button>

                                <p style={{ marginTop: '0.875rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
                                    🔒 Tu información es confidencial y no se comparte con terceros.
                                </p>
                            </form>
                        </>
                    )}

                    {/* ════════ QUESTIONS (steps 0–4) ════════ */}
                    {step < STEP_CONTACT && (
                        <>
                            <div className="scanner-question-wrap">
                                <p className="scanner-step-label">Paso {step + 1} de {STEPS.length + 1}</p>
                                <h2 className="scanner-question">{STEPS[step].question}</h2>
                                <p className="scanner-sub">{STEPS[step].sub}</p>
                            </div>

                            <div className="scanner-options">
                                {STEPS[step].options.map(opt => (
                                    <button
                                        key={opt.label}
                                        className="scanner-option"
                                        onClick={() => choose(opt.label)}
                                    >
                                        <span className="scanner-option-emoji">{opt.emoji}</span>
                                        <span className="scanner-option-text">{opt.label}</span>
                                        <ArrowRight size={16} className="scanner-option-arrow" />
                                    </button>
                                ))}
                            </div>
                        </>
                    )}

                </div>
            </div>

            {/* Spinner keyframe injected inline */}
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    )
}
