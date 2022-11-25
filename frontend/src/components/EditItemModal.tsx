import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MenuItemData } from "./MenuItem";

export interface EditItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: MenuItemData;
}

export function EditItemModal({
  isOpen,
  onClose,
  selectedItem,
}: EditItemModalProps) {
  const [price, setPrice] = useState(0);
  const [additionalStock, setAdditionalStock] = useState(0);

  const id = selectedItem.id;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log({ id, price, additionalStock });

    setPrice(0);
    setAdditionalStock(0);
    onClose();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                as="form"
                onSubmit={handleSubmit}
                className="flex w-full max-w-md transform flex-col gap-12 overflow-hidden rounded-2xl bg-white p-8 text-center align-middle shadow-xl transition-all"
              >
                <Dialog.Title
                  as="h2"
                  className="text-4xl leading-6 text-gray-900"
                >
                  Editar Item
                </Dialog.Title>
                <div className="flex gap-8">
                  <div className="text-left">
                    <label className="text-xs">Preço de venda do produto</label>
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      type="number"
                      value={price}
                      onChange={(event) => setPrice(Number(event.target.value))}
                    />
                  </div>
                  <div className="text-left">
                    <label className="text-xs">Estoque a ser adicionado</label>
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      value={additionalStock}
                      onChange={(event) =>
                        setAdditionalStock(Number(event.target.value))
                      }
                    />
                  </div>
                </div>
                <button type="submit" className="">
                  Confirmar
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
