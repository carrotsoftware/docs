// List of Carrot Carrot versions
const docsifyVersions = [
  { folder: "3333", label: "rev 3333", default: false },
  { folder: "3334", label: "rev 3334", default: false },
  { folder: "3335", label: "rev 3335", default: false },
  { folder: "3336", label: "rev 3336", default: true },
];

// init docsify object
window.$docsify = {
  name: "Carrot",
  loadSidebar: true,
  relativePath: true,
  maxLevel: 4,
  subMaxLevel: 2,

  versions: docsifyVersions,
  versionSelectorLabel: "Version",

  search: {
    noData: "Нет результатов!",
    paths: "auto",
    placeholder: "Поиск",
    hideOtherSidebarContent: true,
  },

  pagination: {
    previousText: "Предыдущий раздел",
    nextText: "Следующий раздел",
    crossChapter: true,
    crossChapterText: true,
  },

  themeable: {
    readyTransition: true,
    responsiveTables: true,
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
