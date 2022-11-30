import axios from "axios";
import { useEffect, useState } from "react";
import { EditItemModal } from "./components/EditItemModal";
import { MenuColumn } from "./components/Menu";
import { MenuItemData } from "./components/MenuItem";


type CategoryItemsData = {
  category_id: number;
  name: string;
  products: MenuItemData[]
}

function App() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as MenuItemData);
  const [menuItems, setMenuItems] = useState([] as CategoryItemsData[])

  useEffect(() => {
    fetch("http://localhost:5000/products").then(res => {
      res.json().then(res => setMenuItems(res)
      );
    })
  }, [])

  return (
    <main className="area min-h-fit flex flex-col items-center gap-5">
      <h1 className="font-handWritten text-6xl mt-12">SmithFood</h1>
      <div className="flex gap-12 mt-16 flex-wrap items-center justify-center">
        {menuItems.map(cat => 
          <MenuColumn
          menuItems={cat.products}
          label="Sobremesas"
          setIsEditModalOpen={setIsEditModalOpen}
          setSelectedItem={setSelectedItem}
        />
        )}
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
