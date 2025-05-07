interface Project {
    id: number;
    title: string;
    category: string;
    content: string;
    client: string;
    date_published: string;
    image_cover: string;
    thumbnail_images: string[]; // Changed from thumbnail_image to array
    thumbnail_video: string;
    latitude: number | null;
    longitude: number | null;
  }