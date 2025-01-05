import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface props {
  penerimaManfaat: number;

  panjangBibir: number;
  panjangBoxAnchorBelakang: number | null;
  panjangGapuraAnchorBelakang: number | null;
  panjangJembatan: number;
  panjangPapanPijak: number | null;
  lebarGapuraAs: number | null;
  jenisBesi: string | null;
  jenisPembangunan: string;
  tinggiGapura: number | null;
  boxGapura: number | null;
  tahunPembuatan: number | null;
}

export default function tabelSpesifikasi({
  penerimaManfaat,
  panjangBibir,
  panjangBoxAnchorBelakang,
  panjangGapuraAnchorBelakang,
  panjangJembatan,
  panjangPapanPijak,
  lebarGapuraAs,
  jenisBesi,
  jenisPembangunan,
  tinggiGapura,
  boxGapura,
  tahunPembuatan,
}: props) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Keterangan</TableHead>
            <TableHead>Nilai</TableHead>
            <TableHead>satuan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Jenis Pembangunan</TableCell>
            <TableCell>{jenisPembangunan}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Penerima Manfaat</TableCell>
            <TableCell>{penerimaManfaat} Jiwa</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Panjang Jembatan</TableCell>
            <TableCell>{panjangJembatan} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tahun Pembuatan</TableCell>

            <TableCell>
              {tahunPembuatan === null ? "-" : tahunPembuatan}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Panjang Bibir</TableCell>
            <TableCell>
              {panjangBibir === null ? "belum diketahui" : panjangBibir}
            </TableCell>
            <TableCell>meter</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tinggi Gapura</TableCell>
            <TableCell>
              {tinggiGapura === null ? "belum diketahui" : tinggiGapura}
            </TableCell>
            <TableCell>meter</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lebar Gapura As</TableCell>
            <TableCell>
              {lebarGapuraAs === null ? "belum diketahui" : lebarGapuraAs}
            </TableCell>
            <TableCell>meter</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Box Gapura</TableCell>
            <TableCell>
              {boxGapura === null ? "belum diketahui" : boxGapura}
            </TableCell>
            <TableCell>meter</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jenis Besi Tiang</TableCell>
            <TableCell>
              {jenisBesi === null ? "belum diketahui" : jenisBesi}
            </TableCell>
            <TableCell>meter</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Panjang Papan Pijak</TableCell>
            <TableCell>
              {panjangPapanPijak === null
                ? "belum diketahui"
                : panjangPapanPijak}
            </TableCell>
            <TableCell>meter</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Panjang Box Anchor Belakang</TableCell>
            <TableCell>
              {panjangBoxAnchorBelakang === null
                ? "belum diketahui"
                : panjangGapuraAnchorBelakang}
            </TableCell>
            <TableCell>meter</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Panjang Gapura Anchor Belakang</TableCell>
            <TableCell>
              {panjangGapuraAnchorBelakang === null
                ? "belum diketahui"
                : panjangGapuraAnchorBelakang}
            </TableCell>
            <TableCell>meter</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
