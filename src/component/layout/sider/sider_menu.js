import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class SiderMenu extends React.Component {
  render() {
    return (
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='vertical'>
        <Menu.Item key="1">
          <Link key='a' to="/"><Icon type="pie-chart" />首页</Link>
        </Menu.Item>

        <SubMenu
          key="sub1"
          title={<span><Icon type="user" /><span>商品</span></span>}
        >
          <Menu.Item key="3">
            <Link key='a' to="/product"><Icon type="pie-chart" />商品管理</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link key='a' to="/product-category"><Icon type="pie-chart" />品类管理</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub2"
          title={<span><Icon type="pie-chart" /><span>订单</span></span>}
        >
          <Menu.Item key="6">
            <Link key='a' to="/order"><Icon type="pie-chart" />订单管理</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub3"
          title={<span><Icon type="team" /><span>用户</span></span>}
        >
          <Menu.Item key="7">
            <Link key='a' to="/order"><Icon type="pie-chart" />用户管理</Link>
          </Menu.Item>
        </SubMenu>

      </Menu>
    );
  }
}

export default SiderMenu;