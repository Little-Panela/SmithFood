import { Pencil } from "phosphor-react";

export interface MenuItemData {
  product_id: number;
  name: string;
  desc: string;
  img_url: string;
  sells: number;
  stock: number;
  sell_price: number;
}

export interface MenuItemProps extends MenuItemData {
  setIsEditModalOpen: (isOpen: boolean) => void;
  setSelectedItem: (item: MenuItemData) => void;
}

export function MenuItem({
  img_url,
  name,
  product_id,
  desc,
  sell_price,
  stock,
  sells,
  setIsEditModalOpen,
  setSelectedItem,
}: MenuItemProps) {
  function openEditModal() {
    setSelectedItem({
      product_id, name, sell_price, img_url, stock, sells,
      desc,
    });
    setIsEditModalOpen(true);
  }

  return (
    <li className="glasmorphism z-10 w-96 max-h-32 flex items-center">
      <img
        src={img_url}
        alt={`image of ${name}`}
        className="rounded-tl rounded-bl w-32 h-32 object-cover"
      />
      <div className="flex flex-col items-center justify-center text-start w-full h-full p-4">
        <div className="w-full px-2 flex flex-col gap-2 relative">
          <h1 className="text-2xl">{name}</h1>
          <Pencil
            size={24}
            className="absolute right-0 text-white top-0 cursor-pointer mt-[-1.25rem]"
            weight="thin"
            onClick={openEditModal}
          />
          <span className="text-xl text-shadow-md">
            <div className="flex gap-4 items-center text-base relative">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(sell_price)}
              <div className="flex gap-2">
                <span className="text-xs">{`Estoque: ${stock}`}</span>
                <span className="text-xs">{`Vendas: ${sells}`}</span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </li>
  );
}
