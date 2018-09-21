import Koa from "koa";
import router from "../app/interface/rest/router";

const app = new Koa();

app.use(router.routes());

app.listen(3000, () => console.log("running"));
