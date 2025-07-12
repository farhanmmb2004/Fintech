// src/components/ui/checkbox.jsx

export function Checkbox({ className = '', ...props }) {
  return (
    <input
      type="checkbox"
      {...props}
      className={`w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${className}`}
    />
  );
}
