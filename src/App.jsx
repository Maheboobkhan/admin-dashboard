import "./App.css";
import Navbar from "./components/Nav";
import Sidebar from "./components/Sidebar";
import InputExample from "./components/InputExample";
import InputSizing from "./components/InputSizing";
import FileInput from "./components/FileInput";
import InputGroup from "./components/InputGroup";
import InputGroupSizing from "./components/InputGroupSizing";
import MultipleInputs from "./components/MultipleInputs";
import ButChR from "./components/ButChR";
import ButWDrop from "./components/ButtonsWDrop";
import CustomForm from "./components/CustomForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-800 pb-[10px]">
      <Navbar />
      <Sidebar />
      <InputExample />
      <InputSizing />
      <FileInput />
      <InputGroup />
      <InputGroupSizing />
      <MultipleInputs />
      <ButChR />
      <ButWDrop />
      <CustomForm />
      <Footer />
    </div>
  );
}

export default App;
