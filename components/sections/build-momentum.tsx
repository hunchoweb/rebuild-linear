"use client";

import { Features } from "../features";
import {
  AutomaticTrackingIcon,
  PredictDelayIcon,
  FullyConfigurableIcon,
  BePreparedIcon,
  ScheduledIcon,
  ScopeCreepIcon,
} from "../icons/features/buildMomentum";

export const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            Build momentum
            <br />
            with Cycles
          </>
        }
        image="/cycles.webp"
        imageSize="large"
        text="Cycles focus your team on what work should happen next. A healthy routine to maintain velocity and make meaningful progress."
      />
      <Features.Grid
        features={[
          {
            icon: AutomaticTrackingIcon,
            title: "Automatic tracking.",
            text: "Any started issues are added to the current cycle.",
          },
          {
            icon: ScheduledIcon,
            title: "Scheduled.",
            text: "Unfinished work rolls over to the next cycle automatically.",
          },
          {
            icon: FullyConfigurableIcon,
            title: "Fully configurable.",
            text: "Define start date, end date, duration, and more.",
          },
          {
            icon: PredictDelayIcon,
            title: "Predict delays.",
            text: "Get warnings for at-risk cycles.",
          },
          {
            icon: ScopeCreepIcon,
            title: "Scope creep.",
            text: "Understand which issues are added mid-cycle.",
          },
          {
            icon: BePreparedIcon,
            title: "Be prepared.",
            text: "Schedule work in advance with upcoming cycles.",
          },
        ]}
      />
    </Features>
  );
};
