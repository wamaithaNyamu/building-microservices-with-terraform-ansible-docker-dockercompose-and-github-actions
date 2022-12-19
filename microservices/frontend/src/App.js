import Kanye from "./Components/Kanye";
import Dadjokes from "./Components/Dadjokes";
import MyJokes from "./Components/MyJokes";
import NewJoke from "./Components/NewJoke";
function App() {


  return (
    <div className="flex justify-center">
      
        <div className="flex justify-center flex-col space-y-4 px-10 w-1/2 py-10">
            <NewJoke />
            <MyJokes />
            <Dadjokes />
            <Kanye />
     


        </div>
    </div>
  );
}

export default App;
