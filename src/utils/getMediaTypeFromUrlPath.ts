const getMediaTypeFromUrlPath = () => {
  const pathNames = window.location.pathname;

  switch (pathNames) {
    case '/':
      return 'both';
    case '/tv':
      return 'tv';
    case '/movies':
      return 'movie';
    default:
      return '';
  }
};

export default getMediaTypeFromUrlPath;
