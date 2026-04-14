/**
 * wompi.js — Utilidades para la integración con Wompi
 *
 * ⚠️  NOTA DE SEGURIDAD:
 * La función generateIntegrityHash usa el secreto de integridad.
 * En producción, esta función debe ejecutarse en el BACKEND para no
 * exponer el secreto. Aquí se usa solo para desarrollo/sandbox.
 */

/**
 * Genera una referencia única de pago para Wompi.
 * Formato: MIRACOR-{timestamp}-{random6chars}
 * @param {string} prefix - Prefijo opcional (default: 'MRC')
 * @returns {string}
 */
export function generateReference(prefix = 'MRC') {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `${prefix}-${timestamp}-${random}`
}

/**
 * Genera el hash SHA256 de integridad requerido por Wompi.
 * La cadena a hashear es: referencia + montoEnCentavos + moneda + secreto
 *
 * @param {string} reference - Referencia única de pago
 * @param {number} amountInCents - Monto en centavos (ej: 95000 para $950 COP)
 * @param {string} currency - Moneda (ej: 'COP')
 * @param {string} integritySecret - Secreto de integridad de Wompi
 * @returns {Promise<string>} - Hash SHA256 en hexadecimal
 */
export async function generateIntegrityHash(
  reference,
  amountInCents,
  currency,
  integritySecret
) {
  const concatenated = `${reference}${amountInCents}${currency}${integritySecret}`
  const encodedText = new TextEncoder().encode(concatenated)
  const hashBuffer = await crypto.subtle.digest('SHA-256', encodedText)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

/**
 * Convierte un monto en pesos COP a centavos para Wompi.
 * @param {number} amountCOP - Monto en pesos colombianos
 * @returns {number}
 */
export function toCents(amountCOP) {
  return Math.round(amountCOP * 100)
}

/**
 * Determina la URL base de la API de Wompi según el entorno.
 * @returns {string}
 */
export function getWompiApiUrl() {
  const env = import.meta.env.VITE_WOMPI_ENV || 'sandbox'
  return env === 'production'
    ? 'https://production.wompi.co/v1'
    : 'https://sandbox.wompi.co/v1'
}

/**
 * Consulta el estado de una transacción en Wompi.
 * @param {string} transactionId - ID de la transacción de Wompi
 * @returns {Promise<Object>} - Objeto de transacción de Wompi
 */
export async function getTransactionStatus(transactionId) {
  const baseUrl = getWompiApiUrl()
  const response = await fetch(`${baseUrl}/transactions/${transactionId}`)
  if (!response.ok) {
    throw new Error(`Error consultando transacción: ${response.status}`)
  }
  const data = await response.json()
  return data.data
}
