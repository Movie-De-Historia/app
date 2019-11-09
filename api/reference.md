# Movie De Historia API Document

Logの返り値
{"id":4,"user_id":1,"review_id":14,"look_at":"2019-10-07T05:27:26.105Z","like":false,"created_at":"2019-10-07T05:27:26.108Z","updated_at":"2019-10-07T05:27:26.108Z"}

Genreの返り値
{"id":1,"name":"﻿アクション","created_at":"2019-10-07T05:27:24.392Z","updated_at":"2019-10-07T05:27:24.392Z"}

## Reviews
レビューのAPIにおいて**CREATE/UPDATE/DESTROY**はアクセストークンが必要．

### データスキーマ
**レビューテーブル**

|name|type|
|:--|:--|
|id|integer|
|genre_id|integer|
|user_id|integer|
|movie_title|string|
|head_text|string|
|comment|string|
|spoiler|boolean|

### ルーティング

レビューAPIのエンドポイント一覧

|HTTPメソッド|エンドポイント|
|:---------|:-----------|
|GET|/reviews|
|GET|/reviews/:id|
|POST|/reviews|
|PUT|/reviews/:id|
|DELET|/reviews/:id|

### リクエストサンプル
**GET /reviews**

レビューを取得します．
3つのレビューを取得し受信箱に必要な要素のみを返す．

レスポンス例
```
[
    {
        "id": 23,
        "movie_title": "Postman",
        "head_text": "hahaha",
        "spoiler": false,
        "genre_name": "SF"
    },
    {
        "id": 18,
        "movie_title": "ルパン",
        "head_text": "面白かった",
        "spoiler": false,
        "genre_name": "サスペンス"
    },
    {
        "id": 2,
        "movie_title": "千と千尋の神隠し",
        "head_text": "面白かった",
        "spoiler": true,
        "genre_name": "ノスタルジー"
    }
]
```

**GET /reviews/:id**

IDにマッチするレビューの詳細を取得します．

レスポンス例
```
{
    "id": 5,
    "movie_title": "記憶にございません",
    "head_text": "面白かった",
    "comment": "和気藹々として喜怒哀楽な感じ",
    "spoiler": false,
    "user_id": 2,
    "created_at": "2019-10-22T03:57:27.745Z",
    "updated_at": "2019-10-22T03:57:27.745Z",
    "genre_id": 8
}
```

**POST /reviews**

レジューの新規作成を行います．

リクエスト例
```
{
	"genre_id": 19,
	"movie_title": "hoge",
	"head_text": "面白かった",
	"comment": "和気藹々として喜怒哀楽な感じ",
	"spoiler": true
}
```

レスポンス例
```
{
    "id": 69,
    "movie_title": "hoge",
    "head_text": "面白かった",
    "comment": "和気藹々として喜怒哀楽な感じ",
    "spoiler": true,
    "user_id": 5,
    "created_at": "2019-10-23T13:49:13.364Z",
    "updated_at": "2019-10-23T13:49:13.364Z",
    "genre_id": 19
}
```

**PUT /reviews/:id**

IDにマッチするレビューの更新を行う．

リクエスト例
```
{
	"genre_id": 19,
	"movie_title": "hoge",
	"head_text": "面白かった",
	"comment": "なんだか良くわからなかったけど迫力満点",
	"spoiler": true
}
```

レスポンス例
```
{
    "id": 69,
    "genre_id": 19,
    "movie_title": "hoge",
    "head_text": "面白かった",
    "comment": "なんだか良くわからなかったけど迫力満点",
    "spoiler": true,
    "user_id": 5,
    "created_at": "2019-10-23T13:49:13.364Z",
    "updated_at": "2019-10-23T13:53:01.332Z"
}
```

**DELET /reviews/:id**

IDにマッチするレビューを削除．

レスポンス例
```
{
    "message": "ok"
}
```
