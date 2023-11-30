import { ArcLogo } from "../logos/arc";
import { CashAppLogo } from "../logos/cashapp";
import { DescriptLogo } from "../logos/descript";
import { LoomLogo } from "../logos/loom";
import { MercuryLogo } from "../logos/mercury";
import { RampLogo } from "../logos/ramp";
import { RaycastLogo } from "../logos/raycast";
import { RemoteLogo } from "../logos/remote";
import { RetoolLogo } from "../logos/retool";
import { RunwayLogo } from "../logos/runway";
import { SupercellLogo } from "../logos/supercell";
import { VercelLogo } from "../logos/vercel";

export const Clients = () => (
  <>
    <p className="mb-12 text-center text-lg text-white md:text-xl">
      <span className="text-primary-text">
        Powering the world’s best product teams.
      </span>
      <br className="hidden md:block" /> From next-gen startups to established
      enterprises.
    </p>

    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      <RampLogo />
      <LoomLogo className="hidden md:block" />
      <VercelLogo />
      <DescriptLogo className="hidden md:block" />
      <CashAppLogo />
      <SupercellLogo />
      <MercuryLogo />
      <RetoolLogo />
      <RemoteLogo className="hidden md:block"/>
      <ArcLogo className="hidden md:block" />
      <RaycastLogo className="hidden md:block"/>
      <RunwayLogo className="hidden md:block"/>
    </div>
  </>
);
