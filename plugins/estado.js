let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  await conn.send3Button(m.chat, 
                         `
╔─━━━━━━░★░░★░ ━━━━━─╗

*ミ¡Hola! linda personita😘彡*

*ミ🤖 Estado del Bot 🤖彡*
*=> ✅ Bot activo y de uso público*

╚─━━━━━━░★░░★░━━━━━━─╝
`.trim(), 'Paragua - Bot', '🌀 MENÚ 🌀', `${usedPrefix}menu`, '🔆 MENÚ COMPLETO 🔆', `${usedPrefix}menucompleto`, '♨️ MENÚ DE AUDIOS ♨️', `${usedPrefix}menuaudios`)
}
handler.command = /^(estado|status|estate|state|stado|stats)$/i

handler.exp = 0

module.exports = handler
