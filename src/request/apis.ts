import { CaptchaAPIRes, LoginAPIRes } from '@/types/apis';
import request from './index'

export const CaptchaAPI = ():Promise<CaptchaAPIRes> => {
  return request.get('/api/captchaImage');
}

export const LoginAPI = (data: { username: string; password: string; captcha: string; uuid: string }):Promise<LoginAPIRes> => {
  return request.post('/api/login', data);
}