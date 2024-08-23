import { Accessor, createEffect, For, type Component } from "solid-js";
import {
  SubStatNone,
  Substats,
  SubStatType,
} from "../../types/artifact/substat";
import { ArtifactSubstats } from "../../types/artifact/artifact";
import {
  SubStatAccessor,
  SubStatAccessorLevelup3,
} from "../hooks/subtatlist-hook";

interface LevelUp3DropdownProps {
  artifactSubstats: Accessor<ArtifactSubstats>;
  lastSubstatSignal: SubStatAccessor;
  substatSignal: SubStatAccessorLevelup3;
}

const LevelUp3Dropdown: Component<LevelUp3DropdownProps> = ({
  artifactSubstats,
  lastSubstatSignal,
  substatSignal,
}) => {
  const { substatVal, setSubstatVal, substatDependencyList, setContentList } =
    substatSignal;

  function getContents() {
    const all4 = lastSubstatSignal.substatVal().name !== SubStatNone.name;
    const contents = all4 ? artifactSubstats() : substatDependencyList();
    return contents;
  }

  function valueFormatter(value: number, substat: SubStatType) {
    return substat.valueIsPercentage ? `${value}%` : value;
  }

  createEffect(() => {
    setContentList(getContents());
  });

  return (
    <>
      <td>
        <select
          class="dropdown"
          value={substatVal().name}
          onChange={(e) => {
            const newSubstat = Substats.find(
              (substat) => substat.name === e.target.value
            );
            setSubstatVal(newSubstat!);
          }}
        >
          <For each={getContents()}>
            {(stat) => <option value={stat.name}>{stat.name}</option>}
          </For>
        </select>
      </td>
      <td>
        <select class="dropdown">
          <For each={substatVal().initialRolls}>
            {(roll) => (
              <option value={roll}>{valueFormatter(roll, substatVal())}</option>
            )}
          </For>
        </select>
      </td>
    </>
  );
};

export default LevelUp3Dropdown;
