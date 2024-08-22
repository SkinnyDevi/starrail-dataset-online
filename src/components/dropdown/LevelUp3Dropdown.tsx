import {
  Accessor,
  createEffect,
  createSignal,
  For,
  Show,
  type Component,
} from "solid-js";
import {
  SubStatNone,
  Substats,
  SubStatType,
} from "../../types/artifact/substat";
import { ArtifactSubstats } from "../../types/artifact/artifact";
import { SubStatAccessor } from "../hooks/subtatlist-hook";

interface LevelUp3DropdownProps {
  artifactSubstats: Accessor<ArtifactSubstats>;
  lastSubstatSignal: SubStatAccessor;
  substatSignal: SubStatAccessor;
}

const LevelUp3Dropdown: Component<LevelUp3DropdownProps> = ({
  artifactSubstats,
  lastSubstatSignal,
  substatSignal,
}) => {
  const { substatVal, setSubstatVal, substatDependencyList } = substatSignal;
  const [contents, setContents] = createSignal<SubStatType[]>([]);

  createEffect(() => {
    const hasAll4 = lastSubstatSignal.substatVal().name !== SubStatNone.name;
    const newContents = hasAll4 ? artifactSubstats() : substatDependencyList();
    setContents(newContents);
    if (!newContents.includes(substatVal())) {
      setSubstatVal(newContents[0]);
    }
  });

  function valueFormatter(value: number, substat: SubStatType) {
    return substat.valueIsPercentage ? `${value}%` : value;
  }

  return (
    <>
      <td>
        <select
          class="dropdown"
          value={substatVal().name}
          onChange={(e) =>
            setSubstatVal(
              Substats.find((substat) => substat.name === e.target.value)!,
            )
          }
        >
          <For each={contents()}>
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
