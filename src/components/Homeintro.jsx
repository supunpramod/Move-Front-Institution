import React, { useState } from "react";

export default function Homeintro() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left column */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-extrabold tracking-tight text-white">
              Move Front
            </h2>

            <p className="mt-6 text-fon text-sm leading-relaxed text-justify bg-white p-8 rounded-xl">
              Move Front is a social development organization on process of
              registration as a non-forfeitable organization in Sri Lanka. We
              facilitate community change towards a total development. Our main
              focus is on providing a holistic transformation of Women, Men,
              child, youth and disadvantaged communities by offering training,
              empowerment, livelihood and exposure to life-changing innovations
              in holistic approach. We endeavor to create an environment that
              allows the fulfillment of the rights of every individual, family,
              and society. Currently Move Front institution operating in
              community intervention in 03 district and 24 villages, Puttlam,
              Gampaha and Nuwaraeliya. We strive to reduce the impact of
              inequality of gender, and gender base violence towards creating a
              peaceful, happy, and healthy environment within the community.
            </p>

            <button
              onClick={() => setShowMore((s) => !s)}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Right column */}
          <div className="lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <FeatureCard
                icon={<IconPerson />}
                title="Community Development"
                text="Move Front facilitates community transformation across 3 districts and 24 villages including Puttlam, Gampaha and Nuwara Eliya. We work towards creating peaceful, healthy and equal communities through sustainable social development initiatives."
              />

              <FeatureCard
                icon={<IconPlus />}
                title="Organization Structure"
                text="Move Front strengthens Community Based Organizations (CBOs) at divisional and district levels. We mobilize community members to actively participate in development and policy implementation through structured alliances."
              />

              <FeatureCard
                icon={<IconThumb />}
                title="Partnership & Advocacy"
                text="Move Front collaborates with government and non-government organizations including Ministry of Women and Child Affairs, Ministry of Health, SLPA, We Effect and other partners to advocate and support community-level policy implementation."
              />

              <FeatureCard
                icon={<IconDonate />}
                title="Sponcer a Child"
                text="Support our work to empower communities and protect children’s rights. Your donation helps us continue sustainable development programmes."
                button={
                  <a
                    href="/donate"
                    className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-base font-semibold text-white transition hover:opacity-90"
                  >
                    Donate Now
                  </a>
                }
              />
            </div>
          </div>

          {/* Expanded content */}
          {showMore && (
            <div className="lg:col-span-12">
              <div className="mt-2 rounded-xl bg-white p-6">
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    As an organization that works to empower the people to be
                    their own facilitators for change, Move Front institution
                    treats the mobilization of community members and the civil
                    society with utmost importance. While supporting existing
                    community-based organizations, at the community, district,
                    and national level, one of the key steps in our programme
                    involves setting up our own community-based organizations in
                    our selected programme locations. These organizations are
                    made up of individuals who actively participate in
                    transforming their communities, bringing about a healthy
                    environment conducive to social development. All programmes,
                    activities and events are designed and implemented with the
                    participation of community-based organizations (CBOs).
                  </p>

                  <p className="text-slate-700 text-sm leading-relaxed text-justify">
                    MFI components namely, livelihood development, gender
                    equality, women empowerment and development, Strengthening
                    Community based organizations through right base approach
                    full fill the needs of major areas capacity building, human
                    trafficking, Pace building, environment reconciliation. Move
                    Front institution work involves working in coordination with
                    Community based Organizations and women, children, and youth
                    groups and individuals in each divisional secretariat and
                    district, as well as with various government and
                    nongovernmental organizations and agencies in advocating for
                    and contributing to the local government implementation
                    activities and policies.
                  </p>

                  <p className="text-slate-700 text-sm leading-relaxed text-justify">
                    Move Front institutions at the forefront of one of the
                    latest ventures of the government and non-governmental
                    networks which is the establishment of divisional and
                    district alliances of Community based organizations. These
                    are collectives of Community based organizations that allow
                    for proper coordination of Community based activities in the
                    relevant areas in order to optimize the services provided to
                    the people.
                  </p>

                  <p className="text-slate-700 text-sm leading-relaxed text-justify">
                    Move Front also work in coordination with various government
                    and nongovernmental organizations and agencies and various
                    network’s supporting them to advocate for, and contribute,
                    to the local government implementation of policies gender
                    equality and gender base violence reduction. The government
                    and nongovernmental organizations currently involved
                    divisional, district and nationally. Ministry of women and
                    child affairs, Ministry of Health and Sri Lanka alcohol
                    policy alliance (SLPA) We Effect, Healthy Lanka alliance for
                    development, Safe foundation US aid project Etc.
                  </p>

                  <p className="text-slate-700 text-sm leading-relaxed text-justify">
                    Additionally, we recognize environment and ecological
                    agriculture major crosscutting issues related understand
                    that tackling issues is thus necessary in reducing poverty
                    and its related problems. Our programmes therefore include
                    as key areas of interest, the empowerment of women & man and
                    children & youths and the protection and promotion of their
                    rights. We hope that our efforts would greatly assist the
                    government and nongovernmental institutions and
                    organizations in alleviating poverty and social development.
                    We also hope that our community level interventions would be
                    instrumental in helping the people of Sri Lanka develop as
                    healthy, productive, and valuable citizens of the country.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, text, button }) {
  return (
    <div className="relative min-h-[190px] rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <div className="flex gap-6">
        <div className="mt-1 flex h-14 w-14 items-center justify-center">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-extrabold leading-snug text-secondary">
            {title}
          </h3>

          <p className="mt-3 text-[14px] leading-7 text-slate-600">{text}</p>

          {button && <div className="mt-5">{button}</div>}
        </div>
      </div>
    </div>
  );
}

/* ---------- Icons ---------- */

function IconPerson() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" aria-hidden="true">
      <path
        fill="currentColor"
        className="text-accent"
        d="M12 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm7 10h-2v-4a3 3 0 0 0-3-3H10a3 3 0 0 0-3 3v4H5v-4a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5Z"
      />
      <path
        fill="currentColor"
        className="text-accent"
        d="M4 12a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Zm16 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Z"
      />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" className="fill-accent" />
      <path
        d="M12 7v10M7 12h10"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconThumb() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" aria-hidden="true">
      <path
        className="fill-accent"
        d="M9 11V7.8c0-1.5 1.2-2.8 2.8-2.8h.3c.5 0 .9.4.9.9v3.4h5.1c1.2 0 2.1 1.1 1.9 2.3l-1.1 6.1c-.2 1-1 1.7-2 1.7H10.4c-.8 0-1.4-.6-1.4-1.4V11Z"
      />
      <path
        className="fill-accent"
        d="M4 11h3v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}

/* ✅ Donate icon (Heart + Hand) */
function IconDonate() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-12 w-12 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 21s-6-4.3-8.5-7C1.5 11.5 2.8 7 6.5 7c1.9 0 3 1 3.5 2 0 0 1.1-2 3.5-2C17.2 7 18.5 11.5 16.5 14 14 16.7 12 21 12 21Z" />
    </svg>
  );
}

