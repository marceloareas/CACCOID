export const serializeFileList = (fileList) => {
  if (!fileList || fileList.length === 0) return null;
  return Array.from(fileList).map((file) => ({
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: file.lastModified,
  }));
};
