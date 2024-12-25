import CardJembatan from "./cardJembatan";

export default function ListJembatan(){
    
    const dataJembatan = [
        {
          id: 1,
          name: "Jembatan Suramadu",
          address: "Surabaya - Madura",
          image:
            "https://ma-miftahulhuda.sch.id/media_library/posts/large/71edf4c13121a0e4f12ea72eb5bdbb12.jpg",
          progress: 50,
          target: 100000000,
          terkumpul :20000000,
        },
        {
          id: 2,
          name: "Jembatan Ampera",
          address: "Palembang, Sumatra Selatan",
          image:
            "https://awsimages.detik.net.id/community/media/visual/2021/04/27/jalan-suryakencana-bogor-jalan-malioboro-alun-alun-bandung-pasar-senggol-jembatan-ampera-1_169.jpeg?w=1200",
          progress: 75,
          target: 100000000,
          terkumpul :20000000,
        },
        {
          id: 3,
          name: "Jembatan Merah",
          address: "Surabaya, Jawa Timur",
          image:
            "https://cdn1-production-images-kly.akamaized.net/vLt1abTi7M4GMLnUPR1vPsrSrZo=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/763545/original/001497800_1415592261-2_panduanwisata_dot_com.jpg",
          progress: 30,
          target: 100000000,
          terkumpul :20000000,
        },
        {
          id: 4,
          name: "Jembatan Merah",
          address: "Surabaya, Jawa Timur",
          image:
            "https://cdn1-production-images-kly.akamaized.net/vLt1abTi7M4GMLnUPR1vPsrSrZo=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/763545/original/001497800_1415592261-2_panduanwisata_dot_com.jpg",
          progress: 30,
          target: 100000000,
          terkumpul :20000000,
        },
        {
          id: 5,
          name: "Jembatan Merah",
          address: "Surabaya, Jawa Timur",
          image:
            "https://cdn1-production-images-kly.akamaized.net/vLt1abTi7M4GMLnUPR1vPsrSrZo=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/763545/original/001497800_1415592261-2_panduanwisata_dot_com.jpg",
          progress: 30,
          target: 100000000,
          terkumpul :20000000,
        },
        {
          id: 6,
          name: "Jembatan Merah",
          address: "Surabaya, Jawa Timur",
          image:
            "https://cdn1-production-images-kly.akamaized.net/vLt1abTi7M4GMLnUPR1vPsrSrZo=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/763545/original/001497800_1415592261-2_panduanwisata_dot_com.jpg",
          progress: 30,
          target: 100000000,
          terkumpul :20000000,
        },
        {
          id: 7,
          name: "Jembatan Merah",
          address: "Surabaya, Jawa Timur",
          image:
            "https://cdn1-production-images-kly.akamaized.net/vLt1abTi7M4GMLnUPR1vPsrSrZo=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/763545/original/001497800_1415592261-2_panduanwisata_dot_com.jpg",
          progress: 30,
          target: 100000000,
          terkumpul :20000000,
        },
        {
          id: 8,
          name: "Jembatan Merah",
          address: "Surabaya, Jawa Timur",
          image:
            "https://cdn1-production-images-kly.akamaized.net/vLt1abTi7M4GMLnUPR1vPsrSrZo=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/763545/original/001497800_1415592261-2_panduanwisata_dot_com.jpg",
          progress: 30,
          target: 100000000,
          terkumpul :20000000,
        },
      ];
    
    return(
        <>
        <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-4">
        {dataJembatan.map((jembatan) => (
          <CardJembatan
            key={jembatan.id}
            namaJembatan={jembatan.name}
            deskripsi={jembatan.address}
            gambar={jembatan.image}
            progress={jembatan.progress}
            target={jembatan.target}
            terkumpul={jembatan.terkumpul}
          />
        ))}
      </div>
      </div>
        </>
    )
}