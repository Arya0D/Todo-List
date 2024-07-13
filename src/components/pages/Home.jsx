import Button from "../button";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <img src="/src/assets/react.svg" alt="" width={180} />
        <h1 className="text-3xl font-semibold">Selamat datang di To do List</h1>
        <p>Website to do list menggunakan react.js</p>
        <Button title={"Mulai"} href={"/todo"} />
      </div>
    </div>
  );
};

export default Home;
