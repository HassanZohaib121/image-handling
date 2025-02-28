'use client'
import { handleImage } from "@/lib/actions";

export default function Home() {
  async function handleSubmit(formData: FormData) {
    const fileList = formData.getAll("image") as File[];
    const file = formData.get("singleImage") as File;
    const imagePaths = await handleImage(fileList);    
    const singleImagePaths = await handleImage(file);    
    console.log("Uploaded Single images:", singleImagePaths);
    console.log("Uploaded multiple images:", imagePaths);
  }
  return (
    <div className="flex justify-center px-4 py-16">
      <form className='flex flex-col gap-5 ' action={handleSubmit}>
        <h1 className="text-5xl font-bold">Image Handling</h1>

        <h1 className="text-2xl font-bold">Single Image Handling</h1>
        
        <input 
          type="file" 
          id="singleImage" 
          name="singleImage" 
          accept="image/*" 
          className="file-input file-input-bordered file-input-info w-full max-w-xs" 
        />

        <h1 className="text-2xl font-bold">Multiple Image Handling</h1>

        <input 
          type="file" 
          id="image" 
          name="image" 
          accept="image/*" 
          multiple 
          className="file-input file-input-bordered file-input-info w-full max-w-xs" 
        />
        <button className="btn btn-info" type="submit">Submit</button>
      </form>
    </div>
  );
}