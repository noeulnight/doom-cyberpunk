# Talia doom

이미지의 검은 마스크는 유지하고, 홀로그램 영역 안에서 DOOM 셰어웨어를 실행합니다.

## 실행

```sh
docker run --rm -p 8080:80 ghcr.io/noeulnight/doom-cyberpunk:latest
```

브라우저에서 `http://localhost:8080`을 열고 홀로그램 영역을 누르세요. 이미지가 보이고 게임이 시작되면 키보드로 조작합니다. 입력이 안 되면 게임 화면을 한 번 누르세요.

| 키 | 동작 |
| --- | --- |
| ↑ / ↓ | 앞으로 / 뒤로 이동 |
| ← / → | 왼쪽 / 오른쪽 회전 |
| Ctrl | 발사 |
| Space | 문 열기 / 사용 |
| Shift + 방향키 | 달리기 |
| Alt + ← / → | 옆으로 이동 |
| 1–7 | 보유 무기 선택 |
| Esc | 메뉴 / 게임으로 복귀 |
| Enter | 메뉴 선택 |
| Tab | 지도 |

터치 조작은 제공하지 않습니다. 브라우저나 운영체제의 단축키와 겹치는 키는 해당 환경에서 동작이 다를 수 있습니다.

직접 빌드하려면:

```sh
docker build -t talia-doom .
docker run --rm -p 8080:80 talia-doom
```

## CI

[noeulnight/novnc의 Docker CI](https://github.com/noeulnight/novnc/blob/main/.github/workflows/docker.yml)를 기준으로 구성했습니다. `main`에 push하면 테스트 후 `linux/arm64` 이미지를 GHCR에 올립니다. 태그는 `latest`와 커밋 SHA입니다.

## 제3자 저작물

- **DOOM**: id Software의 수정하지 않은 1.9 셰어웨어만 포함합니다. 정식판 `DOOM.WAD`와 `DOOM2.WAD`는 포함하지 않습니다. 원본 배포 압축 파일은 [doom19s.zip](public/licenses/doom19s.zip)에 보존했습니다. 실행용 `doom.zip`은 원본 배포 파일을 추출해 모든 파일을 변경 없이 ZIP으로 다시 묶은 것입니다. [셰어웨어 이용 조건과 John Carmack의 재배포 설명](public/licenses/DOOM-shareware.txt)을 확인하세요. 무료 재배포 근거는 셰어웨어에 한정되며, 유료 배포나 게임 데이터 수정에 대한 허가가 아닙니다.
- **js-dos / DOSBox**: js-dos 6.22.60 공식 릴리스의 파일을 변경 없이 사용합니다. [GPL-2.0 전문](public/licenses/js-dos-GPL-2.0.txt)과 [해당 릴리스 소스 및 빌드 파일](public/licenses/js-dos-6.22.60-source.tar.gz)을 함께 제공합니다. [릴리스](https://github.com/caiiiycuk/js-dos/releases/tag/6.22.60), [소스 커밋](https://github.com/caiiiycuk/js-dos/tree/d9d1045ef321bcde3f061dc8e686ded890147d6a).
- **캐릭터 이미지**: 사용자가 제공한 애니메이션 이미지입니다. 원작 권리자의 별도 이용 허락은 확인하지 못했습니다. 이 저장소가 이미지의 이용 허락을 부여하지는 않습니다. [CD PROJEKT RED 팬 콘텐츠 지침](https://cdn-l.cdprojektred.com/CDPR_Fan_Content_Guidelines_2020-12-10.pdf)은 다른 게임에 자사 콘텐츠를 넣는 이용과 제3자 권리를 별도로 제한합니다. 이 애니메이션 이미지와의 결합을 허용한다고 확인된 것은 아닙니다.

This is an unofficial fan work and is not approved or endorsed by CD PROJEKT RED, id Software, or the animation's rights holders. DOOM and Cyberpunk-related names and images remain the property of their respective rights holders. This project is not sold or monetized.
