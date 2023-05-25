import { createApp } from "vue";

import SmartyUI from "./entry";

createApp({
  template: `
 <div style="margin-top:20px;">
    <SButton color="blue"   icon="search" ></SButton>
    <SButton color="green" icon="edit"></SButton>
    <SButton color="gray"  icon="check"></SButton>
    <SButton color="yellow"  icon="message"></SButton>
    <SButton color="red"  icon="delete"></SButton>
  </div>
  `,
})
  .use(SmartyUI)
  .mount("#app");
