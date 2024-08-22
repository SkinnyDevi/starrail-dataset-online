import { For, type Component } from "solid-js";
import { Artifact, ArtifactSubstats } from "../../types/artifact/artifact";
import { SubStatType } from "../../types/artifact/substat";

interface LevelUpStandardDropdownProps {
  targetSubstat: () => SubStatType;
  artifactSubstats: () => ArtifactSubstats;
  onChange: (stat: SubStatType) => void;
}

const LevelUpStandardDropdown: Component<LevelUpStandardDropdownProps> = ({
  targetSubstat,
  artifactSubstats,
  onChange,
}) => {
  function valueFormatter(value: number, isPercentage: boolean) {
    return isPercentage ? `${value}%` : value;
  }

  return (
    <>
      <td>
        <select
          class="dropdown"
          value={targetSubstat().name}
          onChange={(e) =>
            onChange(
              artifactSubstats().find((stat) => stat.name === e.target.value)!
            )
          }
        >
          <For each={artifactSubstats()}>
            {(stat) => <option value={stat.name}>{stat.name}</option>}
          </For>
        </select>
      </td>
      <td>
        <select class="dropdown">
          <For each={targetSubstat().initialRolls}>
            {(roll) => (
              <option value={roll}>
                {valueFormatter(roll, targetSubstat().valueIsPercentage)}
              </option>
            )}
          </For>
        </select>
      </td>
    </>
  );
};

export default LevelUpStandardDropdown;
