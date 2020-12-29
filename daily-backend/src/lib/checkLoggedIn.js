// 로그인 했을 시만 API 사용 가능
const checkLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.status = 401; // unauthorized
    return;
  }
  return next();
};

export default checkLoggedIn;
