// Site-wide config. Add a nav entry here and create the matching page in
// src/pages/ to add a new page to the site.
export const SITE = {
  title: 'Jakob Splidsboel',
  description: 'Personal website of Jakob Splidsboel.',
};

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export interface Project {
  title: string;
  description: string;
  // Where the project's title links to — an internal page (e.g. '/umap')
  // or an external URL.
  href: string;
  // Optional separate "source code" link shown alongside.
  repo?: string;
  year?: string;
  tags?: string[];
}

// Add a project by adding an entry here — it shows up on /projects automatically.
export const PROJECTS: Project[] = [
  {
    title: 'SampleVec — 3D Sample Explorer',
    description:
      'A tool for semantic search over a local audio sample library. This is an interactive 3D snapshot of 35,493 samples, positioned by UMAP from CLAP audio embeddings and colored by HDBSCAN cluster — fly through and explore the structure. Open source python package and Ableton VST',
    href: '/umap',
    repo: 'https://github.com/splidsboel/samplevec',
    year: '2026',
    tags: ["Semantic search", "Vector embeddings"],
  },
  {
    title: 'ifc-ts',
    description:
      'Implemented promise-based asynchronous I/O in a TypeScript library enforcing compile-time Information Flow Control.',
    href: '',
    repo: 'https://github.com/maxpieter/ifc-ts',
    year: '2025',
    tags: ["Monadic programming"],
  },
  {
    title: 'Chrome Chords',
    description:
      'Small chrome extension I built that makes it easier to look up chords for songs playing on YouTube or Spotify',
    href: '',
    repo: 'https://github.com/splidsboel/chrome_chords',
    year: '2024',
    tags: [],
  }

];
