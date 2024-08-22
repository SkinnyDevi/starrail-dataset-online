import {
  createEffect,
  createSignal,
  For,
  onMount,
  type Component,
} from "solid-js";
import {
  MainStatBody,
  MainStatFeet,
  MainStatHands,
  MainStatHead,
  MainStatLinkRope,
  MainStatPlanarSphere,
  MainStatType,
} from "./types/artifact/mainstat";
import {
  SubStatATK,
  SubStatATKPercentage,
  SubStatBreakEffect,
  SubStatDEF,
  SubStatDEFPercentage,
  SubStatHP,
  SubStatHPPercentage,
  SubStatNone,
  Substats,
  SubstatsWithNone,
  SubStatType,
} from "./types/artifact/substat";
import {
  Artifact,
  ArtifactPiece,
  ArtifactSubstats,
} from "./types/artifact/artifact";
import SubstatValueCombo from "./components/dropdown/SubstatValueCombo";
import LevelUp3Dropdown from "./components/dropdown/LevelUp3Dropdown";
import LevelUpStandardDropdown from "./components/dropdown/LevelUpStandardDropdown";
import { MainStatHP } from "./types/artifact/mainstat";
import useUniqueSubstatList from "./components/hooks/subtatlist-hook";
import createSubstatSignal from "./components/hooks/subtatlist-hook";

