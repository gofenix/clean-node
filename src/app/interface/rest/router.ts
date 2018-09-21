import Router, { IRouterContext } from "koa-router";
import { UserHandler } from "./handler/UserHandler";

const router = new Router();

router.prefix("/api/v1");

const userHander = new UserHandler();

router.get("/user", userHander.findAll);

router.get("/demo", ctx => {
  ctx.status = 200;
  ctx.body = "hehe";
});

export default router;
