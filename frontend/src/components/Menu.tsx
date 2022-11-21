interface MenuItem {
  image: string;
  title: string;
  price: number;
}

interface MenuColumnProps {
  menuItems: MenuItem[];
  label: string;
}

export function MenuColumn({ menuItems, label }: MenuColumnProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-3xl underline underline-offset-4">{label}</h2>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <MenuItem title={item.title} price={item.price} image={item.image} />
        ))}
      </ul>
    </div>
  );
}

export function MenuItem({ title, price, image }: MenuItem) {
  return (
    <li className="glasmorphism z-10 w-96 max-h-32 flex items-center">
      <img
        src={image}
        alt={`image of ${title}`}
        className="rounded-tl rounded-bl w-32 h-32 object-cover"
      />
      <div className="flex flex-col items-center justify-center text-start w-full h-full p-4">
        <div className="w-full px-2 flex flex-col gap-2">
          <h1 className="text-2xl">{title}</h1>
          <span className="text-xl text-shadow-md">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </span>
        </div>
        <button className="w-full glasmorphism mt-2">
          Adicionar ao carrinho
        </button>
      </div>
    </li>
  );
}
