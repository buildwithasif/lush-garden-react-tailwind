/**
 * Reusable button used across the whole site.
 * variant: 'solid' | 'outline'
 * tone: 'dark' (default text/border color for outline) | 'light'
 */
export default function Button({
  children,
  variant = 'solid',
  icon,
  onClick,
  type = 'button',
  className = '',
}) {
  const base = variant === 'solid' ? 'btn-solid' : 'btn-outline';

  return (
    <button type={type} onClick={onClick} className={`${base} ${className}`}>
      {icon && <span className="w-5 h-5 inline-flex">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
