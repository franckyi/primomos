import { usePathname } from "next/navigation";

function CheckIsHome() {
  const pathName = usePathname();
  return pathName === "/" ? true : false;
}

export default CheckIsHome;
