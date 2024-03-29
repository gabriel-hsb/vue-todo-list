// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/front-end/vue-todo-list/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/front-end/vue-todo-list/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/front-end/vue-todo-list/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [vue({ template: {
    compilerOptions: {
      isCustomElement: (tag) => ["md-linedivider"].includes(tag)
    }
  } })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxmcm9udC1lbmRcXFxcdnVlLXRvZG8tbGlzdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcZnJvbnQtZW5kXFxcXHZ1ZS10b2RvLWxpc3RcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L2Zyb250LWVuZC92dWUtdG9kby1saXN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3Z1ZSh7dGVtcGxhdGU6IHtcclxuICAgIGNvbXBpbGVyT3B0aW9uczoge1xyXG4gICAgICBpc0N1c3RvbUVsZW1lbnQ6ICh0YWcpID0+IFsnbWQtbGluZWRpdmlkZXInXS5pbmNsdWRlcyh0YWcpLFxyXG4gICAgfVxyXG4gIH19KV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUSxTQUFTLGVBQWUsV0FBVztBQUV6UyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFIaUosSUFBTSwyQ0FBMkM7QUFLbE4sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksRUFBQyxVQUFVO0FBQUEsSUFDdkIsaUJBQWlCO0FBQUEsTUFDZixpQkFBaUIsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxHQUFHO0FBQUEsSUFDM0Q7QUFBQSxFQUNGLEVBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDSCxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
