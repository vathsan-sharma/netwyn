/** Geometric box mark: outlined square with a solid orange inner square. */
export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="9" y="9" width="14" height="14" fill="#FF5A00" />
    </svg>
  )
}

export default function Logo({
  className = '',
  wordmarkClassName = '',
}: {
  className?: string
  wordmarkClassName?: string
}) {
  return (
    <span className={`inline-flex items-center gap-3 text-ink ${className}`}>
      <LogoMark />
      <span className={`font-sans font-black uppercase tracking-[0.25em] ${wordmarkClassName}`}>
        NETWYN.PLACE
      </span>
    </span>
  )
}
