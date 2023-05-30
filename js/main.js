// List of Carrot Carrot versions
const docsifyVersions = [
  { folder: "3333", label: "rev 3333", default: true },
  { folder: "1111", label: "rev 1111", default: false },
];

// init docsify object
window.$docsify = {
  name: "Carrot",

  coverpage: true,
  coverpage: "_coverpage.md",
  onlyCover: false,

  loadSidebar: true,
  relativePath: true,
  maxLevel: 4,
  subMaxLevel: 2,
  loadNavbar: true,
  mergeNavbar: false,

  versions: docsifyVersions,
  versionSelectorLabel: "Version",

  search: {
    noData: {
      "/eng/": "No results!",
      "/": "Никаких результатов!",
    },
    paths: "auto",
    placeholder: {
      "/eng/": "Search",
      "/": "Поиск",
    },
    hideOtherSidebarContent: true,
  },

  pagination: {
    previousText: "Previous",
    nextText: "Next",
    crossChapter: true,
    crossChapterText: true,
  },

  themeable: {
    readyTransition: true, // default
    responsiveTables: true, // default
  },
};

// limit search by version
(function () {
  // Get the current version from the URL
  const versionFolder = window.location.pathname.split("/")[1];

  // Set the search configuration based on the current version
  window.$docsify.search = {
    namespace: "docs-" + versionFolder, // Set a unique namespace for each version
  };
})();
