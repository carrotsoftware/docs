// List of Carrot Carrot versions
const docsifyVersions = [{ folder: "3336", label: "rev 4062", default: true }];

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
