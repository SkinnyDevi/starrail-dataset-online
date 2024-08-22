export type MainStatType = {
  name:
    | "HP"
    | "ATK"
    | "DEF"
    | "HP%"
    | "ATK%"
    | "DEF%"
    | "CRIT Rate"
    | "CRIT DMG"
    | "Healing%"
    | "EHR%"
    | "SPD"
    | "ERR%"
    | "ELEMENTAL DMG%"
    | "Break Effect";
  valueIsPercentage: boolean;
};

export const MainStatHP: MainStatType = {
  name: "HP",
  valueIsPercentage: false,
};

export const MainStatATK: MainStatType = {
  name: "ATK",
  valueIsPercentage: false,
};

export const MainStatHPPercentage: MainStatType = {
  name: "HP%",
  valueIsPercentage: true,
};

export const MainStatATKPercentage: MainStatType = {
  name: "ATK%",
  valueIsPercentage: true,
};

export const MainStatDEFPercentage: MainStatType = {
  name: "DEF%",
  valueIsPercentage: true,
};

export const MainStatCritRate: MainStatType = {
  name: "CRIT Rate",
  valueIsPercentage: true,
};

export const MainStatCritDamage: MainStatType = {
  name: "CRIT DMG",
  valueIsPercentage: true,
};

export const MainStatHealingPercentage: MainStatType = {
  name: "Healing%",
  valueIsPercentage: true,
};

export const MainStatEHR: MainStatType = {
  name: "EHR%",
  valueIsPercentage: true,
};

export const MainStatSpeed: MainStatType = {
  name: "SPD",
  valueIsPercentage: false,
};

export const MainStatERR: MainStatType = {
  name: "ERR%",
  valueIsPercentage: true,
};

export const MainStatElementalDamagePercentage: MainStatType = {
  name: "ELEMENTAL DMG%",
  valueIsPercentage: true,
};

export const MainStatBreakEffect: MainStatType = {
  name: "Break Effect",
  valueIsPercentage: true,
};

const MainStatHead = new Set<MainStatType>([MainStatHP]);
const MainStatHands = new Set<MainStatType>([MainStatATK]);
const MainStatBody = new Set<MainStatType>([
  MainStatHPPercentage,
  MainStatATKPercentage,
  MainStatDEFPercentage,
  MainStatCritRate,
  MainStatCritDamage,
  MainStatHealingPercentage,
  MainStatEHR,
]);
const MainStatFeet = new Set<MainStatType>([
  MainStatHPPercentage,
  MainStatATKPercentage,
  MainStatDEFPercentage,
  MainStatSpeed,
]);
const MainStatPlanarSphere = new Set<MainStatType>([
  MainStatHPPercentage,
  MainStatATKPercentage,
  MainStatDEFPercentage,
  MainStatElementalDamagePercentage,
]);
const MainStatLinkRope = new Set<MainStatType>([
  MainStatHPPercentage,
  MainStatATKPercentage,
  MainStatDEFPercentage,
  MainStatBreakEffect,
  MainStatERR,
]);

export {
  MainStatHead,
  MainStatHands,
  MainStatBody,
  MainStatFeet,
  MainStatPlanarSphere,
  MainStatLinkRope,
};
