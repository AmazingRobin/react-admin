import { Button, Form, Input, message, Space } from "antd";
import styles from "./login.module.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { CaptchaAPI, LoginAPI } from "@/request/apis";
import { useNavigate } from "react-router-dom";
function Login(){
  const navigateTo = useNavigate();
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [captchaImg, setCaptchaImg] = useState('');
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameValue(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };
  useEffect(()=>{
    handleChatcha()
  }, []);
  const handleLogin = async () => {
    // 登录逻辑处理
    console.log('登录信息:', {
      username: usernameValue,
      password: passwordValue,
      captcha: captchaValue,
    });
    const res = await LoginAPI({ username: usernameValue, password: passwordValue, captcha: captchaValue, uuid: localStorage.getItem('uuid') || '' });
    if(res.code === 200){
      message.success('登录成功');
      localStorage.setItem('token', res.token);
      navigateTo('/page1');
    } else {
      message.error(res.msg || '登录失败');
      // handleChatcha()
    }
  };
  const handleChatcha = async () => {
    const res = await CaptchaAPI();
    if(res.code === 200){
      setCaptchaImg(res.img);
      localStorage.setItem('uuid', res.uuid);
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>通用后台管理系统</h1>
        </div>
        <div className="form">
          <Form onFinish={handleLogin}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Input size="large" placeholder="请输入账号" prefix={<UserOutlined />} onChange={handleUsernameChange} />
              <Input.Password size="large" placeholder="请输入密码" prefix={<LockOutlined />} onChange={handlePasswordChange} />
              <div className={styles.captchaBox}>
                <Input size="large" placeholder="请输入验证码" onChange={(e) => setCaptchaValue(e.target.value)} />
                <img src={captchaImg} alt="验证码" className={styles.captchaImage} onClick={handleChatcha} />
              </div>
              <Button type="primary" htmlType="submit" size="large" block>登 录</Button>
            </Space>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;