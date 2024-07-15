const ClearTodo = ({ className, add }) => {
  // localStorage.clear();
  return (
    <div
      className={`w-screen h-screen fixed top-0 flex justify-center items-center ${className}`}
    >
      <div className="w-[300px] bg-gray-100 text-center p-4 line rounded-lg drop-shadow-lg">
        <h1 className=" font-semibold text-3xl">Clear All</h1>
        <p>Apakah anda yakin menghapus semua list-nya.</p>
        <form action="" className="flex justify-center gap-3">
          <button
            className="bg-slate-500 w-[100px] p-2 rounded-xl text-white"
            onClick={() => {
              localStorage.clear();
            }}
            type="submit"
          >
            Ya
          </button>
          <button
            className="bg-slate-300 w-[100px] p-2 rounded-xl"
            onClick={add}
          >
            Tidak
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClearTodo;
