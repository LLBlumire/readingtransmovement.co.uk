import { Construction } from "lucide-react";

export function UnderConstruction({ msg }: { msg?: string }) {
  return (
    <>
      <Construction width={128} height={128} />
      <div>{msg ?? "Under Construction"}</div>
    </>
  );
}
