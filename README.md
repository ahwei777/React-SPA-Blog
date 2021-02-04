# Redux Blog

> 網站連結：https://blog.ahwei777.tw  
```
註冊後密碼將自動更改為「Lidemy」
```
![](https://github.com/ahwei777/for-GaGiO-README/blob/main/blog/blog-wholepage.png?raw=true)

## 索引
- [簡介](#簡介)
- [功能介紹](#功能介紹)
- [使用技術](#使用技術)
- [Demo](#Demo)
- [專案架構](#專案架構)
- [專案安裝流程](#專案安裝流程)
- [聲明](#聲明)
- [版本紀錄](#版本紀錄)
- [資料來源](#資料來源)

## 簡介

此作品為 [Lidemy mentor-program-4th](https://github.com/Lidemy/mentor-program-4th) 的課程作業之一 ，主要為利用 React.js 及相關套件開發 SPA 網頁，並串接實際後端 API （[Lidemy 學生專用 API Server](https://github.com/Lidemy/lidemy-student-json-api-server)）。

## 功能介紹

### 訪客
- 註冊會員
- 瀏覽文章（列表/分頁/單篇）

### 會員
- 登入（JWT 驗證）
- 發布文章
- 編輯自己發布的文章
- 刪除自己發布的文章

## 使用技術
- 前端框架
    - React Hooks
- UI 框架
    - [React Bootstrap](https://react-bootstrap.github.io/)
- 其他套件
    - React Router - 切換路由實現 SPA
    - Redux Toolkit - 管理元件共用狀態，處理非同步邏輯
    - styled-components - 主題配置/動態變更樣式
- RWD - 網頁排版自適應主要瀏覽器

## DEMO

### 瀏覽所有文章/單篇文章
以 Layout 切割頁面為固定區域（header, sidebar）及可滑動瀏覽區域

![](https://github.com/ahwei777/for-GaGiO-README/blob/main/blog/index.gif?raw=true)

### 分頁功能
配合後端 API 所提供參數 `_page ` 及 `_limit` 實現分頁功能。

![](https://github.com/ahwei777/for-GaGiO-README/blob/main/blog/pagination.gif?raw=true)

### 發布文章
註冊/登入後才會顯示發布文章按鈕，輸入文章標題及內容即可發布。

![](https://github.com/ahwei777/for-GaGiO-README/blob/main/blog/addPost.gif?raw=true)

### 編輯文章
權限管理，只可編輯自己發布的文章。

![](https://github.com/ahwei777/for-GaGiO-README/blob/main/blog/updatePost.gif?raw=true)

### 刪除文章
權限管理，只可刪除自己發布的文章。

![](https://github.com/ahwei777/for-GaGiO-README/blob/main/blog/deletePost.gif?raw=true)

## 專案架構

```
├── src/
│  ├── components/              # 放置跨頁面共用元件
│  ├── constants/               # 放置常態設定如 breakpoints
│  ├── hooks/                   # 放置引入或額外定義的 hooks
│  ├── img/                     # 放置各頁面所使用圖片
│  ├── pages/                   # 放置具完整功能頁面
│  ├── redux/                   # 放置 Redux store & reducers
│  ├── routes/                  # 放置主要路由
│  ├── App.css                  # 設定通用樣式及修正 UI
│  ├── App.js                   # 設定主要 layout
│  ├── index.js                 # 程式主要入口點
│  ├── setupTests.js            # 測試相關設定
│  ├── WebApi.js                # 串接後端 API
│  └── utils.js                 # 放置跨元件使用函式
├── package-lock.json
├── package.json                # module 及 script 設定
└── README.md
```

## 專案安裝流程

1. clone 此專案至本機
``` 
$ git clone https://github.com/ahwei777/
```

2. 安裝相依套件
```
$ npm install
```

3. 在本機運行專案（預設 port:3000）
```
$ npm run start
```

## 聲明
本專案僅作為個人練習用途，註冊時請勿使用任何真實資料。另本作品所包含之圖片與內容不作任何商業用途使用。

[MIT](https://choosealicense.com/licenses/mit/)

## 版本紀錄

- 1.0 - 2021.02.04
	- 完成基本功能

## 資料來源

- [Unsplash](https://unsplash.com/)
- [Favicon.io](https://favicon.io/)
- [Lidemy 程式導師計畫](https://bootcamp.lidemy.com/)