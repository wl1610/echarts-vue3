// const modulesFiles = require.context("./options", true, /index.ts$/);
let modules: any = {};
// modulesFiles.keys().forEach((item) => {
// 	modules = Object.assign({}, modules, modulesFiles(item).default);
// });

// import.meta.globEage或者 import.meta.glob方法 动态导入
const modulesFiles = import.meta.glob("./options/*/*.ts", { eager: true });
Object.keys(modulesFiles).forEach((item) => {
	// const name = item.replace(/\.\/|\.ts/g, "");
	// modules[name] = modulesFiles[item].default;
	modules = Object.assign({}, modules, modulesFiles[item].default);
});
export default modules;
