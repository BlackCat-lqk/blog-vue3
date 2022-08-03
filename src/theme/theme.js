import { themes } from "@/theme/modal.js";

// 修改页面中的样式变量值
const changeTheme = (obj) => {
    for (const key in obj) {
        document.getElementsByTagName("body")[0].style.setProperty(`--${key}`, obj[key]);
    }
};

// 使用 localStorage 在前端存储主题
const setStorageTheme = (val) =>{
    localStorage.setItem("theme", val)
}
export const getStorageTheme = (val) =>{
    const valueTheme = localStorage.getItem(val);
    return valueTheme
}

export const setTheme = (themeName) => {
    const themeData = themes[themeName];
	changeTheme(themeData);
    setStorageTheme(themeName)
};
