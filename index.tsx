import ReactDOM from "react-dom";
import React, { useContext } from "react";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";

const Counter = React.createContext(0);

const Count = () => {
  const count = useContext(Counter);
  return (
    <div>
      {count}
      <div id="plugin-root"></div>
    </div>
  );
};

const App: React.FC = (props) => {
  return (
    <ConfigProvider locale={zhCN}>
      <Counter.Provider value={10}>
        <Count />
      </Counter.Provider>
    </ConfigProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
