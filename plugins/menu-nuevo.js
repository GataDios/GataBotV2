//let vn = './media/mariana.mp3'
//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT

//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fetch = require('node-fetch')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let kai = 'https://i.imgur.com/8fK4h6F.jpg' 
let vn = './media/menugatabot.mp3'
let menu =`
 ╔─━━━━━░★░░★░━━━━━─╗
 ‖ ֎┉┉┉⊰ 𝑷𝑨𝑹𝑨𝑮𝑼𝑨 𝑩𝑶𝑻 ⊱┉┉┉֍
 ‖ 💖 *¡𝗛ola! ${username}* 💖
 ‖ 〓〓〓〓〓〓〓░★░〓〓〓〓〓〓〓
 ‖ 🔰 *Creadora del bot: GataDios*
 ‖ 💀 *Propietario: 𝙿𝙰𝚁𝙰𝙶𝚄𝙰*
 ‖ 👿 *Chat del propietario:* wa.me/595985958156
 ‖ 🔥 *Grupo de WhatsApp:* https://chat.whatsapp.com/B8I8Ga3OlC9H4OWs7EqEOP
 ‖ 〓〓〓〓〓〓〓░★░〓〓〓〓〓〓〓
 ‖ Ⓜ️ *_MENÚ COMPLETO_* Ⓜ️
 ‖⇶ _${usedPrefix}menucompleto | mcompleto_
 ‖
 ‖ 🔖 *_INFORMACIÓN DEL MENÚ_* 🔖
 ‖⇶ _${usedPrefix}menuinfobot | menuinfo_
 ‖
 ‖ 🎮 *_MENÚ DE JUEGOS_* 🎮
 ‖⇶ _${usedPrefix}menujuego | menujuegos_
 ‖ 
 ‖ 🚀 *_MENÚ DE DESCARGAS_* 🚀
 ‖⇶ _${usedPrefix}menudescarga | menudescargas_
 ‖
 ‖ 🔐 *_GESTIÓN DE GRUPO_* 🔐
 ‖⇶ _${usedPrefix}menugrupo | menugrupos_
 ‖
 ‖ 🎨 *_MENÚ DE CREACIÓN_* 🎨
 ‖⇶ _${usedPrefix}menucreador | menucreacion_
 ‖ 
 ‖ 🪅 *_ANIME/RANDOMS_* 🪅
 ‖⇶ _${usedPrefix}menurandom | menuextras_
 ‖
 ‖ 🔞 *_MENÚ +18_* 🔞
 ‖⇶ _${usedPrefix}menu18 | labiblia_
 ‖
 ‖ 🔊 *_MENÚ DE AUDIOS_* 🔊
 ‖⇶ _${usedPrefix}menuaudio | menuaudios_
 ‖ 
 ‖ 📦 *_MENÚ CAJA ALMACENAMIENTO_* 📦
 ‖⇶ _${usedPrefix}menucaja | menualmacen_
 ‖
 ‖ 👤 *_MENÚ CHAT ANÓNIMO_* 👤
 ‖⇶ _${usedPrefix}menuchat | menuanonimo_
 ‖
 ‖ 💮 *_MENÚ LOGOS PERSONALIZADO_* 💮
 ‖⇶ _${usedPrefix}menucrearlogos | mlogos_
 ‖ 
 ‖ 💎 *_MENU PARA PROPIETARIO/A_* 💎
 ‖⇶ _${usedPrefix}menupropietario_
 ‖
 ‖ ✅ *_CUENTAS OFICIALES GATABOT_* ✅
 ‖⇶ _${usedPrefix}cuentasgatabot | cuentasgb_
 ‖
 ╚─━━━━━━░★░░★░━━━━━━─╝
𝑷𝑨𝑹𝑨𝑮𝑼𝑨`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(kai)).buffer(), `
⁖ᯓ፨҈༺ 𝑷𝑨𝑹𝑨𝑮𝑼𝑨 𝑩𝑶𝑻 | 𝑷𝑨𝑹𝑨𝑮𝑼𝑨 ༻፨҈ᯓ⁖
`.trim(), menu, 'Ⓜ️ 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 Ⓜ️', `#mcompleto`, '🔖 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙈𝙀𝙉𝙐 🔖', `#menuinfobot`, '🎮 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙅𝙐𝙀𝙂𝙊𝙎 🎮', `#menujuego`, m, false, { contextInfo: { mentionedJid }})
 await await await await await await conn.sendFile(m.chat, vn, 'menugatabot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|menu1.2|allmenu|2help)$/i
module.exports = handler
