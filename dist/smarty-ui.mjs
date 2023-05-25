import { defineComponent, createVNode, openBlock, createElementBlock, createTextVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
    // 设定默认颜色
  },
  icon: {
    // 注册icon属性
    type: String,
    default: ""
  }
};
const MyButton = /* @__PURE__ */ defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
          py-2 
          px-4 
          font-semibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-${props2.color}-500 
          hover:bg-${props2.color}-700 
          border-none 
          cursor-pointer 
          m-1
          `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "SFCButton"
  },
  __name: "SFCButton",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", null, " 我的按钮 ");
    };
  }
});
const JSXButton = /* @__PURE__ */ defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(_sfc_main.name, _sfc_main);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  MyButton,
  _sfc_main as SFCButton,
  entry as default
};
