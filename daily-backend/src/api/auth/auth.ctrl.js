/* eslint-disable no-unused-vars */
import Joi from 'joi';
import User from '../../models/user';

/**
 * 회원가입
 * http://localhost:4000/api/auth/register
 * POST /api/auth/register
 * {
 *  username: 'aaa',
 *  password: '1234'
 * }
 */

export const register = async (ctx) => {
  // 회원가입
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(15).required(),
    // email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  // 스키마 검증 실패
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;
  try {
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; //conflict
      return;
    }

    const user = new User({
      username,
    });
    await user.setPassword(password);
    await user.save();
    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async (ctx) => {
  // 로그인
};

export const check = async (ctx) => {
  // 로그인 상태 확인
};

export const logout = async (ctx) => {
  // 로그아웃
};
