FROM nginx:stable-alpine
LABEL org.opencontainers.image.title="Talia doom" \
      org.opencontainers.image.source="https://github.com/noeulnight/doom-cyberpunk"
COPY public/ /usr/share/nginx/html/
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s CMD wget -q --spider http://127.0.0.1/ || exit 1
