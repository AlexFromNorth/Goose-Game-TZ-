import type { LoginFieldProps } from "../model/types";

export function LoginField({ label, type = "text", placeholder, value, error, onChange }: LoginFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-muted">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[#0b0b0b] placeholder:text-muted caret-[#0b0b0b] focus:border-text focus:outline-none focus:ring-1 focus:ring-text/60 transition-all duration-200"
      />
      <p className="min-h-5 text-sm text-danger" aria-live="polite">
        {error}
      </p>
    </div>
  );
}
