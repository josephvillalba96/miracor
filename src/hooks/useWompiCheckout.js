/**
 * useWompiCheckout — Hook para integrar el Widget Checkout de Wompi
 *
 * Carga el script de Wompi dinámicamente y expone la función
 * openWompiCheckout para abrir el widget de pago.
 */
import { useState, useEffect, useCallback } from 'react'
import { generateReference, generateIntegrityHash, toCents } from '../utils/wompi'

const WOMPI_WIDGET_URL = 'https://checkout.wompi.co/widget.js'
const WOMPI_SCRIPT_ID = 'wompi-checkout-script'

/**
 * @returns {{
 *   scriptLoaded: boolean,
 *   isLoading: boolean,
 *   error: string|null,
 *   openWompiCheckout: Function
 * }}
 */
export function useWompiCheckout() {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Cargar el script del widget de Wompi una sola vez
  useEffect(() => {
    if (document.getElementById(WOMPI_SCRIPT_ID)) {
      setScriptLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.id = WOMPI_SCRIPT_ID
    script.src = WOMPI_WIDGET_URL
    script.type = 'text/javascript'
    script.async = true

    script.onload = () => setScriptLoaded(true)
    script.onerror = () => setError('No se pudo cargar el widget de Wompi. Verifica tu conexión.')

    document.head.appendChild(script)

    return () => {
      // No removemos el script para evitar recargas innecesarias
    }
  }, [])

  /**
   * Abre el widget de pago de Wompi.
   *
   * @param {Object} options
   * @param {number}  options.amountCOP  - Monto en pesos COP (NO en centavos)
   * @param {string}  options.currency   - Moneda (default: 'COP')
   * @param {Object}  options.customerData - Datos del cliente
   * @param {string}  options.customerData.email
   * @param {string}  options.customerData.fullName
   * @param {string}  options.customerData.phoneNumber
   * @param {string}  options.customerData.legalId
   * @param {string}  options.customerData.legalIdType
   * @param {Function} options.onSuccess - Callback cuando el pago termina (recibe transaction)
   * @param {Function} options.onError   - Callback cuando hay un error
   */
  const openWompiCheckout = useCallback(async ({
    amountCOP,
    currency = 'COP',
    customerData = {},
    onSuccess,
    onError,
  }) => {
    if (!scriptLoaded || typeof window.WidgetCheckout === 'undefined') {
      const err = 'El widget de Wompi no está listo. Intenta de nuevo.'
      setError(err)
      onError?.(err)
      return
    }

    const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY
    const integritySecret = import.meta.env.VITE_WOMPI_INTEGRITY_SECRET
    const redirectUrl = import.meta.env.VITE_WOMPI_REDIRECT_URL || `${window.location.origin}/pagos/resultado`

    if (!publicKey) {
      const err = 'VITE_WOMPI_PUBLIC_KEY no está configurada en el .env'
      setError(err)
      onError?.(err)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const reference = generateReference('MRC')
      const amountInCents = toCents(amountCOP)

      // ⚠️ En producción, mover esta llamada al backend
      const integrityHash = await generateIntegrityHash(
        reference,
        amountInCents,
        currency,
        integritySecret
      )

      const checkoutConfig = {
        currency,
        amountInCents,
        reference,
        publicKey,
        redirectUrl,
        signature: { integrity: integrityHash },
      }

      // Agregar datos del cliente si están disponibles
      if (customerData.email || customerData.fullName) {
        checkoutConfig.customerData = {
          email: customerData.email || '',
          fullName: customerData.fullName || '',
          phoneNumber: customerData.phoneNumber || '',
          phoneNumberPrefix: '+57',
          legalId: customerData.legalId || '',
          legalIdType: customerData.legalIdType || 'CC',
        }
      }

      const checkout = new window.WidgetCheckout(checkoutConfig)

      checkout.open((result) => {
        setIsLoading(false)
        const transaction = result?.transaction
        if (transaction) {
          onSuccess?.(transaction)
        }
      })
    } catch (err) {
      setIsLoading(false)
      const message = err?.message || 'Error al iniciar el pago'
      setError(message)
      onError?.(message)
    }
  }, [scriptLoaded])

  return {
    scriptLoaded,
    isLoading,
    error,
    openWompiCheckout,
  }
}
