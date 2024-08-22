import {
  Accessor,
  createEffect,
  createMemo,
  createSignal,
  Setter,
} from "solid-js";
import { SubStatNone, SubStatType } from "../../types/artifact/substat";
import { MainStatType } from "../../types/artifact/mainstat";

function useUniqueSubstatList(
  substats: Accessor<SubStatType[]>,
  dependencyList: () => Accessor<MainStatType | SubStatType>[],
) {
  return createMemo(() => {
    const filtered: SubStatType[] = [];
    const processed = dependencyList().map((i) => i());
    for (let stat of substats()) {
      const found = processed.find((dstat) => dstat.name === stat.name);
      if (found === undefined) {
        filtered.push(stat);
      }
    }
    return filtered;
  });
}

export type SubStatAccessor = {
  substatVal: Accessor<SubStatType>;
  setSubstatVal: Setter<SubStatType>;
  substatDependencyList: Accessor<SubStatType[]>;
};

function createSubstatSignal(
  substats: Accessor<SubStatType[]>,
  dependencyList: () => Accessor<MainStatType | SubStatType>[],
  initialvalue?: SubStatType,
): SubStatAccessor {
  const substatDependencyList = useUniqueSubstatList(substats, dependencyList);
  const [substatVal, setSubstatVal] = createSignal<SubStatType>(
    initialvalue || SubStatNone,
  );

  createEffect(() => {
    if (!substatDependencyList().includes(substatVal())) {
      setSubstatVal(substatDependencyList()[0]);
    }
  });

  return { substatVal, setSubstatVal, substatDependencyList };
}

export default createSubstatSignal;
