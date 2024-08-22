import { For, type Component } from "solid-js";
import { SubStatAccessor } from "../hooks/subtatlist-hook";

interface SubstatValueComboProps {
  substatSignal: SubStatAccessor;
}

const SubstatValueCombo: Component<SubstatValueComboProps> = ({
  substatSignal,
}) => {
  const { substatVal, setSubstatVal, substatDependencyList } = substatSignal;

  function valueFormatter(value: number, isPercentage: boolean) {
    return isPercentage ? `${value}%` : value;
  }

  return (
    <>
      <td>
        <select
          class="dropdown"
          value={substatVal().name}
          onChange={(e) =>
            setSubstatVal(
              substatDependencyList().find(
                (substat) => substat.name === e.target.value,
              )!,
            )
          }
        >
          <For each={substatDependencyList()}>
            {(stat) => <option value={stat.name}>{stat.name}</option>}
          </For>
        </select>
      </td>
      <td>
        <select class="dropdown">
          <For each={substatVal().initialRolls}>
            {(roll) => (
              <option value={roll}>
                {valueFormatter(roll, substatVal().valueIsPercentage)}
              </option>
            )}
          </For>
        </select>
      </td>
    </>
  );
};

export default SubstatValueCombo;
