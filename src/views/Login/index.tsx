import { Button, Input, Space } from "antd";
import styles from "./login.module.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
function Login(){
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameValue(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };
  const handleLogin = () => {
    // 登录逻辑处理
    console.log('登录信息:', {
      username: usernameValue,
      password: passwordValue,
    });
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>通用后台管理系统</h1>
        </div>
        <div className="form">
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Input size="large" placeholder="请输入账号" prefix={<UserOutlined />} onChange={handleUsernameChange} />
            <Input.Password size="large" placeholder="请输入密码" prefix={<LockOutlined />} onChange={handlePasswordChange} />
            <Button type="primary" size="large" block onClick={handleLogin}>登 录</Button>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Login;