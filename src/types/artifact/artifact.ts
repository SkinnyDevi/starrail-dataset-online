import type { MainStatType } from "./mainstat";
import { SubStatType } from "./substat";

export type ArtifactPiece =
  | "head"
  | "hands"
  | "body"
  | "feet"
  | "planarsphere"
  | "linkrope";

export type ArtifactSubstats =
  | [SubStatType, SubStatType, SubStatType]
  | [SubStatType, SubStatType, SubStatType, SubStatType];

export type Artifact = {
  setName?: string;
  pieceType?: ArtifactPiece;
  mainStat?: MainStatType;
  substats?: ArtifactSubstats;
  levelup3?: SubStatType;
  levelup6?: SubStatType;
  levelup9?: SubStatType;
  levelup12?: SubStatType;
  levelup15?: SubStatType;
  finalSubstats?: ArtifactSubstats;
};
