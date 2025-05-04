import TableSortableSimple from "../../components/Tables/TableSortableSimple";
import MainLayout from "../../layouts/MainLayout";

export default function Tables() {
  const headers = [
    { id: 1, key: "title", label: "TÍTULO" },
    { id: 2, key: "data", label: "DATA" },
    { id: 3, key: "user", label: "USUÁRIO" },
    { id: 4, key: "recomendation", label: "RECOMENDAÇãO" },
  ];
  const data = [
    {
      title: "Harry Potter e a pedra filosofal",
      data: "2024-12-30",
      user: "Joana",
      recomendation: "Maria",
    },
    {
      title: "Matrix",
      data: "2024-12-31",
      user: "Pedro",
      recomendation: "Carlos",
    },
    {
      title: "Clube da Luta",
      data: "2025-02-02",
      user: "Marcos",
      recomendation: "Pedro",
    },
    {
      title: "Donnie Darko",
      data: "2025-02-02",
      user: "Fabrício",
      recomendation: "Rafael",
    },
    {
      title: "Homem aranha 2",
      data: "2025-02-02",
      user: "João",
      recomendation: "Tiago",
    },
    {
      title: "Lucy",
      data: "2025-02-02",
      user: "Diana",
      recomendation: "Carla",
    },
    {
      title: "Se beber não case 2",
      data: "2025-02-02",
      user: "Luíza",
      recomendation: "Raquel",
    },
  ];
  return (
    <MainLayout page="Tabelas">
      <div className="container flex flex-col gap-3 mt-3 px-2 sm:px-4 lg:px-6">
        <h3 className="text-2xl font-bold mb-4">Tabelas</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-white rounded-lg shadow-md p-4">
            <TableSortableSimple
              data={data}
              headers={headers}
              initialKey={"data"}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
