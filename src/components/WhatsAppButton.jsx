import { motion } from 'framer-motion';

const WA_LINK = 'https://chat.whatsapp.com/LUOWAzu40JQ8cnEzVvgDL8';

const WhatsAppButton = () => (
  <motion.a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.06 }}
    className="fixed bottom-5 right-5 z-50 inline-flex items-center rounded-full bg-[#25d366] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/40 transition hover:shadow-[0_0_24px_rgba(37,211,102,0.8)]"
    animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
  >
    <span className="mr-2 h-5 w-5 rounded-full bg-white/40" />
    Join whatsapp group
  </motion.a>
);

export default WhatsAppButton;