const App: Component = () => {
  const artifact: Artifact = {
    pieceType: "head",
    mainStat: MainStatHP,
  };

  const [artifactSubstats, setArtifactSubstats] =
    createSignal<ArtifactSubstats>([SubStatNone, SubStatNone, SubStatNone]);

  const [pieceType, setPieceType] = createSignal<ArtifactPiece>("head");
  const [mainStatType, setMainStatType] =
    createSignal<Set<MainStatType>>(MainStatHead);
  const [mainStat, setMainStat] = createSignal<MainStatType>(MainStatHP);

  const substat1Signal = createSubstatSignal(
    () => Substats,
    () => [mainStat],
    SubStatHPPercentage,
  );
  const substat2Signal = createSubstatSignal(
    () => Substats,
    () => [mainStat, substat1Signal.substatVal],
    SubStatATKPercentage,
  );
  const substat3Signal = createSubstatSignal(
    () => Substats,
    () => [mainStat, substat1Signal.substatVal, substat2Signal.substatVal],
    SubStatDEFPercentage,
  );
  const substat4Signal = createSubstatSignal(
    () => SubstatsWithNone,
    () => [
      mainStat,
      substat1Signal.substatVal,
      substat2Signal.substatVal,
      substat3Signal.substatVal,
    ],
  );

  const substatUp3Signal = createSubstatSignal(
    () => Substats,
    () => [
      mainStat,
      substat1Signal.substatVal,
      substat2Signal.substatVal,
      substat3Signal.substatVal,
      substat4Signal.substatVal,
    ],
  );

  const [substatup6, setSubstatUp6] = createSignal<SubStatType>(SubStatNone);
  const [substatup9, setSubstatUp9] = createSignal<SubStatType>(SubStatNone);
  const [substatup12, setSubstatUp12] = createSignal<SubStatType>(SubStatNone);
  const [substatup15, setSubstatUp15] = createSignal<SubStatType>(SubStatNone);

  createEffect(() => {
    artifact.pieceType = pieceType();
    switch (pieceType()) {
      case "head":
        setMainStatType(MainStatHead);
        break;
      case "hands":
        setMainStatType(MainStatHands);
        break;
      case "body":
        setMainStatType(MainStatBody);
        break;
      case "feet":
        setMainStatType(MainStatFeet);
        break;
      case "planarsphere":
        setMainStatType(MainStatPlanarSphere);
        break;
      case "linkrope":
        setMainStatType(MainStatLinkRope);
        break;
    }
  });

  createEffect(() => {
    artifact.setName = "";
    artifact.mainStat = mainStat();
    const substatsSignal = [substat1Signal, substat2Signal, substat3Signal];

    const substats: ArtifactSubstats = substatsSignal.map((statSignal) =>
      statSignal.substatVal(),
    ) as ArtifactSubstats;
    if (substat4Signal.substatVal().name !== SubStatNone.name) {
      substats.push(substat4Signal.substatVal());
    } else if (
      substat4Signal.substatVal().name === SubStatNone.name &&
      substatUp3Signal.substatVal().name !== SubStatNone.name
    ) {
      substats.push(substatUp3Signal.substatVal());
    }

    setArtifactSubstats(substats);
    artifact.substats = substats;

    artifact.levelup3 = substatUp3Signal.substatVal();
    artifact.levelup6 = substatup6();
    artifact.levelup9 = substatup9();
    artifact.levelup12 = substatup12();
    artifact.levelup15 = substatup15();

    //console.log("Artifact:", artifact);
  });

  return (
    <main class="flex bg-dominant h-screen flex-col">
      <h1 class="text-5xl m-4 text-white font-bold">Artifact Database</h1>
      <div class="overflow-x-auto h-screen">
        <table class="text-center text-white border-white w-full">
          <thead class="whitespace-nowrap">
            <tr class="[&>th]:p-2 bg-secondary/50 [&>th]:border-x-2 [&>th]:border-white/10">
              <th></th>
              <th colspan="3">Artifact Details</th>
              <th colspan="8"> Initial Substats</th>
              <th></th>
              <th colspan="10">Artifact LevelUp</th>
              <th colspan="8">Final Substats</th>
            </tr>
            <tr class="[&>th]:p-4 bg-secondary/25 [&>th]:border-x-2 [&>th]:border-white/10">
              <th></th>
              <th>Set Name</th>
              <th>Piece Type</th>
              <th>Main Stat</th>
              <th>Substat 1</th>
              <th>Substat 1 Value</th>
              <th>Substat 2</th>
              <th>Substat 2 Value</th>
              <th>Substat 3</th>
              <th>Substat 3 Value</th>
              <th>Substat 4</th>
              <th>Substat 4 Value</th>
              <th>Has Initial 4</th>
              <th>+3 Substat</th>
              <th>+3 Substat Value</th>
              <th>+6 Substat</th>
              <th>+6 Substat Value</th>
              <th>+9 Substat</th>
              <th>+9 Substat Value</th>
              <th>+12 Substat</th>
              <th>+12 Substat Value</th>
              <th>+15 Substat (MAX)</th>
              <th>+15 Substat Value (MAX)</th>
              <th>(FINAL) Substat 1</th>
              <th>(FINAL) Substat 1 Value</th>
              <th>(FINAL) Substat 2</th>
              <th>(FINAL) Substat 2 Value</th>
              <th>(FINAL) Substat 3</th>
              <th>(FINAL) Substat 3 Value</th>
              <th>(FINAL) Substat 4</th>
              <th>(FINAL) Substat 4 Value</th>
            </tr>
          </thead>
          <tbody class="whitespace-nowrap">
            <tr class="[&>td]:p-2 [&>td]:border-x-2 [&>td]:border-white/10 bg-secondary/10">
              <td>
                <button type="button" class="bg-accent p-2 rounded-md">
                  Add
                </button>
              </td>
              <td>
                <select class="dropdown">
                  <option>Inert Salsotto</option>
                </select>
              </td>
              <td>
                <select
                  class="dropdown"
                  onChange={(e) => {
                    setPieceType(e.target.value as ArtifactPiece);
                    setTimeout(() => {
                      setMainStat(Array.from(mainStatType())[0]);
                    }, 150);
                  }}
                >
                  <option value="head" selected>
                    Head
                  </option>
                  <option value="hands">Hands</option>
                  <option value="body">Body</option>
                  <option value="feet">Feet</option>
                  <option value="planarsphere">Planar Sphere</option>
                  <option value="linkrope">Link Rope</option>
                </select>
              </td>
              <td>
                <select
                  class="dropdown w-48"
                  value={mainStat().name}
                  onChange={(e) =>
                    setMainStat(
                      Array.from(mainStatType()).find(
                        (stat) => stat.name === e.target.value,
                      ) || MainStatHP,
                    )
                  }
                >
                  <For each={Array.from(mainStatType())}>
                    {(stat) => <option value={stat.name}>{stat.name}</option>}
                  </For>
                </select>
              </td>
              <SubstatValueCombo substatSignal={substat1Signal} />
              <SubstatValueCombo substatSignal={substat2Signal} />
              <SubstatValueCombo substatSignal={substat3Signal} />
              <SubstatValueCombo substatSignal={substat4Signal} />
              <td>
                <p class="font-bold">
                  {(substat4Signal.substatVal().name !== SubStatNone.name)
                    .toString()
                    .toUpperCase()}
                </p>
              </td>
              <LevelUp3Dropdown
                artifactSubstats={artifactSubstats}
                substatSignal={substatUp3Signal}
                lastSubstatSignal={substat4Signal}
              />
              <LevelUpStandardDropdown
                targetSubstat={substatup6}
                artifactSubstats={artifactSubstats}
                onChange={(stat) => setSubstatUp6(stat)}
              />
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default App;
