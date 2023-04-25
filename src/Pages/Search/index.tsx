import React, { useEffect, useState } from 'react'
import style from './search.module.scss'
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { getParentNameList } from '@/api/home/http'
import { useNavigate } from 'react-router-dom';
import SearchTop from './Children/SeachTop'
import { store } from '@/store';
import { message } from 'antd';


const Search: React.FC = () => {
  const searchIcon: React.CSSProperties = {
    fontSize: '25px',
    position: 'absolute',
    top: '0.3rem',
    left: '0.2rem'
  }
  console.log(store.getState())
  let [data, setData]: any = useState([])
  const getNameList = async () => {
    let { data: res } = await getParentNameList()
    data = res.data
    setData(res.data)
  }
  // console.log(data, '///');

  useEffect(() => {
    getNameList()
  }, [])

  let push = useNavigate()
  const goChildrenList = (name: any) => {
    console.log(name)
    push(`/list?name=${name}`, { state: { type: name } })
  }

  let [inputValue, setInputValue] = useState('')
  let [inputList, setInputList]: any = useState([])
  const searchInput = (e: any) => {
    setInputValue(e.target.value)

  }
  const goSearch = () => {
    if (inputValue == '') {
      message.info('请输入内容!')
      return
    } else {
      store.dispatch({
        type: 'SEARCH',
        data: inputValue
      })
    }
    setInputList([...store.getState().SearchInput.list])
    push(`/list`, { state: { type: inputValue } })

  }
  let [flag, setFlag] = useState(false)
  const deleteStorage = () => {
    store.dispatch({
      type: 'DETELE',
    })
    setFlag(true)
  }
  useEffect(() => {
    setInputList([...store.getState().SearchInput.list])
  }, [])
  useEffect(()=>{

  },[data])
  return (
    <div className={style['Search']}>
      <SearchTop></SearchTop>
      <div className={style['Search_input']}>
        <div className={style['search_content']}>
          <SearchOutlined style={searchIcon} />
          <input type="text" placeholder='在这里输入你想搜索的商品的哦🙂' onInput={e => searchInput(e)} />
          <span onClick={e => goSearch()}>搜索</span>
        </div>
      </div>
      <div className={style['search_record"']}>
        <div className={style['search_history']}>
          <div className={style['history_top']} style={{ display: flag ? 'none' : 'block' }}>
            <h2>历史记录</h2>
            <DeleteOutlined className={style['icons']} onClick={e => deleteStorage()} />
            <ul>
              {
                inputList.map((item: any, index: any) =>
                (
                  <li key={index} onClick={e => goChildrenList(item)}>{item}</li>
                ))
              }
            </ul>

          </div>
        </div>
        <div className={style['search_history']}>
          <div className={style['history_top']} >
            <h2>搜索发现</h2>
          </div>
          <ul>
            {
              data.map((item: any, index: any) => {
                return (
                  <li key={index} onClick={e => goChildrenList(item)}>
                    <span>{item}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Search
