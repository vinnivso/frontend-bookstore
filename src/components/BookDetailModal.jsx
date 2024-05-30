export const BookDetailModal = (props) => {
  const { bookInfo, openModal, setOpenModal } = props;

  return (
    <div className={openModal ? "" : "hidden"}>
      <div className="relative z-10" onClose={setOpenModal}>
        <div>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-3xl">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <img
                    src={bookInfo.image}
                    className={
                      bookInfo.image === ""
                        ? "hidden"
                        : "mx-auto flex h-64 items-center justify-center rounded-sm"
                    }
                  ></img>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      {bookInfo.title}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">{bookInfo.author}</p>
                      <p className="mt-1 text-sm text-gray-500">
                        {bookInfo.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={() => setOpenModal(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
