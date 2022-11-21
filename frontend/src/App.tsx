import { MenuColumn } from "./components/Menu";

const menuItems = [
  {
    image:
      "https://www.tastingtable.com/img/gallery/the-best-coffee-shop-in-every-state/intro-1639519645.jpg",
    title: "Café",
    price: 2.5,
  },
  {
    image:
      "https://www.tastingtable.com/img/gallery/the-best-coffee-shop-in-every-state/intro-1639519645.jpg",
    title: "Café com leite",
    price: 3.5,
  },
  {
    image:
      "https://www.tastingtable.com/img/gallery/the-best-coffee-shop-in-every-state/intro-1639519645.jpg",
    title: "Café Premium",
    price: 4.5,
  },
];

function App() {
  return (
    <main className="area min-h-fit flex flex-col items-center gap-5">
      <h1 className="font-handWritten text-6xl mt-12">SmithFood</h1>
      <div className="flex gap-12 mt-16 flex-wrap items-center justify-center">
        <MenuColumn menuItems={menuItems} label="Entradas" />
        <MenuColumn menuItems={menuItems} label="Pratos" />
        <MenuColumn menuItems={menuItems} label="Bebidas" />
      </div>
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
