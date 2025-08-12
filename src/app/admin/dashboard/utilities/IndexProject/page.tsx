// import GeometryViewer from "@/components/IndexProject/GeometryViewer";

// export default function Home() {
//   return (
//     <main>
//       <GeometryViewer />
//     </main>
//   );
// }


import dynamic from 'next/dynamic';

const GeometryViewer = dynamic(
  () => import('@/components/IndexProject/GeometryViewer'),
  { 
    ssr: false,
    loading: () => <p>Loading...</p>
  }
);

export default function Home() {
  return (
    <div>
      <GeometryViewer />
    </div>
  );
}
