import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { DeleteForm } from "./component-form-delete";
import { EditButton } from "./component-input";
import type { Sample } from "./validation";

type DisplaySamplesProps = {
  samples: Sample[];
  setEditSample: (sample: Sample) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

export default function DisplaySamplesTable({
  samples,
  setEditSample,
  setIsModalOpen,
}: DisplaySamplesProps) {
  const handleEdit = (sample: Sample) => {
    setEditSample(sample);
    setIsModalOpen(true);
  };

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name (English)</TableHead>
            <TableHead>Name (Amharic)</TableHead>
            <TableHead>Nationality</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Sub City</TableHead>
            <TableHead>Wereda</TableHead>
            <TableHead>House No</TableHead>
            <TableHead>Primary Phone</TableHead>
            <TableHead>Secondary Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {samples.map((sample) => (
            <TableRow key={sample.id}>
              <TableCell>{sample.name_english}</TableCell>
              <TableCell>{sample.name_amharic}</TableCell>
              <TableCell>{sample.nationality}</TableCell>
              <TableCell>{sample.city}</TableCell>
              <TableCell>{sample.sub_city}</TableCell>
              <TableCell>{sample.wereda}</TableCell>
              <TableCell>{sample.house_number}</TableCell>
              <TableCell>{sample.primary_phone}</TableCell>
              <TableCell>{sample.secondary_phone}</TableCell>
              <TableCell>{sample.email}</TableCell>

              <TableCell className="text-right flex space-x-2 justify-end">
                <EditButton sample={sample} handleEdit={handleEdit} />
                <DeleteForm id={sample.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
