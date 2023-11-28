import OffCanvasPanel from "./components/OffCanvasPanel.js";
import { getOptions } from "./components/OffCanvasUtils.js";
const init = () => {
    return OffCanvasPanel();
  };
  
  new CustomComponent("offCanvas", init);