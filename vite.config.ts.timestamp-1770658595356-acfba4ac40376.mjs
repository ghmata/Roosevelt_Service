// vite.config.ts
import { defineConfig } from "file:///D:/Freela/SERVI%C3%87OS/Projetos%20em%20andamento/Atualiza%C3%A7%C3%A3o_Roosvelt%20Contabilidade%20-%20Andamento/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Freela/SERVI%C3%87OS/Projetos%20em%20andamento/Atualiza%C3%A7%C3%A3o_Roosvelt%20Contabilidade%20-%20Andamento/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
var __vite_injected_original_dirname = "D:\\Freela\\SERVI\xC7OS\\Projetos em andamento\\Atualiza\xE7\xE3o_Roosvelt Contabilidade - Andamento";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    chunkSizeWarningLimit: 1e3,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-accordion", "@radix-ui/react-alert-dialog", "@radix-ui/react-aspect-ratio", "@radix-ui/react-avatar", "@radix-ui/react-checkbox", "@radix-ui/react-collapsible", "@radix-ui/react-context-menu", "@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu", "@radix-ui/react-hover-card", "@radix-ui/react-label", "@radix-ui/react-menubar", "@radix-ui/react-navigation-menu", "@radix-ui/react-popover", "@radix-ui/react-progress", "@radix-ui/react-radio-group", "@radix-ui/react-scroll-area", "@radix-ui/react-select", "@radix-ui/react-separator", "@radix-ui/react-slider", "@radix-ui/react-slot", "@radix-ui/react-switch", "@radix-ui/react-tabs", "@radix-ui/react-toast", "@radix-ui/react-toggle", "@radix-ui/react-toggle-group", "@radix-ui/react-tooltip"]
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxGcmVlbGFcXFxcU0VSVklcdTAwQzdPU1xcXFxQcm9qZXRvcyBlbSBhbmRhbWVudG9cXFxcQXR1YWxpemFcdTAwRTdcdTAwRTNvX1Jvb3N2ZWx0IENvbnRhYmlsaWRhZGUgLSBBbmRhbWVudG9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEZyZWVsYVxcXFxTRVJWSVx1MDBDN09TXFxcXFByb2pldG9zIGVtIGFuZGFtZW50b1xcXFxBdHVhbGl6YVx1MDBFN1x1MDBFM29fUm9vc3ZlbHQgQ29udGFiaWxpZGFkZSAtIEFuZGFtZW50b1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRnJlZWxhL1NFUlZJJUMzJTg3T1MvUHJvamV0b3MlMjBlbSUyMGFuZGFtZW50by9BdHVhbGl6YSVDMyVBNyVDMyVBM29fUm9vc3ZlbHQlMjBDb250YWJpbGlkYWRlJTIwLSUyMEFuZGFtZW50by92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogXCI6OlwiLFxyXG4gICAgcG9ydDogODA4MCxcclxuICAgIGhtcjoge1xyXG4gICAgICBvdmVybGF5OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0uZmlsdGVyKEJvb2xlYW4pLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgdmVuZG9yOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxyXG4gICAgICAgICAgdWk6IFsnQHJhZGl4LXVpL3JlYWN0LWFjY29yZGlvbicsICdAcmFkaXgtdWkvcmVhY3QtYWxlcnQtZGlhbG9nJywgJ0ByYWRpeC11aS9yZWFjdC1hc3BlY3QtcmF0aW8nLCAnQHJhZGl4LXVpL3JlYWN0LWF2YXRhcicsICdAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3gnLCAnQHJhZGl4LXVpL3JlYWN0LWNvbGxhcHNpYmxlJywgJ0ByYWRpeC11aS9yZWFjdC1jb250ZXh0LW1lbnUnLCAnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZycsICdAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudScsICdAcmFkaXgtdWkvcmVhY3QtaG92ZXItY2FyZCcsICdAcmFkaXgtdWkvcmVhY3QtbGFiZWwnLCAnQHJhZGl4LXVpL3JlYWN0LW1lbnViYXInLCAnQHJhZGl4LXVpL3JlYWN0LW5hdmlnYXRpb24tbWVudScsICdAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlcicsICdAcmFkaXgtdWkvcmVhY3QtcHJvZ3Jlc3MnLCAnQHJhZGl4LXVpL3JlYWN0LXJhZGlvLWdyb3VwJywgJ0ByYWRpeC11aS9yZWFjdC1zY3JvbGwtYXJlYScsICdAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0JywgJ0ByYWRpeC11aS9yZWFjdC1zZXBhcmF0b3InLCAnQHJhZGl4LXVpL3JlYWN0LXNsaWRlcicsICdAcmFkaXgtdWkvcmVhY3Qtc2xvdCcsICdAcmFkaXgtdWkvcmVhY3Qtc3dpdGNoJywgJ0ByYWRpeC11aS9yZWFjdC10YWJzJywgJ0ByYWRpeC11aS9yZWFjdC10b2FzdCcsICdAcmFkaXgtdWkvcmVhY3QtdG9nZ2xlJywgJ0ByYWRpeC11aS9yZWFjdC10b2dnbGUtZ3JvdXAnLCAnQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXAnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMGQsU0FBUyxvQkFBb0I7QUFDdmYsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUZqQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2pDLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLHVCQUF1QjtBQUFBLElBQ3ZCLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxVQUM3QixJQUFJLENBQUMsNkJBQTZCLGdDQUFnQyxnQ0FBZ0MsMEJBQTBCLDRCQUE0QiwrQkFBK0IsZ0NBQWdDLDBCQUEwQixpQ0FBaUMsOEJBQThCLHlCQUF5QiwyQkFBMkIsbUNBQW1DLDJCQUEyQiw0QkFBNEIsK0JBQStCLCtCQUErQiwwQkFBMEIsNkJBQTZCLDBCQUEwQix3QkFBd0IsMEJBQTBCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLGdDQUFnQyx5QkFBeUI7QUFBQSxRQUNyd0I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
