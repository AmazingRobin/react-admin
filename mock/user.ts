export default [
  {
    url: '/api/captchaImage',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: '获取验证码成功',
        img: 'https://random-picture.vercel.app/api/?id=3', // Replace with actual image URL
        captchaEnabled: true,
        uuid: '1234567890abcdef'
      };
    }
  },
  {
    url: '/api/login',
    method: 'post',
    response: (request: { body: { username: string; password: string; captcha: string; uuid: string } }) => {
      const { username, password, captcha, uuid } = request.body;
      if (username === 'admin' && password === 'admin' && captcha === '1234' && uuid === '1234567890abcdef') {
        return {
          code: 200,
          msg: '登录成功',
          token: 'mocked-jwt-token'
        };
      } else {
        return {
          code: 401,
          msg: '用户名或密码错误'
        };
      }
    }
  }
]