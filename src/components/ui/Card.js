// Reusable Card component
export default function Card({
  children,
  className = "",
  padding = "medium",
  shadow = "medium",
  ...props
}) {
  const baseClasses = "bg-white rounded-lg border border-gray-200";

  const paddingClasses = {
    none: "",
    small: "p-3",
    medium: "p-4",
    large: "p-6",
  };

  const shadowClasses = {
    none: "",
    small: "shadow-sm",
    medium: "shadow-md",
    large: "shadow-lg",
  };

  return (
    <div
      className={`${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
