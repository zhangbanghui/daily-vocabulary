/*
 * @Author: 张帮辉
 * @LastEditors: 张帮辉
 * @Date: 2022-05-17 20:49:55
 * @LastEditTime: 2022-05-17 22:13:45
 * @Description: file content
 */
import { useState } from "react";
import { Pagination, Radio, Switch } from "antd";
import "./App.css";

import vocabularyArr from "./vocabulary";

function App() {
  const [wordArr, setWordArr] = useState(vocabularyArr.slice(0, 50));
  const [page, setPage] = useState(1);

  const [translateType, setTranslateType] = useState("all");

  const changeTypeHandler = (e) => {
    setWordArr(vocabularyArr.slice((page - 1) * 50, page * 50));
    setTranslateType(e.target.value);
  };

  const changePageHandler = (page) => {
    setPage(page);
    setWordArr(vocabularyArr.slice((page - 1) * 50, page * 50));
  };

  const switchHandler = (checked, index) => {
    const tmpArr = [...wordArr];
    tmpArr[index].checked = checked;
    setWordArr(tmpArr);
  };

  return (
    <div className="App">
      <div>
        <Radio.Group
          onChange={changeTypeHandler}
          value={translateType}
          defaultValue="all"
        >
          <Radio.Button value="all">中英全</Radio.Button>
          <Radio.Button value="onlyEng">{`英 => 中`}</Radio.Button>
          <Radio.Button value="onlyCN">{`中 => 英`}</Radio.Button>
        </Radio.Group>
      </div>
      <div className="wordBox">
        {wordArr.map((item, index) => {
          const { keyword, translation, checked } = item;
          return (
            <div className="wordItem">
              {translateType !== "all" && (
                <div className="itemSwitch">
                  <Switch
                    checked={checked}
                    onChange={(checked) => switchHandler(checked, index)}
                  />
                </div>
              )}
              {(translateType !== "onlyCN" || checked) && (
                <div className="itemLabel">{keyword}</div>
              )}
              {(translateType !== "onlyEng" ||checked) && <div>{translation}</div>}
            </div>
          );
        })}
      </div>
      <div className="paginationBox" style={{ textAlign: "center" }}>
        <Pagination
          current={page}
          pageSize={50}
          pageSizeOptions={["50"]}
          onChange={changePageHandler}
          total={vocabularyArr.length}
        />
      </div>
    </div>
  );
}

export default App;
