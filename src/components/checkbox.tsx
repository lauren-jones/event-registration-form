import { techInterest } from "../types/attendee";

interface CheckboxProps {
  techInterest: techInterest;
  onChange: (id: number) => void;
  index: number;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  techInterest,
  onChange,
  index,
}) => {
  const { tech, checked } = techInterest;
  return (
    <div className="flex gap-[8px] items-center" key={index}>
      <input
        type="checkbox"
        id={tech.toLowerCase()}
        name={tech.toLowerCase()}
        className="border border-focus rounded w-[16px] h-[16px] accent-accent"
        checked={checked}
        onChange={() => onChange(index)}
      />
      <label
        htmlFor={tech.toLowerCase()}
        className="text-base font-normal text-textPrimary md:text-lg"
      >
        {tech}
      </label>
    </div>
  );
};
