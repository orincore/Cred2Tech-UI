/* eslint-disable @next/next/no-img-element */
import { CheckIcon, IdCardIcon } from './HeroIcons';
import { StampIcon } from './SchemeEngineIcons';

/* The three illustration plates of the scheme engine section. Each illustration is an opaque PNG with
   a light background of its own, so it sits on an even plate of that colour (same size for all
   three, so the steps line up). Step 1 adds the PAN and GST checks beside the picture. */

export function SceneFetch() {
  return (
    <div className="ses ses--fetch">
      <img
        src="/illustrations/scheme-fetch.png"
        alt="A business owner working on a laptop while data is fetched"
        width={704}
        height={536}
        loading="lazy"
      />
      <ul className="ses__chips">
        <li><span className="ses__chip-ico"><IdCardIcon /></span><b>PAN</b><span className="ses__tick"><CheckIcon /></span></li>
        <li><span className="ses__chip-ico"><StampIcon /></span><b>GST</b><span className="ses__tick"><CheckIcon /></span></li>
      </ul>
    </div>
  );
}

export function SceneDiscover() {
  return (
    <div className="ses">
      <img
        src="/illustrations/scheme-discover.png"
        alt="A magnifying glass finding matching government schemes"
        width={766}
        height={444}
        loading="lazy"
      />
    </div>
  );
}

export function SceneSupport() {
  return (
    <div className="ses">
      <img
        src="/illustrations/scheme-support.png"
        alt="An expert guiding a business owner through scheme applications"
        width={844}
        height={438}
        loading="lazy"
      />
    </div>
  );
}
