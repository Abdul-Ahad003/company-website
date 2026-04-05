import { motion } from 'framer-motion';

export function ServiceCard({ icon: Icon, title, description, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white border border-slate-200 rounded-2xl shadow-md p-6 flex flex-col items-start transition-all hover:shadow-xl"
    >
      <div className={`p-4 rounded-full mb-4 ${color} inline-flex`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

