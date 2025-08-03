"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "../../lib/utils";

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

interface SelectContextType {
  value: string;
  onValueChange: (value: string, displayText: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  displayText: string;
  setDisplayText: (text: string) => void;
}

const SelectContext = React.createContext<SelectContextType | null>(null);

const Select: React.FC<SelectProps> = ({
  value = "",
  onValueChange,
  children,
}) => {
  const [open, setOpen] = React.useState(false);
  const [displayText, setDisplayText] = React.useState("");

  React.useEffect(() => {
    if (!value) {
      setDisplayText("");
    }
  }, [value]);

  const handleValueChange = (newValue: string, newDisplayText: string) => {
    setDisplayText(newDisplayText);
    onValueChange?.(newValue);
    setOpen(false);
  };

  return (
    <SelectContext.Provider
      value={{
        value,
        onValueChange: handleValueChange,
        open,
        setOpen,
        displayText,
        setDisplayText,
      }}
    >
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
};

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error("SelectTrigger must be used within Select");

  const { open, setOpen } = context;

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 opacity-50 transition-transform",
          open && "rotate-180"
        )}
      />
    </button>
  );
});
SelectTrigger.displayName = "SelectTrigger";

interface SelectValueProps {
  placeholder?: string;
}

const SelectValue: React.FC<SelectValueProps> = ({
  placeholder = "Select...",
}) => {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error("SelectValue must be used within Select");

  const { displayText } = context;

  return (
    <span
      className={cn(
        "block truncate text-left",
        !displayText && "text-gray-500"
      )}
    >
      {displayText || placeholder}
    </span>
  );
};

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error("SelectContent must be used within Select");

  const { open } = context;

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute top-full z-50 mt-1 w-full rounded-md border border-gray-200 bg-white py-1 shadow-lg max-h-60 overflow-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
SelectContent.displayName = "SelectContent";

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => {
  const context = React.useContext(SelectContext);
  if (!context) throw new Error("SelectItem must be used within Select");

  const { value: selectedValue, onValueChange } = context;
  const isSelected = selectedValue === value;

  const handleClick = () => {
    onValueChange(value, children?.toString() || value);
  };

  return (
    <div
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100",
        isSelected && "bg-emerald-50 text-emerald-600"
      )}
      onClick={handleClick}
    >
      {isSelected && <Check className="mr-2 h-4 w-4" />}
      <span className={cn(!isSelected && "ml-6")}>{children}</span>
    </div>
  );
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
