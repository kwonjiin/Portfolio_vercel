interface Props {
  icon: string;
  name: string;
}

export default function TechStackCard({ icon, name }: Props) {
  return (
    <div className="group relative flex flex-col items-center gap-2 rounded-xl border p-4 hover:shadow-lg transition">
      <i className={`${icon} text-5xl`} />
      <span className="text-sm font-medium">{name}</span>

      {/* Tooltip */}
      <div className="absolute bottom-[-40px] opacity-0 group-hover:opacity-100 transition text-xs bg-black text-white px-2 py-1 rounded">
        실무 경험 있음
      </div>
    </div>
  );
}
