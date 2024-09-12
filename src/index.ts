import type { DehydratedState } from "@tanstack/query-core";

import { useMatches } from "@remix-run/react";
import merge from "deepmerge";

const useDehydratedState = (): DehydratedState => {
  const matches = useMatches();

  const dehydratedState = matches
    .filter((match) => match.data)
    .map((data) => data["dehydratedState"]);

  return dehydratedState.length
    ? dehydratedState.reduce(
        (accumulator, currentValue) => merge(accumulator, currentValue),
        {}
      )
    : undefined;
};

export { useDehydratedState };
