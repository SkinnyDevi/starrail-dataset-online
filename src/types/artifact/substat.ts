export type SubStatType = {
  name:
    | "HP"
    | "HP%"
    | "ATK"
    | "ATK%"
    | "DEF"
    | "DEF%"
    | "Effect Hit Rate"
    | "Effect RES"
    | "Break Effect"
    | "CRIT Rate"
    | "CRIT DMG"
    | "SPD"
    | "None";
  valueIsPercentage: boolean;
  weight: number;
  // [lowRoll, midRoll, highRoll]
  initialRolls: [number, number, number];
  upgradeRolls: [number, number, number];
};

const SubStatHP: SubStatType = {
  name: "HP",
  valueIsPercentage: false,
  weight: 0.1,
  initialRolls: [33, 38, 42],
  upgradeRolls: [33, 38, 42],
};

const SubStatHPPercentage: SubStatType = {
  name: "HP%",
  valueIsPercentage: true,
  weight: 0.1,
  initialRolls: [3.4, 3.8, 4.3], // 3.4 -> 3.45?
  upgradeRolls: [3.4, 3.8, 4.3], // 3.4 -> 3.45?
};

const SubStatATK: SubStatType = {
  name: "ATK",
  valueIsPercentage: false,
  weight: 0.1,
  initialRolls: [16, 19, 21],
  upgradeRolls: [16, 19, 21], // 16 -> 17?, 21 -> 22?
};

const SubStatATKPercentage: SubStatType = {
  name: "ATK%",
  valueIsPercentage: true,
  weight: 0.1,
  initialRolls: [3.4, 3.8, 4.3],
  upgradeRolls: [3.4, 3.8, 4.3],
};

const SubStatDEF: SubStatType = {
  name: "DEF",
  valueIsPercentage: false,
  weight: 0.1,
  initialRolls: [16, 19, 21],
  upgradeRolls: [16, 19, 21],
};

const SubStatDEFPercentage: SubStatType = {
  name: "DEF%",
  valueIsPercentage: true,
  weight: 0.1,
  initialRolls: [3.4, 4.8, 5.4],
  upgradeRolls: [3.4, 4.8, 5.4],
};

const SubStatEffectHitRate: SubStatType = {
  name: "Effect Hit Rate",
  valueIsPercentage: true,
  weight: 0.08,
  initialRolls: [3.4, 3.8, 4.3],
  upgradeRolls: [3.4, 3.8, 4.3],
};

const SubStatEffectRES: SubStatType = {
  name: "Effect RES",
  valueIsPercentage: true,
  weight: 0.08,
  initialRolls: [3.4, 3.8, 4.3],
  upgradeRolls: [3.4, 3.8, 4.3], // 3.8 -> 3.9?
};

const SubStatBreakEffect: SubStatType = {
  name: "Break Effect",
  valueIsPercentage: true,
  weight: 0.08,
  initialRolls: [5.1, 5.8, 6.5],
  upgradeRolls: [5.1, 5.8, 6.5],
};

const SubStatCRITRate: SubStatType = {
  name: "CRIT Rate",
  valueIsPercentage: true,
  weight: 0.06,
  initialRolls: [2.5, 2.9, 3.2],
  upgradeRolls: [2.5, 2.9, 3.2],
};

const SubStatCRITDMG: SubStatType = {
  name: "CRIT DMG",
  valueIsPercentage: true,
  weight: 0.06,
  initialRolls: [5.1, 5.8, 6.5],
  upgradeRolls: [5.1, 5.8, 6.5],
};

const SubStatSPD: SubStatType = {
  name: "SPD",
  valueIsPercentage: false,
  weight: 0.04,
  initialRolls: [2, 2, 3],
  upgradeRolls: [2, 2, 3],
};

const SubStatNone: SubStatType = {
  name: "None",
  valueIsPercentage: false,
  weight: 0,
  initialRolls: [0, 0, 0],
  upgradeRolls: [0, 0, 0],
};

const Substats: SubStatType[] = [
  SubStatHP,
  SubStatATK,
  SubStatDEF,
  SubStatHPPercentage,
  SubStatATKPercentage,
  SubStatDEFPercentage,
  SubStatEffectHitRate,
  SubStatEffectRES,
  SubStatBreakEffect,
  SubStatCRITRate,
  SubStatCRITDMG,
  SubStatSPD,
];

const SubstatsWithNone: SubStatType[] = [...Substats, SubStatNone];

export {
  Substats,
  SubstatsWithNone,
  SubStatHP,
  SubStatATK,
  SubStatDEF,
  SubStatHPPercentage,
  SubStatATKPercentage,
  SubStatDEFPercentage,
  SubStatEffectHitRate,
  SubStatEffectRES,
  SubStatBreakEffect,
  SubStatCRITRate,
  SubStatCRITDMG,
  SubStatSPD,
  SubStatNone,
};
