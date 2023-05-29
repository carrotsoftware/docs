window.$docsify = {
  name: "Carrot",
  loadSidebar: true,
  maxLevel: 4,
  subMaxLevel: 3,
  loadNavbar: true,
  mergeNavbar: false,

  versions: [
    { folder: "3333", label: "rev 3333", default: true },
    { folder: "2222", label: "rev 2222", default: false },
    { folder: "1111", label: "rev 1111", default: false },
  ],
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
    hideOtherSidebarContent: false,
  },
  plugins: [
    EditOnGithubPlugin.create(
      "https://github.com/dmkrupin/carrot-documentation/blob/main/"
    ),
  ],
};
