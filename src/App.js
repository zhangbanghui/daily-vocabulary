import { useState } from "react";
import { Input, Pagination, Radio, Switch, Form, Row, Col, Button } from "antd";
import "./App.css";

import vocabularyArr from "./vocabulary";

function App() {
  const [queryForm] = Form.useForm()

  const [totalArr, setTotalArr] = useState(vocabularyArr)
  const [wordArr, setWordArr] = useState(vocabularyArr.slice(0, 50));
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);

  const [translateType, setTranslateType] = useState("all");

  const changeTypeHandler = (e) => {
    setWordArr(totalArr.slice((page - 1) * pageSize, page * pageSize));
    setTranslateType(e.target.value);
  };

  // 根据关键字过滤
  const filterByKeyword = (keyword) => {
    const tmpArr = [...vocabularyArr]
    if (!keyword) {
      return tmpArr
    } else {
      return tmpArr.filter(item => item.keyword.includes(keyword) || item.translation.replace(/(adj|n|prev|adv|v)/g, '').includes(keyword))
    }
  }

  // 搜索功能
  const searchHandler = () => {
    const { keyword } = queryForm.getFieldsValue(true)
      const filterArr = filterByKeyword(keyword)
      setTotalArr(filterArr)
      setPage(1)
      if (filterArr.length > pageSize) {
        setWordArr(filterArr.slice(0, pageSize))
      } else {
        setWordArr(filterArr)
      }
  }

  // 重置操作
  const clearHandler = () => {
    // 清空搜索项
    queryForm.resetFields(['keyword'])
    // 列表重置
    searchHandler()
    // 分页重置
    setPage(1)
    setPageSize(50)
  }

  const changePageHandler = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
    setWordArr(totalArr.slice((page - 1) * pageSize, page * pageSize));
  };

  const switchHandler = (checked, index) => {
    const tmpArr = [...wordArr];
    tmpArr[index].checked = checked;
    setWordArr(tmpArr);
  };

  return (
    <div className="App">
      <div>
        <Form form={queryForm}>
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item name="keyword" label="">
                <Input placeholder="请输入关键字" maxLength={20} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Button type="primary" onClick={searchHandler}>搜索</Button>
              <Button style={{ marginLeft: "16px" }} onClick={clearHandler}>重置</Button>
            </Col>
          </Row>
        </Form>
      </div>
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
            <div className="wordItem" key={keyword}>
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
              {(translateType !== "onlyEng" || checked) && (
                <div>{translation}</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="paginationBox" style={{ textAlign: "center" }}>
        <Pagination
          current={page}
          pageSize={pageSize}
          pageSizeOptions={["20", "30", "50"]}
          onChange={changePageHandler}
          total={totalArr.length}
        />
      </div>
    </div>
  );
}

export default App;
