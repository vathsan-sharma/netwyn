/** Official Netwyn.Place logo (full colour lockup). */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/netwyn-logo.png"
      alt="Netwyn.Place"
      width={1888}
      height={334}
      className={`block h-8 w-auto ${className}`}
    />
  )
}
