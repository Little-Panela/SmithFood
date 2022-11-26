// alterar preço do produto
// adicionar produtos no estoque
import { MenuItem, MenuItemData } from "./MenuItem";

interface MenuColumnProps {
  menuItems: MenuItemData[];
  label: string;
  setIsEditModalOpen: (isOpen: boolean) => void;
  setSelectedItem: (item: MenuItemData) => void;
}

export function MenuColumn({
  menuItems,
  label,
  setIsEditModalOpen,
  setSelectedItem,
}: MenuColumnProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-3xl underline underline-offset-4">{label}</h2>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            stock={item.stock}
            sells={item.sells}
            setIsEditModalOpen={setIsEditModalOpen}
            setSelectedItem={setSelectedItem}
          />
        ))}
      </ul>
    </div>
  );
}