import { Magic } from "magic-sdk";

const createMagic = () => {
  return (
    typeof window !== "undefined" &&
    new Magic('pk_live_7A2608EE77D7CAE4')
  ); // ✨
};

export const magic = createMagic();