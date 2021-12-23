// File that remove requirement from index.js (main executive file) to double write the path
// import AppHeader from "./components/app-header/app-header"; -> import AppHeader from "./components/app-header
// this happens because web-pack exports by default the index.js file from the folder.
import AppHeader from "./app-header";

export default AppHeader;