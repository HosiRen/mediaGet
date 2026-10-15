/**
 * parse-core 运行时配置薄壳（web 侧不注入，保持 env 读取行为）。
 *
 * 桌面端经 @mediaget/parse-core 工件调用 setKernelConfig()；
 * web 侧仍走 process.env（各解析器模块级 const），此薄壳仅满足
 * tests/parse-core-shells.test.ts 的「每个 parse-core 导出模块都有薄壳转发」守卫。
 */
export {
  setKernelConfig,
  getKernelConfig,
  type KernelConfig,
} from "../../packages/parse-core/src/config";
