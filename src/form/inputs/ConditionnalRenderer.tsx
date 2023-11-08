import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface ConditonnalRendererProps {
  dependOn: string;
  children: ReactNode;
  condition?: (data: any) => boolean;
}

export default function ConditonnalRenderer({
  dependOn,
  children,
  condition,
}: ConditonnalRendererProps) {
  const { watch } = useFormContext();

  //useEffect(() => {}, [watch(dependOn)]);

  return (
    <>
      {(!condition && watch(dependOn)) ||
      (condition && watch(dependOn) && condition(watch(dependOn)) === true)
        ? children
        : null}
    </>
  );
}
