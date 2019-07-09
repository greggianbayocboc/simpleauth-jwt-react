import styles from './index.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Link from 'umi/link';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
/*
function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>TEST FRONTEND</h1>
      {props.children}
    </div>
  );
}*/

function BasicLayout(props) {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/login">Login</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/register">Register</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/">Delete Internet</Link></Menu.Item>
        </Menu>
      </Header>
      <Layout>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
