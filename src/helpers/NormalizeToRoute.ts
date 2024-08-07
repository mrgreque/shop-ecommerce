const normalizeTitleToUrl = (title: string) => {
  return title.replace(/\s/g, '-').toLowerCase();
};

export { normalizeTitleToUrl };
