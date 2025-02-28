"use server";
import { writeFile, mkdir, stat } from "fs/promises";
import { join } from "path";
import mime from "mime";

export async function handleImage(
  image: File | File[] | null
): Promise<string | string[]> {
  // Return empty string if no image is provided
  if (!image) return "";

  // Handle single file
  if (image instanceof File) {
    if (image.size === 0) return "";
    return await saveImageFile(image);
  }

  // Handle array of files
  if (Array.isArray(image)) {
    const validFiles = image.filter(
      (file) => file instanceof File && file.size > 0
    );
    if (validFiles.length === 0) return "";

    // Process all valid files and return array of paths
    const uploadPromises = validFiles.map((file) => saveImageFile(file));
    return await Promise.all(uploadPromises);
  }

  return "";
}

async function saveImageFile(image: File): Promise<string> {
  const buffer = Buffer.from(await image.arrayBuffer());
  const relativeUploadDir = `/images/${new Date()
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-")}`;
  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  // Create directory if it doesn't exist
  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      throw new Error("Failed to create upload directory");
    }
  }

  const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const filename = `${image.name.replace(
    /\.[^/.]+$/,
    ""
  )}-${uniqueSuffix}.${mime.getExtension(image.type)}`;

  await writeFile(`${uploadDir}/${filename}`, buffer);
  console.log(`${relativeUploadDir}/${filename}`);
  return `${relativeUploadDir}/${filename}`;
}
