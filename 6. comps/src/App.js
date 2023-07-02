import Sidebar from "./components/Sidebar";

function App({children}) {
  return (
    <div className="App">
      <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar />
        <div className="col-span-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default App;
