const formatFileSize = (bytes: number): string => {
  if (bytes < 1000) {
    return `${bytes} B`;
  }

  if (bytes < 1_000_000) {
    return `${(bytes / 1_000).toFixed(1)} KB`;
  }

  if (bytes < 1_000_000_000) {
    return `${(bytes / 1_000_000).toFixed(1)} MB`;
  }

  return `${(bytes / 1_000_000_000).toFixed(2)} GB`;
};

export default formatFileSize;
