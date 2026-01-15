interface Props {
  icon: string;
  name: string;
  experience: string;
}

export default function TechStackCard({ icon, name, experience }: Props) {
  return (
    <div className="group relative flex flex-col border-2 border-[#2E2A4A]/10 items-center gap-2 rounded-xl border p-4 hover:shadow-lg transition">
      <i className={`${icon} text-5xl`} />
      <span className="text-sm font-medium">{name}</span>

      {/* Tooltip */}
      <div className="pointer-events-none absolute mt-2 opacity-0 group-hover:opacity-100 transition text-xs bg-black text-white px-3 py-1 rounded">
        {experience}
      </div>
      
    </div>
  );
}
