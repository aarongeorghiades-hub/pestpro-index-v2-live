// The header nav for the overwintering-pest cluster.
//
// Defined once here rather than repeated in six page files, so the cluster cannot
// drift into linking somewhere it should not. It deliberately contains no link to
// the Joro cluster: different pest, different season, no user value in crossing
// between them.
//
// SUPERSEDED, S46 R5: the /us hub now exists at app/us/page.tsx, and this
// module's HOME constant points at it. The wordmark on every page in this
// cluster therefore leads up to the hub rather than sideways to a page the
// reader is already on.

export const OVERWINTERING_HOME = '/us';

export const OVERWINTERING_NAV = [
  { title: 'Stink Bugs', href: '/us/stink-bugs-in-house' },
  { title: 'Removal', href: '/us/how-to-get-rid-of-stink-bugs' },
  { title: 'Traps', href: '/us/best-stink-bug-traps' },
  { title: 'Boxelder', href: '/us/boxelder-bugs' },
  { title: 'Lady Beetles', href: '/us/asian-lady-beetles' },
  { title: 'Cluster Flies', href: '/us/cluster-flies' },
];
