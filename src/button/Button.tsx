import { defineComponent,PropType,toRefs} from "vue";
import "uno.css";

// 颜色类型声明
export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink'

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue'  // 设定默认颜色
  },
  icon: { // 注册icon属性
    type: String,
    default: ''
  }
}
export default defineComponent({
  name: "SButton",
  props,
  setup(props, {slots}) {
    return () => <button 
        class={`
          py-2 
          px-4 
          font-semibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-${props.color}-500 
          hover:bg-${props.color}-700 
          border-none 
          cursor-pointer 
          m-1
          `}
        > 
        { props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
        {slots.default ? slots.default() : ''}
     </button>
  }
});