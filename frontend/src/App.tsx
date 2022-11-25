import { useState } from "react";
import { EditItemModal } from "./components/EditItemModal";
import { MenuColumn } from "./components/Menu";
import { MenuItemData } from "./components/MenuItem";

const menuItems = [
  {
    id: "1",
    image:
      "https://www.tastingtable.com/img/gallery/the-best-coffee-shop-in-every-state/intro-1639519645.jpg",
    title: "Café",
    price: 5,
    stock: 10,
    sells: 0,
  },
  {
    id: "2",
    image:
      "https://www.tastingtable.com/img/gallery/the-best-coffee-shop-in-every-state/intro-1639519645.jpg",
    title: "Café com leite",
    price: 7,
    stock: 10,
    sells: 3,
  },
  {
    id: "3",
    image:
      "https://www.tastingtable.com/img/gallery/the-best-coffee-shop-in-every-state/intro-1639519645.jpg",
    title: "Café Premium",
    price: 10,
    stock: 4,
    sells: 2,
  },
];

function App() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as MenuItemData);

  return (
    <main className="area min-h-fit flex flex-col items-center gap-5">
      <h1 className="font-handWritten text-6xl mt-12">SmithFood</h1>
      <div className="flex gap-12 mt-16 flex-wrap items-center justify-center">
        <MenuColumn
          menuItems={menuItems}
          label="Entradas"
          setIsEditModalOpen={setIsEditModalOpen}
          setSelectedItem={setSelectedItem}
        />
        <MenuColumn
          menuItems={menuItems}
          label="Pratos"
          setIsEditModalOpen={setIsEditModalOpen}
          setSelectedItem={setSelectedItem}
        />
        <MenuColumn
          menuItems={menuItems}
          label="Bebidas"
          setIsEditModalOpen={setIsEditModalOpen}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <EditItemModal
        isOpen={isEditModalOpen}
        selectedItem={selectedItem}
        onClose={() => setIsEditModalOpen(false)}
      />
      <BgCircles />
    </main>
  );
}

function BgCircles() {
  return (
    <ul className="circles z-0">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}

export default App;
