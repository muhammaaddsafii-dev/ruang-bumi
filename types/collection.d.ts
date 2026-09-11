export interface Collection {
  id: number;
  name: string;
  tahun: number | null;
  date: string | null;
  jenis: string | null;
  resolusi: string | null;
  project: string | null;
  latitude: number | null;
  longitude: number | null;
  geometry?: GeoJSON.Geometry | null;
}
