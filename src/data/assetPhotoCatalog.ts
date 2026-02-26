const assetImageModules = import.meta.glob("@/assets/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export interface AssetPhotoOption {
  fileName: string;
  label: string;
  value: string;
}

const normalizeLabel = (fileName: string) =>
  fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim();

export const assetPhotoOptions: AssetPhotoOption[] = Object.entries(assetImageModules)
  .map(([path, value]) => {
    const fileName = path.split("/").pop() ?? path;

    return {
      fileName,
      label: normalizeLabel(fileName),
      value,
    };
  })
  .sort((a, b) => a.label.localeCompare(b.label, "fr"));
