import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import memoryUtils from '../../utils/memoryUtils'

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Category from '../category/category'
import Role from '../role/role'
import User from '../user/user'
import Product from '../product/product'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Home from '../home/home'

const { Footer, Sider, Content } = Layout;

export default function Admin() {
  const user = memoryUtils.user
  if (!user || !user._id) {
    return <Navigate to="/login" />
  }
  return (
    <Layout style={{minHeight: '100%'}}>
      <Sider>
        <LeftNav />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content style={{margin: 20, backgroundColor: '#fff'}}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products/category" element={<Category />} />
            <Route path="/role" element={<Role />} />
            <Route path='/user' element={<User />} />
            <Route path="/products/product/*" element={<Product />} />
            <Route path="/charts/bar" element={<Bar />} />
            <Route path="/charts/line" element={<Line />} />
            <Route path="/charts/pie" element={<Pie />} />
          </Routes>
        </Content>
        <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
      </Layout>
    </Layout>
  )
}