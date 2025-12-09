import type { tapButtonProps } from "../model/types";
import { useTapButtonImages } from "../model/useTapButtonImages";

export function RoundTapButton({ status, tapMutation }: tapButtonProps) {
  const { currentGoose, nextGoose, gooseImages } = useTapButtonImages();

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-indigo-500 bg-indigo-900/80 shadow-xl shadow-black/60 transition-transform hover:scale-105 active:scale-95 disabled:opacity-95 text-4xl font-bold text-white overflow-hidden"
        disabled={status !== "active" || tapMutation.isPending}
        onClick={() => tapMutation.mutate()}
      >

        <div className="absolute inset-10 flex items-center justify-center rounded-full border-2 border-white/20 bg-white/10">
          <img src={gooseImages[currentGoose]} alt="Goose" className="h-40 w-40 object-cover rounded-full" />
        </div>

        <span className="relative z-10">{tapMutation.isPending ? "Tapping..." : "Goose"}</span>
      </button>

      <button
        type="button"
        onClick={nextGoose}
        className="absolute -bottom-4 right-0 rounded-full bg-indigo-600 text-white px-3 py-1 text-sm shadow-md hover:bg-indigo-500 transition"
      >
        Change Goose
      </button>
    </div>
  );
}
